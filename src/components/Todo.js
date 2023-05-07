import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { toggleTodo, deleteTodo } from '../actions'

const Todo = ({ todo, toggleTodo, deleteTodo }) => {
    const todoRef = useRef(null)

    const handleToggle = () => {
        toggleTodo(todo.id)
    }

    const handleDelete = () => {
        todoRef.current.style.opacity = 0;
        setTimeout(() => {
            deleteTodo(todo.id)
        }, 400);
    }

    return (
        <div ref={todoRef} onClick={handleToggle} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <p className='todo-text'  >
                {todo.text}
            </p>
            <button className='delete-btn' onClick={handleDelete}>
                X
            </button>
        </div>
    )

}

export default connect(null, { toggleTodo, deleteTodo })(Todo);