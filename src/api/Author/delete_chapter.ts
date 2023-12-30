import { NextApiRequest, NextApiResponse } from "next";

import serverAuth from "@/libs/serverAuth";
import prisma from '@/libs/prismadb'

export default async function handler(req:NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'GET'){
        return res.status(405).end
    }
    try{
        const current = await serverAuth(req,res)
        if(current?.role !== "AUTHOR"){
            return res.status(405).end()
        }
        
    }
    
}