import {fireEvent, render, screen} from '@testing-library/react';
import {TodoItem} from '../../src/08_useReducer/TodoItem/TodoItem';

describe('Pruebas en TodoItem', () => {
	
	const todo = {
		id: 1,
		description: 'Gema del alma',
		done: false,
	}
	
	const onDeleteTodoMock = jest.fn();
	const onToggleTodoMock = jest.fn();
	
	beforeEach(() => jest.clearAllMocks())
	
	test('Debe de mostrar el TODO pendiente por Completar', () => {
		render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock}/>)
		
		const liElement = screen.getByRole('listitem');
		expect(liElement.className).toBe('list-group-item d-flex justify-content-between align-items-center')
		
		const spanElement = screen.getByLabelText('span');
		expect(spanElement.className).toBe('');
	})
	
	test('Debe de mostrar el TODO Completado', () => {
		todo.done = true;
		render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock}/>)
	
		const spanElement = screen.getByLabelText('span');
		expect(spanElement.className).toContain('text-decoration-line-through');
	})
	
	test('El span debe de llamar al Toggle TODO cuando hace click', () => {
		render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock}/>)
		
		const spanElement = screen.getByLabelText('span');
		fireEvent.click(spanElement)
		
		expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id)
	})
	
	test('El button debe de llamar el Delete TODO', () => {
		render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock}/>)
		
		const deleteElement = screen.getByRole('button');
		fireEvent.click(deleteElement)
		
		expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id)
	})
	
});