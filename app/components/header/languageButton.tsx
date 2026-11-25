import { useState } from "react";

export interface Language {
  code: string;
  label: string;
  name: string;
}

export const languages: Language[] = [
  { code: "ru", label: "RU", name: "Русский" },
  { code: "es", label: "ES", name: "Испанский" },
  { code: "en", label: "EN", name: "Английский" },
];

interface LanguageMenuItemProps {
  lang: Language;
  isActive: boolean;
  onSelect: (lang: Language) => void;
}

function LanguageMenuItem({ lang, isActive, onSelect }: LanguageMenuItemProps) {
  return (
    <button
      onClick={() => onSelect(lang)}
      className="grid grid-cols-[auto_1fr_auto] rounded-xl p-1 text-left hover:bg-component-button light:hover:bg-component-button-light gap-3 mb-0.5"
    >
      <div
        className={`flex p-2 justify-center content-center rounded-xl font-normal text-sm ${
          isActive
            ? "bg-acsent-active border border-b-acsent-active"
            : "bg-component-button border border-component-button light:bg-component-button-light"
        }`}
      >
        {lang.label}
      </div>

      <div className="content-center font-bold">{lang.name}</div>

      <div className="flex justify-end px-1.5 items-center">
        {isActive && (
          <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
            <path d="M0.800049 4.53338L3.73338 7.46672L10.1334 0.800049" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" stroke="#5AB900" strokeOpacity="0.6" />
          </svg>
        )}
      </div>
    </button>
  );
}

export interface LanguageButtonProps {
  isOpen: boolean;
  onToggle: () => void;
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export function LanguageButton({ isOpen, onToggle, currentLang, onLanguageChange }: LanguageButtonProps) {
  const [renderLanguageMenu, setRenderLanguageMenu] = useState<boolean>(false);

  if (isOpen && !renderLanguageMenu) setRenderLanguageMenu(true);

  const selectLanguage = (lang: Language): void => {
    onLanguageChange(lang);
    onToggle();
  };

  return (
    <div className="relative">
      <button onClick={onToggle} aria-expanded={isOpen} 
        className="flex rounded-full px-3 pl-1 bg-component light:bg-component-light hover:bg-component-button light:hover:bg-component-button-light border border-b-component shadow-[0_4px_4px_0_rgb(0_0_0/0.25)] 2xl:pl-3"
      >
        <div className="content-center p-2.5 2xl:p-0 text-sm">{currentLang.label}</div>
        <div className="hidden font-bold text-sm p-0 2xl:block 2xl:p-3 2xl:py-2">{currentLang.name}</div>
        <div className={`content-center transition-all duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}>
          <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="light:stroke-ink-light" d="M0.900024 0.900002L5.40002 5.4L9.90002 0.900002" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" stroke="#C2C2C2" />
          </svg>
        </div>
      </button>

      {renderLanguageMenu && (
        <nav
          onAnimationEnd={() => !isOpen && setRenderLanguageMenu(false)}
          className={`absolute right-0 top-full z-50 mt-5 w-[250px] p-1.5 text-xs flex flex-col rounded-2xl border border-b-component light:border-b-component-light bg-component light:bg-component-light shadow-[0_4px_4px_0_rgb(0_0_0/0.25)] text-base 
            ${isOpen ? "animate-open-menu origin-top-right" : "animate-close-menu origin-top-right"}`}
        >
          <h1 className="uppercase mb-0.5 p-1.5 font-semibold">Язык сайта</h1>
          <div className="mx-1.5 mb-1.5 h-[1px] border-[1px] border-b-component light:border-b-component-light"></div>
          {languages.map((lang) => (
            <LanguageMenuItem
              key={lang.code}
              lang={lang}
              isActive={currentLang.code === lang.code}
              onSelect={selectLanguage}
            />
          ))}
        </nav>
      )}
    </div>
  );
}

export function MobileLanguageButton({ isOpen, onToggle, currentLang, onLanguageChange }: LanguageButtonProps) {
  const [renderLanguageMenu, setRenderLanguageMenu] = useState<boolean>(false);

  if (isOpen && !renderLanguageMenu) setRenderLanguageMenu(true);

  const selectLanguage = (lang: Language): void => {
    onLanguageChange(lang);
    onToggle();
  };

  return (
    <div className="relative">
      <button onClick={onToggle} aria-expanded={isOpen}
        className={`flex rounded-full px-3 pl-1 hover:bg-component-button ${isOpen ? "bg-component-button" : ""} 2xl:pl-3`}
      >
        <div className="content-center p-2 2xl:p-0 text-sm">{currentLang.label}</div>
        <div className="hidden font-bold text-sm p-0 2xl:block 2xl:p-3 2xl:py-2">{currentLang.name}</div>
        <div className={`content-center transition-all duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}>
          <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="light:stroke-ink-light" d="M0.900024 0.900002L5.40002 5.4L9.90002 0.900002" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" stroke="#C2C2C2" />
          </svg>
        </div>
      </button>

      {renderLanguageMenu && (
        <nav
          onAnimationEnd={() => !isOpen && setRenderLanguageMenu(false)}
          className={`absolute right-0 top-full z-50 mt-5 w-[200px] p-1.5 text-xs flex flex-col rounded-2xl border border-b-component bg-component light:border-b-component-light bg-component light:bg-component-light shadow-[0_4px_4px_0_rgb(0_0_0/0.25)] text-base 
            ${isOpen ? "animate-open-menu origin-top-right" : "animate-close-menu origin-top-right"}`}
        >
          <h1 className="uppercase mb-0.5 p-1.5 font-semibold">Язык сайта</h1>
          <div className="mx-1.5 mb-1.5 h-[1px] border-[1px] border-b-component"></div>
          {languages.map((lang) => (
            <LanguageMenuItem
              key={lang.code}
              lang={lang}
              isActive={currentLang.code === lang.code}
              onSelect={selectLanguage}
            />
          ))}
        </nav>
      )}
    </div>
  );
}