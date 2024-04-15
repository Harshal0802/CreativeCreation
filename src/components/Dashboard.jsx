import Button from "./Button";
import Color from "./Color";
import Creative from "./Creative";
import Input from "./Input";
import { useState, useEffect } from "react";
import { openDrawer, filterCreatives} from "../store/slice";
import { useSelector, useDispatch } from "react-redux";

const Dashboard = ({ drawer }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.creative);
  const [titleOrSubTitle, setTitleOrSubTitle] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    dispatch(filterCreatives({ titleOrSubTitle, color }));
  }, [titleOrSubTitle, color, dispatch]);
  return (
    <div className="dashboard_container">
      <h3>Filter By:</h3>
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
          <div className="fill_container">50%</div>
        </div>
        <h4>0 / 5 Creatives</h4>
      </section>
      <Button
        btnName="+ Add Creative"
        handlerDrawer={openDrawer}
        btnState={drawer}
      />
      <div className="creative_container">
        {items.creatives?.length > 0
          ? items.creatives.map((item, index) => {
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
        {/* <Creative title="This is a title!" subtitle="This is a subtitle!" />
        <Creative title="This is a title!" subtitle="This is a subtitle!" />
        <Creative title="This is a title!" subtitle="This is a subtitle!" />
        <Creative title="This is a title!" subtitle="This is a subtitle!" />
        <Creative title="This is a title!" subtitle="This is a subtitle!" /> */}
      </div>
    </div>
  );
};
export default Dashboard;
