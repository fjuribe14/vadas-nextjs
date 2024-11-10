import Image from "next/image";
import {
  Carousel,
  CarouselItem,
  CarouselNext,
  CarouselContent,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "../ui/card";
import ImagePreviewDialog from "../ImagePreviewDialog";

export default function EventsCarousel() {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <Carousel opts={{ loop: true }} className="w-full mb-24" orientation="horizontal">
        <CarouselContent className="-ml-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <ImagePreviewDialog key={index} item={index + 1}>
              <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/4">
                <div className="p-1">
                  <Card className="overflow-hidden">
                    <Image
                      priority
                      width={1000}
                      height={1000}
                      className="object-cover w-full h-full"
                      alt={`event_${index + 1}.webp`}
                      src={`/event_${index + 1}.webp`}
                    />
                  </Card>
                </div>
              </CarouselItem>
            </ImagePreviewDialog>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
}
