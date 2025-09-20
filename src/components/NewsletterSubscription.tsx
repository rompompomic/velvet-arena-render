import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Paldies par abonēšanu!",
        description: "Jūs saņemsiet jaunākās ziņas savā e-pastā.",
      });
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Abonējiet mūsu jaunumus
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Saņemiet jaunākās ziņas par sacensībām, treniņiem un pasākumiem tieši savā e-pastā
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Ievadiet savu e-pasta adresi"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 text-base"
                disabled={isLoading}
              />
            </div>
            <Button 
              type="submit" 
              size="lg"
              disabled={isLoading}
              className="h-12 px-8 font-semibold"
            >
              {isLoading ? "Abonē..." : "Abonēt jaunumus"}
            </Button>
          </form>
          
          <p className="text-sm text-muted-foreground mt-4 text-center">
            Mēs respektējam jūsu privātumu un nekad nedalīsimies ar jūsu e-pasta adresi
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscription;