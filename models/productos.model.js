module.exports = (sequelize, Sequelize)=>{
    const Modelo = sequelize.define("productos",{
 	 	 id:{
 	 	 	 type: Sequelize.INTEGER,
 	 	 	 autoIncrement: true, 
 	 	 	 primaryKey: true
 	 	 },
 	 	 titulo:{
 	 	 	 type: Sequelize.STRING
 	 	 },
 	 	 descripcion:{
 	 	 	 type: Sequelize.STRING
 	 	 },
 	 	 estado:{
 	 	 	 type: Sequelize.BOOLEAN
 	 	 },
    });

    return Modelo;
}