import Input from "./Input";
import Color from "./Color";
import Button from "./Button";
import { closeDrawer, addCreatives } from "../store/slice";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";

const Drawer = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [color, setColor] = useState("");

  const creativeData = {
    title,
    subTitle,
    color,
  };

  const addCreativeCreations = () => {
    setTitle("");
    setSubTitle("");
    setColor("");
  };

  return (
    <div className="drawer_container">
      <div className="drawer_heading">
        <h3>Creative Creation</h3>

        <button
          className="close_button"
          onClick={() => dispatch(closeDrawer())}
        >
          <IoMdClose className="icon" />
        </button>
      </div>
      <div className="drawer_input_container">
        <Input
          title="title"
          placeholder="Enter text"
          value={title}
          onChange={setTitle}
        />
      </div>
      <div className="drawer_input_container">
        <Input
          title="subtitle"
          placeholder="Enter text"
          value={subTitle}
          onChange={setSubTitle}
        />
      </div>
      <div className="drawer_color_container">
        <Color title="background color" value={color} onClick={setColor} />
      </div>
      <div className="done_button">
        <Button
          btnName="Done"
          handlerDrawer={closeDrawer}
          data={creativeData}
          addCreatives={addCreatives}
          clearInputs={addCreativeCreations}
        />
      </div>
    </div>
  );
};

export default Drawer;
