"use client";

import {
  Card,
  CardTitle,
  CardFooter,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { toast } from "sonner";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCard, Banknote, Smartphone, CheckCircle } from "lucide-react";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("efectivo");

  const combo = {
    nombre: "Paquete Premium",
    precio: 1999,
    servicios: [
      "Bar móvil premium",
      "Banda en vivo por 3 horas",
      "Fotógrafo y videógrafo",
      "Cabina de fotos 360°",
    ],
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Aquí iría la lógica para procesar el pago
    // console.log("Procesando pago con método:", paymentMethod);
    toast("Su pago se ha realizado con exito y se esta procesando su pedido.", {
      icon: <CheckCircle className="h-4 w-4" />,
      onAutoClose() {
        window.location.href = "/"; // Redirigir a la página de inicio después de 3 segundos
      },
    });
  };

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Finalizar Compra</CardTitle>
            <CardDescription>Revisa tu pedido y selecciona el método de pago</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-4">{combo.nombre}</h3>
                <ul className="list-disc list-inside text-sm text-neutral-400">
                  {combo.servicios.map((servicio, index) => (
                    <li key={index}>{servicio}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Total:</span>
                <span className="text-2xl font-bold">€{combo.precio}</span>
              </div>
              <form onSubmit={handleSubmit}>
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                  className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="efectivo" id="efectivo" />
                    <Label htmlFor="efectivo" className="flex items-center space-x-2">
                      <Banknote className="h-4 w-4" />
                      <span>Efectivo</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="c2p" id="c2p" />
                    <Label htmlFor="c2p" className="flex items-center space-x-2">
                      <Smartphone className="h-4 w-4" />
                      <span>Pago C2P</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="r4" id="r4" />
                    <Label htmlFor="r4" className="flex items-center space-x-2">
                      <CreditCard className="h-4 w-4" />
                      <span>R4 Sencillo</span>
                    </Label>
                  </div>
                </RadioGroup>
                {paymentMethod === "efectivo" && (
                  <div className="mt-4">
                    <Label htmlFor="monto">Monto con el que pagará</Label>
                    <Input
                      type="number"
                      id="monto"
                      placeholder="Ingrese el monto"
                      className="mt-1"
                    />
                  </div>
                )}
                {paymentMethod === "c2p" && (
                  <div className="mt-4">
                    <Label htmlFor="telefono">Número de teléfono</Label>
                    <Input
                      type="tel"
                      id="telefono"
                      placeholder="Ingrese su número de teléfono"
                      className="mt-1"
                    />
                  </div>
                )}
                {paymentMethod === "r4" && (
                  <div className="mt-4 space-y-2">
                    <div>
                      <Label htmlFor="tarjeta">Número de tarjeta</Label>
                      <Input
                        type="text"
                        id="tarjeta"
                        placeholder="1234 5678 9012 3456"
                        className="mt-1"
                      />
                    </div>
                    <div className="flex space-x-2">
                      <div className="flex-1">
                        <Label htmlFor="fecha">Fecha de expiración</Label>
                        <Input type="text" id="fecha" placeholder="MM/AA" className="mt-1" />
                      </div>
                      <div className="flex-1">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input type="text" id="cvv" placeholder="123" className="mt-1" />
                      </div>
                    </div>
                  </div>
                )}
                <Button type="submit" className="w-full mt-6">
                  Pagar ahora
                </Button>
              </form>
            </div>
          </CardContent>
          <CardFooter className="text-sm text-neutral-400">
            Tus datos de pago están seguros y encriptados.
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
