import { useDispatch } from "react-redux";

const Button = ({
  btnName,
  handlerDrawer,
  btnState,
  data,
  addCreatives,
  clearInputs,
}) => {
  const dispatch = useDispatch();
  return (
    <button
      disabled={btnState}
      style={{ border: btnState && "2px solid #b4b4b4" }}
      className="button"
      onClick={() => {
        dispatch(handlerDrawer());
        if (data?.title != "" && data?.subtitle != "" && data?.color != "") {
          addCreatives && dispatch(addCreatives(data));
        }
        clearInputs && clearInputs();
      }}
    >
      <h4>{btnName}</h4>
    </button>
  );
};

export default Button;
