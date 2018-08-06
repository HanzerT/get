import React, { Component } from 'react';
import Table from './TableBuild';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';




class DataCreator extends Component {
  constructor(props){
    super(props);

    this.state = {
      isLoaded : false,
      data : [] 
    };

    this.handleFetch = this.handleFetch.bind(this);
  }

  handleFetch(){
      fetch("https://randomuser.me/api/?results=5")
      .then(response => response.json())
      .then(data => {
        this.setState({data, isLoaded : true});
        console.log(this.state);
      });
      
  }
  
  render() {

    let fetchfnc;

    if(!this.state.isLoaded){
      fetchfnc = (
        <div>
          <button onClick={this.handleFetch}>ads</button>
        </div>
      )
    }
    else{
      fetchfnc = (
            <div>
                Vítej u nás
                <div>
                  <MuiThemeProvider>
                    <Table/>
                  </MuiThemeProvider>
                </div>
            </div>
      )
    }
      return (
        <div className="App">
          My react App
          {fetchfnc}
          
        </div>
      );
  }
}

export default DataCreator;


