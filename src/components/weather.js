import React from 'react';
import axios from 'axios';
import Weather2 from './weather-2';
import WEATHER from '../images/cloudy.png';
import WORLD from '../images/world.png';
import CITY from '../images/placeholder(1).png';


const key = 'b4a1e8d25cdbd70b76c1c854d2204b32'

export default class Weather extends React.Component {

    constructor() {
        super()
        this.state = {
            cityName: '',
            countryName: '',
        }
    }

    newCity = (event) => {
        this.setState({
            cityName: event.target.value
        })
    }

    newCountry = (event) => {
        this.setState({
            countryName: event.target.value
        })
    }

    weatherApi = async () => {
        const apiCall = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName},${this.state.countryName}&APPID=${key}`)
            .then(res => {
                const data = res.data;
                console.log(data)
                this.setState({
                    Name: data.name,
                    temprature: data.main.temp,
                    wind: data.wind.speed,
                    country: data.sys.country
                })
            })
    }

    render() {
        return (
            <div>
                <div className='input-container' >                    
                <p className='para-info'>Put the City & Country name for <img src={WEATHER} height='30px' width='30px'/></p>
                    <div>
                        <label className='inputLabel'>Enter City <img src={CITY} height='17px' width='17px'/></label> <br />
                        <input className='textFeild' placeholder='City.' type='text' value={this.state.cityName} onChange={this.newCity} />
                    </div>
                    <div>
                        <label className='inputLabel'>Enter Country <img src={WORLD} height='17px' width='17px'/></label><br />
                        <input className='textFeild' placeholder='Country.' type='text' value={this.state.countryName} onChange={this.newCountry} />
                    </div>
                    <button className='button-click-me' onClick={() => this.weatherApi()}>Click me</button>
                </div>
                
                <div>
                    {this.state.Name ? (
                        <Weather2 city={this.state.Name} temp={this.state.temprature} wind={this.state.wind} country={this.state.country} />
                    )
                        : (
                            ''
                        )}
                </div>
            </div>
        )
    }
}