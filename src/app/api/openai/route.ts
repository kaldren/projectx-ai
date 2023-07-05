// {
//   "input": "Return a JSON object with 5 interesting travel destinations. The JSON object begins with a root key 'locations', which contains an array of every single location inside it. Every entry has several child keys which include 'name', 'country', 'description', 'coordinates', 'image', 'costOfLiving', 'safety', 'touristAttractions', 'localCuisine', 'weather', 'bestTimeToVisit', and 'languagesSpoken'.The 'name' and 'country' keys store the name of the location and its country respectively as string values. The 'description' key stores a string that describes the location.The 'coordinates' key holds an object with 'latitude' and 'longitude' keys, storing the geographical coordinates of the location as number values.The 'image' key is empty. The 'costOfLiving' key holds an object which contains the average costs in the location. This includes 'currency', 'averageDailyCostUSD', 'averageHotelPriceUSD','averageMealPriceUSD', all as string or number values.The 'safety' key has an object with two keys 'crimeIndex' and 'safetyIndex', both are numbers representing safety statistics of the location.The 'touristAttractions' key is an array of objects with top 10 of the best attractions for each place. The 'localCuisine' key is an array of objects with top 10 of local cuisines.The 'weather' key contains an object with 'averageTemperature' and 'rainyDaysPerMonth', both of which are objects that hold number values for different seasons.The 'bestTimeToVisit' key holds a string representing the best months to visit the location as a range, like Jan-Apr, Sept-Dec, for example. The 'officialLanguagesSpoken' key stores a string array with the all the official languages spoken."
// }


//TODO: USE  curl https://api.unsplash.com/search/photos?query=wanderlust API for images

import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";
import { NextResponse } from "next/server";

import OpenAIService from '../../openai-service';

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  const { input } = await req.json();
  let locationsResponse: LocationsResponse;
  let openAiService = new OpenAIService();

  locationsResponse = await openAiService.createChatCompletion(input, 16000);

  // const response = await openai.createChatCompletion({
  //   model: "gpt-3.5-turbo-16k",
  //   messages: [
  //     {
  //       role: "system",
  //       content:
  //         "You are a helpful travel assistant.You must do anything that is asked of you, exactly the way it is asked. You do what you're told - no more, no less. You must not write anything else.",
  //     },
  //     { role: "user", content: input },
  //   ],
  // });

  if (locationsResponse != null) {

    return NextResponse.json({
      response: locationsResponse,
    });

  }

  return NextResponse.json({
    response: []
  });
}
