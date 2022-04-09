import axios from "axios";
import { IOptions, IRequester } from "../data/requester";
import { IResponse } from "../presentation/interfaces/response";

export class RequestAdapter implements IRequester {
  
  constructor (
    private options?: IOptions
  ) {}

  public async request (options: IOptions): Promise<IResponse> {
    const {body} = options;
    return await axios.request({ 
     ...this.options, ...options, data: body
    });
  }

}