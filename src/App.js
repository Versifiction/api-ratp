import React, { Component } from 'react';
import './css/App.css';
import axios from 'axios';
import Info from './Info';
import Select from './Select';
import Input from './Input';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            json: {},
            dataInput: "",
            selectValue: "",
            selectInput: "",
        }
    }

    dataFromInput = (evt) => {
        this.setState({
          dataInput: evt.target.value,
        })
    }

    clickButton = () => {
        this.dataFromApi();
    }

    dataFromSelectInput = (evt) => {
        this.setState({
            selectInput: evt.target.value,
        })
    }

    dataFromSelectValue = (e) => {
        this.setState({
            selectValue: e.target.value,
        }), function() {
            this.props.onChange(this.state.selectValue);
        }
    }

    handleSelectChange = (event) => {
        this.setState({
          selectValue: event.target.value
        })
    }

    dataFromApi = () => {
        axios.get(`https://api-ratp.pierre-grimaud.fr/v3/schedules/${this.state.selectValue}/${this.state.selectInput}/${this.state.dataInput === "" ? "dupleix" : this.state.dataInput}/A+R`)
        .then((response) => {
            console.log(response);
            this.setState({
            json : response.data.result.schedules 
            }, () => {
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
              <Info transport={this.state.selectValue} station={this.state.dataInput === "" ? "Dupleix" : this.state.dataInput} data={this.state.json}/>
            </div>
          )
        }
    }

    render () {
        return (
            <div className="container">
                <div className="page">
                    <h1 className="text-center">Horaires RATP</h1>
                    <h2>Recherchez un horaire</h2>
                    <Select selectInput={this.dataFromSelectInput} handleChange={this.handleSelectChange} />
                    <Input button={this.clickButton} input={this.dataFromInput} />
                    {this.beforeRender()}
                </div>
            </div>
        )
    }
}

export default App;