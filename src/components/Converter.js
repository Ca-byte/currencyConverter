import React, { Component } from 'react';
import './Converter.css'

export default class Converter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currencyA: "",
            currencyB: 0,
        }
        this.convert = this.convert.bind(this);
    }

    convert() {
        let from_to = `${this.props.currencyA}_${this.props.currencyB}`
        let url = `https://free.currconv.com/api/v7/convert?q=${from_to}&compact=ultra&apiKey=b3bef80f4c92b696068d`
        
        fetch(url)
        .then(res=>{
            return res.json()
        })
        .then(json=>{
            let amount = json[from_to];
            let currencyB_value = (parseFloat(this.state.currencyA_value) * amount).toFixed(2)
            this.setState({currencyB_value})
        })

    }
  

    render() {
        return (
            <div className="converter">
                <h2>{this.props.currencyA} to {this.props.currencyB}</h2>
                <input type="text" className="input-box" placeholder="Enter a value" onChange={(event)=>{this.setState({currencyA_value:event.target.value})}}></input>
                <input type="button" className="button" value="Convert" onClick={this.convert}></input>
                <h2>{this.state.currencyB_value}</h2>

            </div>
        )
    }
}
