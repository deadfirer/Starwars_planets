import React, { Component } from 'react';
import logo from './img/logoH.png';
import './style/css/App.css';
import AppContent from './components/app_content';
import Next from './components/next';

class App extends Component {

  constructor() {
    super();
    this.contPlanet();
    this.state = {
      planet: 'unknown',
      population: 'unknown',
      climate: 'unknown',
      terrain: 'unknown',
      nfilms: [],
      nPlanets: 0,
      arrayTitle: ['']
    }
    this.getPlanet = this.getPlanet.bind(this);

  }



  getPlanet() {
           
    const numPla = Math.floor(Math.random() * (this.state.nPlanets - 1) + 1);
    
    console.log(numPla);

    fetch(`https://swapi.co/api/planets/${numPla}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            planet: result.name,
            population: result.population,
            climate: result.climate,
            terrain: result.terrain,
            nfilms: result.films,
            arrayTitle:['']
          });
          this.getFilms(result.films);
        }
      );

      
  }
/*
  componentDidUpdate (){
    this.state.nfilms.map((link,index) => (
      fetch(`${link}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState( prevState => ({
            arrayTitle: [...prevState.arrayTitle, result.title]
          }));
        }
      )
    ));

    console.log(this.state.arrayTitle);
  }
*/
  getFilms(url){
    url.map((link) => (
      fetch(`${link}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState( prevState => ({
            arrayTitle: [...prevState.arrayTitle, result.title]
          }));
        }
      )
    ));
    
 }

  contPlanet() {

    fetch('https://swapi.co/api/planets')
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({ nPlanets: result.count });
      }

    );

  }

  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} alt='logo'/>
        </header>
        <AppContent
          {...this.state}
          
        />
         <Next nextPlanet={this.getPlanet}/>
      </div>
    );
  }
}

export default App;
