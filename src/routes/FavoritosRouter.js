const FavoritosController = require('./../controllers/FavoritosController')
const FavoritosRouter = require('express').Router();

// Coger los favoritos de cada persona
FavoritosRouter.get('/:id', FavoritosController.getFavoritoById)
// 
FavoritosRouter.post('/:id', FavoritosController.postFavorito)
FavoritosRouter.delete('/:id/:id_producto', FavoritosController.deleteFavorito)

module.exports = FavoritosRouter;