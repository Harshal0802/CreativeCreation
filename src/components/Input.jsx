const Input = ({ title, placeholder, value, onChange }) => {
  return (
    <div className="input_container">
      <h4 className="input_text_header">{title}</h4>
      <div className="input_text_container">
        <input
          required
          type="text"
          placeholder={placeholder}
          className="input_text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Input;
