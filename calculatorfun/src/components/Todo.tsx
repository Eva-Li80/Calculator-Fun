import React, { useState } from "react";

const Todo = () => {
    const [todo, setTodo] = useState<string[]>([]);
    const [newTodo, setNewTodo] = useState<string>("");

    const handleaddTodo = () => {
        if (newTodo.trim() === "") return;
        setTodo([...todo, newTodo]);
        setNewTodo("");
    };

    const handleRemoveTodo = (id: number) => {
        const update = todo.filter((_, t) => t !== id);
        setTodo(update);
    };

    return (
        <div>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <ul>
                {todo.map((t, index) => (
                    <li>
                        {t} <button onClick={() => handleRemoveTodo(index)}>X</button>
                    </li>
                ))}
            </ul>
            <button onClick={handleaddTodo}>add todo</button>
        </div>
    );
};

export default Todo;
