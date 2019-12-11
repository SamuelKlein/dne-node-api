import { mySequelize } from "../common/db"
const Sequelize = require('sequelize')

export const CepModel = () => {
    console.log(mySequelize)
    const cep = mySequelize.define('ceps', {
        id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            primaryKey: true,
            autoIncrement: true
        },
        bairro: {
            type: Sequelize.STRING,
            allowNull: false
        },
        cep: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        cidade: {
            type: Sequelize.STRING,
            allowNull: false
        },
        complemento2: {
            type: Sequelize.STRING,
            allowNull: true
        },
        end: {
            type: Sequelize.STRING,
            allowNull: false
        },
        uf: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        tableName: 'ceps',
        freezeTableName: false,
        timestamps: false
    })

    return cep
}
