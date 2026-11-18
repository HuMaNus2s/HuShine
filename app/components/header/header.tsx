import { useState } from "react";
import logoIcon from "~/src/HuShine.webp";

const links = [
  { href: "/", label: "Контакты" },
  { href: "/", label: "Проекты" },
  { href: "/", label: "Об авторе" },
];

const languages = [
  { code: "ru", label: "RU", name: "Русский" },
  { code: "ua", label: "UA", name: "Английский" },
  { code: "en", label: "EN", name: "Испанский" },
];

const projectName = "HuShine";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [renderMenu, setRenderMenu] = useState(false);

  const [languageOpen, setLanguageOpen] = useState(false);
  const [renderLanguageMenu, setRenderLanguageMenu] = useState(false);

  const toggleMenu = () => {
    if (!menuOpen) {
      setRenderMenu(true);
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  };

  const toggleLanguageMenu = () => {
    if (!languageOpen) {    
      setRenderLanguageMenu(true);
      setLanguageOpen(true);
    } else {
      setLanguageOpen(false);
    }
  };

  return (
    <header className="grid grid-cols-6 px-2 py-2">
      <div className="flex col-span-4 col-start-2 justify-center">
        <div className="flex w-full max-w-[880px] items-center justify-between rounded-2xl border border-b-component bg-component px-4 py-2 font-normal shadow-lg">
        
          <div className="flex items-center gap-4">
            <img src={logoIcon} alt="HuShine logo" className="h-12 w-12 rounded-xl" />
            <h1 className="text-xl">{projectName}</h1>
          </div>
    
          <nav className="hidden items-center gap-2 text-base md:flex">
            {links.map((l) => (
              <a
                key={l.href + l.label}
                href={l.href}
                className="flex items-center rounded-xl px-3 py-2 hover:bg-component-button"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {renderMenu && (
            <nav
              onAnimationEnd={() => !menuOpen && setRenderMenu(false)}
              className={`absolute left-0 right-0 top-full z-50 mt-2 flex flex-col gap-1 rounded-2xl border border-b-component bg-component p-2 text-base md:hidden
                ${menuOpen ? "animate-open-menu origin-top" : "animate-close-menu origin-top"}`}
            >
              {links.map((l) => (
                <a
                  key={l.href + l.label}
                  href={l.href}
                  onClick={toggleMenu}
                  className="rounded-xl px-3 py-2 hover:bg-component-button"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </div>

      <div className="flex justify-end content-center items-center gap-2">
        <div className="relative">
          <button
            onClick={toggleLanguageMenu}
            aria-expanded={languageOpen}
            className="flex rounded-full px-3 bg-component hover:bg-component-button border border-b-component"
          >
            <div className="content-center">RU</div>
            <div className="font-bold p-3 text-sm">Русский</div>
            <div className="content-center">
              <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.900024 0.900002L5.40002 5.4L9.90002 0.900002" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" stroke="#C2C2C2"/></svg>
            </div>
          </button>
          {renderLanguageMenu && (
            <nav
              onAnimationEnd={() => !languageOpen && setRenderLanguageMenu(false)}
              className={`absolute right-0 top-full z-50 mt-3 p-1.5 flex flex-col gap-1 rounded-2xl border border-b-component bg-component text-base
                ${languageOpen ? "animate-open-menu origin-top" : "animate-close-menu origin-top"}`}
            >
              <h1 className="uppercase mb-0.5 p-1.5 font-semibold">Язык сайта</h1> 
              <div className="mx-1.5 h-[1px] border-[1px] border-b-component"></div>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={toggleLanguageMenu}
                  className="grid grid-cols-[1fr_3fr_1fr] rounded-xl p-1 text-left hover:bg-component-button gap-3"
                >
                  <div className="
                  flex bg-component-button 
                  border border-component-button 
                  p-2 justify-center content-center 
                  rounded-xl font-normal">
                    {lang.label}
                  </div>
                  <div className="content-center font-bold">{lang.name}</div>
                  <div className="flex justify-end p-1 items-center">
                    <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4">
                      <path d="M0.800049 4.53338L3.73338 7.46672L10.1334 0.800049" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" stroke="#5AB900" stroke-opacity="0.6"/>
                    </svg>
                  </div>

                </button>
              ))}
            </nav>
          )}
        </div>
        <button
          onClick={toggleMenu}
          className="rounded-xl p-2 hover:bg-component-button md:hidden"
          aria-label="Меню"
          aria-expanded={menuOpen}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
    </header>
  );
}