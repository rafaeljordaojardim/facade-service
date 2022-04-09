import { Profile } from './profile'
import { Sector } from './sector'

export class User {
  public id?: number
  public name: string
  public firstName: string
  public password?: string
  public lastName: string
  public email: string
  public status: boolean
  public profileId: number
  public sectorId?: number
  public bossId?: number
  public sector?: Sector
  public sectorName?: string
  public bossName?: string
  public profileName?: string
  public profile?: Profile
  public boss?: User

}
