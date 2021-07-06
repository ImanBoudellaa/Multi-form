import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep()
  }
  back = e => {
    e.preventDefault();
    this.props.prevStep()
  }

  render() {
    const {values, handleChange} = this.props;

    return (
      <MuiThemeProvider>
        <>
        <AppBar title="Enter User Details"></AppBar>
        <TextField hintText="Enter Your Occupation" floatingLabelText="Occupation" onChange={handleChange('occupation')} defaultValue={values.occupation} /><br/>
        <TextField hintText="Enter Your city" floatingLabelText="city" onChange={handleChange('city')} defaultValue={values.city} /><br/>
        <TextField hintText="Enter Your bio" floatingLabelText="bio" onChange={handleChange('bio')} defaultValue={values.bio} /><br/>
        <RaisedButton label="Continue" primary={true} style={StyleSheet.button} onClick={this.continue}/>
        <RaisedButton label="Back" primary={false} style={StyleSheet.button} onClick={this.back}/>
        </>
      </MuiThemeProvider>
    )
  }
}

export default FormPersonalDetails


const styles = {
  button:{
    margin:15
  }
}