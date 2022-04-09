import { config } from '../config/config'
import { RequestAdapter } from '../infra/requester-adapter'
import { CreateSectorController } from '../presentation/controllers/sector/createSector'
import { GetSectorByIdController } from '../presentation/controllers/sector/getSectorById'
import { ListSectorsController } from '../presentation/controllers/sector/listSector'
import { UpdateSectorController } from '../presentation/controllers/sector/updateSector'
import { IController } from '../presentation/interfaces/controller'

const { sectorLocationServer } = config;

const headers = {
  "api-key": sectorLocationServer.apiKey
}

const getLocationUrl = (): string => {
  return `${sectorLocationServer.baseUrl}:${sectorLocationServer.port}/api/v1`
}

export const makeCreateSector = (): IController => {
  const requester = new RequestAdapter({ baseURL: getLocationUrl(), headers });
  return new CreateSectorController(requester)
}

export const makeUpdateSector = (): IController => {
  const requester = new RequestAdapter({ baseURL: getLocationUrl(), headers });
  return new UpdateSectorController(requester)
}

export const makeGetSector = (): IController => {
  const requester = new RequestAdapter({ baseURL: getLocationUrl(), headers });
  return new ListSectorsController(requester)
}

export const makeGetSectorById = (): IController => {
  const requester = new RequestAdapter({ baseURL: getLocationUrl(), headers });
  return new GetSectorByIdController(requester)
}

