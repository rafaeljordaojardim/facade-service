import { ok, serverError } from '../../commons/responses'
import { IController } from '../../interfaces/controller'
import { IResponse } from '../../interfaces/response'
import { Request, Response } from 'express'
import { IRequester } from '../../../data/requester'

export class UpdateProfileController implements IController {
  constructor (private requester: IRequester) {}
  public async handle (req: Request, res: Response): Promise<IResponse> {
    try {
      const id = Number(req.params.id)
      const name = req.body.name
      const actions = req.body.actions
      const response = await this.requester.request({ method: "PATCH", url: `/profiles/${id}`, body: { name, actions }})
      return response
    } catch (error) {
      console.error(`Error updating profile: ${String(error)}`)
      return serverError()
    }
  }
}
