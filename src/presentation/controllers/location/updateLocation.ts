import { serverError } from '../../commons/responses'
import { IController } from '../../interfaces/controller'
import { IResponse } from '../../interfaces/response'
import { Request, Response } from 'express'
import { IRequester } from '../../../data/requester'

export class UpdateLocationController implements IController {
  constructor (private requester: IRequester) {}
  public async handle (req: Request, res: Response): Promise<IResponse> {
    try {
      const id = Number(req.params.id)
      const { sectorId, name } = req.body
      const response = await this.requester.request({ method: "PATCH", url: `/locations/${id}`, body: { name, sectorId }})
      return response
    } catch (error) {
      console.error(`Error updating location: ${String(error)}`)
      return serverError()
    }
  }
}
