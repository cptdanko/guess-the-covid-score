import { TextField } from "material-ui";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import React, { Component } from "react";


export class DailyEntryForm extends Component {

    state = {
        username: "",
        score: "",
        date: "For date: " + this.todayDateStr
    };
    constructor() {
        
        super()
        this.todayDateStr = new Intl.DateTimeFormat("en-GB", {
            year: "numeric",
            month: "long",
            day: "numeric"
        }).format(new Date());
        this.state.date = "For: " + this.todayDateStr;
    }
    submitForm = () => {
        const { username, score, date } = this.state;
        let today = new Date().withoutTime();
        let time = today.getTime();
        let currentPredictions = JSON.parse(localStorage.getItem(time));
        if(!currentPredictions) {
            currentPredictions = {};
            currentPredictions[time] = [];
        }
        //generate a random no to 4 decimal places
        let uniqueKey = Math.round(Math.random() * 10000) / 10000;
        let id = `${username}_${uniqueKey}`;
        currentPredictions[time].push({username: username, score: score, id: id});
        localStorage.setItem(time, JSON.stringify(currentPredictions));
    }
    handleChange = input => e => {
        this.state[input] = e.target.value
        this.setState(this.state);
    }
    
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    
                    <hr />
                    <form onSubmit={this.submitForm}>
                        <TextField  id="todayDate"
                        label="Today's date" 
                        hintText="Prediction date" 
                        value={this.state.date}
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        />
                        <br />
                        <TextField id="username"
                        label="Your username"
                        hintText="Your name, can be anything"
                        floatingLabelText="Your username...can be anything"
                        onChange={this.handleChange('username')} 
                        defaultValue = {this.state.username}/>
                        <br />
                        <TextField id="prediction"
                        label="Your daily prediction"
                        hintText="Your daily predictions?"
                        floatingLabelText="Score predictions?"
                        onChange={this.handleChange('score')}
                        defaultValue = {this.state.score} />

                        <p>
                        <button  label="Add 🤞">
                            Add 🤞
                        </button>
                        </p>
                    </form>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default DailyEntryForm;