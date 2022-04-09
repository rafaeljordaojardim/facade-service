
import { config } from '../config/config'
import { RequestAdapter } from '../infra/requester-adapter'
import { CreateLocationController } from '../presentation/controllers/location/createLocation'
import { ListLocationsController } from '../presentation/controllers/location/getLocation'
import { UpdateLocationController } from '../presentation/controllers/location/updateLocation'
import { IController } from '../presentation/interfaces/controller'

const { sectorLocationServer } = config;

const headers = {
  "api-key": sectorLocationServer.apiKey
}

const getLocationUrl = (): string => {
  return `${sectorLocationServer.baseUrl}:${sectorLocationServer.port}/api/v1`
}

export const makeCreateLocation = (): IController => {
  const requester = new RequestAdapter({ baseURL: getLocationUrl(), headers });
  return new CreateLocationController(requester)
}

export const makeUpdateLocation = (): IController => {
  const requester = new RequestAdapter({ baseURL: getLocationUrl(), headers });
  return new UpdateLocationController(requester)
}

export const makeGetLocations = (): IController => {
  const requester = new RequestAdapter({ baseURL: getLocationUrl(), headers });
  return new ListLocationsController(requester)
}
