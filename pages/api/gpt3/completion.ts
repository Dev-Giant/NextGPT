import { openai } from "@/lib/OpenAIClient";
import type { NextApiRequest, NextApiResponse } from "next";
import type { CreateCompletionResponseChoicesInner } from "openai";

// Exporting this type to import it to the component from which we will call it 
export type GPT3TextCompletionEndpointResponse = {
    data?: {
        text: CreateCompletionResponseChoicesInner
    },
    error?: { message: string }
}

type TextCompletionReqBody = {
    model: string,
    prompt: string,
    topP?: string,
    bestOf?: string,
    freqPenalty?: string,
    maxTokens?: string,
    presencePenalty?: string
}

/**
 * Represent api to get generated post from specific prompt
 * @param req - parameters to get openAI completion
 * @param res - openAI response
 */

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<GPT3TextCompletionEndpointResponse>
) {

    // checking if the request is a post request because otherwise we don't want to process the request
    if (req.method === "POST") {
        try {
            const { model, prompt, topP, bestOf, freqPenalty, maxTokens, presencePenalty }: TextCompletionReqBody = req.body
            const response = await openai.createCompletion({
                prompt,
                model,
                top_p: Number.parseFloat(topP ?? "0.7"),
                best_of: Number.parseInt(bestOf ?? "1"),
                frequency_penalty: Number.parseFloat(freqPenalty ?? "1"),
                max_tokens: Number.parseFloat(maxTokens ?? "500"),
                presence_penalty: Number.parseFloat(presencePenalty ?? "1")
            })

            // it will always be the first element in the choices array. Not sure why they made it this way
            const text = await response.data.choices[0];

            res.status(200).json({
                data: { text }
            })
        } catch (err: any) {
            res.status(500).json({
                error: {
                    message: `Something went wrong on our end\n${err.message}`
                }
            })
        }

    }
    res.status(401).json({
        error: { message: "Wrong request type" }
    })

}