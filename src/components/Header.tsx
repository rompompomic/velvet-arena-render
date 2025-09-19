import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleMobile = () => setMobileOpen((v) => !v);
  const toggleSection = (key: string) =>
    setOpenSection((cur) => (cur === key ? null : key));

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const mainNavigation = [
    {
      key: "pakalpojumi",
      name: "Pakalpojumi",
      href: "/lv/pakalpojumi/",
      hasDropdown: true,
      subItems: [
        { name: "Visi pakalpojumi", href: "/lv/pakalpojumi/" },
        { name: "Jāšanas treniņi", href: "/lv/pakalpojumi/jasanas-trenini/" },
        { name: "Zirgu uzturēšana", href: "/lv/pakalpojumi/zirgu-uzturesana/" },
        { name: "Laukumu īre", href: "/lv/pakalpojumi/laukumu-ire/" },
        { name: "Ekskursijas", href: "/lv/pakalpojumi/ekskursijas/" },
        { name: "Korporatīvie pasākumi", href: "/lv/pakalpojumi/korporativie-pasakumi/" },
        { name: "Citi pakalpojumi", href: "/lv/pakalpojumi/citi-pakalpojumi/" },
      ],
    },
    { key: "cenas", name: "Cenas", href: "/lv/cenas/" },
    {
      key: "galerija",
      name: "Galerija",
      href: "/lv/galerija/",
      hasDropdown: true,
      subItems: [
        { name: "Visu galerija", href: "/lv/galerija/" },
        { name: "Pasākumi", href: "/lv/galerija/pasakumi/" },
        { name: "Jauno jātnieku skola", href: "/lv/galerija/jauno-jatnieku-skola/" },
      ],
    },
    { key: "par", name: "Par mums", href: "/lv/par-mums/" },
    { key: "kontakti", name: "Kontakti", href: "/lv/kontakti/" },
  ];

  const languages = [
    { code: "LV", active: true, href: "/lv/" },
    { code: "EN", active: false, href: "/en/" },
    { code: "RU", active: false, href: "/ru/" },
  ];

  // утилита как строка для читаемости (НЕ переменная Tailwind) — всё равно вставляем прямо в элементы
  const u =
    "relative after:content-[''] after:absolute after:left-0 after:-bottom-[2px] after:h-[2px] after:bg-[var(--primary)] after:w-0 hover:after:w-full after:transition-all after:duration-200";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200">
      <div className="w-full">
        {/* ===== Top utility bar (hidden on mobile) ===== */}
        <div className="border-b border-neutral-200 hidden md:block">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="flex items-center justify-between py-1.5">
              <nav className="flex items-center gap-2 text-xs">
                {languages.map((l, i) => (
                  <span key={l.code} className="flex items-center">
                    {l.active ? (
                      <span className={`font-semibold text-[var(--primary)] ${u}`}>{l.code}</span>
                    ) : (
                      <a href={l.href} className={`text-text/70 hover:text-[var(--primary)] transition-colors ${u}`}>
                        {l.code}
                      </a>
                    )}
                    {i < languages.length - 1 && <span className="mx-1 text-text/30">/</span>}
                  </span>
                ))}
              </nav>

              <div className="flex items-center gap-4 text-xs text-text/80">
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2.6a1 1 0 01.95.69l1.2 3.6a1 1 0 01-.51 1.2l-1.6.8a12 12 0 006.32 6.32l.8-1.6a1 1 0 011.2-.51l3.6 1.2a1 1 0 01.69.95V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +37128677177
                </span>
                <a href="mailto:info@latvianhorses.lv" className={`flex items-center gap-1 hover:text-[var(--primary)] transition-colors ${u}`}>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@latvianhorses.lv
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Main bar (desktop) ===== */}
        <div className="container mx-auto max-w-7xl px-4">
          {/* ВАЖНО: кастомная сетка, центр растяжимый, боки авто */}
          <div className="hidden md:grid grid-cols-[auto,1fr,auto] items-center py-4 md:py-5">
            <div className="flex items-center">
              <a
                href="/"
                className="text-lg md:text-xl font-semibold text-[var(--primary)] tracking-tight leading-none h-8 flex items-center whitespace-nowrap"
              >
                Latvian Horses
              </a>
            </div>

            {/* центр не раздувается сверх контейнера, не ломает правый блок */}
            <nav className="hidden lg:flex justify-center min-w-0">
              <ul className="flex items-center lg:gap-4 xl:gap-6 flex-nowrap overflow-x-visible">
                {mainNavigation.map((item) =>
                  item.hasDropdown ? (
                    <li key={item.key} className="relative group shrink-0">
                      <button
                        className={`text-[15px] text-text/90 hover:text-[var(--primary)] font-medium flex items-center gap-1 whitespace-nowrap ${u}`}
                        aria-haspopup="menu"
                        aria-expanded="false"
                      >
                        {item.name}
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div className="absolute left-0 top-full mt-2 w-56 rounded-md border border-neutral-200 bg-white shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
                        {item.subItems?.map((sub) => (
                          <a
                            key={sub.name}
                            href={sub.href}
                            className={`block px-3 py-2 text-sm text-text/90 hover:text-[var(--primary)] hover:bg-[var(--light)] first:rounded-t-md last:rounded-b-md whitespace-nowrap ${u}`}
                          >
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    </li>
                  ) : (
                    <li key={item.key} className="shrink-0">
                      <a
                        href={item.href}
                        className={`text-[15px] text-text/90 hover:text-[var(--primary)] font-medium whitespace-nowrap ${u}`}
                      >
                        {item.name}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </nav>

            {/* правый блок фиксируем, текст Main Sponsor показываем с xl */}
            <div className="hidden md:flex items-center justify-end gap-4 whitespace-nowrap shrink-0">
              <div className="items-center h-8 hidden xl:flex">
                <span className="text-lg md:text-xl font-semibold text-muted-foreground leading-none whitespace-nowrap">
                  Main Sponsor
                </span>
              </div>

              <a
                href="/lv/pasakumi/"
                className="inline-flex items-center rounded-md px-4 py-2 text-sm md:text-[15px] font-semibold text-white bg-[var(--primary)] hover:bg-[var(--primary-700)] transition-colors whitespace-nowrap shrink-0"
              >
                Pasākumi
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Mobile top row (burger) ===== */}
      <div className="md:hidden container mx-auto max-w-7xl px-4 py-2">
        <div className="flex items-center justify-between">
          <a href="/" className="text-base font-semibold text-[var(--primary)] whitespace-nowrap">
            Latvian Horses
          </a>
          <button
            className="p-2 text-text/80"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={toggleMobile}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ===== Mobile Fullscreen Menu ===== */}
      <div
        className={`md:hidden fixed inset-0 z-[60] bg-white transition-opacity duration-200 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200">
          <a href="/" className="text-base font-semibold text-[var(--primary)]" onClick={() => setMobileOpen(false)}>
            Latvian Horses
          </a>
        <button className="p-2 text-text/80" aria-label="Close menu" onClick={toggleMobile}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="h-[calc(100vh-56px)] overflow-y-auto px-2 py-2">
          <nav className="divide-y divide-neutral-200">
            {mainNavigation.map((item) =>
              item.hasDropdown ? (
                <div key={item.key} className="py-1">
                  <button
                    className={`w-full flex items-center justify-between px-2 py-3 text-[15px] font-medium text-text/90 hover:text-[var(--primary)] ${u}`}
                    onClick={() => toggleSection(item.key)}
                    aria-expanded={openSection === item.key}
                  >
                    <span className="whitespace-nowrap">{item.name}</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${openSection === item.key ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out px-2 ${
                      openSection === item.key ? "grid-rows-[1fr] pb-2" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <ul className="pl-2">
                        {item.subItems?.map((sub) => (
                          <li key={sub.name}>
                            <a
                              href={sub.href}
                              onClick={() => setMobileOpen(false)}
                              className={`block px-3 py-2 text-sm text-text/90 rounded-md hover:bg-[var(--light)] hover:text-[var(--primary)] whitespace-nowrap ${u}`}
                            >
                              {sub.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-2 py-3 text-[15px] font-medium text-text/90 hover:text-[var(--primary)] whitespace-nowrap ${u}`}
                >
                  {item.name}
                </a>
              )
            )}
          </nav>

          <div className="my-3 border-t border-neutral-200" />

          <div className="px-2 py-2">
            <div className="text-xs uppercase tracking-wide text-text/50 mb-2">VALODAS</div>
            <div className="flex items-center gap-2">
              {languages.map((l) =>
                l.active ? (
                  <span key={l.code} className={`px-2 py-1 text-xs rounded-md bg-[var(--primary-50)] text-[var(--primary)] font-semibold ${u}`}>
                    {l.code}
                  </span>
                ) : (
                  <a
                    key={l.code}
                    href={l.href}
                    className={`px-2 py-1 text-xs rounded-md hover:bg-[var(--light)] ${u}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {l.code}
                  </a>
                )
              )}
            </div>
          </div>

          <div className="px-2 py-2">
            <div className="text-xs uppercase tracking-wide text-text/50 mb-2">KONTAKTI</div>
            <div className="space-y-2 text-[15px]">
              <a
                href="tel:+37128677177"
                className={`flex items-center gap-2 hover:text-[var(--primary)] ${u}`}
                onClick={() => setMobileOpen(false)}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2.6a1 1 0 01.95.69l1.2 3.6a1 1 0 01-.51 1.2l-1.6.8a12 12 0 006.32 6.32l.8-1.6a1 1 0 011.2-.51l3.6 1.2a1 1 0 01.69.95V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +37128677177
              </a>
              <a
                href="mailto:info@latvianhorses.lv"
                className={`flex items-center gap-2 hover:text-[var(--primary)] ${u}`}
                onClick={() => setMobileOpen(false)}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@latvianhorses.lv
              </a>
            </div>
          </div>

          <div className="px-2 pt-4 pb-2">
            <div className="text-xs uppercase tracking-wide text-text/50 mb-2">GALVENAIS SPONSORS</div>
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 rounded-md border border-neutral-200 bg-[var(--light)] px-3 py-3 hover:bg-[var(--primary-50)] transition-colors ${u}`}
            >
              <div className="flex-shrink-0">
                <div className="h-8 w-20 rounded bg-white border border-neutral-200 flex items-center justify-center text-[10px] text-text/60">
                  LOGO
                </div>
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold text-text truncate">Main Sponsor</div>
                <div className="text-xs text-text/60 truncate">Atbalsta Latvian Horses</div>
              </div>
            </a>
          </div>

          <div className="px-2 py-4">
            <a
              href="/lv/pasakumi/"
              onClick={() => setMobileOpen(false)}
              className={`inline-flex w-full items-center justify-center rounded-md px-4 py-3 font-semibold text-white bg-[var(--primary)] hover:bg-[var(--primary-700)] transition-colors ${u}`}
            >
              Pasākumi
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
