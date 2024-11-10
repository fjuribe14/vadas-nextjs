import { StaticImageData } from "next/image";

export type ServicesType = {
  id?: number;
  image: string | StaticImageData;
  link?: string;
  title: string;
  subtitle?: string;
  description: string;
  imageClass?: string;
};
