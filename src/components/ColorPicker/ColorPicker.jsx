import PropTypes from 'prop-types';
import {
  ColorPickerTitle,
  ColorSection,
  Wrapper,
  ColorList,
  ColorButton,
  ColorItem,
  ColorLabel,
} from './ColorPicker.stzled';
import { Component } from 'react';

export class ColorPicker extends Component {
  static defaultProps = {};

  state = {
    activeColorIdx: 3,
  };

  render() {
    return (
      <Wrapper>
        <ColorPickerTitle>{this.props.title}</ColorPickerTitle>
        <ColorSection>
          {this.props.colors.map(({ color, label }, index) => {
            return (
              <ColorButton
                key={label}
                style={{
                  background: color,
                  border:
                    index === this.state.activeColorIdx
                      ? '5px solid black'
                      : 'none',
                }}
              ></ColorButton>
            );
          })}
        </ColorSection>
      </Wrapper>
    );
  }
}

ColorPicker.propTypes = {
  title: PropTypes.string,
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};
