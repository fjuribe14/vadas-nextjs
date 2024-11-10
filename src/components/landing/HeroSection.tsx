import Logo from "@/components/logo";

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter flex flex-col md:flex-row justify-center gap-4 sm:text-4xl md:text-5xl lg:text-6xl/none">
              Realza tu evento con <Logo className="h-9 w-auto mt-auto md:h-10 lg:h-12" />
            </h1>
            <p className="mx-auto max-w-[700px] text-neutral-400 md:text-xl font-body">
              Desde barras móviles hasta música en vivo, te ofrecemos todo lo que necesitas para que
              tu evento sea inolvidable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
