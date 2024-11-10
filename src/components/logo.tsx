"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Logo({ className }: { className?: string }) {
  const { theme } = useTheme();

  const [src, setSrc] = useState("");

  useEffect(() => {
    if (theme === "light") {
      setSrc("logo_light.webp");
    } else {
      setSrc("logo_dark.webp");
    }
  }, [theme]);

  return (
    src && (
      <Image
        alt={src}
        width={500}
        height={500}
        src={`/${src}`}
        className={cn("object-contain w-full h-full aspect-video", className)}
      />
    )
  );
}
