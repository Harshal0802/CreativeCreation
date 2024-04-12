import Button from "./Button";
import Color from "./Color";
import Creative from "./Creative";
import Input from "./Input";

const Dashboard = () => {
  return (
    <div className="dashboard_container">
      <h3>Filter By:</h3>
      <section className="filter_container">
        <div className="dashboard_color_container">
          <Color title="color" />
        </div>
        <Input
          title="title / subtitle"
          placeholder="search across title and subtitle"
        />
      </section>
      <section className="creative_limit"></section>
      <Button btnName="+ Add Creative" />
      <div className="creative_container">
      <Creative title="This is a title!" subtitle="This is a subtitle!" />
      <Creative title="This is a title!" subtitle="This is a subtitle!" />
      <Creative title="This is a title!" subtitle="This is a subtitle!" />
      <Creative title="This is a title!" subtitle="This is a subtitle!" />
      <Creative title="This is a title!" subtitle="This is a subtitle!" />
      <Creative title="This is a title!" subtitle="This is a subtitle!" />
      </div>
    </div>
  );
};
export default Dashboard;
