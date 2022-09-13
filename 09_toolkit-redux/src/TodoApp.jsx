import {useState} from 'react';
import {useGetTodosQuery, useGetTodoByIdQuery} from './store/api';

const TodoApp = () => {
	
	const [todoId, setTodoId] = useState(1);
	
	// const {data: todos = [], isLoading, isFetching} = useGetTodosQuery();
	const {data: todo, isLoading} = useGetTodoByIdQuery(todoId);
	
	const previousTodo = () => {
		if (todoId === 1) return;
		setTodoId(todoId - 1);
	};
	const nextTodo = () => {
		setTodoId(todoId + 1);
	};
	
	
	return (
		<>
			<h1>TodoApp</h1>
			<hr />
			
			<h4>isLoading: {isLoading ? 'True' : 'False'}</h4>
			<pre>{JSON.stringify(todo)}</pre>
			<button onClick={previousTodo}>
				Previous Todo
			</button>
			<button onClick={nextTodo}>
				Next Todo
			</button>
			{/* <ul> */}
			{/* 	{ */}
			{/* 		todos.map((todo) => ( */}
			{/* 			<li key={todo.id}> */}
			{/* 				<strong>{todo.completed ? 'Done ' : 'Pending '}</strong> */}
			{/* 				{todo.title} */}
			{/* 			</li> */}
			{/* 		)) */}
			{/* 	} */}
			{/* </ul> */}
		
		</>
	);
};

export {TodoApp};