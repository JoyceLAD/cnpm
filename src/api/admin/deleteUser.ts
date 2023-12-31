import { NextApiRequest, NextApiResponse } from "next";

import prisma from '@/libs/prismadb';

export default async function handler(req:NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'DELETE'){
        return res.status(405).end()
    }

    try{
        const {uid} = req.query

        if (!uid || typeof uid !== 'string') {
            throw new Error('Invalid ID');
          }
        await prisma.user.delete({
            where:{
                id: uid
            }
        })
        return res.status(200)
    }catch (error) {
        console.log(error);
        return res.status(400).end();
      }
    
}