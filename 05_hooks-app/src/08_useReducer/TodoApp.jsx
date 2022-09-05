import {useTodos} from '../Hooks';
import {TodoAdd} from './TodoAdd/TodoAdd';
import {TodoList} from './TodoList/TodoList';


const TodoApp = () => {
	
	// useTodo
	// exponer los todos
	// handleDeleteTodo, handleToggleTodo, handleNewTodo
	
	const {
		todos, handleDeleteTodo, todosCount, pendingTodosCount, handleToggleTodo, handleNewTodo
	} = useTodos();
	return (
		<>
			<h1>TodoApp: {todosCount}<small>Pendientes: {pendingTodosCount}</small></h1>
			<hr />
			
			<div className='row'>
				<div className='col-7'>
					<TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
				</div>
				<div className='col-5'>
					<h4>Agregar TODO</h4>
					<hr />
					<TodoAdd onNewTodo={handleNewTodo} />
				</div>
			</div>
		
		</>
	);
};

export {TodoApp};