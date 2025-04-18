const { post } = require("../routes");
const Favorito = require('./../database/models/FavoritosModel');

const getFavoritoById = async (id) =>{
    let favorito = await Favorito.findAll({
        where:{id_cliente:id}
    })
    return favorito;
}

const postFavorito = async (id,fav) =>{
    let favorito = await Favorito.create(fav,{
        where:{id_cliente: id}
    })
    return favorito;
}

const deleteFavorito = async (id) => {
    let favorito =await Favorito.destroy({
        where:{id: id}
    })
    return favorito;

}

module.exports={
    getFavoritoById,postFavorito,deleteFavorito
}