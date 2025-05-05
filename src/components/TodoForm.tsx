"use client";

import { useState, useEffect } from "react";
import { TodoType } from "@/types/Todo.type";
import * as Style from "@/styles/todo.styled";

const TodoForm = () => {
	const [todo, setTodo] = useState("");
	const [todos, setTodos] = useState<TodoType[]>([]);

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => setTodo(event.target.value);

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (todo.trim() === "") return;

		setTodos((prevArray) => [{ id: Date.now(), text: todo }, ...prevArray]);
		setTodo("");
	};

	const deleteTodo = (id: number) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	useEffect(() => {
		const saved = localStorage.getItem("todos");

		if (saved) {
			setTodos(JSON.parse(saved));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input type="text" value={todo} onChange={onChange} placeholder="오늘 할 일..." />
				<button>추가</button>
			</form>

			<Style.Ul>
				{todos.map((item) => (
					<Style.Li key={item.id}>
						{item.text}
						<button onClick={() => deleteTodo(item.id)}>삭제</button>
					</Style.Li>
				))}
			</Style.Ul>
		</div>
	);
};

export default TodoForm;
