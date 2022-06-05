import { useContext, createContext, useReducer } from "react";
const TodoContext = createContext();
const TodoContextDisptcher = createContext();
const initialState = [];
const reducer = (state, action) => {
  const index = state.findIndex((task) => task.id === action.id);
  const selectedTask = { ...state[index] };
  const cloneTasks = [...state];
  switch (action.type) {
    case "createTask":
      const newTask = {
        id: new Date().valueOf(),
        icon: action.icon,
        TaskType: action.taskType,
        WhatDo: action.WhatDo,
        WhereDo: action.WhereDo,
        TimeDo: action.WhenDo,
        isCompelete: false,
      };
      return [...cloneTasks, newTask];
    case 'compeleted':
      selectedTask.isCompelete = !selectedTask.isCompelete;
      cloneTasks[index] = selectedTask;
      console.log(selectedTask);
      return cloneTasks;
    case 'remove':
      const RemoveTask = state.filter((task) => task.id !== action.id);
      return RemoveTask;
    default:
      return state;
  }
};
const Provider = ({ children }) => {
  const [Todo, Dispatch] = useReducer(reducer, initialState);
  return (
    <TodoContext.Provider value={Todo}>
      <TodoContextDisptcher.Provider value={Dispatch}>
        {children}
      </TodoContextDisptcher.Provider>
    </TodoContext.Provider>
  );
};
export default Provider;
export const useTodo = () => useContext(TodoContext);
export const useTodoAction = () => useContext(TodoContextDisptcher);
