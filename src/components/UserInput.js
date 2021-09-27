import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import 'react-toastify/dist/ReactToastify.css'; 
import {ToastContainer, toast } from 'react-toastify'; 
import validator from 'validator'

export class UserInput extends Component {
    state=({
        submitted:false
    })
    continue = e => {
        e.preventDefault();
        const {values}=this.props
        if(!values.imePrezime){  toast.warning('ime i prezime je obavezno polje')}
        if(!values.email){  toast.warning('email je obavezno polje')}
        if(!values.brojTelefona){  toast.warning('kontakt broj je obavezno polje')}
        if(!validator.isEmail(values.email)){ toast.warning('provjerite da li je email ispravno upisan')}

        this.setState=({
            submitted:true
        })
       if(values.imePrezime&&values.brojTelefona&&validator.isEmail(values.email)){this.props.nextStep();}
        
    }
    back = e => {
        e.preventDefault();
        this.props.previousStep();
    }
    render() {
      
        const {values,handleChange}= this.props
        return (
            <MuiThemeProvider>
                <div>
                    <h2>Korak 3. Vaši kontakt podaci</h2>
                    <TextField
                    hintText='ime i prezime*'
                    floatingLabelText='ime i prezime'
                    onChange={handleChange('imePrezime')}
                    defaultValue={values.imePrezime}
                  
                    />
                   
                     <TextField
                  
                    hintText='email*'
                    floatingLabelText='email'
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                    />
                      <TextField
                    type="number"   
                    hintText='broj telefona*'
                    floatingLabelText='broj telefona'
                    onChange={handleChange('brojTelefona')}
                    defaultValue={values.brojTelefona}
                    />
                       <TextField
                    hintText='napomena(opcionalno)'
                    floatingLabelText='napomena'
                    onChange={handleChange('napomena')}
                    defaultValue={values.napomena}
                    />
                    <br/>
                   
                      <RaisedButton
                    label='nazad'
                    primary={false}
                    onClick={this.back}
                    />
                    <RaisedButton
                    label='dalje'
                    primary={true}
                    onClick={this.continue}
                    />
                </div>
                <ToastContainer />
            </MuiThemeProvider>
                
            
        )
    }
}

export default UserInput
