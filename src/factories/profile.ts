
import { config } from '../config/config';
import { RequestAdapter } from '../infra/requester-adapter';
import { CreateProfileController } from '../presentation/controllers/profile/createProfile'
import { ListCustomProfilesController } from '../presentation/controllers/profile/listCustomProfile';
import { ListProfilesController } from '../presentation/controllers/profile/listProfiles';
import { UpdateProfileController } from '../presentation/controllers/profile/updateProfile';
import { IController } from '../presentation/interfaces/controller'


const { usersProfileServer } = config;

const headers = {
  "api-key": usersProfileServer.apiKey
}

const getLocationUrl = (): string => {
  return `${usersProfileServer.baseUrl}:${usersProfileServer.port}/api/v1`
}

export const makeCreateProfile = (): IController => {
  const requester = new RequestAdapter({ baseURL: getLocationUrl(), headers });
  return new CreateProfileController(requester)
}

export const makeUpdateProfile = (): IController => {
  const requester = new RequestAdapter({ baseURL: getLocationUrl(), headers });
  return new UpdateProfileController(requester)
}

export const makeListProfiles = (): IController => {
  const requester = new RequestAdapter({ baseURL: getLocationUrl(), headers });
  return new ListProfilesController(requester)
}

export const makeListCustomProfiles = (): IController => {
  const requester = new RequestAdapter({ baseURL: getLocationUrl(), headers });
  return new ListCustomProfilesController(requester)
}
