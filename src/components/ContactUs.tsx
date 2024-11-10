import { Instagram, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";

export default function ContactUs() {
  return (
    <section id="contacto" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-[700px] text-center space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Listo para tu evento ?
          </h2>
          <p className="text-neutral-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Contáctanos hoy para empezar a planificar tu evento perfecto.
          </p>
          <div className="flex items-center justify-center gap-4 md:gap-8">
            <a target="_blank" href="https://www.instagram.com/vadaspro">
              <Button>
                <Instagram size={12} />
                @vadaspro
              </Button>
            </a>
            <a href="mailto:vadaspro2024@gmail.com">
              <Button>
                <Mail size={12} />
                vadaspro2024@gmail.com
              </Button>
            </a>
            <a target="_blank" href="https://api.whatsapp.com/send/?phone=584142222464">
              <Button>
                <Phone />
                +58 (414) 222 2464
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
