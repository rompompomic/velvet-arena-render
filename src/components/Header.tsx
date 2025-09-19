import { useEffect, useState } from "react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleMobile = () => setMobileOpen((v) => !v);
  const toggleSection = (key: string) =>
    setOpenSection((cur) => (cur === key ? null : key));

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Добавил Pasākumi в основную навигацию, чтобы стиль был как у всех
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
    // ← вот он, как обычный пункт меню
    { key: "pasakumi", name: "Pasākumi", href: "/lv/pasakumi/" },
  ];

  const languages = [
    { code: "LV", active: true, href: "/lv/" },
    { code: "EN", active: false, href: "/en/" },
    { code: "RU", active: false, href: "/ru/" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200">
      <div className="w-full">
        {/* Top utility bar */}
        <div className="border-b border-neutral-200 hidden md:block">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="flex items-center justify-between py-1.5">
              <nav className="flex items-center gap-2 text-xs">
                {languages.map((l, i) => (
                  <span key={l.code} className="flex items-center">
                    {l.active ? (
                      <span className="font-semibold text-[hsl(var(--primary))] link-underline">{l.code}</span>
                    ) : (
                      <a href={l.href} className="text-text/70 hover:text-[hsl(var(--primary))] transition-colors link-underline">
                        {l.code}
                      </a>
                    )}
                    {i < languages.length - 1 && <span className="mx-1 text-text/30">/</span>}
                  </span>
                ))}
              </nav>

              <div className="flex items-center gap-4 text-xs text-text/80">
                <a href="tel:+37128677177" className="flex items-center gap-1 link-underline">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2.6a1 1 0 01.95.69l1.2 3.6a1 1 0 01-.51 1.2l-1.6.8a12 12 0 006.32 6.32l.8-1.6a1 1 0 011.2-.51l3.6 1.2a1 1 0 01.69.95V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +37128677177
                </a>
                <a href="mailto:info@latvianhorses.lv" className="flex items-center gap-1 hover:text-[hsl(var(--primary))] transition-colors link-underline">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@latvianhorses.lv
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main bar (desktop) */}
        <div className="container mx-auto max-w-7xl px-4">
          <div className="hidden md:grid grid-cols-[auto,1fr,auto] items-center py-4 md:py-5">
            {/* Левый логотип */}
            <div className="flex items-center">
              <a
                href="/"
                className="text-lg md:text-xl font-semibold text-[hsl(var(--primary))] tracking-tight leading-none h-8 flex items-center whitespace-nowrap link-underline"
              >
                Latvian Horses
              </a>
            </div>

            {/* Центр — все пункты в одну линию, без переносов */}
            <nav className="hidden lg:flex justify-center min-w-0">
              <ul className="flex items-center lg:gap-4 xl:gap-6 flex-nowrap overflow-x-visible">
                {mainNavigation.map((item) =>
                  item.hasDropdown ? (
                    <li key={item.key} className="relative group shrink-0">
                      <button
                        className="text-[15px] text-text/90 hover:text-[hsl(var(--primary))] font-medium flex items-center gap-1 whitespace-nowrap link-underline"
                        aria-haspopup="menu"
                        aria-expanded={openSection === item.key}
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
                            className="block px-3 py-2 text-sm text-text/90 hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-50))] first:rounded-t-md last:rounded-b-md whitespace-nowrap link-underline"
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
                        className="text-[15px] text-text/90 hover:text-[hsl(var(--primary))] font-medium whitespace-nowrap link-underline"
                      >
                        {item.name}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </nav>

            {/* Правый блок — только текст, чтобы ничего не «выталкивало» */}
            <div className="hidden md:flex items-center justify-end gap-4 whitespace-nowrap shrink-0">
              <span className="hidden xl:inline text-lg md:text-xl font-semibold text-muted-foreground leading-none whitespace-nowrap">
                Main Sponsor
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile top row */}
      <div className="md:hidden container mx-auto max-w-7xl px-4 py-2">
        <div className="flex items-center justify-between">
          <a href="/" className="text-base font-semibold text-[hsl(var(--primary))] whitespace-nowrap link-underline">
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

      {/* Mobile Fullscreen Menu */}
      <div
        className={`md:hidden fixed inset-0 z-[60] bg-white transition-opacity duration-200 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200">
          <a href="/" className="text-base font-semibold text-[hsl(var(--primary))] link-underline" onClick={() => setMobileOpen(false)}>
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
                    className="w-full flex items-center justify-between px-2 py-3 text-[15px] font-medium text-text/90 hover:text-[hsl(var(--primary))] link-underline"
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
                              className="block px-3 py-2 text-sm text-text/90 rounded-md hover:bg-[hsl(var(--primary-50))] hover:text-[hsl(var(--primary))] whitespace-nowrap link-underline"
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
                  className="block px-2 py-3 text-[15px] font-medium text-text/90 hover:text-[hsl(var(--primary))] whitespace-nowrap link-underline"
                >
                  {item.name}
                </a>
              )
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
