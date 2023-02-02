import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next"

import { prisma } from "@/prisma/PrismaClient"

// What this endpoint returns
export type LogEndpointResponseType = {
    data?: {
        success: boolean
    },
    error?: {
        message: string
    }
}

// What this endpoint wants to receive in the body 
export type LogEndpointBodyType = {
    time: number,
    userId: string,
    prompt: string,
    response: string,
    status: number,
    functionName: string,
    url: string

}

export const handler: NextApiHandler<LogEndpointResponseType> = async (req: NextApiRequest, res: NextApiResponse<LogEndpointResponseType>) => {
    if (req.method === "POST") {
        try {
            const { time, userId, prompt, response, functionName, status, url }: LogEndpointBodyType = req.body satisfies LogEndpointBodyType
            await prisma.log.create({
                data: {
                    time,
                    userId,
                    // the name of the function, such as "geography" or "linkedin post"
                    functionName,
                    // status number such as 200 
                    status,
                    url,
                    prompt: prompt ?? "No prompt logged",
                    response: response ?? "No response logged"
                }
            })

            res.status(201).json({
                data: {
                    success: true
                }
            })
        }
        catch (err: any) {
            res.status(500).json({
                error: {
                    message: "Something went wrong when creating the generation log."
                }
            })
        }
    } else {
        res.status(401).json({
            error: {
                message: "Wrong method."
            }
        })
    }
}