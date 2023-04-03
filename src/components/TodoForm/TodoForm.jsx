import { Component } from 'react';
import { Formik } from 'formik';
import { Form, FormField } from './TodoForm.styled';
import * as Yup from 'yup';

export class TodoForm extends Component {
  static defaultProps = {};

  state = {
    todos: [
      { id: 'id-1', text: 'Todo 1', completed: false },
      { id: 'id-2', text: 'Todo 2', completed: false },
      { id: 'id-3', text: 'Todo 3', cpmpleted: true },
      { id: 'id-4', text: 'Todo 4', completed: false },
      { id: 'id-5', text: 'Todo 5', completed: true },
    ],
    inputValue: 'Deine Aufgabe',
    message: '',
  };

  handlChange = event => {
    console.log(event.target.value);
    this.setState({ message: event.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('submit', this.state);
    this.props.onSubmit(this.state.message);

    this.setState({ message: '' });
    // resetForm({ values: '' });
  };

  render() {
    const { todos } = this.state;

    return (
      <Formik>
        <Form onSubmit={this.handleSubmit}>
          <FormField>
            <input
              type="text"
              onChange={this.handlChange}
              value={this.state.massege}
            />
          </FormField>
          <button type="submit">Add</button>
        </Form>
      </Formik>
    );
  }
}
