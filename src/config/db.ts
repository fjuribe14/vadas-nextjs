import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;

// To use prisma in your Next.js app
//
// e.g. in `pages/index.tsx`
// import prisma from './db'
//
// export const getServerSideProps = async () => {
//   const posts = await prisma.post.findMany()
//
//   return { props: { posts } }
// }
