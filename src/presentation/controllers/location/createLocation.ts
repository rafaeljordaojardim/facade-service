import { created, makeRes, serverError } from '../../commons/responses'
import { IController } from '../../interfaces/controller'
import { IResponse } from '../../interfaces/response'
import { Request, Response } from 'express'
import { IRequester } from '../../../data/requester'

export class CreateLocationController implements IController {
  constructor (
    private requester: IRequester
  ) {}
  public async handle (req: Request, res: Response): Promise<IResponse> {
    try {
      const name = req.body.name
      const sectorId = req.body.sectorId
      const response = await this.requester.request({ method: "POST", url: "/locations", body: { name, sectorId }})
      return response;
    } catch (error) {
      console.error(`Error creating location: ${String(error)}`)
      return serverError()
    }
  }
}
