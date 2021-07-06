import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep()
  }
  back = e => {
    e.preventDefault();
    this.props.prevStep()
  }
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <AppBar title="Enter User Details"></AppBar>
          <List>
            <ListItem primaryText="First Name" secondaryText={values.firstName}/>
            <ListItem primaryText="Last Name" secondaryText={values.lastName}/>
            <ListItem primaryText="Email" secondaryText={values.email}/>
            <ListItem primaryText="Occupation" secondaryText={values.occupation}/>
            <ListItem primaryText="City" secondaryText={values.city}/>
            <ListItem primaryText="Bio" secondaryText={values.bio}/>
          </List>
          <RaisedButton label="Confirm & Continue" primary={true} style={StyleSheet.button} onClick={this.continue} />
          <RaisedButton label="Back" primary={false} style={StyleSheet.button} onClick={this.back} />
        </>

      </MuiThemeProvider>
    )
  }
}

export default Confirm
