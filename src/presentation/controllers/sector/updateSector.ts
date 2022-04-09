import { conflict, ok, serverError } from '../../commons/responses'
import { IController } from '../../interfaces/controller'
import { Request, Response } from 'express'
import { IResponse } from '../../interfaces/response'
import { IRequester } from '../../../data/requester'

export class UpdateSectorController implements IController {
  constructor (
    private requester: IRequester
  ) {}

  public async handle (req: Request, res: Response): Promise<IResponse> {
    try {
      const id = Number(req.params.id)
      const body = req.body
      const response = await this.requester.request({ method: "GET", url: `/sectors/${id}`, body })
      return response
    } catch (error) {
      console.error(`Error updating user: ${String(error)}`)
      return serverError()
    }
  }
}
