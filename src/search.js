import React from "react";
//import ReactDOM from "react-dom";
import axios from "axios";
import "./search.css"

import {AsyncStorage} from "AsyncStorage"
import DisplayTable from './components/displayTable';

export class SearchRepo extends React.Component{
constructor(props) {
    super(props);
    this.state = {
      valueSearched: "",
      nameList: [],
      perPage: 5,
      currentPage: 1,
      count: 0
    };
    this.changeSearchVal = this.changeSearchVal.bind(this);
    this.sortBy.bind(this);
    this.compareBy.bind(this);
  }

   changeSearchVal(e) {
    var inputVal = e.target.value;
    this.setState({ valueSearched: inputVal });
    
       if (inputVal === ''){

    }else{
       axios
    .get(`https://api.github.com/search/repositories?q=${inputVal}`)
    .then(resp => {
      console.log(resp.data.total_count);
      this.setState({
        nameList: resp.data.items,
        nameListLength: resp.data.total_count
      });
           
        .then(() => {
          console.log("It was saved successfully");
        })
        .catch(() => {
          console.log("There was an error saving the product");
        });
    }); 
    }
}   
