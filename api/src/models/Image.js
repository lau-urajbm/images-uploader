const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo para temperamento
    sequelize.define('image', {
      id:{
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement:true,
        },
      name: {
        type: DataTypes.STRING,
        
      }, 
      
    },
    
    {          
      timestamps: false,
      createdAt: false,
      updatedAt: false
  
  });
  };