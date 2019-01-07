import React, { Component } from 'react';
import axios from 'axios';
import Select from '../../Atoms/Select';
import Button from '../../Atoms/Button';
import TraficResult from '../TraficResult';
import '../../../css/App.css';

class TraficContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            json: [],
            selectValue: "",
            searchActive: false,
            errorMessage: ""
        };
    }

    clickButton = () => {
        this.dataTraficFromApi();
    }

    dataFromSelectValue = (evt) => {
        this.setState({
            selectValue: evt.target.value,
        });
    }

    handleSelectValueChange = (evt) => {
        this.setState({
          selectValue: evt.target.value,
        });
    }

    dataTraficFromApi = () => {
        const { selectValue } = this.state;
        axios.get(`https://api-ratp.pierre-grimaud.fr/v3/traffic/${selectValue}`)
            .then((response) => {
                if (selectValue === "metros") {
                    this.setState({
                        json: response.data.result.metros,
                        searchActive: true,
                    }, () => {
                    });
                } else if (selectValue === "rers") {
                    this.setState({
                        json: response.data.result.rers,
                        searchActive: true
                    }, () => {
                    });
                } else if (selectValue === "tramways") {
                    this.setState({
                        json: response.data.result.tramways,
                        searchActive: true
                    }, () => {
                    });
                }
            })
            .catch((error) => {
                console.log(error);
                if (selectValue === "") {
                    this.setState({
                        errorMessage: "Veuillez choisir un mode de transport !",
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
            searchActive: false,
            errorMessage: "",
        });
    }

    render () {
        const { searchActive, selectValue, errorMessage, json } = this.state;
        return (
            <div className="content">
                <h1 className="text-center">{this.props.title}</h1>
                {!searchActive &&
                    <div>
                        <p className="content-description">Obtenez l'état du trafic en temps réel sur un moyen de transport donné</p>
                        <Select
                            id="trafic-transports"
                            handleChange={this.handleSelectValueChange}
                            label="1. Choisissez le mode de transport"
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
                        <TraficResult
                            transport={selectValue}
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


export default TraficContent;