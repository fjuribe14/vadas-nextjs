import Image from "next/image";
import { cn } from "@/lib/utils";
import Logo from "@/components/Logo";
import { ServicesType } from "@/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServicesList() {
  return (
    <>
      <div className="py-20">
        <h1 className="text-3xl font-bold tracking-tighter flex justify-center gap-4 sm:text-4xl md:text-5xl lg:text-6xl/none">
          Servicios
        </h1>
      </div>
      {ServicesArr.map((item, index) => (
        <div key={item.id}>
          <section className="w-full lg:h-[80vh] grid grid-cols-1 md:grid-cols-5 relative">
            <Image
              priority
              width={2000}
              height={2000}
              placeholder="blur"
              alt={`service_${index + 1}.webp`}
              src={`/service_${index + 1}.webp`}
              className={cn([
                "absolute hidden md:block w-full h-full inset-0 -z-10",
                item.imageClass,
              ])}
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII="
            />

            <div
              className={cn([
                index % 2 !== 0 ? "lg:col-start-4" : "lg:col-start-1",
                "relative overflow-hidden bg-neutral-100 dark:bg-neutral-900 md:col-span-3 lg:col-span-2 p-12 flex flex-col gap-8",
              ])}>
              <h1 className="text-3xl font-bold">{item.title}</h1>
              <h2 className="text-xl font-light text-neutral-400">{item.subtitle}</h2>
              <p
                className="text-neutral-400 font-body"
                dangerouslySetInnerHTML={{ __html: item.description }}></p>
              <Button className="self-start" asChild>
                <Link href="/pricing">Precios</Link>
              </Button>

              <Logo className="absolute select-none w-[20%] h-auto transform bottom-12 right-12 -rotate-[25deg] opacity-20 z-[1]" />
            </div>
          </section>

          <div className="hidden md:block h-32 bg-gradient-to-b from-neutral-100 dark:from-neutral-900"></div>
        </div>
      ))}
    </>
  );
}

export const ServicesArr: ServicesType[] = [
  {
    id: 1,
    title: "Barra móvil",
    image: "service_1.webp",
    imageClass: "object-cover object-center",
    subtitle: "VADAS BAR & JUICES",
    description: `Barra adaptable para todo tipo de eventos, sean privados o públicos. Contamos con la mejor selección de licores para la creación de cócteles clásicos y contemporáneos, además de un equipo de bartenders profesionales, avalado por la Asociación de Bartenders de Venezuela.`,
  },
  {
    id: 2,
    title: "Música en vivo",
    image: "service_2.webp",
    imageClass: "lg:w-[70%] object-cover object-top",
    subtitle: "VADAS MUSIC & ENTERTAINMENT",
    description: `Algo que nos destaca, es nuestro amplio catálogo de artistas y presentaciones musicales. Contamos con músicos, DJs, cantantes, animadores, orquestas y agrupaciones de cualquier tipo de música que se adapte a tu celebración.`,
  },
  {
    id: 3,
    title: "Fotografía y video",
    image: "service_3.webp",
    imageClass: "object-cover object-center",
    subtitle: "VADAS STUDIO",
    description: `¿Cobertura de eventos? ¡También lo tenemos! Contamos con equipos de fotografía, video e iluminación, ideales para capturar tus mejores momentos y dejar grabados los recuerdos.<br/><br/>Contáctanos para sesiones de estudio, generación de contenido, y cualquier otro material audiovisual que necesites`,
  },
  {
    id: 4,
    title: "360° Photobooth",
    image: "service_4.webp",
    imageClass: "lg:w-[70%] md:object-cover object-left",
    subtitle: "VADAS DECORATION",
    description: `Desde hace algunos años, los photobooths 360° han tomado el protagonismo en distintos eventos.<br/><br/>En VADAS te ofrecemos este servicio tan en tendencia. Ideal para: bodas, cumpleaños, activaciones de marca, eventos privados y corporativos.<br/><br/>Dinos cuándo lo necesitas y ahí estaremos.`,
  },
  {
    id: 5,
    title: "Sonido, iluminación y pantallas",
    image: "service_4.webp",
    imageClass: "object-cover object-right",
    subtitle: "VADAS STUDIO",
    description: `Equipo de sonido profesional, micrófonos, cornetas e instrumentos.<br /><br /> Equipo de luces, cámaras profesionales y photobooth 360°.<br /><br />Pantallas led, portátiles y proyectores de escenarios.`,
  },
  {
    id: 6,
    title: "Transporte",
    image: "service_4.webp",
    imageClass: "lg:w-[70%] object-cover object-left",
    subtitle: "VADAS VANS",
    description: `Planifica tu evento y olvídate de la preocupación de cómo trasladarte. Nosotros nos encargamos hasta de la propina del parquero. <br /><br />Contamos con servicio de transporte de carga y de personal en modernas unidades para máximo confort y seguridad.`,
  },
  {
    id: 7,
    title: "Servicio de asistencia",
    image: "service_4.webp",
    imageClass: "object-cover object-center",
    subtitle: "VADAS MISELLANEOUS",
    description: `Contamos con meseros, bartenders, sommeliers y personal de servicio para distintas áreas. <br /><br />No deje de preguntar por el equipo de protocolo VADAS, quienes con su excelente disposición marcarán la pauta en cualquier evento.`,
  },
];
