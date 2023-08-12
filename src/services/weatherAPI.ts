import axios from "axios";
import { Weather } from "@/types/WeatherTypes.interface";
import { Datum } from "@/types/CityTypes.interface";

const config = {
  url: "http://api.openweathermap.org",
  key: "9e8ce9b7314835560a84caa2d9e1b14a",
};

export const searchGeoLocation = async (cityName: string): Promise<Datum[]> => {
  try {
    const response = await axios.get(
      `${config.url}/geo/1.0/direct?q=${cityName}&limit=3&appid=${config.key}`
    );
    if (!response.data.length) {
      alert("Введите другое название!");
    }
    return response.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const searchWeatherOnCity = async (
  cityName: string,
  country: string
): Promise<Weather> => {
  try {
    const response = await axios.get(
      `${config.url}/data/2.5/weather?q=${cityName},${country}&appid=${config.key}`
    );
    return response.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

export const searchWeatherOnCityByLatLon = async (lat: string, lon: string): Promise<Weather> => {
  try {
    const response = await axios.get(
      `${config.url}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${config.key}`
    );
    return response.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};
