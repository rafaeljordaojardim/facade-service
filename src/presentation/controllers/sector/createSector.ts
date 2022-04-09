import { created, serverError } from '../../commons/responses'
import { IController } from '../../interfaces/controller'
import { IResponse } from '../../interfaces/response'
import { Request, Response } from 'express'
import { IRequester } from '../../../data/requester'

export class CreateSectorController implements IController {
  constructor (private requester: IRequester) {}
  public async handle (req: Request, res: Response): Promise<IResponse> {
    try {
      const body = req.body
      const response = await this.requester.request({ method: "POST", url: "/sectors", body })
      return response
    } catch (error) {
      console.error(`Error creating sector: ${String(error)}`)
      return serverError()
    }
  }
}
