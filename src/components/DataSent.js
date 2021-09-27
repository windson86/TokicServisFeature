import React, { Component } from 'react'

export class DataSent extends Component {
    render() {
        return (
            <div>
                <h2>Vaša prijava je uspješno poslana</h2>
                <h4>Vaša prijava je uspješno poslana i zaprimljena. Kontaktirati ćemo vas u najkraćem mogućem roku. Hvala Vam</h4>
                <button onClick={()=>this.props.closeForm()}>zatvori</button>
            </div>
        )
    }
}

export default DataSent
