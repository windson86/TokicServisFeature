import React, { Component } from 'react'
import CarModel from './CarModel'
import UserInput from './UserInput'
import EditPage from './EditPage'
import ServisOptions from './ServisOptions'

export class KonfigForm extends Component {

    state={
                korak:1,

                CarArray:['Peugeot','VolksWagen','Citroen','Audi','BMW','Seat','Alfa Romeo','Kia','Hyundai','Honda','Toyota'],

                ServicesArray:[
                                {
                                    name:'Zamjena ulja i filtera',
                                    price:500},
                                {
                                    name:'Promjena pakni(kočionih pločica)',
                                    price:450
                                },
                                {
                                    name:'Promjena guma',
                                    price:100
                                },
                                {
                                    name:'Servis klima uređaja',
                                    price:299
                                },
                                {
                                    name:'balansiranje guma',
                                    price:50

                                },
                                {
                                    name:'Zamjena ulja u kočnicama',
                                    price:229
                                }
                            ],
                imePrezime:'',
                email:'',
                brojTelefona:'',
                napomena:'',
                selectedCar:'',
                selectedServices:[],
                discount:false
        }

        jumpToStep = (step) =>{
            this.setState({korak:step})
        }
      
  
      nextStep = () =>{
          const {korak} =this.state
            this.setState({
                korak:korak+1
            })
      }
      previousStep = () =>{
        const {korak} =this.state
          this.setState({
              korak:korak-1
          })
    }
    confirmData = () =>{
       
       this.setState({korak:505})
    }
      handleChange = input => e =>{
          this.setState({[input]:e.target.value})
      }
getSelected=(car)=>{
    this.setState({
        selectedCar:car
    })
    
}
getDiscount=(discount)=>{
    this.setState({
        discount:discount
    })
}
getServicesSelected=(selectedServices)=>{
    this.setState({selectedServices:selectedServices})
}
    render() {
        const {korak}=this.state
        const {imePrezime,email,brojTelefona,napomena,} =this.state
        const {CarArray,ServicesArray,selectedCar,selectedServices,discount}= this.state
        const values = {imePrezime,email,brojTelefona,napomena,discount}
       

        switch(korak){
            case 1: return(
                <CarModel 
                selectedCar={selectedCar}
                getSelectedCar={this.getSelected}
                nextStep={this.nextStep}
                CarArray={CarArray}

                />
            )
            case 2: return(<ServisOptions
                selectedServices={selectedServices}
                ServicesArray={ServicesArray}
                discount={discount}
                getDiscount={this.getDiscount}
                getServices={this.getServicesSelected}
                nextStep={this.nextStep}
                previousStep={this.previousStep}
            />)
            case 3: return(<UserInput
                    nextStep={this.nextStep}
                    previousStep={this.previousStep}
                    values={values}
                    handleChange={this.handleChange}
            />)
            case 4: return(<EditPage
                
               selectedServices={selectedServices}
                selectedCar={selectedCar}
                values={values}
                jumpToStep={this.jumpToStep}
                confirmData={this.confirmData}
                previousStep={this.previousStep}
                />)
            case 505: return(<div>podaci poslani</div>)
default : return(<div>error</div>)
        }
    }
}

export default KonfigForm
