import { TodoItem } from '.';
import { ITodo } from '../../App';


interface TodoListProps {
  todos: ITodo[];
  deleteTodo: (id: number) => void;
}

const TodoList = ({ todos, deleteTodo }: TodoListProps) => {
  return (
    <div className="todoList">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};

export default TodoList;
