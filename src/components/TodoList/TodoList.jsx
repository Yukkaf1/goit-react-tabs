import PropTypes from 'prop-types';
import {
  TodoButton,
  TodoItem,
  TodoTitle,
  TodoCheck,
  TodoSection,
  TodoText,
} from './TodoList.styled';

export const TodoList = ({ todos, onDeleteTodo }) => (
  <TodoSection>
    <TodoTitle>ToDo List</TodoTitle>
    <TodoCheck>
      {todos.map(({ id, text }) => (
        <TodoItem key={id}>
          <TodoText>{text}</TodoText>
          <TodoButton onClick={() => onDeleteTodo(id)}>X</TodoButton>
        </TodoItem>
      ))}
    </TodoCheck>
  </TodoSection>
);
