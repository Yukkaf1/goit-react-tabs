import PropTypes from 'prop-types';
import { Button } from './Counter.styled';

export const Controls = ({ onDecrement, onIncrement }) => {
  return (
    <>
      <Button type="button" name="Increment" onClick={onIncrement}>
        Увеличить на 1
      </Button>
      <Button type="button" name="Decrement" onClick={onDecrement}>
        Уменьшить на 1
      </Button>
    </>
  );
};

Controls.propTypes = {
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
};
