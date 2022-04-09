
interface IServer {
  baseUrl: string;
  apiKey: string;
  port: number;
}
export interface IConfig {
  sectorLocationServer: IServer;
  usersProfileServer: IServer;
  server: {
    port: number;
    jwtKey: string;
  };
}