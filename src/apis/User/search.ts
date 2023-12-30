import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prismadb"

export default async function handler(req: NextApiRequest, res:NextApiResponse) {
    if(req.method !== 'GET'){
        return res.status(405).end()
    }
    try{
        const {comicId} = req.query;
        if(!comicId || typeof comicId !== 'string'){
            throw new Error('Invaid ID')
        }

        const comics = await prisma.comic.findMany({
            where:{
                id: comicId
            },
            select:{
                title:true,
                image:true,
                NumberChapter:true,
                desc:true
            }
        })
        return res.status(200).json(comics)
    }catch (error){
        console.log(error)
        return res.status(400).end()
    }
}