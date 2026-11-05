import { useState } from "react";
import logoIcon from "~/src/HuShine.webp"

const links = [
  { href: "/", label: "Контакты" },
  { href: "/", label: "Проекты" },
  { href: "/", label: "Об авторе" },
];

const projectName = 'HuShine'; // temporarily

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [renderMenu, setRenderMenu] = useState(false);

  const toggleMenu = () => {
    if (!menuOpen) {
      setRenderMenu(true);
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
      setTimeout(() => setRenderMenu(false), 125);
    }
  };

  const [languageOpen, setLanguageOpen] = useState(false);
  const [renderLanguageMenu, setRenderLanguageMenu] = useState(false);

  const toggleLanguageMenu = () => {
    if (!menuOpen) {
      setRenderLanguageMenu(true);
      setLanguageOpen(true);
    } else {
      setLanguageOpen(false);
      setTimeout(() => setRenderLanguageMenu(false), 125);
    }
  };

  

  return (
    <header className="flex items-center justify-center">
      <div className="relative flex w-[880px] justify-between items-center font-normal bg-component border-b-component border rounded-2xl mx-2 my-2 px-4 py-2">

        <div className="flex gap-4 items-center">
          <img src={logoIcon} alt="HuShine logo" className="h-12 w-12 rounded-xl" />
          <h1 className="text-xl">{projectName}</h1>
        </div>

        <nav className="hidden md:flex items-center gap-2 text-base">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="flex items-center py-2 px-3 rounded-xl hover:bg-component-button">
              {l.label}
            </a>
          ))}
        </nav>

        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-xl hover:bg-component-button"
          aria-label="Открыть меню"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {renderMenu && (
          <nav
            onAnimationEnd={() => !menuOpen && setRenderMenu(false)}
            className={`absolute transition-all origin-top ${menuOpen ? "animate-open-menu" : "animate-close-menu"} top-full left-0 right-0 mt-2 md:hidden flex flex-col gap-1 bg-component border border-b-component rounded-2xl p-2 text-base z-50`}>
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={toggleMenu}
                className="py-2 px-3 rounded-xl hover:bg-component-button"
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </div>

      <div className="relative flex bg-component border-b-component border rounded-2xl">
Кнопка
      </div>
    </header>
  );
}