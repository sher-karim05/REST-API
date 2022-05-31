const express = require('express');
const router = express.Router();

// these are the controllers 
// we will create all of them in the future
const{
    createTodo,
    getTodoById,
    getTodo,
    deleteTodo,
    getAllTodos,
    updateTodo,
} = require('../controllers/Todo')

//parameters 

//get the value of a single item 
router.param("todoId", getTodoById);

//create a todo.
router.get('/todos/:todoId/create', createTodo)
//to get All items of todo
router.get('/todos/', getAllTodos);

//get a single todo item
router.get('/todo/:todoId/', getTodo);

//to update a todo item
router.post("/todo/:todoId/update", updateTodo);

//to delete a todo item
router.put('/todos/:todoId/delete', deleteTodo);

