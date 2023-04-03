import { Component } from 'react';
import { Wrapper, Button, Menu } from './Dropdown.styled';

export class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  // show = () => {
  //   this.setState({ visible: true });
  // };

  // hide = () => {
  //   this.setState({ visible: false });
  // };

  render() {
    return (
      <Wrapper>
        <Button onClick={this.toggle}>
          {this.state.visible ? 'Скрыть' : 'Показать'}
        </Button>
        {/* <Button onClick={this.show}>Показать</Button>
        <Button onClick={this.hide}>Скрыть</Button> */}
        {this.state.visible && <Menu>Выпадающее меню</Menu>}
      </Wrapper>
    );
  }
}
