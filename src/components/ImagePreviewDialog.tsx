import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogDescription,
} from "./ui/dialog";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";

export default function ImagePreviewDialog({
  children,
  item,
}: {
  children: React.ReactNode;
  item: number;
}) {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Evento Nro. {item}</DialogTitle>
          <DialogDescription>Vadas Producciones C.A.</DialogDescription>
        </DialogHeader>

        <Image
          priority
          width={1000}
          height={1000}
          className="object-cover w-full h-full rounded-xl"
          alt={`event_${item}.webp`}
          src={`/event_${item}.webp`}
        />

        <DialogDescription className="flex items-center gap-8">
          <p className="flex items-center text-xs font-body gap-2">
            <MapPin size={12} />
            <span>Parque Central</span>
          </p>
          <p className="flex items-center text-xs font-body gap-2">
            <Calendar size={12} />
            <span>Julio 15, 2023</span>
          </p>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
