import { IResponse } from "../presentation/interfaces/response";

export interface IOptions {
  headers?: any;
  body?: any;
  method?: "POST" | "GET" | "PATCH" | "DELETE" | "PUT";
  url?: string;
  baseURL?: string
}

export interface IRequester {
  request: (options: IOptions) => Promise<IResponse>
}