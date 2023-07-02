type Location = {
  name: string;
  country: string;
  description: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  costOfLiving: {
    currency: string;
    averageDailyCost: number;
    averageHotelPrice: number;
    averageMealPrice: number;
  };
  safety: {
    crimeIndex: number;
    safetyIndex: number;
  };
  touristAttractions: string[];
  localCuisine: string[];
  weather: {
    averageTemperature: {
      summer: number;
      autumn: number;
      winter: number;
      spring: number;
    };
    rainyDaysPerMonth: {
      summer: number;
      autumn: number;
      winter: number;
      spring: number;
    };
  };
  bestTimeToVisit: string[];
  officialLanguages: string[];
};
