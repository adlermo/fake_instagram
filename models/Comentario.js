const Comentario = (sequelize, DataTypes) => {
    return sequelize.define(
        'Comentario',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            texto: {
                type: DataTypes.STRING,
                allowNull: false
            },
            usuarios_id: {
                type: DataTypes.INTEGER,
                foreignKey: true,
                allowNull: false
            },
            posts_id: {
                type: DataTypes.INTEGER,
                foreignKey: true,
                allowNull: false
            }
        },
        {
            tableName: "comentarios",
            timestamps: false
        }
    )
}

module.exports = Comentario;