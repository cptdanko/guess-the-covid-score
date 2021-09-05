import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import { AppBar, Divider } from 'material-ui';


Date.prototype.withoutTime = function () {
    var d = new Date(this);
    d.setHours(0, 0, 0, 0);
    return d;
}

/**
 * Link for date format: https://www.carlrippon.com/formatting-dates-and-numbers-in-react/
 * @returns 
 */
 export class DailyPredictions extends Component {

    state = {
        dailyPredictions: []
    };
    constructor() {
        super();
        this.fetchList();
    }
    fetchList() {
        let today = new Date().withoutTime();
        let currentPredictions = localStorage.getItem(today.getTime());        
        if(currentPredictions) {
            let parsedObj = JSON.parse(currentPredictions);
            this.state.dailyPredictions.push(...parsedObj[today.getTime()]);
        }
    }
  
    render() {
        return (
            <MuiThemeProvider>
              <React.Fragment >
                <AppBar title="Guess the daily case numbers" />
                <List className="Name-list" onChange={this.rerender}>
                  {this.state.dailyPredictions.map((elem) => (
                    [
                    <ListItem 
                    primaryText={elem.username}
                    secondaryText={elem.score} 
                    key={elem.id}>
                    </ListItem> ,
                    <Divider variant="inset" component="li" />
                    ]
                  ))}
                </List>
              </React.Fragment>
            </MuiThemeProvider>
          )
    }
}

  export default DailyPredictions;