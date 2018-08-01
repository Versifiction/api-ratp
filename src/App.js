import React, { Component } from 'react';
import './css/App.css';
import axios from 'axios';
import Info from './Info'
import Input from './Input'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

    state = {
        json : {},
        dataInput : ""
    }

    getDataFromInput = (evt) => {
        this.setState({
          dataInput: evt.target.value,
        })
    }

    clickBtn = () => {
        this.getDataFromApi();
    }

    getDataFromApi = () => {
        axios.get(`https://api-ratp.pierre-grimaud.fr/v3/schedules/metros/6/${this.state.dataInput === "" ? "dupleix" : this.state.dataInput}/A+R`)
        .then((response) => {
            console.log(response);
            this.setState({
            json : response.data.result.schedules 
            }, () => {
            console.log(this.state.json)
            })
        })
        .catch((error) => { // handle error
            console.log(error);
        })
    }

    beforeRender = () => {
        if(this.state.json[0]) {
          return (
            <div>
              <Info station= {this.state.dataInput === "" ? "Dupleix" : this.state.dataInput} data={this.state.json}/>
            </div>
          )
        }
    }

    render () {
        return (
            <div className="container">
                <div className="page">
                    <h1 className="text-center">Horaires Métro Ligne 6 RATP</h1>
                    <h2>Recherchez un horaire</h2>
                    <Input btnF={this.clickBtn} input={this.getDataFromInput}/>
                    {this.beforeRender()}
                </div>
            </div>
        )
    }
}

export default App;