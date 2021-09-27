import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Col, Container, Row } from "react-bootstrap";
export class EditPage extends Component {
  back = (e) => {
    e.preventDefault();
    this.props.previousStep();
  };
  confirm = (e) => {
    e.preventDefault();
    this.props.confirmData();
  };
  fixed = (broj) => {
    return broj.toFixed(2);
  };
  render() {
    var totalCijena = 0;
    const { values } = this.props;
    const { selectedCar, selectedServices } = this.props;
    return (
      <MuiThemeProvider>
        <Container className="justify-content-md-center">
          <Row>
            <Container>
              <h2>Korak 4. Pregled i potvrda vašeg odabira </h2>
              <h6>
                Molimo Vas da još jednom pregledate i potvrdite unesene podatke.
                Ukoliko želite promijeniti neki od podataka,možete pritisnuti
                gumb za uređivanje pored svake od kategorija. Kada ste
                provjerili i potvrdili ispravnost svojih podataka pritisnite
                gumb pošalji na dnu,za slanje upita na servis{" "}
              </h6>
            </Container>
          </Row>
          <Row>
            <Container>
              <Row>
                <Col xs={8}>MODEL VOZILA</Col>{" "}
                <Col>
                  {" "}
                  <button onClick={() => this.props.jumpToStep(1)}>
                    uredi
                  </button>
                </Col>
              </Row>
              <Row>
                <Col> {selectedCar}</Col>
              </Row>
            </Container>
            <Container>
              <Row>
                <Col xs={8}>ODABRANE USLUGE</Col>
                <Col>
                  <button onClick={() => this.props.jumpToStep(2)}>
                    uredi
                  </button>
                </Col>
              </Row>
              <Row>
                {selectedServices.map((servis, index) => {
                  return (
                    <div key={index}>
                      {" "}
                      {"*" + servis.name + " " + servis.price + " kn "}
                    </div>
                  );
                })}
              </Row>
              {
                // eslint-disable-next-line
                selectedServices.map((servis, index) => {
                  totalCijena += parseInt(servis.price);
                })
              }
              {!values.discount && <div>ukupno:{this.fixed(totalCijena)}</div>}

              {values.discount && (
                <div>
                  <p style={{ color: "green" }}>
                    Zahvaljujući kuponu ostvarili ste popust od 30%
                  </p>
                  glavnica:{this.fixed(totalCijena)}
                  <br />
                  Popust:-{this.fixed(totalCijena * 0.3)}
                  <br />
                  Ukupno:{this.fixed(totalCijena - totalCijena * 0.3)}
                </div>
              )}
            </Container>
          </Row>
          <Row>
            <Container>
              <Row>
                <Col xs={8}>PODACI KORISNIKA: </Col>
                <Col>
                  <button onClick={() => this.props.jumpToStep(3)}>
                    uredi
                  </button>
                </Col>
              </Row>
              <Row>ime i prezime:{values.imePrezime}</Row>
              <Row>email: {values.email}</Row>
              <Row>telefon:{values.brojTelefona} </Row>
              <Row>napomena:{values.napomena} </Row>
            </Container>
          </Row>
          <Row>
            <Container>
              <RaisedButton label="nazad" primary={false} onClick={this.back} />
              <RaisedButton
                label="pošalji"
                primary={true}
                onClick={this.confirm}
              />
            </Container>
          </Row>
        </Container>
      </MuiThemeProvider>
    );
  }
}

export default EditPage;
