import { useState } from "react";


export default function ThemeButton() {

    const themes = [
      { svg: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5753 11.2002C17.3756 12.7577 16.7434 14.228 15.7503 15.4444C14.7572 16.6607 13.4431 17.5743 11.9571 18.0816C10.471 18.5889 8.87253 18.6694 7.343 18.3142C5.81347 17.9589 4.41414 17.182 3.30381 16.0717C2.19348 14.9613 1.4166 13.562 1.06133 12.0325C0.706057 10.503 0.786622 8.90447 1.29388 7.41841C1.80114 5.93235 2.71478 4.61823 3.93112 3.62517C5.14747 2.6321 6.61781 1.99985 8.17531 1.80017C7.33306 3.10633 6.96366 4.6616 7.12861 6.20699C7.29356 7.75239 7.98291 9.19464 9.08187 10.2936C10.1808 11.3926 11.6231 12.0819 13.1685 12.2469C14.7139 12.4118 16.2691 12.0424 17.5753 11.2002Z" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" stroke="#C2C2C2"/><path d="M15.9752 1.6001L16.4252 2.5501L17.3752 3.0001L16.4252 3.4501L15.9752 4.4001L15.5252 3.4501L14.5752 3.0001L15.5252 2.5501L15.9752 1.6001Z" fill="#C2C2C2"/></svg>, label: "Темная", description: "Ночь. Глубокая и тихая" },
      { svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.69995V4.79995M12 19.2V21.2999M2.69995 12H4.79995M19.2 12H21.2999M5.39995 5.39995L6.89995 6.89995M18.6 5.39995L17.1 6.89995M5.39995 18.6L6.89995 17.1M18.6 18.6L17.1 17.1" strokeWidth="1.7" strokeLinecap="round" stroke="#C2C2C2"/><path d="M11.9999 16.1C14.2643 16.1 16.0999 14.2644 16.0999 12C16.0999 9.73566 14.2643 7.90002 11.9999 7.90002C9.73553 7.90002 7.8999 9.73566 7.8999 12C7.8999 14.2644 9.73553 16.1 11.9999 16.1Z" fill="#C2C2C2"/></svg>, label: "Светлая", description: "День. Теплая и контрастная" },
      { svg: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16671 3.75H15.8334C16.984 3.75 17.9167 4.68274 17.9167 5.83333V12.5C17.9167 13.6506 16.984 14.5833 15.8334 14.5833H4.16671C3.01611 14.5833 2.08337 13.6506 2.08337 12.5V5.83333C2.08337 4.68274 3.01611 3.75 4.16671 3.75Z" strokeWidth="1.7" strokeLinecap="round" stroke="#C2C2C2"/><path d="M10 14.5834V17.5M7.08337 17.5H12.9167" strokeWidth="1.7" strokeLinecap="round" stroke="#C2C2C2"/><path opacity="0.3" d="M10 4.66663H15C15.4199 4.66663 15.8227 4.83344 16.1196 5.13037C16.4165 5.42731 16.5833 5.83003 16.5833 6.24996V12.9166C16.5833 13.3366 16.4165 13.7393 16.1196 14.0362C15.8227 14.3331 15.4199 14.5 15 14.5H10V4.66663Z" fill="#C2C2C2"/><path opacity="0.9" d="M10 5.33337V6.16671M10 13V12.1667M10 8.33337V10" strokeWidth="1.7" strokeLinecap="round" stroke="#C2C2C2"/></svg>, label: "Системная", description: "Использует тему устройства" },
    ];

    const [themeOpen, setThemeOpen] = useState(false);
    const [renderThemeMenu, setRenderThemeMenu] = useState(false);
    const [currentTheme, setCurrentTheme] = useState(themes[2]);

    const toggleThemeMenu = () => {
      if (!themeOpen) {
        setRenderThemeMenu(true);
        setThemeOpen(true);
      } else {
        setThemeOpen(false);
      }
    };

    return (
        <div className="relative">
          <button onClick={toggleThemeMenu} aria-expanded={themeOpen} className="flex rounded-full px-3 pl-1 bg-component hover:bg-component-button border border-b-component shadow-[0_4px_4px_0_rgb(0_0_0/0.25)] 2xl:pl-3">
            <div className="content-center p-2.5 2xl:p-0">{currentTheme.svg}</div>
            <div className="hidden font-bold text-sm p-0 2xl:block 2xl:p-3 2xl:py-2">{currentTheme.label}</div>
            <div className="content-center">
              <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.900024 0.900002L5.40002 5.4L9.90002 0.900002" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" stroke="#C2C2C2"/></svg>
            </div>
          </button>

          {renderThemeMenu && (
            <nav
              onAnimationEnd={() => !themeOpen && setRenderThemeMenu(false)}
              className={`absolute right-0 top-full z-50 mt-3 w-[250px] p-1.5 text-xs flex flex-col rounded-2xl border border-b-component bg-component
                ${themeOpen ? "animate-open-menu origin-top" : "animate-close-menu origin-top"}`}
            >
              <h1 className="uppercase mb-0.5 p-1.5 font-semibold">Тема оформления</h1>
              <div className="mx-1.5 mb-1.5 h-[1px] border-[1px] border-b-component"></div>
              {themes.map((theme) => (
                <button key={theme.label} onClick={() => { setCurrentTheme(theme); toggleThemeMenu(); }} className="grid grid-cols-[auto_1fr_auto] rounded-xl p-1 text-left hover:bg-component-button gap-3 mb-0.5">
                
                  {currentTheme.label === theme.label ? 
                    <div className="flex bg-acsent-active border-b-acsent-active border border-component-button p-1.5 justify-center content-center rounded-xl font-normal text-sm">{theme.svg}</div>
                    :  <div className="flex bg-component-button border border-component-button p-1.5 justify-center content-center rounded-xl font-normal text-sm">{theme.svg}</div>
                  }

                  <div>
                    <div className="content-center font-bold">{theme.label}</div>
                    <div className="content-center font-medium text-component-secondary text-[0.625rem]">{theme.description}</div>
                  </div>

                  <div className="flex justify-end pr-1.5 items-center">
                    {currentTheme.label === theme.label && (
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