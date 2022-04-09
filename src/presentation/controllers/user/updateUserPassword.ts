import { noContent } from '../../commons/responses'
import { IController } from '../../interfaces/controller'
import { Request, Response } from 'express'
import { IResponse } from '../../interfaces/response'
import { errorProcessor } from '../../../utils/common'
import { IRequester } from '../../../data/requester'

export class UpdateUserPasswordController implements IController {
  constructor (
    private requester: IRequester
  ) {}

  public async handle (req: Request, res: Response): Promise<IResponse> {
    try {
      const id = Number(req.params.id)
      const body = req.body
      const response = await this.requester.request({ method: "PATCH", url: `/users/${id}/password`, body })
      return response
    } catch (error) {
      console.error(`Error updating user password: ${String(error)}`)
      return errorProcessor(error)
    }
  }
}
