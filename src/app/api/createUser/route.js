import prisma from "@/lib/db.ts"

export async function POST(_,{params}){
  const user = await prisma.user.create({
    data: {
      name: params.name,
      email: params.email
    }
  })
}
