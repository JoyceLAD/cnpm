import { NextApiRequest, NextApiResponse } from "next";

import serverAuth from "@/libs/serverAuth";
import prisma from '@/libs/prismadb'

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    if(req.method !== 'POST'){
        return res.status(405).end()
    }
    try{
        const current = await serverAuth(req,res)
        if(current?.role !== "AUTHOR"){
            return res.status(405).end()
        }
        const {title, desc, NumberChapter,image}  = req.body;
        const authorId = current.currentUser.id
        const comics = await prisma.comic.create({
            data:{
                title,
                desc,
                NumberChapter,
                image,
                authorId
            }
        })
        return res.status(200).json(comics)
    }catch(error){
        console.log(error)
        return res.status(400).end()
    }
}