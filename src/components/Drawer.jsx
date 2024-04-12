import Input from "./Input";
import Color from "./Color";
import Button from "./Button";

const Drawer = () => {
  return (
    <div className="drawer_container">
      <div className="drawer_heading">
        <h3>Creative Creation</h3>
        <div>+</div>
      </div>
      <div className="drawer_input_container">
        <Input title="title" placeholder="Enter text" />
      </div>
      <div className="drawer_input_container">
        <Input title="subtitle" placeholder="Enter text" />
      </div>
      <div className="drawer_color_container">
        <Color title="background color" />
      </div>
      <div className="done_button">
        <Button btnName="Done" />
      </div>
    </div>
  );
};

export default Drawer;
