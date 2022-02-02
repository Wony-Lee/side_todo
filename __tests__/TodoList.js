import React from 'react';
import { render } from '@testing-library/react'
import TodoList from '../components/Todo/TodoList';

test("Todo Item Components", () => {
    render(<TodoList />)
    const todoItemComponents = screen.getByRole(<TodoItem />, {
        name: 'todoitem'
    })
    expect(todoItemComponents).toBeInTheDocument();
})
