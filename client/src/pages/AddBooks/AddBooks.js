import React, { Component } from 'react';
import Jumbotron from "../../components/Jumbotron";
import AddBooks from '../../components/AddBook/addBook';


class AddBook extends Component {
  render() {
    return (
      <div className='Home'>
        <div className='row'>
          <div className='col'>
            <Jumbotron>
              <h1>WELCOME TO BOOK KEEPER </h1> <br /> <h3>Search for a book to add to your library of books!</h3>
            </Jumbotron>
            <div>
            <AddBook/>
            </div>
          </div>
        </div>
      </div>
    );
   }
}
  

export default AddBooks;