'use client';

import React, { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]); // Estado com as tarefas, cada uma tendo um `id`, `text` e `completed`
  const [newTodo, setNewTodo] = useState(""); // Armazena a nova tarefa
  const [filter, setFilter] = useState("all"); // Armazena o filtro atual ('all', 'active', 'completed')
  const [darkMode, setDarkMode] = useState(false); // Alterna entre modo claro e escuro

  // Adiciona uma nova tarefa
  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  // Alterna o status de completado de uma tarefa
  const toggleTodoCompletion = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Marca todas as tarefas como completas
  const markAllAsCompleted = () => {
    setTodos(todos.map(todo => ({ ...todo, completed: true })));
  };

  // Exclui todas as tarefas
  const deleteAllTodos = () => {
    setTodos([]);
  };

  // Limpa todas as tarefas completadas
  const clearCompletedTodos = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  // Função para filtrar as tarefas de acordo com o filtro ativo
  const getFilteredTodos = () => {
    if (filter === "active") {
      return todos.filter(todo => !todo.completed);
    } else if (filter === "completed") {
      return todos.filter(todo => todo.completed);
    }
    return todos;
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 p-4">
        {/* Input para adicionar novas tarefas */}
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Adicione uma nova tarefa"
          className="p-2 rounded border dark:bg-gray-700 dark:text-white"
        />
        <button onClick={addTodo} className="ml-2 p-2 bg-blue-500 text-white rounded">
          Adicionar
        </button>

        {/* Botão para alternar entre modo claro e escuro */}
        <button onClick={() => setDarkMode(!darkMode)} className="ml-2 p-2 bg-green-500 text-white rounded">
          Alternar Modo {darkMode ? "Claro" : "Escuro"}
        </button>

        {/* Botões de funcionalidade */}
        <div className="mt-4">
          <button onClick={markAllAsCompleted} className="mr-2 p-2 bg-yellow-500 text-white rounded">
            Marcar todos como completos
          </button>
          <button onClick={deleteAllTodos} className="mr-2 p-2 bg-red-500 text-white rounded">
            Excluir todas as tarefas
          </button>
          <button onClick={clearCompletedTodos} className="mr-2 p-2 bg-purple-500 text-white rounded">
            Limpar todos os completados
          </button>
        </div>

        {/* Filtros */}
        <div className="mt-4">
          <button onClick={() => setFilter("all")} className="mr-2 p-2 bg-gray-500 text-white rounded">
            Todos
          </button>
          <button onClick={() => setFilter("active")} className="mr-2 p-2 bg-blue-500 text-white rounded">
            Ativos
          </button>
          <button onClick={() => setFilter("completed")} className="p-2 bg-green-500 text-white rounded">
            Completos
          </button>
        </div>

        {/* Exibe as tarefas filtradas */}
        <ul className="mt-4">
          {getFilteredTodos().map((todo) => (
            <li key={todo.id} className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodoCompletion(todo.id)}
                className="mr-2"
              />
              <span className={todo.completed ? "line-through" : ""}>{todo.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
