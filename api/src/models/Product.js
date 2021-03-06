const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

// *S4 - Crear Modelo de Productos

module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define('product', {
		name        : {
			type      : DataTypes.STRING,
			allowNull : false
		},

		description : {
			type      : DataTypes.TEXT,
			allowNull : false
		},

		price       : {
			type      : DataTypes.FLOAT,
			allowNull : false
		},

		stock       : {
			type      : DataTypes.INTEGER,
			allowNull : false
		},

		images      : {
			type : DataTypes.STRING,
			get  : function() {
				return JSON.parse(this.getDataValue('images'));
			},
			set  : function(val) {
				return this.setDataValue('images', JSON.stringify(val));
			}
		}
	});
};
