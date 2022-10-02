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
    fetch("https://nasa-space-app-api.herokuapp.com/filter?level=Intermediate")
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
          <div>
            {/* <!--Navbar Started--> */}
            <nav class="navbar navbar-expand-lg bg-light">
              <div class="container-fluid">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="flase"
                      >
                        Theme
                      </a>
                      <ul class="dropdown-menu">
                        <li>
                          <a class="dropdown-item" href="#">
                            Climate
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Agriculture
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Disaster
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Water Resource
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="flase"
                      >
                        Mode
                      </a>
                      <ul class="dropdown-menu">
                        <li>
                          <a class="dropdown-item" href="#">
                            Online
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            In Person
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="flase"
                      >
                        Language
                      </a>
                      <ul class="dropdown-menu">
                        <li>
                          <a class="dropdown-item" href="#">
                            English
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Spanish
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            {/* <!--NavBar Ended--> */}
          </div>
          {items.map((item) => (
            <ol key={item.id}>
              <div className="card">
                <p>{item.date}</p>
                <span className="bar"></span>
                <p className="btc"> Title:{item.Title}</p>
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
