import { NextApiRequest, NextApiResponse } from "next";

import prisma from '@/libs/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  try {
    const { nameUser } = req.query;

    if (!nameUser || typeof nameUser !== 'string') {
      throw new Error('Invalid ID');
    }

    const User = await prisma.user.findMany({
        where:{
            OR: [
                {name: {contains: nameUser,mode: 'insensitive'}},
                {email: {contains: nameUser,mode: 'insensitive'}},
            ]
        },
        orderBy: {
            createdAt: 'desc',
          },
    });

    return res.status(200).json(User);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
};