import axios from "axios";

const URL = "http://localhost:9090/";

export interface Response<T> {
  data: T;
  status: number;
  statusText: string;
}

export async function getTopRatedMoviesForGenre(
  genre: string
): Promise<Response<string[]>> {
  return axios.get(URL + "movies/top-rated", { params: { genre: genre } });
}

export async function isPersonTypecasted(name: string) {
  return axios.get(URL + "person/typecasted", { params: { name: name } });
}

export async function findKevinBaconSeparationDegrees(name: string) {
  return axios.get(URL + "person/degree-to-kb", { params: { name: name } });
}
