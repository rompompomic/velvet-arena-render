import { Button } from "@/components/ui/button";

const DonateSection = () => {
  return (
    <section className="py-12 bg-neutral-50">
      <div className="max-w-2xl mx-auto text-center px-4">
        <h2 className="text-2xl font-bold text-neutral-900">
          Atbalsti mūsu zirgu klubu
        </h2>
        <p className="mt-3 text-neutral-600">
          Ja vēlies palīdzēt mums rūpēties par zirgiem un turpināt attīstīt nodarbības bērniem un pieaugušajiem, 
          vari sniegt savu atbalstu ar ziedojumu.
        </p>
        <div className="mt-6">
          <Button
            asChild
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 h-11 rounded-lg shadow-md transition-all"
          >
            <a
              href="https://www.paypal.com/donate"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ziedot
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
