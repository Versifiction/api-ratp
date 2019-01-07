import React, { Component } from 'react';
import Select from '../../Atoms/Select';
import metros from '../../../images/plans/plan-metros.pdf';
import tramways from '../../../images/plans/plan-metros.pdf';
import bus from '../../../images/plans/plan-bus.pdf';
import noctiliens from '../../../images/plans/plan-noctiliens.pdf';
import rers from '../../../images/plans/plan-rers.pdf';

import '../../../css/App.css';

class PlansContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            json: [],
            selectValue: "",
            searchActive: false,
            errorMessage: ""
        };
    }

    handleSelectValueChange = (evt) => {
        this.setState({
          selectValue: evt.target.value,
        });
    }

    render () {
        const { selectValue } = this.state;
        return (
            <div className="content">
                <h1 className="text-center">{this.props.title}</h1>
                <Select
                    id="plans-transports"
                    handleChange={this.handleSelectValueChange}
                    label="1. Choisissez le mode de transport"
                />
                {selectValue !== "" &&
                    <div>
                        {selectValue === "metros" && <a href={ metros }>Consulter le plan</a>}
                        {selectValue === "rers" && <a href={ rers }>Consulter le plan</a>}
                        {selectValue === "tramways" && <a href={ tramways }>Consulter le plan</a>}
                        {selectValue === "noctiliens" && <a href={ noctiliens }>Consulter le plan</a>}
                        {selectValue === "bus" && <a href={ bus }>Consulter le plan</a>}
                    </div>
                }
            </div>
        )
    }
}

export default PlansContent;