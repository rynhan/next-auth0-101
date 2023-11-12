import { getSession, getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

import { OpenAIStream, StreamingTextResponse } from 'ai'
import { NextResponse } from 'next/server';
import OpenAI from "openai"; // "openai": "^4.17.4"

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
 


export const POST = withApiAuthRequired(async function chat(req) {
    try {
  
       // Extract the `messages` from the body of the request
       const { messages } = await req.json()
       
       // Ask OpenAI for a streaming chat completion given the prompt
       const response =  await openai.chat.completions.create({
           model: 'gpt-4-1106-preview',
        //    model: 'gpt-3.5-turbo-16k-0613',
           stream: true,
           messages: messages,
           temperature: 0.24,
           max_tokens: 360,
       })
       // Convert the response into a friendly text-stream
       const stream = OpenAIStream(response)
       // Respond with the stream
       return new StreamingTextResponse(stream)
  
    } catch (error) {
        return NextResponse.json({messages: "ERROR", error}) 
    }
});

export const GET = withApiAuthRequired(async function user() {
    try {
        const { user } = await getSession()
        console.log(user);
        return NextResponse.json(user)
    } catch (error) {
        return NextResponse.json({messages: "ERROR", error}) 
        
    }
})