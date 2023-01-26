import { openai } from "@/lib/OpenAIClient";
import type { NextApiRequest, NextApiResponse } from "next";

// Exporting this type to import it to the component from which we will call it 
export type GPT3EndpointResponse = {
    data: Record<any, any>
}
// Just an example handler
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<GPT3EndpointResponse>
) {
    
    // just to see if it all works
    const response = await openai.listModels()
    const models = await response.data.data
    
    // Just a hello world response
    res.status(200).json({
        data: {models}
    })
}