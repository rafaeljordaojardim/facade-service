require('dotenv').config()
import getenv from "getenv";
import { IConfig } from "./i-config";

export const config = {
  sectorLocationServer: {
    apiKey: getenv.string("SECTOR_LOCATION_API_KEY"),
    baseUrl: getenv.string("SECTOR_LOCATION_BASE_URL"),
    port: getenv.int("SECTOR_LOCATION_PORT")
  },
  usersProfileServer: {
    apiKey: getenv.string("USERS_PROFILE_API_KEY"),
    baseUrl: getenv.string("USERS_PROFILE_BASE_URL"),
    port: getenv.int("USERS_PROFILE_PORT")
  },
  server: {
    port: getenv.int("PORT"),
    jwtKey: getenv.string("JWT_SECRET_KEY")
  }
} as IConfig;
