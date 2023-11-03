//Many To Many relationship
const addAuthorsComponent = require("../../components/v1/author_crud/addAuthors")
const addBooksComponent = require("../../components/v1/author_crud/addBooks")
const booksWrittenByAuthorComponent = require("../../components/v1/author_crud/booksByAuthor")
const addRelationshipsComponent = require("../../components/v1/author_crud/addRelationships")
const getAllAuthorsComponent = require("../../components/v1/author_crud/get.all.authors")
const authorsBooksViewComponent = require("../../components/v1/author_crud/authorsBooksView")

const authorRouter = require("express").Router()

authorRouter.post("/author", addAuthorsComponent)
authorRouter.post("/books", addBooksComponent)
authorRouter.post("/author_book_relationship", addRelationshipsComponent)
authorRouter.get("/books_by_author/:authorId", booksWrittenByAuthorComponent)
authorRouter.get("/all_authors", getAllAuthorsComponent)
authorRouter.get("/view_info", authorsBooksViewComponent )

module.exports = authorRouter
