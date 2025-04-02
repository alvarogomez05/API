const ImagenRouter = require('express').Router();
const ImagenController = require('./../controllers/ImagenController')

ImagenRouter.get('/:id', ImagenController.getImagenByProduct)
ImagenRouter.post('/',ImagenController.postImagen)
ImagenRouter.put('/:id',ImagenController.updateImagen)
ImagenRouter.delete(':id', ImagenController.deleteImagen)

module.exports = ImagenRouter;