import React from "react";
import ReactDOM from "react-dom";
import 'react-bootstrap'
import axios from 'axios'
import "./styles.css";



export class SearchRepo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchval: "", 
      nameList: [], 
      listName : ["ade", "sola", "jumoke"]
    };
    this.changeSearchVal = this.changeSearchVal.bind(this);
  }
  getList(name) {
    axios
      .get(`https://api.github.com/users/${name}`)
      .then(resp => {
        //this.props.onSubmit(resp.data)
        //this.setState({ userName: '' })
        //console.log(resp.data.id)
        console.log(resp.data.name)
    
        //this.setState({nameList: resp.data.name})
        //console.log(resp.data.login)


      })
  }
  changeSearchVal(e) {
    var inputVal = e.target.value;
    this.setState({ searchval: inputVal });
    this.getList(inputVal);
  }

  getSearchVal() {
    if (this.state.searchval === '') {
      alert("You have to input a repo name")
    } else {
      alert(this.state.searchval);
    }

    
  }
  render() {
    return (
      <div>
        {/* Search Input Box*/}
        <input
          placeholder="Search Repo"
          onChange={this.changeSearchVal}
          type="text"
        />
        <button onClick={this.getSearchVal.bind(this)}> Submit </button>
        <p> {this.state.searchval} </p>
       <p> {this.state.nameList.map((names) =>
    <p>{names} </p>
  )} </p>
  
        {/* Search Input Box*/}




        {/* Table*/}
        <table>
          <thead>
            <th> ID </th>
            <th> Name </th>
            <th> Repo Name </th>
          </thead>

          <tr>
            <td> 1 </td>
            <td> Ademiyan </td>
            <td> Suprise Challenge </td>
          </tr>


        </table>

        {/*Table*/}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<SearchRepo />, rootElement);