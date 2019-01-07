import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './css/App.css';
import Accueil from '../src/Components/Pages/Accueil';
import Horaires from '../src/Components/Pages/Horaires';
import Trafic from '../src/Components/Pages/Trafic';
import Stations from '../src/Components/Pages/Stations';
import Plans from '../src/Components/Pages/Plans';
import Apropos from '../src/Components/Pages/Apropos';
import Erreur from '../src/Components/Pages/Erreur';
// eslint-disable-next-line
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
    render () {
        return (
            <div className="app">
                <Switch>
                    <Route path='/' exact component={ Accueil } />
                    <Route path='/horaires' exact component={ Horaires } />
                    <Route path='/trafic' exact component={ Trafic } />
                    <Route path='/stations' exact component={ Stations } />
                    <Route path='/plans' exact component={ Plans } />
                    <Route path='/a-propos' exact component={ Apropos } />
                    <Route component={ Erreur } />
                </Switch>
            </div>
        )
    }
}

export default App;