const FavoritoService = require('./../services/FavoritosService')

const getFavoritoById = async (req,res) =>{
  let favoritos = await FavoritoService.getFavoritoById(req.params.id)
  res.send(favoritos).status(200)
}

const postFavorito = async (req,res) =>{

  let fav = {
    id_cliente: req.params.id,
    id_producto: req.body.id_producto
  }

  let favoritos = await FavoritoService.postFavorito(fav)
  res.send(favoritos).status(200)
}

const deleteFavorito = async (req,res) => {
    let favoritos = await FavoritoService.deleteFavorito(req.params.id,req.params.id_producto)
    res.send({
        status: 200,
        ok: true
    })
}

module.exports={
    getFavoritoById,postFavorito,deleteFavorito
}