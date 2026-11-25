import { useState, useEffect, type Dispatch, type SetStateAction } from "react";
import logoIcon from "~/src/HuShine.webp";
import { LanguageButton, MobileLanguageButton, type Language, languages } from "./languageButton";
import { ThemeButton, MobileThemeButton, type Theme, themes } from "./themeButton";

const links = [
  { href: "/", label: "Контакты" },
  { href: "/", label: "Проекты" },
  { href: "/", label: "Об авторе" },
];

const projectName = "HuShine";

export type HeaderMenuId = "language" | "theme" | "burger";

interface ToggleMenuParams {
  id: HeaderMenuId;
  openMenu: HeaderMenuId | null;
  setOpenMenu: Dispatch<SetStateAction<HeaderMenuId | null>>;
}

const toggleHeaderMenu = ({ id, openMenu, setOpenMenu }: ToggleMenuParams): void => {
  setOpenMenu(openMenu === id ? null : id);
};

export default function Header() {
  const [openMenu, setOpenMenu] = useState<HeaderMenuId | null>(null);
  const [renderMenu, setRenderMenu] = useState(false);
  const [currentLang, setCurrentLang] = useState<Language>(languages[0]);
  const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    if (saved && themes.some(t => t.code === saved)) {
      return themes.find(t => t.code === saved)!;
    }
    return themes[2];
  });

  useEffect(() => {
    if (openMenu === "burger") setRenderMenu(true);
  }, [openMenu]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const apply = () => {
      const needDark =
        currentTheme.code === "dark" ||
        (currentTheme.code === "system" && media.matches);
      document.documentElement.classList.toggle("light", !needDark);
      localStorage.setItem("theme", currentTheme.code);
    };
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, [currentTheme]);

  const toggle = (id: HeaderMenuId): void => {
    toggleHeaderMenu({ id, openMenu, setOpenMenu });
  };

  return (
    <header className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center md:gap-3 px-4 py-6 md:grid-cols-8 md:gap-x-6">
      <div className="min-w-0 col-start-1  md:col-start-2 lg:col-start-3 row-start-1 md:col-span-5 max-w-[880px]">
        <div className="relative grid w-full grid-cols-[1fr_auto_auto_auto] items-center rounded-2xl border border-b-component bg-component light:bg-component-light px-2 py-2 font-normal shadow-[0_4px_4px_0_rgb(0_0_0/0.25)]">
          <div className="col-start-1 row-start-1 flex items-center gap-4 justify-self-start">
            <img src={logoIcon} alt="HuShine logo" className="h-12 w-12 rounded-xl" />
            <h1 className="text-xl pr-3">{projectName}</h1>
          </div>

          <div className="col-start-2 row-start-1 w-5 rounded-full px-4 lg:hidden"></div>

          <nav className="col-start-4 row-start-1 hidden items-center gap-2 text-base md:flex justify-self-end text-nowrap">
            {links.map((l) => (
              <a key={l.href + l.label} href={l.href} className="flex items-center rounded-xl px-3 py-2 hover:bg-component-button">
                {l.label}
              </a>
            ))}
          </nav>
          
          <div className="col-start-3 row-start-1 flex justify-self-end md:hidden">
            <MobileLanguageButton
              isOpen={openMenu === "language"}
              onToggle={() => toggle("language")}
              currentLang={currentLang}
              onLanguageChange={setCurrentLang}
            />
            <MobileThemeButton 
              isOpen={openMenu === "theme"} 
              onToggle={() => toggle("theme")}
              currentTheme={currentTheme}
              onThemeChange={setCurrentTheme}
            />
          </div>
          
          <button
            onClick={() => toggle("burger")}
            className="col-start-4 row-start-1 justify-self-end rounded-xl p-2 hover:bg-component-button md:hidden"
            aria-label="Меню"
            aria-expanded={openMenu === "burger"}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {openMenu === "burger" ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
            
          {renderMenu && (
            <nav
              onAnimationEnd={() => openMenu !== "burger" && setRenderMenu(false)}
              className={`absolute left-0 right-0 top-full z-50 mt-2 flex flex-col gap-1 rounded-2xl border border-b-component light:border-b-component-light bg-component shadow-[0_4px_4px_0_rgb(0_0_0/0.25)] p-2 text-base md:hidden
                ${openMenu === "burger" ? "animate-open-menu origin-top" : "animate-close-menu origin-top"}`}
            >
              {links.map((l) => (
                <a key={l.href + l.label} href={l.href} onClick={() => toggle("burger")} className="rounded-xl px-3 py-2 hover:bg-component-button">
                  {l.label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </div>

      <div className="hidden md:flex items-center justify-end gap-4 md:col-span-2 md:col-start-7 row-start-1 col-start-2">
        <LanguageButton
          isOpen={openMenu === "language"}
          onToggle={() => toggle("language")}
          currentLang={currentLang}
          onLanguageChange={setCurrentLang}
        />
        <ThemeButton 
          isOpen={openMenu === "theme"} 
          onToggle={() => toggle("theme")}
          currentTheme={currentTheme}
          onThemeChange={setCurrentTheme}
        />
      </div>
    </header>
  );
}