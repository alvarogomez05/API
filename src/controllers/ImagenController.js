const ImagenService = require('./../services/ImagenService')


const postImagen = async (req,res) => {
    let imagenes = ImagenService.postImagen(req.body)
    res.send(imagenes).status(200)
};

const updateImagen = async (req,res) => {
    let imagenes = ImagenService.updateImagen(req.params.id,req.body)
    res.send(imagenes).status(200)
};

const deleteImagen = async (req,res) => {
    let imagenes = ImagenService.deleteImagen(req.params.id)
    res.send({
        status: 200,
        ok: true
    })
};

// recoger las imagenes de una muestra (id_producto)
const getImagenByProduct = async (req,res) => {
    let imagenes = ImagenService.getImagenByProduct(req.params.id,req.body)
    res.send(imagenes).status(200)
}

module.exports={getImagenByProduct,postImagen,deleteImagen,updateImagen}