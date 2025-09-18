import { Button } from "@/components/ui/button";

const Header = () => {
  const mainNavigation = [
    {
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
    { name: "Cenas", href: "/lv/cenas/" },
    {
      name: "Galerija",
      href: "/lv/galerija/",
      hasDropdown: true,
      subItems: [
        { name: "Visu galerija", href: "/lv/galerija/" },
        { name: "Pasākumi", href: "/lv/galerija/pasakumi/" },
        { name: "Jauno jātnieku skola", href: "/lv/galerija/jauno-jatnieku-skola/" },
      ],
    },
    { name: "Par mums", href: "/lv/par-mums/" },
    { name: "Kontakti", href: "/lv/kontakti/" },
  ];

  const languages = [
    { code: "LV", active: true, href: "/lv/" },
    { code: "EN", active: false, href: "/en/" },
    { code: "RU", active: false, href: "/ru/" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200">
      <div className="w-full">
        {/* ===== Top utility bar: languages + contacts (one row) ===== */}
        <div className="border-b border-neutral-200">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="flex items-center justify-between py-1.5">
              {/* Languages inline */}
              <nav className="flex items-center gap-2 text-xs whitespace-nowrap">
                {languages.map((l, i) => (
                  <span key={l.code} className="flex items-center">
                    {l.active ? (
                      <span className="font-semibold text-[var(--primary)]">{l.code}</span>
                    ) : (
                      <a href={l.href} className="text-text/70 hover:text-[var(--primary)] transition-colors">
                        {l.code}
                      </a>
                    )}
                    {i < languages.length - 1 && (
                      <span className="mx-1 text-text/30">/</span>
                    )}
                  </span>
                ))}
              </nav>

              {/* Contacts inline */}
              <div className="flex items-center gap-5 text-xs text-text/80 whitespace-nowrap">
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2.6a1 1 0 01.95.69l1.2 3.6a1 1 0 01-.51 1.2l-1.6.8a12 12 0 006.32 6.32l.8-1.6a1 1 0 011.2-.51l3.6 1.2a1 1 0 01.69.95V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +37128677177
                </span>
                <a href="mailto:info@latvianhorses.lv" className="flex items-center gap-1 hover:text-[var(--primary)] transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@latvianhorses.lv
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Main bar: logo + centered nav + Main Sponsor + CTA ===== */}
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-3 items-center py-4 md:py-5">
            {/* Left: Logo */}
            <div className="flex items-center">
              <a
                href="/"
                className="text-lg md:text-xl font-semibold text-[var(--primary)] tracking-tight leading-none h-8 flex items-center whitespace-nowrap"
              >
                Latvian Horses
              </a>
            </div>

            {/* Center: Main navigation (no-wrap items) */}
            <nav className="hidden lg:flex justify-center">
              <ul className="flex items-center gap-6">
                {mainNavigation.map((item) =>
                  item.hasDropdown ? (
                    <li key={item.name} className="relative group">
                      <button className="text-[15px] text-text/90 hover:text-[var(--primary)] font-medium flex items-center gap-1 whitespace-nowrap">
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
                            className="block px-3 py-2 text-sm text-text/90 hover:text-[var(--primary)] hover:bg-[var(--light)] first:rounded-t-md last:rounded-b-md"
                          >
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    </li>
                  ) : (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="relative text-[15px] text-text/90 hover:text-[var(--primary)] font-medium whitespace-nowrap after:block after:h-[2px] after:bg-transparent after:w-0 hover:after:bg-[var(--primary)] hover:after:w-full after:transition-all after:duration-200"
                      >
                        {item.name}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </nav>

            {/* Right: Main Sponsor + CTA (no-wrap) */}
            <div className="flex items-center justify-end gap-4 whitespace-nowrap">
              <div className="flex items-center h-8">
                <span className="text-lg md:text-xl font-semibold text-muted-foreground leading-none whitespace-nowrap">
                  Main Sponsor
                </span>
              </div>
            
              <a
                href="/lv/pasakumi/"
                className="inline-flex items-center rounded-md px-4 py-2 text-sm md:text-[15px] font-semibold text-white bg-[var(--primary)] hover:bg-[var(--primary-700)] transition-colors whitespace-nowrap"
              >
                Pasākumi
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile row (burger) */}
      <div className="lg:hidden container mx-auto max-w-7xl px-4 py-2 border-t border-neutral-200">
        <div className="flex items-center justify-between">
          <a href="/" className="text-base font-semibold text-[var(--primary)] whitespace-nowrap">
            Latvian Horses
          </a>
          <button className="p-2 text-text/80" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
