const db = require("../models");

const ORM = db.clientes;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    console.log('Api Create clientes ', req.body);

    ORM.create(req.body)
        .then(data => {
            console.log('se ha creado con exito clientes ', data)
            res.send(data);
        })
        .catch(err => {
            let error = err.message || ", Error en crear un nuevo registro de clientes ";
            console.log(error)
            res.status(500).send({
                message: error
            });
        });

}

const getPagination = (page, size) => {
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;
  
    return { limit, offset };
};

const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: items } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);
  
    return { totalItems, items, totalPages, currentPage };
};

exports.findAll = (req, res) => {

    console.log('Api Find all clientes ')

    const { 
        page, 
        size, 
           id,
           codigo,
 	 	 nombre,
 	 	 celular,
 	 	 estado,
 	 	 
    } = req.query;

    var condition = {        
           id: { [Op.like]: `%${id}%` },
           codigo: { [Op.like]: `%${codigo}%` },
 	 	 nombre: { [Op.like]: `%${nombre}%` },
 	 	 celular: { [Op.like]: `%${celular}%` },
 	 	 estado: { [Op.like]: `%${estado}%` },
 	 	 
    } 

    const { limit, offset} = getPagination(page,size);

     ORM.findAndCountAll({where: condition, limit, offset})
        .then(data => {
            const response = getPagingData(data, page, limit);
            res.send(response);
        })
        .catch(err => {
            let error = "Error en consultar FindAll clientes, detalle del error : " + err.message
            console.log(error);
            res.status(500).send({
                message: error
            })
        })
};

exports.findOne = (req, res) => {

    console.log('Api Find By Id clientes ')
    const id = req.params.id;

    ORM.findByPk(id)
        .then(data => {
            if (data == null) {
                res.status(404).send({
                    message: "El clientes con el id " + id + " no se encuentra en la base de datos"
                });
            } else {
                res.send(data);
            }
        })
        .catch(err => {
            let error = "Error en consultar por id " + err.message
            console.log(error)
            res.status(500).send({
                message: error
            });
        });
};

exports.update = (req, res) => {

    ORM.update(req.body, {
        where: { id: req.params.id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "clientes fue actualizado exitosamente"
                });
            } else {
                res.send({
                    message: `No se puede actualizar el clientes con el id ${id}, por favor validar`
                });
            }
        })
        .catch(err => {
            let error = "Error actualizando, " + err.message
            console.log(error)
            res.status(500).send({
                message: error
            });
        });
};

exports.delete = (req, res) => {
    console.log('Api Delete By Id clientes')
    ORM.destroy({
        where: { id: req.params.id }
    }).then(() => {
        res.status(200).send('Se ha eliminado el clientes exitosamente');
    })
        .catch(err => {
            let error = "Error eliminando, " + err.message
            console.log(error)
            res.status(500).send({
                message: error
            });
        });
}


