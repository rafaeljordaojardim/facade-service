import { created, serverError } from '../../commons/responses'
import { IController } from '../../interfaces/controller'
import { IResponse } from '../../interfaces/response'
import { Request, Response } from 'express'
import { IRequester } from '../../../data/requester'

export class ListProfilesController implements IController {
  constructor (private requester: IRequester) {}
  public async handle (req: Request, res: Response): Promise<IResponse> {
    try {
      const response = await this.requester.request({ method: "GET", url: "/profiles"})
            
      return response
    } catch (error) {
      console.error(`Error listing profiles: ${String(error)}`)
      return serverError()
    }
  }
}
