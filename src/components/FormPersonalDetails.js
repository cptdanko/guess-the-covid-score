import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Appbar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';

export class FormPersonalDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <Appbar title="Enter user details" />
                    
                    <TextField hintText="Enter Your Occupation"
                    floatingLabelText="Occupation"
                    onChange={handleChange('occupation')} 
                    defaultValue={values.occupation}/>

                    <br />

                    <TextField hintText="Enter Your City"
                    floatingLabelText="city"
                    onChange={handleChange('city')} 
                    defaultValue={values.city}/>

                    <br />

                    <TextField hintText="Enter Your Bio"
                    floatingLabelText="Bio"
                    onChange={handleChange('Bio')} 
                    defaultValue={values.bio}/>

                    <br />
                    <RaisedButton label="continue"
                    primary={true}
                    styles={styles.button}
                    onClick={this.continue}
                    />

                    <br />
                    <RaisedButton label="Back"
                    primary={false}
                    styles={styles.button}
                    onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}
export default FormPersonalDetails
