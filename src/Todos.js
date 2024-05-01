import React, {memo, useState} from "react";

const Todos = () => {
    console.log("child render");
    const [todos, setTodos] = useState(["todo 1", "todo 2"]);

    const handleClick = () => {
        console.log("clicked");
        setTodos((t) => [...t, `todo ${t.length + 1}`]);
    }

    return (
        <>
            <h2>My Todos</h2>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
            <button onClick={handleClick}>Add todo</button>
        </>
    );
};

export default memo(Todos);