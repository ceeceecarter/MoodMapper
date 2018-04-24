module.exports =  function(sequelize, DataTypes){
    var Mood = sequelize.define("Mood", {

        anxiety: {
            type: DataTypes.INTEGER,
            allowNull: false,        
        },
        depression: {
            type: DataTypes.INTEGER,
            allowNull: false,        
        },
        concentration: {
            type: DataTypes.INTEGER,
            allowNull: false,        
        },
        energy: {
            type: DataTypes.INTEGER,
            allowNull: false,        
        },
        happiness: {
            type: DataTypes.INTEGER,
            allowNull: false,        
        },
        myDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        }    
    });

    // Mood.associate = function(models){
    //     Mood.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };

    return Mood;

};

