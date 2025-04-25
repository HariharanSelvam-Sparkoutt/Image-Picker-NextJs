"use client";

import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import localFont from "next/font/local";
import { Button } from "@/components/ui/button";
const inter = Inter({ subsets: ["cyrillic-ext"] });
const myFont = localFont({
  src: "../assets/fonts/PlaywriteAUSA-VariableFont_wght.ttf",
  display: "swap",
});

export default function Home() {
  const router = useRouter();
  return (
    <div className={` flex flex-col items-center justify-center h-screen`}>
      <h1 className={inter.className}>Optimized font text</h1>
      <h1>Optimized font text</h1>
      <Button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => {
          router.push("/imagePicker");
        }}
      >
        Image Picker
      </Button>
      <br />
      <br />
      <h1 className={myFont.className}>My custom font</h1>
      <Button
        className="mt-4"
        onClick={() => {
          router.push("/carousel");
        }}
      >
        Carousel
      </Button>
      <Button className="mt-4" onClick={() => router.push("/flex")}>
        Flex Page
      </Button>
      <Button className="mt-4" onClick={() => router.push("/grid")}>
        Grid Page
      </Button>
    </div>
  );
}
