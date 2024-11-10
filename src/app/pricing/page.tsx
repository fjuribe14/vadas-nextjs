import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Check, GlassWater, Music, Camera, Clapperboard, Speaker, Users } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-neutral-100 dark:bg-neutral-900">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            Nuestros Combos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {combos.map((combo, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{combo.nombre}</CardTitle>
                  <CardDescription>{combo.descripcion}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    {combo.servicios.map((servicio, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        {servicio}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-col items-start">
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold">{combo.precio}</span>
                    <span className="ml-1 text-gray-500">/evento</span>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href="/checkout">Seleccionar Paquete</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export const combos = [
  {
    nombre: "Paquete Básico",
    precio: "$999",
    descripcion: "Perfecto para eventos pequeños",
    servicios: ["Bar móvil", "DJ por 4 horas", "Fotógrafo"],
    iconos: [GlassWater, Music, Camera],
  },
  {
    nombre: "Paquete Premium",
    precio: "$1999",
    descripcion: "Ideal para eventos medianos",
    servicios: [
      "Bar móvil premium",
      "Banda en vivo por 3 horas",
      "Fotógrafo y videógrafo",
      "Cabina de fotos 360°",
    ],
    iconos: [GlassWater, Music, Camera, Clapperboard],
  },
  {
    nombre: "Paquete Todo Incluido",
    precio: "$3999",
    descripcion: "La experiencia completa para grandes eventos",
    servicios: [
      "Bar móvil premium",
      "Banda en vivo y DJ",
      "Fotógrafo y videógrafo",
      "Cabina de fotos 360°",
      "Sonido e iluminación profesional",
      "Personal de servicio",
    ],
    iconos: [GlassWater, Music, Camera, Clapperboard, Speaker, Users],
  },
];
