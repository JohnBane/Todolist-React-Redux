import React, { useState } from "react";
import { connect } from 'react-redux'
import { addTodo } from "../actions";

const AddTodoForm = ({ addTodo }) => {
    const [newTodoText, setNewTodoText] = useState('');

    const handleInputChange = (event) => {
        setNewTodoText(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (newTodoText.trim() !== '') {
            addTodo(newTodoText.trim());
            setNewTodoText('');
        }
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <input
                type="text"
                placeholder="Add a new todo..."
                value={newTodoText}
                onChange={handleInputChange}
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default connect(null, { addTodo })(AddTodoForm);