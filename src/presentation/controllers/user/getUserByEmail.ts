import { serverError } from '../../commons/responses'
import { IController } from '../../interfaces/controller'
import { Request, Response } from 'express'
import { IResponse } from '../../interfaces/response'
import { IRequester } from '../../../data/requester'
export class GetUserByEmailController implements IController {
  constructor (
    private requester: IRequester
  ) {}

  public async handle (req: Request, res: Response): Promise<IResponse> {
    try {
      const { email } = req.params
      const response = await this.requester.request({ method: "GET", url: `/users/${email}` })
      return response
    } catch (error) {
      console.error(`Error getting user: ${String(error)}`)
      return serverError()
    }
  }
}
