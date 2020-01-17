module.exports = (sequelize,Datatype)=>{
    return sequelize.define(
        "board",
        { 
            id : {
                type : Datatype.INTEGER,
                primaryKey : true,
                autoIncrement : true,
                unique : true,
                allowNull : false
            },
            title : {
                type : Datatype.STRING(50),
                allowNull : false
        
            },
            content : {
                type : Datatype.STRING(100),
                allowNull : false
            }
        }, 
        { 
            timestamps : true,
        }
    )
}