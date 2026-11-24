import { useState } from "react";


export default function LanguageButton() {

    const languages = [
      { code: "ru", label: "RU", name: "Русский" },
      { code: "ua", label: "UA", name: "Английский" },
      { code: "en", label: "EN", name: "Испанский" },
    ];

    const [languageOpen, setLanguageOpen] = useState(false);
    const [renderLanguageMenu, setRenderLanguageMenu] = useState(false);
    const [currentLang, setCurrentLang] = useState(languages[0]);

    const toggleLanguageMenu = () => {
      if (!languageOpen) {
        setRenderLanguageMenu(true);
        setLanguageOpen(true);
      } else {
        setLanguageOpen(false);
      }
    };

    return (
        <div className="relative">
          <button onClick={toggleLanguageMenu} aria-expanded={languageOpen} className="flex rounded-full px-3 pl-1 bg-component hover:bg-component-button border border-b-component shadow-[0_4px_4px_0_rgb(0_0_0/0.25)] 2xl:pl-3">
            <div className="content-center p-2.5 2xl:p-0 text-sm">{currentLang.label}</div>
            <div className="hidden font-bold text-sm p-0 2xl:block 2xl:p-3 2xl:py-2">{currentLang.name}</div>
            <div className="content-center">
              <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.900024 0.900002L5.40002 5.4L9.90002 0.900002" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" stroke="#C2C2C2"/></svg>
            </div>
          </button>

          {renderLanguageMenu && (
            <nav
              onAnimationEnd={() => !languageOpen && setRenderLanguageMenu(false)}
              className={`absolute right-0 top-full z-50 mt-3 w-[240px] p-1.5 text-xs flex flex-col rounded-2xl border border-b-component bg-component text-base
                ${languageOpen ? "animate-open-menu origin-top-right" : "animate-close-menu origin-top-right"}`}
            >
              <h1 className="uppercase mb-0.5 p-1.5 font-semibold">Язык сайта</h1>
              <div className="mx-1.5 mb-1.5 h-[1px] border-[1px] border-b-component"></div>
              {languages.map((lang) => (
                <button key={lang.code} onClick={() => { setCurrentLang(lang); toggleLanguageMenu(); }} className="grid grid-cols-[auto_1fr_auto] rounded-xl p-1 text-left hover:bg-component-button gap-3 mb-0.5">
        
                  {currentLang.label === lang.label ? 
                    <div className="flex bg-acsent-active border border-b-acsent-active p-2 justify-center content-center rounded-xl font-normal text-sm">{lang.label}</div>
                    :  <div className="flex bg-component-button border border-component-button p-2 justify-center content-center rounded-xl font-normal text-sm">{lang.label}</div>
                  }

                  <div className="content-center font-bold">{lang.name}</div>

                  <div className="flex justify-end px-1.5 items-center">
                    {currentLang.code === lang.code && (
                      <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                        <path d="M0.800049 4.53338L3.73338 7.46672L10.1334 0.800049" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" stroke="#5AB900" strokeOpacity="0.6"/>
                      </svg>
                    )}
                  </div>
                </button>
              ))}
            </nav>
          )}
        </div>
    );
}