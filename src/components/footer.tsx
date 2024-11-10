import { Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t dark:border-neutral-800">
      <p className="text-xs text-neutral-500">
        © {new Date().getFullYear()} Vadas Producciones C.A. Todos los derechos reservados.
        J504453056
      </p>

      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <a
          target="_blank"
          href="https://www.instagram.com/vadaspro"
          className="flex items-end gap-1 text-xs hover:underline underline-offset-4">
          <Instagram size={12} />
          @vadaspro
        </a>
        <a
          href="mailto:vadaspro2024@gmail.com"
          className="flex items-end gap-1 text-xs hover:underline underline-offset-4">
          <Mail size={12} />
          vadaspro2024@gmail.com
        </a>
        <a
          target="_blank"
          className="text-xs hover:underline underline-offset-4"
          href="https://api.whatsapp.com/send/?phone=584142222464">
          +58 (414) 222 2464
        </a>
      </nav>
    </footer>
  );
}
// CONTACTO
//  Carlos Varela
//  0414-2222464
//  @vadaspro
//  vadaspro2024@gmail.com
