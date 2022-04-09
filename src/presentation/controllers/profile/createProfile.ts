import { serverError } from '../../commons/responses'
import { IController } from '../../interfaces/controller'
import { IResponse } from '../../interfaces/response'
import { Request, Response } from 'express'
import { IRequester } from '../../../data/requester'

export class CreateProfileController implements IController {
  constructor (
    private requester: IRequester
  ) {}
  public async handle (req: Request, res: Response): Promise<IResponse> {
    try {
      const name = req.body.name
      const actions = req.body.actions
      const response = await this.requester.request({ method: "POST", url: "/profiles", body: { name, actions }})
      return response
    } catch (error) {
      console.error(`Error creating profile: ${String(error)}`)
      return serverError()
    }
  }
}
