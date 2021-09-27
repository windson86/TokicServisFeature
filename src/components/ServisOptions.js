import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "material-ui/TextField";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
export class ServisOptions extends Component {
  state = {
    selectedServices: this.props.selectedServices,
    haveDiscount: false,
    textKupona: "",
    validKupon: this.props.discount,
    totalCijena: 0,
  };
  continue = (e) => {
    e.preventDefault();
    if (this.state.selectedServices.length >= 1) {
      this.props.nextStep();
    } else {
      toast.warning("Odaberite bar jednu opciju");
    }

    this.props.getServices(this.state.selectedServices);
    this.props.getDiscount(this.state.validKupon);
  };
  back = (e) => {
    e.preventDefault();
    this.props.getServices(this.state.selectedServices);
    this.props.previousStep();
  };
  handleChangeKupona = (e) => {
    this.setState({
      textKupona: e.target.value,
    });
  };
  handleChange = (e) => {
    const { selectedServices } = this.state;
    if (e.target.checked) {
      //dodajemo object u array
      this.setState((prevState) => ({
        selectedServices: [
          ...prevState.selectedServices,
          { name: e.target.name, price: e.target.value },
        ],
      }));
    }

    if (!e.target.checked) {
      //filtriramo object van

      this.setState({
        selectedServices: this.state.selectedServices.filter(
          (_, i) =>
            i !== selectedServices.findIndex((v) => v.name === e.target.name)
        ),
      });
    }
  };
  fixed = (broj) => {
    return broj.toFixed(2);
  };
  checkForKupon = () => {
    if (this.state.textKupona === "Tokic123") {
      this.setState({
        validKupon: true,
      });
      toast.success("Ispravan kupon");
    } else {
      this.setState({
        validKupon: false,
      });
      toast.warning("Pogrešan tekst kupona");
    }
  };
  handleKupon = () => {
    this.setState({
      haveDiscount: !this.state.haveDiscount,
    });
  };
  render() {
    const { selectedServices, haveDiscount, textKupona, validKupon } =
      this.state;
    var { totalCijena } = this.state;
    const { ServicesArray } = this.props;

    return (
      <MuiThemeProvider>
        <div>
          <ToastContainer />
          <h2>Korak 2. Odaberite jednu ili više usluga za koje ste</h2>

          {ServicesArray.map((servis, index) => {
            return (
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedServices.some(
                        (e) => e.name === servis.name
                      )}
                      onChange={this.handleChange}
                      value={servis.price}
                      name={servis.name}
                    />
                  }
                  label={servis.name + "( " + servis.price + " kn)"}
                />
              </FormGroup>
            );
          })}

          {
            // eslint-disable-next-line
            selectedServices.map((servis, index) => {
              totalCijena += parseInt(servis.price);
            })
          }

          {!validKupon && <div>ukupno:{this.fixed(totalCijena)}</div>}

          {validKupon && (
            <div>
              <p style={{ color: "green" }}>
                Zahvaljujući kuponu ostvarili ste popust od 30%
              </p>
              glavnica:{totalCijena.toFixed(2)}
              <br />
              Popust:-{(totalCijena * 0.3).toFixed(2)}
              <br />
              Ukupno:{(totalCijena - totalCijena * 0.3).toFixed(2)}
            </div>
          )}

          {!haveDiscount && (
            <div>
              {" "}
              <text
                onClick={this.handleKupon}
                style={{ textDecorationLine: "underline" }}
              >
                Imam kupon
              </text>{" "}
              <br />
            </div>
          )}
          {haveDiscount && !validKupon && (
            <div>
              <TextField
                hintText="unesite text kupona"
                floatingLabelText="unesite text kupona"
                onChange={this.handleChangeKupona}
                defaultValue={textKupona}
              />
              <button onClick={this.checkForKupon}>Primjeni</button>{" "}
            </div>
          )}

          <RaisedButton label="nazad" primary={false} onClick={this.back} />

          {
            //} { this.state.selectedServices.length>=1&& $za disable button obrisati // na početku reda i sve poslije dolara ukljucujuci dolar
            <RaisedButton
              label="dalje"
              primary={true}
              onClick={this.continue}
            />
          }
        </div>
      </MuiThemeProvider>
    );
  }
}

export default ServisOptions;
