"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/redux/store";
import { addTodoAsync } from "@/redux/todos/services";
import { useToast } from "@/hooks/use-toast";

// Types for Todo
import { Todo } from "@/types/todo.types";

  const TodoForm: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const { toast } = useToast();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("#262626"); // Default color

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newTodo: Omit<Todo, 'id'> = {
      title,
      description,
      color,
      completed: false, // Default to not completed
    };
    await dispatch(addTodoAsync(newTodo)).unwrap();
    toast({
      title: "Todo added successfully",
    });
    setTitle("");
    setDescription("");
    setColor("#262626"); // Reset to default color
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="color">Color</label>
        <input
          type="color"
          id="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      <button
        type="submit"
        style={{ backgroundColor: color }}
        className="peer shrink-0 border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground rounded-full border-2 w-5 h-5 m-1"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;