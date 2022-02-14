const db = require('../db')

class UserController {
    async createUser(req,res) {
        const {name, surname} = req.body;
        console.log(name , surname)
        const newPerson = await db.query(`INSERT INTO person (name, surname) values ($1, $2) RETURNING *`, [name, surname])
        res.json(newPerson.rows[0])
    }
    async getUsers(req,res){
        const users = await db.query(`SELECT * FROM person`)
        res.json(users.rows)
    }
    async getOneUser(req,res){
        const id = req.params.id // потому что id мы определили в routes
        const user = await db.query(`SELECT * FROM person where id = $1`, [id])
        res.json(user.rows[0])
    }
    async getUpdateUser(req,res){
        const {id, name, surname} = req.body
        const user = await db.query(`UPDATE person set name = $2, surname = $3 where id = $1 RETURNING *`, [id, name, surname])
        res.json(user.rows[0])
    }
    async deleteUser(req,res){
        const id = req.params.id // потому что id мы определили в routes
        const user = await db.query(`DELETE FROM person where id = $1 RETURNING *`, [id])
        res.json(user.rows[0])
    }
}

module.exports = new UserController(); //экспортируем объект, значит не нужно создавать его в коде вызова