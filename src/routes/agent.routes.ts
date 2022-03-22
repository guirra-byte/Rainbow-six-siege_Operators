import { response, Router } from 'express'
import { operatorsController } from '../useCases/Operators'
import { operatorsImportController } from '../useCases/OperatorsImport'
import multer from 'multer'

const upload = multer({
  dest: './tmp'
})

const routes = Router()

routes.post('/', (request, response) => {

  operatorsController.handle(request, response)
  return response
    .send()
    .status(201)

})

routes.post('/import', upload.single('file'), (request, response) => {

  operatorsImportController.handle(request, response)

})





export { routes }