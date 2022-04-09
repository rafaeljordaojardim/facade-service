/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { notFound, ok, serverError } from '../../commons/responses'
import { IController } from '../../interfaces/controller'
import { IResponse } from '../../interfaces/response'
import { Request, Response } from 'express'
import { IRequester } from '../../../data/requester'

export class GetSectorByIdController implements IController {
  constructor (private requester: IRequester) {}
  public async handle (req: Request, res: Response): Promise<IResponse> {
    try {
      const id = Number(req.params.id)
      const response = await this.requester.request({ method: "GET", url: `/sectors/${id}` })
      return response
    } catch (error) {
      console.error(`Error listing sectors: ${String(error)}`)
      return serverError()
    }
  }
}
