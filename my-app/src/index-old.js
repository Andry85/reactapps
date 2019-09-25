import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

var workers = [
  {
    name: "Peter",
    position: "Admin"
  },
  {
    name: "Oleg",
    position: "Director"
  },
  {
    name: "Ivan",
    position: "Manager"
  }
];

class Worker extends React.Component {
  render() {
    var name = this.props.data.name;
    var position = this.props.data.position;

    return (
      <div>
        <span className="worker__name">{name}:</span>
        <span className="worker__position">{position}</span>
      </div>
    );
  }
}

class Workers extends React.Component {
  render() {
    var companyWorkers = this.props.data;
    var listcompanyWorkers;

    if (companyWorkers.length > 0) {
      listcompanyWorkers = companyWorkers.map((item, index) => (
        <div key={index}>
          <Worker data={item} />
        </div>
      ));
    } else {
      listcompanyWorkers = (
        <p>Нет работников в компании: {this.props.campanyName}</p>
      );
    }

    return <div className="workers">{listcompanyWorkers}</div>;
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="company">
        <Workers data={workers} campanyName={"Google"} />
      </div>
    );
  }
}

Workers.propTypes = {
  data: PropTypes.array
};

ReactDOM.render(<App />, document.getElementById("root"));
