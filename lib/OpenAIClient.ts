import {Configuration, OpenAIApi} from 'openai';

const openAIConfig = new Configuration({
    organization: "org-xh7DiecATgwDaAcHC51hzEkF",
    apiKey: process.env.OPENAI_KEY
})

/**
 * This is the client to use to make responses to OpenAI's GPT-3.
 * ! DO NOT USE IT ON THE CLIENT SIDE!!!
 */
export const openai = new OpenAIApi(openAIConfig);