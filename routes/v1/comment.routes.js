//Polymorphic Relationship
const addBlogsComponent = require("../../components/v1/comment_crud/addBlogs")
const addCommentComponent = require("../../components/v1/comment_crud/addComment")
const commentInfoComponent = require("../../components/v1/comment_crud/commentInfo") 

const commentRouter = require("express").Router()

commentRouter.post("/blog", addBlogsComponent)
commentRouter.post("/comment", addCommentComponent)
commentRouter.get("/info/:id", commentInfoComponent)

module.exports = commentRouter
