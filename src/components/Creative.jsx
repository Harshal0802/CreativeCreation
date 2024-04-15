const Creative = ({ title, subtitle, bgColor }) => {
  return (
    <div
      className="creation_container"
      style={{ backgroundColor: `${bgColor}` }}
    >
      <h2>{title}</h2>
      <h4>{subtitle}</h4>
    </div>
  );
};

export default Creative;
