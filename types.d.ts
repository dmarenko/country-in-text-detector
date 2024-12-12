declare module "country-in-text-detector" {
  type CountryDetectedResult = {
    type: "country";
    iso3166: string;
    name: string;
    matches: string[];
  };
  type CityDetectedResult = {
    type: "city";
    iso3166: string;
    name: string;
    countryName: string;
    matches: string[];
  };
  export function detect(
    text: string
  ): (CountryDetectedResult | CityDetectedResult)[];
}
