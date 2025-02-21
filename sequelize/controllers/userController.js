const User = require("../models/user.js");

const getUsers = async (req, res) => {
    try{
        const users = await User.findAll();
        res.json({
            status:200,
            message:"Data user",
            data:users
        });
    }catch(error){
        res.json({
            status:500,
            message: error.message 
        });
    }
};

const getById = async (req, res) => {
    try{
        const user = await User.findByPk(req.params.id);
        res.json({
            status:200,
            message:"Data user",
            data:user
        });
    }catch(error){
        res.json({
            status:500,
            message: error.message 
        });
    }
};

const createUser = async (req, res) => {
    try{
        const { username, email, password } = req.body;
        const max = await User.findAll()
        const id = max.length + 1
        const user = await User.create({
            id,
            username,
            email,
            password
        });
        res.json({
            status:200,
            message:"Data user",
            data:user
        });
    }catch(error){
        res.json({
            status:500,
            message: error.message 
        });
    }
};

const updateUser = async (req, res) => {
    try{
        const { username, email, password } = req.body;
        const user = await User.update({
            username,
            email,
            password
        }, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            status:200,
            message:"user is updated",

        });
    }catch(error){
        res.json({
            status:500,
            message: error.message 
        });
    }
};

const deleteUser = async (req, res) => {
    try{
        const user = await User.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            status:200,
            message:"user is deleted",
        });
    }catch(error){
        res.json({
            status:500,
            message: error.message 
        });
    }
};

module.exports = { getUsers, getById, createUser, updateUser, deleteUser };
