"use client";

import { useState } from "react";

const TodoForm = () => {
	const [todo, setTodo] = useState("");
	const [todos, setTodos] = useState<string[]>([]);

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => setTodo(event.target.value);

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (todo === "") return;

		setTodos((prevArray) => [todo, ...prevArray]);
		setTodo("");
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input type="text" value={todo} onChange={onChange} placeholder="오늘 할 일..." />
				<button>추가</button>
			</form>

			<ul>
				{todos.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
};

export default TodoForm;
