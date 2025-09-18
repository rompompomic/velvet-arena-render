const Footer = () => {
  const quickLinks = [{
    name: 'Pakalpojumi',
    href: '/lv/pakalpojumi/'
  }, {
    name: 'Pasākumi',
    href: '/lv/pasakumi/'
  }, {
    name: 'Cenas',
    href: '/lv/cenas/'
  }, {
    name: 'Galerija',
    href: '/lv/galerija/'
  }, {
    name: 'Par mums',
    href: '/lv/par-mums/'
  }, {
    name: 'Kontakti',
    href: '/lv/kontakti/'
  }];
  const legalLinks = [{
    name: 'Privātuma politika',
    href: '/lv/privatuma-politika/'
  }, {
    name: 'Lietošanas noteikumi',
    href: '/lv/noteikumi/'
  }, {
    name: 'Drošības noteikumi',
    href: '/lv/drosibu-noteikumi/'
  }];
  return <footer className="bg-text text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main Footer Content */}
        <div className="py-16">
          {/* На lg всегда 4 колонки в ряд */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* 1) Company Info */}
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-4 whitespace-nowrap">Latvian Horses</h3>
                <p className="text-white/80 leading-relaxed max-w-md">
                  Vieta, kur cilvēki satiekas ar zirgiem. Profesionālas apmācības,
                  pasākumi un atpūta harmonijā ar dabu.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L6.16 10.928c-.67.359-1.006 1.121-.839 1.876.147.667.505 1.297 1.068 1.86s1.193.92 1.86 1.068c.755.167 1.517-.169 1.876-.839l1.541-4.064a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-white/90">+37128677177</span>
                </div>

                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-white/90">info@latvianhorses.lv</span>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-primary-50 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-white/90">
                    Inčukalns, Latvija<br />
                    Piemēra iela 123
                  </span>
                </div>
              </div>
            </div>

            {/* 2) Ātrās saites */}
            <div className="min-w-0">
              <h4 className="text-lg font-semibold mb-6 whitespace-nowrap">Ātrās saites</h4>
              <nav className="space-y-3">
                {quickLinks.map(link => <a key={link.name} href={link.href} className="block text-white/80 hover:text-white transition-colors duration-300">
                    {link.name}
                  </a>)}
              </nav>
            </div>

            {/* 3) Juridiskā informācija */}
            <div className="min-w-0">
              <h4 className="text-lg font-semibold mb-6 whitespace-nowrap">Juridiskā informācija</h4>
              <nav className="space-y-3">
                {legalLinks.map(link => <a key={link.name} href={link.href} className="block text-white/80 hover:text-white transition-colors duration-300">
                    {link.name}
                  </a>)}
              </nav>
            </div>

            {/* 4) Dāvanu kartes */}
            <div className="min-w-0">
              <h4 className="text-lg font-semibold mb-6 whitespace-nowrap">Dāvanu kartes</h4>
              <a href="/lv/davanu-kartes/" className="inline-block px-4 py-2 bg-primary rounded-lg text-white hover:bg-primary-700 transition-colors duration-300 text-center font-medium whitespace-nowrap">
                Pirkt karti
              </a>
              <p className="text-sm text-white/70 mt-2">
                Derīga 12 mēnešus • Elektroniska piegāde
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              © 2025 Latvian Horses. Visas tiesības aizsargātas.
            </p>

            <div className="flex items-center gap-6">
              {/* Socials: Facebook, X, Instagram, TikTok */}
              <a href="#" className="text-white/70 hover:text-white transition-all duration-300" aria-label="Facebook">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-all duration-300" aria-label="X">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-all duration-300" aria-label="Instagram">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.017 0C8.396 0 7.989.013 7.041.072 6.094.131 5.45.278 4.898.525c-.577.254-1.067.594-1.556 1.083-.488.489-.829.979-1.083 1.556-.247.552-.394 1.196-.453 2.143C.013 6.255 0 6.662 0 10.283v3.434c0 3.621.013 4.028.072 4.976.059.947.206 1.591.453 2.143.254.577.594 1.067 1.083 1.556.489.488.979.829 1.556 1.083.552.247 1.196.394 2.143.453.948.059 1.355.072 4.976.072h3.434c3.621 0 4.028-.013 4.976-.072.947-.059 1.591-.206 2.143-.453.577-.254 1.067-.594 1.556-1.083.488-.489.829-.979 1.083-1.556.247-.552.394-1.196.453-2.143.059-.948.072-1.355.072-4.976V10.283c0-3.621-.013-4.028-.072-4.976-.059-.947-.206-1.591-.453-2.143-.254-.577-.594-1.067-1.083-1.556-.489-.488-.979-.829-1.556-1.083-.552-.247-1.196-.394-2.143-.453C16.045.013 15.638 0 12.017 0z" />
                  <circle cx="12.017" cy="12.017" r="3.13" />
                  <circle cx="18.408" cy="5.608" r="1.048" />
                </svg>
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-all duration-300" aria-label="TikTok">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02 0 1.84-.11 3.69.07 5.52.73 2.24 3.23 3.29 5.52 3.39V9.8c-1.57.07-3.23-.15-4.61-.88-1.19-.65-2.07-1.64-2.55-2.85-.07-.16-.08-.33-.13-.49-.01-1.89 0-3.78 0-5.66zM8.56 9.8c1.15-.11 2.32-.02 3.46.14.59.09 1.19.27 1.66.64.76.58 1.27 1.44 1.43 2.37.13.7.06 1.42-.1 2.11-.42 1.64-1.97 2.82-3.67 2.78-1.36.01-2.74-.73-3.52-1.86-.77-1.07-.82-2.55-.26-3.71.53-1.08 1.51-1.91 2.67-2.08 0-.81 0-1.62 0-2.43-2.93.02-5.75 2.07-6.96 4.85-.91 2.11-.79 4.58.37 6.58 1.18 2.11 3.35 3.51 5.67 3.93 2.21.42 4.55-.08 6.31-1.41 1.97-1.46 3.15-3.83 3.15-6.3V4.81c1.39.85 3.07 1.24 4.71 1.33V.02h-9.3z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;