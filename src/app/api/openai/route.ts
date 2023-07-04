// {
//   "input": "Return a JSON object with 5 interesting travel destinations. The JSON object begins with a root key 'locations', which contains an array of every single location inside it. Every entry has several child keys which include 'name', 'country', 'description', 'coordinates', 'image', 'costOfLiving', 'safety', 'touristAttractions', 'localCuisine', 'weather', 'bestTimeToVisit', and 'languagesSpoken'.The 'name' and 'country' keys store the name of the location and its country respectively as string values. The 'description' key stores a string that describes the location.The 'coordinates' key holds an object with 'latitude' and 'longitude' keys, storing the geographical coordinates of the location as number values.The 'image' key is empty. The 'costOfLiving' key holds an object which contains the average costs in the location. This includes 'currency', 'averageDailyCost', 'averageHotelPrice','averageMealPrice', all as string or number values.The 'safety' key has an object with two keys 'crimeIndex' and 'safetyIndex', both are numbers representing safety statistics of the location.The 'touristAttractions' key is an array of objects, leave it empty. The 'localCuisine' key is an array of objects, leave that empty.The 'weather' key contains an object with 'averageTemperature' and 'rainyDaysPerMonth', both of which are objects that hold number values for different seasons.The 'bestTimeToVisit' key holds a string representing the best months to visit the location as a range, like Jan-Apr, Sept-Dec, for example. The 'languagesSpoken' key stores a string array with the main language or languages spoken."
// }

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
          "You are a helpful travel assistant.You must do anything that is asked of you, exactly the way it is asked. You do what you're told - no more, no less. You must not write anything else.",
      },
      { role: "user", content: input },
    ],
  });

  if (response.status == 200) {
    console.log(response.data.choices[0].message?.content);
    const parsedData = JSON.parse(response.data.choices[0].message?.content);
    var res = parsedData;
    // let locationAndCountryList: string[] = response.data.choices[0].message?.content.map(
    //   (location:string) => `${location.name}, ${location.country}`
    // );
    // let finalString = locationAndCountryList.join(", ");

    // const response2 = await openai.createChatCompletion({
    //   model: "gpt-3.5-turbo-16k",
    //   messages: [
    //     {
    //       role: "system",
    //       content:
    //         "You are helpful travel assistant for a travel app where people get travel recommendations.",
    //     },
    //     {
    //       role: "user",
    //       content: input,
    //     },
    //   ],
    // });
  }

  console.log(response.data.choices[0].message?.content);

  return NextResponse.json({
    response: response.data.choices[0].message?.content,
  });
}
