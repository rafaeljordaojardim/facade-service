import { Router } from 'express'
import { makeCreateSector, makeGetSector, makeGetSectorById, makeUpdateSector } from '../factories/sector'
import { createSectorValidator, updateSectorValidator } from '../presentation/validators'
import { authorizer } from '../utils/middleware/authorizer'

const router = Router()

router.post('/', authorizer, createSectorValidator, async (req, res, next) => {
  const response = await makeCreateSector().handle(req, res)
  res.statusCode = response.status
  return res.json(response?.data)
})

router.patch('/:id', authorizer, updateSectorValidator, async (req, res, next) => {
  const response = await makeUpdateSector().handle(req, res)
  res.statusCode = response.status
  return res.json(response?.data)
})

router.get('/', authorizer, async (req, res, next) => {
  const response = await makeGetSector().handle(req, res)
  res.statusCode = response.status
  return res.json(response?.data)
})

router.get('/:id', authorizer, async (req, res, next) => {
  const response = await makeGetSectorById().handle(req, res)
  res.statusCode = response.status
  return res.json(response?.data)
})

export default router
