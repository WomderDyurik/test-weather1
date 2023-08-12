export interface LatLonSearch {
  data:       Data;
  status:     number;
  statusText: string;
  headers:    LatLonSearchHeaders;
  config:     Config;
  request:    Request;
}

export interface Config {
  transitional:      Transitional;
  adapter:           string[];
  transformRequest:  null[];
  transformResponse: null[];
  timeout:           number;
  xsrfCookieName:    string;
  xsrfHeaderName:    string;
  maxContentLength:  number;
  maxBodyLength:     number;
  env:               Request;
  headers:           ConfigHeaders;
  method:            string;
  url:               string;
}

export interface Request {
}

export interface ConfigHeaders {
  Accept: string;
}

export interface Transitional {
  silentJSONParsing:   boolean;
  forcedJSONParsing:   boolean;
  clarifyTimeoutError: boolean;
}

export interface Data {
  coord:      Coord;
  weather:    Weather[];
  base:       string;
  main:       Main;
  visibility: number;
  wind:       Wind;
  clouds:     Clouds;
  dt:         number;
  sys:        Sys;
  timezone:   number;
  id:         number;
  name:       string;
  cod:        number;
}

export interface Clouds {
  all: number;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Main {
  temp:       number;
  feels_like: number;
  temp_min:   number;
  temp_max:   number;
  pressure:   number;
  humidity:   number;
}

export interface Sys {
  type:    number;
  id:      number;
  country: string;
  sunrise: number;
  sunset:  number;
}

export interface Weather {
  id:          number;
  main:        string;
  description: string;
  icon:        string;
}

export interface Wind {
  speed: number;
  deg:   number;
}

export interface LatLonSearchHeaders {
  "content-length": string;
  "content-type":   string;
}
