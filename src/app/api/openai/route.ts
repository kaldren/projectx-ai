import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";
import { NextResponse } from "next/server";

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  const { input } = await req.json();
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: input,
    temperature: 1,
    max_tokens: 3000,
  });
  // Convert the response into a friendly text-stream
  console.log(response.data.choices[0].text);
  return NextResponse.json({ response: response.data.choices[0].text });
}
