// {
//   "input": "Return a JSON object with 2 interesting travel destinations. The JSON object begins with a root key 'locations', which contains an array of every single location inside it. Every entry has several child keys which include 'name', 'country', 'description', 'coordinates', 'image', 'costOfLiving', 'safety', 'touristAttractions', 'localCuisine', 'weather', 'bestTimeToVisit', and 'languagesSpoken'.The 'name' and 'country' keys store the name of the location and its country respectively as string values. The 'description' key stores a string that describes the location.The 'coordinates' key holds an object with 'latitude' and 'longitude' keys, storing the geographical coordinates of the location as number values.The 'image' key is empty. The 'costOfLiving' key holds an object which contains the average costs in the location. This includes 'currency', 'averageDailyCostUSD', 'averageHotelPriceUSD','averageMealPriceUSD', all as string or number values.The 'safety' key has an object with two keys 'crimeIndex' and 'safetyIndex', both are numbers representing safety statistics of the location.The 'touristAttractions' key is an array of objects with 'name' and 'description' of the top 10 of the best attractions for each place. The description should be short but thorough. The 'localCuisine' key is an array of objects with 'name' and 'description' of the top 10 of local cuisines. The 'weather' key contains an object with 'averageTemperature' and 'rainyDaysPerMonth', both of which are objects that hold number values for different seasons.The 'bestTimeToVisit' key holds a string representing the best months to visit the location as a range, like Jan-Apr, Sept-Dec, for example. The 'officialLanguagesSpoken' key stores a string array with the all the official languages spoken."
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
const input = "Return a JSON object with 2 interesting travel destinations. The JSON object begins with a root key 'locations', which contains an array of every single location inside it. Every entry has several child keys which include 'name', 'country', 'description', 'coordinates', 'image', 'costOfLiving', 'safety', 'touristAttractions', 'localCuisine', 'weather', 'bestTimeToVisit', and 'languagesSpoken'.The 'name' and 'country' keys store the name of the location and its country respectively as string values. The 'description' key stores a string that describes the location.The 'coordinates' key holds an object with 'latitude' and 'longitude' keys, storing the geographical coordinates of the location as number values.The 'image' key is empty. The 'costOfLiving' key holds an object which contains the average costs in the location. This includes 'currency', 'averageDailyCostUSD', 'averageHotelPriceUSD','averageMealPriceUSD', all as string or number values.The 'safety' key has an object with two keys 'crimeIndex' and 'safetyIndex', both are numbers representing safety statistics of the location.The 'touristAttractions' key is an array of objects with 'name' and 'description' of the top 10 of the best attractions for each place. The description should be short but thorough. The 'localCuisine' key is an array of objects with 'name' and 'description' of the top 10 of local cuisines. The 'weather' key contains an object with 'averageTemperature' and 'rainyDaysPerMonth', both of which are objects that hold number values for different seasons.The 'bestTimeToVisit' key holds a string representing the best months to visit the location as a range, like Jan-Apr, Sept-Dec, for example. The 'officialLanguagesSpoken' key stores a string array with the all the official languages spoken.";

export async function GET() {
  let locationsResponse: LocationsResponse;
  let openAiService = new OpenAIService();

  locationsResponse = await openAiService.createChatCompletion(input, 16000);

  if (locationsResponse != null) {

    return NextResponse.json({
      response: locationsResponse,
    });

  }

  return NextResponse.json({
    response: []
  });
}
