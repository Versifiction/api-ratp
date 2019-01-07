import React, { Component } from 'react';
import '../../../css/App.css';
import axios from 'axios';
import HorairesResult from '../HorairesResult';
import Select from '../../Atoms/Select';
import Input from '../../Atoms/Input';
import Button from '../../Atoms/Button';

class HorairesContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            json: [],
            dataInput: "",
            selectValue: "",
            selectInput: "",
            searchActive: false,
            errorMessage: "",
        }
    }

    dataFromInput = (evt) => {
        this.setState({
            dataInput: evt.target.value.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, ""),
        });
    }

    dataFromSelectInput = (evt) => {
        this.setState({
            selectInput: evt.target.value.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, ""),
        });
    }

    dataFromSelectValue = (evt) => {
        this.setState({
            selectValue: evt.target.value,
        });
    }

    handleDataInputChange = (event) => {
        this.setState({
          dataInput: event.target.valuetrim().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        });
    }

    handleSelectInputChange = (event) => {
        this.setState({
          selectInput: event.target.valuetrim().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        });
    }

    handleSelectValueChange = (event) => {
        this.setState({
          selectValue: event.target.value
        });
    }

    dataSchedulesFromApi = () => {
        const { dataInput, selectValue, selectInput } = this.state;
        axios.get(`https://api-ratp.pierre-grimaud.fr/v3/schedules/${selectValue}/${selectInput}/${dataInput === "" ? "chevaleret" : dataInput}/A+R`)
        .then((response) => {
            console.log(response);
            this.setState({
                json: response.data.result.schedules,
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
            } else if (dataInput === "") {
                this.setState({
                    errorMessage: "Veuillez choisir une station !",
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

    dataStationsFromApi = () => {
        const { selectValue, selectInput } = this.state;
        axios.get(`https://api-ratp.pierre-grimaud.fr/v3/stations/${selectValue}/${selectInput}`)
        .then((response) => {
            console.log(response);
            console.log('data stations from api');
            this.setState({
                json: response.data.result.stations,
            }, () => {
            });
        })
        .catch((error) => {
            console.log(error);
        })
    }

    beforeRender = () => {
        const { selectValue, dataInput, json, searchActive } = this.state;
        if(json[0] && searchActive) {
          return (
            <div>
                <HorairesResult
                    transport={selectValue}
                    station={dataInput.toUpperCase()}
                    data={json}
                />
            </div>
          )
        }
    }

    resetSearch = (evt) => {
        this.setState({
            json: [],
            dataInput: "",
            selectValue: "",
            selectInput: "",
            searchActive: false,
            errorMessage: ""
        });
    }

    render () {
        const { searchActive, errorMessage, json } = this.state;
        return (
            <div className="content">
                <h1 className="text-center">{this.props.title}</h1>
                {!searchActive &&
                    <div>
                        <p className="content-description">Obtenez les temps de passage des prochains transports à une station donnée</p>
                        <Select
                            id="transports"
                            handleChange={this.handleSelectValueChange}
                            label="1. Choisissez le mode de transport"
                        />
                        <Input
                            transport={this.dataFromSelectInput}
                            ligne={this.dataFromSelectInput}
                            station={this.dataFromSelectValue}
                            func={this.dataLinesFromApi}
                            label="2. Choisissez le numéro de la ligne"
                            placeholder="Numéro de la ligne"
                            datalist="ligne"
                            json={json}
                        />
                        <Input
                            transport={this.dataFromInput}
                            ligne={this.dataFromSelectInput}
                            station={this.dataFromSelectValue}
                            func={this.dataStationsFromApi}
                            label="3. Choisissez le nom de la station"
                            placeholder="Nom de la station"
                            datalist="station"
                            json={json}
                        />
                        {errorMessage && <p className="red">{errorMessage}</p>}
                        <Button
                            button={this.dataSchedulesFromApi}
                            className="my-btn"
                            value="Rechercher"
                        />
                    </div>
                }
                {this.beforeRender()}
                {searchActive &&
                    <div>
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

export default HorairesContent;