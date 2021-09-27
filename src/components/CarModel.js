import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

export class CarModel extends Component {
  state = {
    selected: this.props.selectedCar,
  };

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  radioChange = (e) => {
    const odabir = e.target.name;
    this.setState({ selected: odabir });
    this.props.getSelectedCar(odabir);
  };

  render() {
    const { CarArray } = this.props;
    const { selected } = this.state;
    return (
      <MuiThemeProvider>
        <div>
          <h2>Korak 1. izaberite proizvođača vašeg vozila</h2>
          {CarArray.map((car, index) => {
            return (
              <div key={index}>
                <input
                  type="radio"
                  name={car}
                  checked={car === selected}
                  onChange={this.radioChange}
                ></input>
                <label>{car}</label>
              </div>
            );
          })}

          {selected && (
            <RaisedButton
              label="dalje"
              primary={true}
              onClick={this.continue}
            />
          )}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default CarModel;
