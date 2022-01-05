import Prop from 'prop-types';

export const Button = ({ onClick, text, counter }) => {
  return (
    <button onClick={onClick}>
      Counter {text} {counter}
    </button>
  );
};

Button.propTypes = {
  onClick: Prop.func.isRequired,
  text: Prop.string.isRequired,
  counter: Prop.number.isRequired,
};
