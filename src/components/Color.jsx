import { useSelector } from "react-redux";

const Color = ({ title, value, onClick }) => {
  const colors = useSelector((state) => state.creative?.colors);

  return (
    <div className="color_container">
      <h4 className="color_heading">{title}</h4>
      <div className="color_palette">
        {colors?.colors?.map((item, index) => {
          return (
            <div
              key={index}
              className="color_btn"
              style={{ borderColor: item == value ? "#000000" : "#ffffff" }}
            >
              <button
                className="color"
                onClick={() => onClick(item)}
                style={{ backgroundColor: item }}
              ></button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Color;
