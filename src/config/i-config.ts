export interface IConfig {
  sectorLocationServer: {
    baseUrl: string;
    apiKey: string;
    port: number;
  };
  server: {
    port: number;
  }
}