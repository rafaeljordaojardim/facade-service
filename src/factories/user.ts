

import { config } from '../config/config';
import { RequestAdapter } from '../infra/requester-adapter';
import { CreateUserController } from '../presentation/controllers/user/createUser';
import { GetUserByEmailController } from '../presentation/controllers/user/getUserByEmail';
import { GetUsersController } from '../presentation/controllers/user/getUsers';
import { UpdateUserController } from '../presentation/controllers/user/updateUser';
import { UpdateUserPasswordController } from '../presentation/controllers/user/updateUserPassword';
import { IController } from '../presentation/interfaces/controller'

const { usersProfileServer } = config;

const headers = {
  "api-key": usersProfileServer.apiKey
}

const getLocationUrl = (): string => {
  return `${usersProfileServer.baseUrl}:${usersProfileServer.port}/api/v1`
}

export const makeCreateUser = (): IController => {
  const requester = new RequestAdapter({ baseURL: getLocationUrl(), headers });
  return new CreateUserController(requester)
}

export const makeGetUserByEmail = (): IController => {
  const requester = new RequestAdapter({ baseURL: getLocationUrl(), headers })
  return new GetUserByEmailController(requester)
}

export const makeGetUsers = (): IController => {
  const requester = new RequestAdapter({ baseURL: getLocationUrl(), headers })
  return new GetUsersController(requester)
}

export const makeUpdateUser = (): IController => {
  const requester = new RequestAdapter({ baseURL: getLocationUrl(), headers });
  return new UpdateUserController(requester)
}

export const makeUpdateUserPassword = (): IController => {
  const requester = new RequestAdapter({ baseURL: getLocationUrl(), headers });
  return new UpdateUserPasswordController(requester)
}
