import winterImage from "@/assets/winter-equestrian.jpg";
import eventImage from "@/assets/event-showjumping.jpg";
const NewsSection = () => {
  const news = [{
    title: "Ziemas sezona: zirgu sagatavošana aukstumam",
    excerpt: "Stāstām par to, kā pareizi sagatavot zirgus ziemas periodam un nodrošināt tiem komfortablus turēšanas apstākļus.",
    image: winterImage,
    date: "15. septembris 2025",
    href: "/lv/jaunumi/winter-preparation"
  }, {
    title: "Mūsu audzēkņu panākumi sacensībās",
    excerpt: "Apsveicam mūsu audzēkņus ar lieliskajiem rezultātiem nesenajās konkūra un dresūras sacensībās.",
    image: eventImage,
    date: "10. septembris 2025",
    href: "/lv/jaunumi/student-success"
  }, {
    title: "Jaunas programmas bērniem no 4 gadiem",
    excerpt: "Speciāli izstrādātas programmas vismazākajiem zirgu mīļotājiem, ņemot vērā vecuma īpatnības.",
    image: winterImage,
    date: "5. septembris 2025",
    href: "/lv/jaunumi/kids-programs"
  }];
  return <section className="py-24 bg-[#2f2f2f]/[0.08]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-section mb-4">Jaunumi un raksti</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sekojiet līdzi jaunākajām ziņām no jāšanas sporta pasaules
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article, index) => <article key={index} className="bg-white rounded-2xl overflow-hidden hover-lift group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover image-duotone group-hover:scale-105 transition-all duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-sm text-muted-foreground mb-3 font-medium">
                  {article.date}
                </div>
                
                <h3 className="text-xl font-semibold mb-3 leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                <a href={article.href} className="inline-flex items-center text-primary font-medium group-hover:text-primary-700 transition-all duration-300">
                  Lasīt
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>)}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a href="/lv/jaunumi/" className="inline-flex items-center btn-outline-velvet hover:bg-primary-50">
            Visi jaunumi
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>;
};
export default NewsSection;