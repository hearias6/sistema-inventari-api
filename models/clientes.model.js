module.exports = (sequelize, Sequelize)=>{
    const Modelo = sequelize.define("clientes",{
        // atributos - se crearan dinamicamente por el generador vuen
        // VUEN_ATRIBUTOS_SEQUELIZE
 	 	 id:{
 	 	 	 type: Sequelize.INTEGER,
 	 	 	 autoIncrement: true, 
 	 	 	 primaryKey: true
		   },
		   codigo:{
			type: Sequelize.STRING
	   		},
 	 	 nombre:{
 	 	 	 type: Sequelize.STRING
 	 	 },
 	 	 celular:{
 	 	 	 type: Sequelize.STRING
		 },
		 ciudad : {
			 type: Sequelize.STRING
		 },
		 barrio : {
			type: Sequelize.STRING
		 },
		 direccion : {
			type: Sequelize.STRING
		 },
		 negocio : {
			type: Sequelize.STRING
		 },
 	 	 estado:{
 	 	 	 type: Sequelize.BOOLEAN
 	 	 },
    });

    return Modelo;
}