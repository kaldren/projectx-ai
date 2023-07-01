import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";
import { NextResponse } from "next/server";

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  const { input } = await req.json();
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo-16k",
    messages: [
      {
        role: "system",
        content:
          "You are helpful travel assistant for a travel app where people get travel recommendations.",
      },
      {
        role: "user",
        content: input,
      },
    ],
  });
  console.log(response.data.choices[0].message?.content);

  return NextResponse.json({
    response: response.data.choices[0].message?.content,
  });
}
