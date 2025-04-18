const {DataTypes} = require('sequelize');
const database = require('../config/database');


export const User = database.define('User', {
        id: {
            type: DataTypes.INTEGER,
            required: true,
            autoIncrement: true,
            primaryKey: true,
        },
        firstName: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Поле обязательно для заполнения',
                },
                len: {
                    args: [2, 50],
                    msg: 'Количество символов от 2 до 50'
                }
            }
        },
        lastName: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Поле обязательно для заполнения',
                },
                len: {
                    args: [2, 50],
                    msg: 'Количество символов от 2 до 50'
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Поле обязательно для заполнения'
                },
                isEmail: {
                    msg: 'Некорректный Email',
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Поле не может быть пустым',
                },
                len: {
                    args: [8, 255],
                    msg: 'Минимальная длина пароля от 8 символов',
                },
            },
        },
        phoneNumber: {
            type: DataTypes.STRING(20),
            required: true,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Поле обязательно для заполнения',
                },
                is: {
                    args: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                    msg: 'Неправильно введен номер телефона',
                },
            }
        },
        city: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Поле обязательно для заполнения',
                },
            },
        },
        street: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Поле обязательно для заполнения',
                },
            },
        },
        home: {
            type: DataTypes.STRING(10),
            allowNull: true,
            defaultValue: null,
        },
        flat: {
            type: DataTypes.STRING(10),
            allowNull: true,
            defaultValue: null,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            onUpdate: DataTypes
        }
    },
    {
        modelName: 'User',
        tableName: 'User',
        timestamps: true,
    }
)


module.exports = User