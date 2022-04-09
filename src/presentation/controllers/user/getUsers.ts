import { ok, serverError } from '../../commons/responses'
import { IController } from '../../interfaces/controller'
import { Request, Response } from 'express'
import { IResponse } from '../../interfaces/response'
import { IRequester } from '../../../data/requester'
export class GetUsersController implements IController {
  constructor (
    private requester: IRequester
  ) {}

  public async handle (req: Request, res: Response): Promise<IResponse> {
    try {
      const response = await this.requester.request({ method: "GET", url: `/users` })
      return response
    } catch (error) {
      console.error(`Error getting user: ${String(error)}`)
      return serverError()
    }
  }
}
