interface LocationsResponse {
  locations: Location[];
}

interface Location {
  name: string;
  country: string;
  description: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  image: string;
  costOfLiving: {
    currency: string;
    averageDailyCostUSD: number;
    averageHotelPriceUSD: number;
    averageMealPriceUSD: number;
  };
  safety: {
    crimeIndex: number;
    safetyIndex: number;
  };
  touristAttractions: string[];
  localCuisine: string[];
  weather: {
    averageTemperature: {
      spring: number;
      summer: number;
      autumn: number;
      winter: number;
    };
    rainyDaysPerMonth: {
      spring: number;
      summer: number;
      autumn: number;
      winter: number;
    };
  };
  bestTimeToVisit: string;
  languagesSpoken: string[];
}

interface FancyButtonProps {
  text: string;
  iconSrc: string;
  className?: string;
  onClick?: () => void;
}
