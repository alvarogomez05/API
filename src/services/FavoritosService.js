const { post } = require("../routes");
const Favorito = require('./../database/models/FavoritosModel');

const getFavoritoById = async (id) =>{
    let favorito = await Favorito.findAll({
        where:{id_cliente:id}
    })
    return favorito;
}

const postFavorito = async (fav) =>{
    console.log(fav)

    let existe = await Favorito.findOne({
        where:{id_cliente:fav.id_cliente,id_producto:fav.id_producto}
    })

    if(existe){
        console.log(existe)
        return {status: 200,message:"El producto ya está en favoritos"};
    }

    let favorito = await Favorito.create(fav)
    return favorito;
}

const deleteFavorito = async (id,id_producto) => {
    console.log(id)
    console.log(id_producto)
    let favorito =await Favorito.destroy({
        where:{id_cliente: id,
            id_producto: id_producto}
    })
    console.log(favorito)
    return favorito;

}

module.exports={
    getFavoritoById,postFavorito,deleteFavorito
}