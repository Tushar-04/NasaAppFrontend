import React from "react";
import { Link } from "react-router-dom";
import "./PricingStyles.css";

class Pricing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: {},
      DataisLoaded: false,
    };
  }
  componentDidMount() {
    fetch("https://nasa-space-app-api.herokuapp.com/all")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json.Data,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h3> Pleses wait some time.... </h3>{" "}
        </div>
      );
    return (
      <div className="pricing">
        <div className="card-container">
          {items.map((item) => (
            <ol key={item.id}>
              <div className="card" >
                <p className="btc"> {item.Title}</p>
                <p>{item.Theme}</p>
                {/* <p>- Views -</p>
                <p>- Featured -</p>
                <p>- Private Quarters -</p> */}
                <a href={item.Link} className="btn">
                  Course
                </a>
              </div>
              {/* Title: , Desc: , Theme:{item.Theme}
            Language: {item.Language}
            Date: {item.Date}
            Mode: {item.Mode} */}
            </ol>
          ))}
        </div>
      </div>
    );
  }
}

export default Pricing;
