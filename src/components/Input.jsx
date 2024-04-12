const Input = ({ title, placeholder }) => {
  return (
    <div className="input_container">
      <h4 className="input_text_header">{title}</h4>
      <div className="input_text_container">
        <input type="text" placeholder={placeholder} className="input_text" />
      </div>
    </div>
  );
};

export default Input;
