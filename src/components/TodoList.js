import React, { useState } from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'
import { addTodo } from '../actions'

const TodoList = ({ todos, addTodo }) => {
    const [newTodoText, setNewTodoText] = useState('')

    const handleInputChange = (event) => {
        setNewTodoText(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        if (newTodoText.trim() !== '') {
            addTodo(newTodoText.trim())
            setNewTodoText('')
        }
    }

    return (
        <div className='wrapper'>
            <div className='todo-list'>
                <form onSubmit={handleFormSubmit}>
                    <input
                        className='todo-list_search_input'
                        type='text'
                        placeholder='Add a new Todo...'
                        value={newTodoText}
                        onChange={handleInputChange}
                    />
                    <button className='todo-list_add_input' type='submit'>Add</button>
                </form>
                {todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} />
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos
})

export default connect(mapStateToProps, { addTodo })(TodoList)