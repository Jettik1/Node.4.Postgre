const db = require('../db')

class PostController{
    async createPost(req,res) {
        const {title, content, user_id} = req.body;
        console.log(title , content)
        const newPost = await db.query(`INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *`, [title, content, user_id])
        res.json(newPost.rows[0])
    }

    async getAllPosts(req,res) {
        const posts = await db.query(`SELECT * FROM post`)
        res.json(posts.rows)
    }


    async getPostsByUser(req,res){
        const id = req.query.id
        const posts = await db.query(`SELECT * FROM post where user_id = $1`,[id])
        res.json(posts.rows)
    }
    async getOnePost(req,res){
        const id = req.params.id // потому что id мы определили в routes
        const post = await db.query(`SELECT * FROM post where id = $1`, [id])
        res.json(post.rows[0])
    }
    async getUpdatePost(req,res){
        const {id, title, content} = req.body
        const post = await db.query(`UPDATE post set title = $2, content = $3 where id = $1 RETURNING *`, [id, title, content])
        res.json(post.rows[0])
    }
    async deletePost(req,res){
        const id = req.params.id // потому что id мы определили в routes
        const post = await db.query(`DELETE FROM post where id = $1 RETURNING *`, [id])
        res.json(post.rows[0])
    }
}

module.exports = new PostController();