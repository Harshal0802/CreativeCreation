import Button from "./Button";
import Color from "./Color";
import Creative from "./Creative";
import Input from "./Input";
import { useEffect, useState } from "react";
import { openDrawer, getColors } from "../store/slice";
import { useSelector, useDispatch } from "react-redux";

const Dashboard = ({ drawer }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.creative);
  const [titleOrSubTitle, setTitleOrSubTitle] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    dispatch(getColors());
  }, [dispatch]);

  return (
    <div className="dashboard_container">
      <h3 className="dashboard_heading_text">Filter By:</h3>
      <section className="filter_container">
        <div className="dashboard_color_container">
          <Color title="color" value={color} onClick={setColor} />
        </div>
        <Input
          title="title / subtitle"
          placeholder="search across title and subtitle"
          value={titleOrSubTitle}
          onChange={setTitleOrSubTitle}
        />
      </section>
      <section className="creative_limit">
        <div className="creative_limit_container">
          <div
            className="fill_container"
            style={{ width: `${(items.creatives?.length / 5) * 100}%` }}
          ></div>
        </div>
        <h4 className="limit_text">{items.creatives?.length} / 5 Creatives</h4>
      </section>
      <Button
        btnName="+ Add Creative"
        handlerDrawer={openDrawer}
        btnState={items.creatives?.length > 4 ? true : drawer}
      />
      <div className="creative_container">
        {items?.creatives?.length !== 0
          ? items.creatives
              .filter((item) => {
                return (
                  item.title
                    .toLowerCase()
                    .includes(titleOrSubTitle?.toLowerCase()) ||
                  item.subTitle
                    .toLowerCase()
                    .includes(titleOrSubTitle.toLowerCase()) ||
                  item.color.includes(color)
                );
              })
              .map((item, index) => {
                return (
                  <Creative
                    key={index}
                    title={item.title}
                    subtitle={item.subTitle}
                    bgColor={item.color}
                  />
                );
              })
          : null}
      </div>
    </div>
  );
};
export default Dashboard;
