import {
  Carousel as UICarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Carousel,
} from "@/components/ui/carousel";
import Sample1 from "../../assets/images/Sample1.jpeg";
import Sample2 from "../../assets/images/Sample2.jpeg";
import Sample3 from "../../assets/images/Sample3.jpeg";
import Sample4 from "../../assets/images/Sample4.jpeg";
import Sample5 from "../../assets/images/Sample5.jpeg";
import Sample6 from "../../assets/images/Sample5.jpeg";
import Sample7 from "../../assets/images/Sample7.jpeg";
import Sample8 from "../../assets/images/Sample8.jpeg";
import Sample9 from "../../assets/images/Sample9.jpeg";
import Sample10 from "../../assets/images/Sample10.jpeg";
import Image from "next/image";

export default function CarouselPage() {
  const imgAry = [
    Sample1,
    Sample2,
    Sample3,
    Sample4,
    Sample5,
    Sample6,
    Sample7,
    Sample8,
    Sample9,
    Sample10,
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">Image Carousel</h1>

      <div className="relative w-full max-w-4xl h-96 bg-gray-200 rounded-lg overflow-hidden">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full h-full"
        >
          <CarouselContent>
            {imgAry.map((imgSrc, index) => (
              <CarouselItem key={index} className="pl-4">
                <div className="relative w-full h-96 rounded-lg overflow-hidden">
                  <Image
                    src={imgSrc}
                    alt={`Sample ${index + 1}`}
                    fill
                    className="object-contain rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
        </Carousel>
      </div>
    </div>
  );
}
