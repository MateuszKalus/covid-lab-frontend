import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import SingleOrder from './SingleOrder/SingleOrder'
import Signin from "./Signin/Signin";
import Navbar from "../components/Navbar/Navbar";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logged: false,
            currentOrder: null
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.currentOrder !== this.state.currentOrder) {
            if(this.state.currentOrder !== null) {
                this.setState({logged: true})
            } else this.setState({logged: false})
        }

    }

    logOut = () => {
        this.setState({logged: false})
    }

    logIn = (order_number, birthday) => {
        fetch('http://localhost:3001/getOrder', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "order_number": order_number,
                "birthday": birthday
            }),
        })
            .then(response => response.json())
            .then(data => {
                this.setState({currentOrder: data})
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    choosePage = () => {

        return (
            <div className={'content'}>

                {this.state.logged ?
                    <SingleOrder currentOrder={this.state.currentOrder}/>
                    :
                    <div>
                        <Signin logIn={this.logIn}/>
                    </div>
                }

            </div>

        )

    }

    render() {
        return (
            <div className={'App'}>
                <Navbar logOut={this.logOut} logged={this.state.logged}/>
                {this.choosePage()}
            </div>
        );
    }
}

export default App;
