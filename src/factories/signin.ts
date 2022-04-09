import { SignInController } from '../presentation/controllers/user/signin'
import { IController } from '../presentation/interfaces/controller'
import { RequestAdapter } from '../infra/requester-adapter'
import { config } from '../config/config'
import { GenerateTokenRepo } from '../infra/token/generateToken';

const { usersProfileServer } = config;

const headers = {
  "api-key": usersProfileServer.apiKey
}

const getLocationUrl = (): string => {
  return `${usersProfileServer.baseUrl}:${usersProfileServer.port}/api/v1`
}

export const makeSignInUser = (): IController => {
  const requester = new RequestAdapter({ baseURL: getLocationUrl(), headers });
  const tokenGenerator = new GenerateTokenRepo()
  return new SignInController(requester, tokenGenerator)
}
