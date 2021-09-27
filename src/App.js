import React, { Component } from 'react'
import KonfigForm from './components/KonfigForm';
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close';
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
     <div>

        <h4>pritisnite gumb niže kako biste pokrenuli</h4>
  
         <button variant="outlined" onClick={this.handleClickOpen}>
        Pokreni konfigurator
        </button>
        
        </div>
      
      <Dialog open={open} onClose={this.handleClose}>
   
        <DialogTitle>Konfigurator Servisa    <IconButton onClick={this.handleClose}>
           <CloseIcon/>
        </IconButton></DialogTitle>
        
        <DialogContent>
          <KonfigForm closeForm={this.handleClose} />
          
        </DialogContent>
       
      </Dialog>
     
     
     </div>
    )
  }
}

export default App

