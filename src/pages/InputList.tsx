import React from "react";
import { FaCreditCard } from "react-icons/fa";
import { Input } from "../components/Input";

export const InputList = () => {
  return (
    <div className="list">
      <header className="list__header">Inputs</header>
      <div className="list__type">
        <span className="list__type--ele">
          <h1 className="heading margin-top">{"<Input/>"}</h1>
          <Input label="Label" placeholder="text" />
        </span>
      </div>
      <div className="list__type">
        <span className="list__type--ele">
          <h1 className="heading margin-top">{"<Input error />"}</h1>
          <Input label="Label" placeholder="text" error />
        </span>
      </div>
      <div className="list__type">
        <span className="list__type--ele">
          <h1 className="heading margin-top">{"<Input disabled />"}</h1>
          <Input label="Label" placeholder="text" disabled />
        </span>
      </div>
      <div className="list__type">
        <span className="list__type--ele">
          <h1 className="heading margin-top">
            {'<Input helperText="some text" />'}
          </h1>
          <Input label="Label" placeholder="text" helperText="some text" />
        </span>
        <span className="list__type--ele">
          <h1 className="heading margin-top">
            {'<Input helperText="some text" error/>'}
          </h1>
          <Input
            label="Label"
            placeholder="text"
            error
            helperText="some text"
          />
        </span>
      </div>
      <div className="list__type">
        <span className="list__type--ele">
          <h1 className="heading margin-top">
            {"<Input startIcon={<FaCrediCard} />"}
          </h1>
          <Input
            label="Label"
            placeholder="text"
            helperText="some text"
            startIcon={<FaCreditCard />}
          />
        </span>
        <span className="list__type--ele">
          <h1 className="heading margin-top">
            {"<Input endIcon={<FaCrediCard}/>"}
          </h1>
          <Input label="Label" placeholder="text" endIcon={<FaCreditCard />} />
        </span>
      </div>
      <div className="list__type">
        <span className="list__type--ele">
          <h1 className="heading margin-top">{'<Input size="sm" />'}</h1>
          <Input
            label="Label"
            placeholder="text"
            helperText="some text"
            size="sm"
          />
        </span>
        <span className="list__type--ele">
          <h1 className="heading margin-top">{'<Input size="md" />'}</h1>
          <Input label="Label" helperText="some text" placeholder="text" size="md" />
        </span>
      </div>
      <div className="list__type">
        <span className="list__type--ele" style={{ width: "70vw" }}>
          <h1 className="heading margin-top">{"<Input fullWidth />"}</h1>
          <Input label="Label" helperText="some text" placeholder="text" fullWidth size="md"/>
        </span>
      </div>
      <div className="list__type">
        <span className="list__type--ele" >
          <h1 className="heading margin-top">{"<Input multiline row={10} />"}</h1>
          <Input label="Label" helperText="some text" placeholder="text" multiline row={10}/>
        </span>
      </div>
      <footer>
          <h1 className="list__footer">created by <b>Madan Naik</b>-devChallanges.io</h1>
      </footer>
    </div>
  );
};
