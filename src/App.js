import React, { Component } from 'react';
import './css/App.css';
import axios from 'axios';
import Info from './Info';
import Select from './Select';
import Input from './Input';
import Button from './Button';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            json: {},
            dataInput: "",
            selectValue: "",
            selectInput: "",
            searchActive: false,
        }
    }

    dataFromInput = (evt) => {
        this.setState({
          dataInput: evt.target.value.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, ""),
        })
    }

    clickButton = () => {
        this.dataFromApi();
        this.setState({
            searchActive: true,
        });
    }

    dataFromSelectInput = (evt) => {
        this.setState({
            selectInput: evt.target.value.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, ""),
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
              <Info transport={this.state.selectValue} station={this.state.dataInput === "" ? "Dupleix" : this.state.dataInput} data={this.state.json} />
            </div>
          )
        }
    }

    resetSearch = (evt) => {
        this.setState({
            json: {},
            dataInput: "",
            selectValue: "",
            selectInput: "",
            searchActive: false,
        });
    }

    render () {
        const { searchActive } = this.state;
        return (
            <div className="container">
                <div className="page">
                    <h1 className="text-center">Horaires RATP</h1>
                    {!searchActive &&
                        <Select selectInput={this.dataFromSelectInput} handleChange={this.handleSelectChange} />
                    }
                    {!searchActive &&
                        <Input button={this.clickButton} input={this.dataFromInput} />
                    }
                    {this.beforeRender()}
                    {searchActive &&
                        <Button
                        button={this.resetSearch}
                        className="btn"
                        value="Faire une nouvelle recherche"
                        />
                    }
                </div>
            </div>
        )
    }
}

export default App;