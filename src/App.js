import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import SingleOrder from './SingleOrder'
import Signin from "./Signin";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
    }
  }


  choosePage = () => {

    return (
        <div className={'content'}>
          <Navbar/>
          {this.state.logged ?
            <div className="">
              <SingleOrder/>
            </div>
            :
              <Signin/>
        }

        </div>

    )

  }

  render() {
    return (
        this.choosePage()
    );
  }
}

export default App;
