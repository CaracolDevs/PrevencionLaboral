'use strict';
const {
  Model
} = require('sequelize');



module.exports = (sequelize, DataTypes) => {
  class rawTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      /*usuario.belongsTo(models.edad, {
        foreignKey: 'id_name'
      })*/

 
    }
    
  }
  // extracs info from the basic factures table in the DB
  rawTable.init({
    ProcesoId: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.DECIMAL(3,0),
    },
    Proceso: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    Puestos: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    Tarea: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    Actividades: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    Rutinario: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
    },
    TipoPeligro: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    TipoPeligroId: {
        allowNull: false,
        type: DataTypes.DECIMAL(3,0),
    },
    Peligro: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    PeligroId: {
        allowNull: false,
        type: DataTypes.DECIMAL(3,0),
    },
    Riesgo_Consecuencia: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    Riesgo_ConsecuenciaId: {
        allowNull: false,
        type: DataTypes.DECIMAL(3,0),
    },
    Eliminacion: {
        allowNull: false,
        type: DataTypes.BOOLEAN
    },
    Sustitucion: {
        allowNull: false,
        type: DataTypes.BOOLEAN
    },
    CIngenieria:{
        allowNull: false,
        type: DataTypes.STRING,

    },
    CAdministrativos: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    CPPersonal: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    Consecuencias: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    ConcecuenciasNumber: {
        allowNull: false,
        type: DataTypes.DECIMAL(3,0),
    },
    Exposicion: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    ExposicionNumber: {
        allowNull: false,
        type: DataTypes.DECIMAL(3,0),
    },
    Riesgo: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    RiesgoNumber: {
        allowNull: false,
        type: DataTypes.DECIMAL(3,0),
    } ,
    Result: {
        allowNull: false,
        type: DataTypes.DECIMAL(5,0),
    },
    ResultText: {
        allowNull: false,
        type: DataTypes.STRING
    },
    Acciones: {
        allowNull: false,
        type: DataTypes.STRING
    },
    Responsable: {
        allowNull: false,
        type: DataTypes.STRING
    },
    FechaCompromiso: {
        allowNull: false,
        type: DataTypes.STRING
    },
    Estatus: {
        allowNull: false,
        type: DataTypes.STRING
    },
    RemakeConsecuencias: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    RemakeConcecuenciasNumber: {
        allowNull: false,
        type: DataTypes.DECIMAL(3,0),
    },
    RemakeExposicion: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    RemakeExposicionNumber: {
        allowNull: false,
        type: DataTypes.DECIMAL(3,0),
    },
    RemakeRiesgo: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    RemakeRiesgoNumber: {
        allowNull: false,
        type: DataTypes.DECIMAL(3,0),
    } ,
    RemakeResult: {
        allowNull: false,
        type: DataTypes.DECIMAL(5,0),
    },
    RemakeResultText: {
        allowNull: false,
        type: DataTypes.STRING
    },

  }, {
    sequelize,
    timestamps: false,
    tableName: 'dangerProcessValue',
    modelName: 'dangerProcessValue', //must be 'rawTable' but DB was created time ago and required to be named like this
    freezeTableName: true //xportFacturasGlobales
  });
  return rawTable;
};