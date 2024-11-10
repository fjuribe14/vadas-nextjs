import Logo from "./logo";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Instagram, Mail, Phone } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex flex-col">
      <div className="bg-neutral-100 dark:bg-neutral-900">
        <div className="container flex items-center justify-center md:justify-end gap-4 md:gap-8 mx-auto px-4 md:px-6 py-2">
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
            href="https://api.whatsapp.com/send/?phone=584142222464"
            className="flex items-end gap-1 text-xs hover:underline underline-offset-4">
            <Phone size={12} />
            +58 (414) 222 2464
          </a>
        </div>
      </div>
      <header className="container mx-auto h-14 flex items-center gap-4 relative px-4 md:px-6">
        <Link
          className="flex items-center justify-center absolute transform -translate-x-1/2 left-1/2"
          href="/">
          <Logo className="h-8" />
        </Link>

        <div className="ml-auto">
          <ModeToggle />
        </div>
      </header>
    </div>
  );
}
