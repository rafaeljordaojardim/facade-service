import { ok } from '../../commons/responses'
import { IController } from '../../interfaces/controller'
import { Request, Response } from 'express'
import { IResponse } from '../../interfaces/response'
import { errorProcessor } from '../../../utils/common'
import { IRequester } from '../../../data/requester'
import { IGenerateTokenRepo } from '../../../data/interfaces/generateToken'

export class SignInController implements IController {
  constructor (
    private requester: IRequester,
    private tokenGenerator: IGenerateTokenRepo
  ) {}

  public async handle (req: Request, res: Response): Promise<IResponse> {
    try {
      const body = req.body
      const response = await this.requester.request({ method: "POST", url: `/signin`, body })
      if (!response.data.info) {
        return response
      }
      const { email, ...data } = response.data.info
      const token = this.tokenGenerator.generate(email, data)
      return ok({ token })
    } catch (error) {
      console.error(`Error signing in user: ${String(error)}`)
      return errorProcessor(error)
    }
  }
}
