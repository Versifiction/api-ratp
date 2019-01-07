import React, { Component } from 'react';
import axios from 'axios';
import Select from '../../Atoms/Select';
import Input from '../../Atoms/Input';
import Button from '../../Atoms/Button';
import StationsResult from '../StationsResult';
import '../../../css/App.css';

class StationsContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            json: [],
            selectValue: "",
            selectInput: "",
            searchActive: false,
            errorMessage: "",
        }
    }

    clickButton = () => {
        this.dataTraficFromApi();
    }

    dataFromSelectInput = (evt) => {
        this.setState({
            selectInput: evt.target.value.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, ""),
        });
    }

    handleSelectValueChange = (event) => {
        this.setState({
          selectValue: event.target.value
        });
    }

    dataLinesFromApi = () => {
        const { selectValue } = this.state;
        axios.get(`https://api-ratp.pierre-grimaud.fr/v3/lines/${selectValue}`)
        .then((response) => {
            console.log(response);
            console.log('data lines from api');
            switch (selectValue) {
                case "metros":
                    this.setState({
                        json: response.data.result.metros,
                    }, () => {
                    });
                    break;
                case "rers":
                    this.setState({
                        json: response.data.result.rers,
                    }, () => {
                    });
                    break;
                case "bus":
                    this.setState({
                        json: response.data.result.bus,
                    }, () => {
                    });
                    break;
                case "noctiliens":
                    this.setState({
                        json: response.data.result.noctiliens,
                    }, () => {
                    });
                    break;
                case "tramways":
                    this.setState({
                        json: response.data.result.tramways,
                    }, () => {
                    });
                    break;
                default:
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }

    dataTraficFromApi = () => {
        const { selectValue, selectInput } = this.state;
        axios.get(`https://api-ratp.pierre-grimaud.fr/v3/stations/${selectValue}/${selectInput}`)
            .then((response) => {
                this.setState({
                    json: response.data.result.stations,
                    searchActive: true,
                }, () => {
                });
            })
            .catch((error) => {
                console.log(error);
                if (selectValue === "") {
                    this.setState({
                        errorMessage: "Veuillez choisir un mode de transport !",
                        searchActive: false,
                    }, () => {
                    });
                } else if (selectInput === "") {
                    this.setState({
                        errorMessage: "Veuillez choisir une ligne !",
                        searchActive: false,
                    }, () => {
                    });
                } else {
                    this.setState({
                        searchActive: false,
                        errorMessage: "La requête a échouée. Merci de vérifier que les données rentrées sont correctes. Si le soucis persiste, veuillez réessayer plus tard."
                    }, () => {
                    });
                }
            })
    }

    resetSearch = (evt) => {
        this.setState({
            json: [],
            selectValue: "",
            selectInput: "",
            searchActive: false,
            errorMessage: "",
        });
    }

    render () {
        const { searchActive, selectValue, selectInput, json, errorMessage } = this.state;
        return (
            <div className="content">
                <h1 className="text-center">{this.props.title}</h1>
                {!searchActive &&
                    <div>
                        <p className="content-description">Obtenez l'ensemble des stations desservies sur une ligne donnée</p>
                        <Select
                            id="transports"
                            handleChange={this.handleSelectValueChange}
                            label="1. Choisissez le mode de transport"
                        />
                        <Input
                            transport={this.dataFromSelectInput}
                            label="2. Choisissez le numéro de la ligne"
                            placeholder="Numéro de la ligne"
                            json={json}
                            datalist="ligne"
                            func={this.dataLinesFromApi}
                        />
                        {errorMessage && <p className="red">{errorMessage}</p>}
                        <Button
                            button={this.clickButton}
                            className="my-btn"
                            value="Rechercher"
                        />
                    </div>
                }
                {searchActive &&
                    <div>
                        <StationsResult
                            transport={selectValue}
                            line={selectInput}
                            data={json}
                        />
                        <Button
                            button={this.resetSearch}
                            className="my-btn"
                            value="Faire une nouvelle recherche"
                        />
                    </div>
                }
            </div>
        )
    }
}

export default StationsContent;