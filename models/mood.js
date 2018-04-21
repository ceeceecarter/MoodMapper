module.exports =  function(sequelize, DataTypes){
    var Mood = sequelize.define("Mood", {
        moodType: {
            //type of mood, e.g. anxiety
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        answer1: {
            type: DataTypes.INTEGER,
            allowNull: false,        
        },
        answer2: {
            type: DataTypes.INTEGER,
            allowNull: false,        
        },
        answer3: {
            type: DataTypes.INTEGER,
            allowNull: false,        
        },
        answer4: {
            type: DataTypes.INTEGER,
            allowNull: false,        
        },
        answer5: {
            type: DataTypes.INTEGER,
            allowNull: false,        
        },
        answer6: {
            type: DataTypes.INTEGER,
            allowNull: false,        
        },
        answer7: {
            type: DataTypes.INTEGER,
            allowNull: false,        
        },
        answer8: {
            type: DataTypes.INTEGER,
            allowNull: false,        
        },
        answer9: {
            type: DataTypes.INTEGER,
            allowNull: false,        
        },
        answer10: {
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

