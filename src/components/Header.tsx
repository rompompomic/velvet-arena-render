import { Button } from "@/components/ui/button";

const Header = () => {
  const navigation = [
    { name: 'Pakalpojumi', href: '/lv/pakalpojumi/' },
    { name: 'Pasākumi', href: '/lv/pasakumi/' },
    { name: 'Cenas', href: '/lv/cenas/' },
    { name: 'Galerija', href: '/lv/galerija/' },
    { name: 'Par mums', href: '/lv/par-mums/' },
    { name: 'Kontakti', href: '/lv/kontakti/' },
  ];

  const languages = [
    { code: 'LV', name: 'Latviešu', active: true },
    { code: 'EN', name: 'English' },
    { code: 'RU', name: 'Русский' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-semibold text-primary tracking-tight">
              Latvian Horses
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Language Switch & CTA */}
          <div className="flex items-center space-x-4">
            {/* Language Switch */}
            <div className="hidden sm:flex items-center space-x-2 text-sm">
              {languages.map((lang, index) => (
                <div key={lang.code} className="flex items-center">
                  {lang.active ? (
                    <span className="px-2 py-1 rounded font-bold text-primary">
                      {lang.code}
                    </span>
                  ) : (
                    <a
                      href="#"
                      className="px-2 py-1 rounded transition-colors duration-300 text-muted-foreground hover:text-primary"
                    >
                      {lang.code}
                    </a>
                  )}
                  {index < languages.length - 1 && (
                    <span className="text-muted-foreground mx-1">/</span>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button className="btn-velvet hidden sm:inline-flex">
              Pirkt dāvanu karti
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-foreground">
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