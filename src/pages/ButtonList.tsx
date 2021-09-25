import { Button } from "../components/Button";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
const ButtonList = () => {
  return (
    <div className="list">
      <header className="list__header">Buttons</header>

      {/* Default Button */}
      <div className="list__type">
        <span className="list__type--ele">
          <h1 className="heading">{"<Button/>"}</h1>
          <Button>Default</Button>
        </span>
      </div>
      {/* Button varients */}
      <div className="list__type">
        <span className="list__type--ele">
          <h1 className="heading">{'<Button varient="outline" />'}</h1>
          <Button variant="outline">Default</Button>
        </span>
      </div>
      {/* Button varients */}
      <div className="list__type">
        <span className="list__type--ele">
          <h1 className="heading">{'<Button varient="text" />'}</h1>
          <Button variant="text">Default</Button>
        </span>
      </div>
      {/* Button disabled */}
      <div className="list__type">
        <span className="list__type--ele">
          <h1 className="heading">{"<Button disabled />"}</h1>
          <Button disabled>Default</Button>
        </span>
      </div>
      {/* Button shadow disables */}
      <div className="list__type">
        <span className="list__type--ele">
          <h1 className="heading">{"<Button disableShadow />"}</h1>
          <Button disableShadow color="primary">
            Default
          </Button>
        </span>
      </div>
      {/* Button with icons */}
      <div className="list__type">
        <span className="list__type--ele">
          <h1 className="heading">{"<Button startIcon={<FaShopigy/>} />"}</h1>
          <Button color="primary" startIcons={<FaShoppingCart />}>
            Default
          </Button>
        </span>
        <span className="list__type--ele">
          <h1 className="heading">{"<Button endIcon={<FaShopigy/>} />"}</h1>
          <Button color="primary" endIcon={<FaShoppingCart />}>
            Default
          </Button>
        </span>
      </div>
      {/* Button with different sizes */}
      <div className="list__type">
        <span className="list__type--ele">
          <h1 className="heading">{'<Button size="sm"> '}</h1>
          <Button color="primary" size="sm">
            Default
          </Button>
        </span>
        <span className="list__type--ele">
          <h1 className="heading">{'<Button size="md"> '}</h1>
          <Button color="primary" size="md">
            Default
          </Button>
        </span>
        <span className="list__type--ele">
          <h1 className="heading">{'<Button size="lg"> '}</h1>
          <Button color="primary" size="lg">
            Default
          </Button>
        </span>
      </div>
      {/* Button with different colors */}
      <div className="list__type" style={{flexWrap:"wrap"}}>
        <span className="list__type--ele">
          <h1 className="heading">{'<Button color="default"> '}</h1>
          <Button color="default" size="sm">
            Default
          </Button>
        </span>
        <span className="list__type--ele">
          <h1 className="heading">{'<Button color="primary"> '}</h1>
          <Button color="primary" size="md">
            Default
          </Button>
        </span>
        <span className="list__type--ele">
          <h1 className="heading">{'<Button color="secondary"> '}</h1>
          <Button color="secondary" size="lg">
            Default
          </Button>
        </span>
        <span className="list__type--ele">
          <h1 className="heading">{'<Button color="danger"> '}</h1>
          <Button color="danger" size="sm">
            Default
          </Button>
        </span>
      </div>
      <footer>
          <h1 className="list__footer">created by <b>Madan Naik</b>-devChallanges.io</h1>
      </footer>
    </div>
  );
};

export default ButtonList;
