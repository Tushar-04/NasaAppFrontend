import React from 'react'
import {Link} from 'react-router-dom'
import './PricingStyles.css'

class App extends React.Component {
    // Constructor
    constructor(props) {
      super(props);
  
      this.state = {
        items: {},
        DataisLoaded: false,
      };
    }
  
// ComponentDidMount is used to
  // execute the code
  componentDidMount(){
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
          <h1><Loader> Pleses wait some time.... </Loader></h1>{" "}
        </div>
      );
    else {
      console.log(items);
    }


const Pricing = () => {
    return (
        <div className='pricing'>
            <div className='card-container'>
                <div className='card'>
                    {/* <h3>- Basic -</h3>
                    <span className='bar'></span>
                    <p className='btc'>1 BTC</p>
                    <p>- 3 Days -</p>
                    <p>- Views -</p>
                    <p>- Featured -</p>
                    <p>- Private Quarters -</p>
                    <Link to='/contact' className='btn'>Book</Link> */}

return (
      <div className="App">
        <h1> Fetch data from an api in react </h1>{" "}
        {items.map((item) => (
          <ol key={item.id}>
            Title: {item.Title}, Desc: {item.Description}, Theme:{item.Theme}
            Language: {item.Language}
            Date: {item.Date}
            Mode: {item.Mode}
            Link:{item.Link}
          </ol>
        ))}
      </div>
    );

                </div>
                <div className='card'>
                    <h3>- Suite -</h3>
                    <span className='bar'></span>
                    <p className='btc'>1 BTC</p>
                    <p>- 3 Days -</p>
                    <p>- Views -</p>
                    <p>- Featured -</p>
                    <p>- Private Quarters -</p>
                    <Link to='/contact' className='btn'>Book</Link>
                </div>
                <div className='card'>
                    <h3>- Executive -</h3>
                    <span className='bar'></span>
                    <p className='btc'>1 BTC</p>
                    <p>- 3 Days -</p>
                    <p>- Views -</p>
                    <p>- Featured -</p>
                    <p>- Private Quarters -</p>
                    <Link to='/contact' className='btn'>Book</Link>
                </div>
            </div>
        </div>
    )
}

export default Pricing
