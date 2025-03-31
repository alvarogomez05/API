const FavoritoService = require('./../services/FavoritosService')

const getFavoritoById = async (req,res) =>{
  let favoritos = FavoritoService.getFavoritoById(req.params.id)
  res.send(favoritos).status(200)
}

const postFavorito = async (req,res) =>{
  let favoritos = FavoritoService.postFavorito(req.params.id,req.body)
  res.send(favoritos).status(200)
}

const deleteFavorito = async (req,res) => {
    let favoritos = FavoritoService.deleteFavorito(req.params.id)
    res.send({
        status: 200,
        ok: true
    })
}

module.exports={
    getFavoritoById,postFavorito,deleteFavorito
}