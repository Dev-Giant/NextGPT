import { openai } from "@/lib/OpenAIClient";
import type { NextApiRequest, NextApiResponse } from "next";

// Exporting this type to import it to the component from which we will call it 
export type GPT3EndpointResponse = {
    data: Record<any, any>
}

// Just an example handler
const handler = async ({req, res}: {req: NextApiRequest, res: NextApiResponse<GPT3EndpointResponse>}) => {
    
    // just to see if it all works
    const response = await openai.listModels()
    const models = response.data.data
    
    // Just a hello world response
    res.json({
        data: {models}
    })
}


export default handler;