const { post } = require('./../routes')
const Imagen = require('./../database/models/ImagenModel')


const postImagen = async (imagenData) => {
    let imagen = await Imagen.create(imagenData);
    return imagen;
};

const updateImagen = async (id, imagenData) => {
    let imagen = await Imagen.findByPk(id);

    if (!imagen)
        throw new Error("Imagen no encontrada");

    return await imagen.update(imagenData);

};

const deleteImagen = async (id) => {
        const imagen = await Imagen.findByPk(id);
        if (!imagen) {
            throw new Error("El cassette no existe");
        }
        return await imagen.destroy();
   
};

// recoger las imagenes de una muestra (id_producto)
const getImagenByProduct = async (id) => {
    const imagenes = await Imagen.findAll({
        where: { id_producto: id }
    });

    return imagenes;
}

module.exports = {
    getImagenByProduct,postImagen,updateImagen,deleteImagen
}