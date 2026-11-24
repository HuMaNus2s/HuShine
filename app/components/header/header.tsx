import { useState } from "react";
import logoIcon from "~/src/HuShine.webp";
import LanguageButton from "./languageButton";
import ThemeButton from "./themeButton";

const links = [
  { href: "/", label: "Контакты" },
  { href: "/", label: "Проекты" },
  { href: "/", label: "Об авторе" },
];

const projectName = "HuShine";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [renderMenu, setRenderMenu] = useState(false);

  const toggleMenu = () => {
    if (!menuOpen) {
      setRenderMenu(true);
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  };

  return (
    <header className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-6 md:grid-cols-8 md:gap-x-6">
      <div className="min-w-0 col-start-1  md:col-start-2 lg:col-start-3 row-start-1 md:col-span-5 max-w-[880px]">
        <div className="relative flex w-full items-center justify-between rounded-2xl border border-b-component bg-component px-2 py-2 font-normal shadow-[0_4px_4px_0_rgb(0_0_0/0.25)]">
          <div className="flex items-center gap-4">
            <img
              src={logoIcon}
              alt="HuShine logo"
              className="h-12 w-12 rounded-xl"
            />
            <h1 className="text-xl">{projectName}</h1>
          </div>

          <div className="hidden h-10 w-1 rounded-full border-r border-b-component pr-3 md:block lg:hidden"></div>

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

          <button
            onClick={toggleMenu}
            className="rounded-xl p-2 hover:bg-component-button md:hidden"
            aria-label="Меню"
            aria-expanded={menuOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? ( <path  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth={2}  d="M6 18L18 6M6 6l12 12"/>
              ) : ( <path  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth={2}  d="M4 6h16M4 12h16M4 18h16"/>
              )}
            </svg>
          </button>

          {renderMenu && (
            <nav
              onAnimationEnd={() => !menuOpen && setRenderMenu(false)}
              className={`absolute left-0 right-0 top-full z-50 mt-2 flex flex-col gap-1 rounded-2xl border border-b-component bg-component p-2 text-base md:hidden
                ${  menuOpen    ? "animate-open-menu origin-top"    : "animate-close-menu origin-top"}`}
            >
              {links.map((l) => (
                <a  key={l.href + l.label}  href={l.href}  onClick={toggleMenu}  className="rounded-xl px-3 py-2 hover:bg-component-button">
                  {l.label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </div>

      <div className="flex items-center justify-end gap-4 md:col-span-2 md:col-start-7 row-start-1 col-start-2">
        <LanguageButton />
        <ThemeButton />
      </div>
    </header>
  );
}