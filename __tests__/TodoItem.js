import React from 'react';
import { render } from '@testing-library/react'
import TodoItem from '../components/Todo/TodoItem';

test("Todo Item Components", () => {
    render(<TodoItem />)
})