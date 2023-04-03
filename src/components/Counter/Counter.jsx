import { Component } from 'react';
import { Controls } from './Controls';
import { Wrapper, CounterValue } from './Counter.styled';

export class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    // value: 0,
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    // this.setState({value: 10,})

    this.setState(prevState => ({ value: prevState.value + 1 }));
  };

  handleDecrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value - 1,
      };
    });
  };

  render() {
    return (
      <Wrapper>
        <CounterValue> {this.state.value}</CounterValue>
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
        <Wrapper></Wrapper>
      </Wrapper>
    );
  }
}
