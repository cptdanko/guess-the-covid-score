import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Appbar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';

export class Confirm extends Component {

    continue = e => {
        e.preventDefault();
        //process your form
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: { firstName, lastName, email, occupation, city, bio } } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <Appbar title="Confirm user data" />
                    <List>
                        <ListItem 
                        primaryText="First Name"
                        secondaryText={firstName}
                        />
                        <ListItem 
                        primaryText="Last Name"
                        secondaryText={lastName}
                        />
                        <ListItem 
                        primaryText="Email"
                        secondaryText={email}
                        />
                        <ListItem 
                        primaryText="Occupation"
                        secondaryText={occupation}
                        />
                        <ListItem 
                        primaryText="City"
                        secondaryText={city}
                        />
                        <ListItem 
                        primaryText="bio"
                        secondaryText={bio}
                        />
                    </List>

                    <br />
                    <RaisedButton label="Back"
                    primary={false}
                    styles={styles.button}
                    onClick={this.back}
                    />
                    <RaisedButton label="Confirm & Continue"
                    primary={true}
                    styles={styles.button}
                    onClick={this.continue}
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
export default Confirm
