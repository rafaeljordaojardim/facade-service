import { IGenerateTokenRepo } from '../../data/interfaces/generateToken'
import jwt from 'jsonwebtoken'
import { config } from '../../config/config'

export class GenerateTokenRepo implements IGenerateTokenRepo {

  public generate (email: string, data: any): string {
    return jwt.sign({ email, data }, config.server.jwtKey)
  }

  public verify (token: string): any {
    return jwt.verify(token, config.server.jwtKey)
  }
}
