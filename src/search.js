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
