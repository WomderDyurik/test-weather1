export interface CitysResponse {
  data:       Datum[];
  status:     number;
  statusText: string;
  headers:    CitysResponseHeaders;
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

export interface Datum {
  name:         string;
  local_names?: { [key: string]: string };
  lat:          number;
  lon:          number;
  country:      string;
  state:        string;
}

export interface CitysResponseHeaders {
  "content-length": string;
  "content-type":   string;
}
