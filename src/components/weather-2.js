import React from 'react'
import WIND from '../images/wind.png';
import TEMP from '../images/temperature.png'

export default class Weather2 extends React.Component {

    render(){
        return(
            <div className='grid-container' >
                <div className='weather-info'>City name : <span className='weather-value'>{this.props.city}</span></div>
                <div className='weather-info'>Country : <span className='weather-value'>{this.props.country}</span></div>
                <div className='weather-info'>Temprature : <span className='weather-value'>{this.props.temp}<img src={TEMP} height='30px' width='30px'/></span> </div>
                <div className='weather-info'>Wind Speed: <span className='weather-value'>{this.props.wind}<img src={WIND} height='30px' width='30px'/></span></div>
                
            </div>
        )
    }
}


