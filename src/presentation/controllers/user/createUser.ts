import { IController } from '../../interfaces/controller'
import { IResponse } from '../../interfaces/response'
import { Request, Response } from 'express'
import { created, serverError, conflict } from '../../commons/responses'

import { IUser } from '../../interfaces/user'
import { IRequester } from '../../../data/requester'

export class CreateUserController implements IController {
  constructor (
    private requester: IRequester
  ) {}

  public async handle (req: Request, res: Response): Promise<IResponse> {
    try {
      const userParams: IUser = req.body
      const response = await this.requester.request({ method: "POST", url: "/users", body: userParams })
      return response
    } catch (error) {
      console.error(`Error creating user: ${String(error)}`)
      return serverError()
    }
  }
}
