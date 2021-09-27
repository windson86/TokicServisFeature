import React, { Component } from 'react'
import KonfigForm from './components/KonfigForm';


import Dialog from '@mui/material/Dialog';

import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';

export class App extends Component {
 state={
   open:false
 }
 handleClickOpen = () => {
  this.setState({open:true})
};
handleClose = () => {
  this.setState({open:false})
}
  render() {
    const {open} = this.state
    return (
      <div>
        test
        <button variant="outlined" onClick={this.handleClickOpen}>
        Open form dialog
      </button>
      
      <Dialog open={open} onClose={this.handleClose}>
        <DialogTitle>Konfigurator Servisa</DialogTitle>
        <DialogContent>
          <KonfigForm />
          
        </DialogContent>
       
      </Dialog>
     

      </div>
    )
  }
}

export default App

