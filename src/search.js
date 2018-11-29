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
      localStorage.setItem("repoData", JSON.stringify(resp.data.items));
      AsyncStorage.setItem("repoValue", JSON.stringify(resp.data.items));  
        .then(() => {
          console.log("It was saved successfully");
        })
        .catch(() => {
          console.log("There was an error saving the product");
        });
    }); 
    }
}   

 nextBtn() {
    var currPage = this.state.currentPage;
    var repos = this.state.nameList;
    //console.log("Len: " + repos.length);
    var pagesNum = Math.ceil(repos.length / this.state.perPage);
    if (currPage === pagesNum || repos.length === 0) {
    } else {
      var newPage = currPage + 1;
      this.setState({ currentPage: newPage });
    }
  }   
    
 backBtn() {
   var repos = this.state.nameList;
    var currPage = this.state.currentPage;
    if (currPage <= 1 || repos.length === 0) {
    } else {
      var newPage = currPage - 1;
      this.setState({ currentPage: newPage });
    }
  }   
