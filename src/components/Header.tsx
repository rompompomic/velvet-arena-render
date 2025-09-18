import { Button } from "@/components/ui/button";

const Header = () => {
  const mainNavigation = [
    { 
      name: 'Pakalpojumi', 
      href: '/lv/pakalpojumi/',
      hasDropdown: true,
      subItems: [
        { name: 'Visi pakalpojumi', href: '/lv/pakalpojumi/' },
        { name: 'Jāšanas treniņi', href: '/lv/pakalpojumi/jasanas-trenini/' },
        { name: 'Zirgu uzturēšana', href: '/lv/pakalpojumi/zirgu-uzturesana/' },
        { name: 'Laukumu īre', href: '/lv/pakalpojumi/laukumu-ire/' },
        { name: 'Ekskursijas', href: '/lv/pakalpojumi/ekskursijas/' },
        { name: 'Korporatīvie pasākumi', href: '/lv/pakalpojumi/korporativie-pasakumi/' },
        { name: 'Citi pakalpojumi', href: '/lv/pakalpojumi/citi-pakalpojumi/' },
      ]
    },
    { name: 'Pasākumi', href: '/lv/pasakumi/' },
    { name: 'Cenas', href: '/lv/cenas/' },
    { 
      name: 'Galerija', 
      href: '/lv/galerija/',
      hasDropdown: true,
      subItems: [
        { name: 'Visu galerija', href: '/lv/galerija/' },
        { name: 'Pasākumi', href: '/lv/galerija/pasakumi/' },
        { name: 'Jauno jātnieku skola', href: '/lv/galerija/jauno-jatnieku-skola/' },
      ]
    },
    { 
      name: 'Par mums', 
      href: '/lv/par-mums/',
    },
    { name: 'Kontakti', href: '/lv/kontakti/' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200">
      <div className="container mx-auto px-4 max-w-7xl">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-semibold text-primary tracking-tight h-8 flex items-center">
              Latvian Horses
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainNavigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <>
                    <button className="text-foreground hover:text-primary transition-colors duration-200 font-medium flex items-center">
                      {item.name}
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-md border border-neutral-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      {item.subItems?.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-3 text-foreground hover:text-primary hover:bg-light transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Right Side - Contact & Language */}
          <div className="flex items-center space-x-6">
            {/* Contact Info - Stacked */}
            <div className="hidden lg:flex flex-col text-sm text-foreground text-right">
              <span>+371 2X XXX XXX</span>
              <span>info@latvianhorses.lv</span>
            </div>

            {/* Language Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-sm font-bold text-primary px-2 py-1">
                <span>LV</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full right-0 mt-1 w-24 bg-white rounded-lg shadow-md border border-neutral-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <span className="block px-3 py-2 text-sm font-bold text-primary cursor-default">LV</span>
                <a href="#" className="block px-3 py-2 text-sm text-foreground hover:text-primary transition-colors duration-200">EN</a>
                <a href="#" className="block px-3 py-2 text-sm text-foreground hover:text-primary transition-colors duration-200">RU</a>
              </div>
            </div>

            {/* Main Sponsor */}
            <div className="hidden md:flex items-center h-8 text-2xl font-semibold text-muted-foreground">
              Main Sponsor
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-foreground">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;