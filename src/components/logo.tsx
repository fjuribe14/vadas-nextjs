"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  const { theme } = useTheme();

  const [src, setSrc] = useState("");

  useEffect(() => {
    if (theme === "dark") {
      setSrc("logo_dark.webp");
    } else {
      setSrc("logo_light.webp");
    }
  }, [theme]);

  return (
    <Image
      alt={src}
      width={500}
      height={500}
      src={`/${src}`}
      className={cn("object-contain w-full h-full aspect-video", className)}
    />
  );
}
