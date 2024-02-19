import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterAction, toggleAction } from "../store";

const Controls = () => {
  const dispatch = useDispatch();
  const input = useRef();

  const handleIncrement = () => {
    dispatch(counterAction.increment())
  };

  const handleDecrement = () => {
    dispatch(counterAction.decrement())
  };

  const handleAdd = () => {
    dispatch(counterAction.add(input.current.value))
    input.current.value = ""
  };

  const handleSubtract = () => {
    dispatch(counterAction.subtract(input.current.value))
    input.current.value = ""
  };

  const handleToggle = () => {
    dispatch(toggleAction.toggle())
  }

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handleToggle}
        >
          Toggle
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          placeholder="Enter num"
          className="number-input"
          ref={input}
        />
        <button type="button" className="btn btn-info" onClick={handleAdd}>
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
