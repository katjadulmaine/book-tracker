import React, { Component } from 'react';
import API from "../../lib/API";


class createBook extends Component {
    state = {
        title: '',
        author: '',
        imageURL: '',
        series: '',
        synopsis: '',
    };

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    handleAddBook = event => {
        event.preventDefault()
        const { title, author, imageURL, series, synopsis } = this.state;
        let newBook = {
            title,
            author,
            imageURL,
            series,
            synopsis
        }

        API.Books.createBook(newBook);
        this.setState({
            title: '',
            author: '',
            imageURL: '',
            series: '',
            synopsis: '',
        })
    }

    render() {  //send to mySQL and add to that user
        //    const { title, author, imageUrl, series, synopsis } = this.state;

        return (
            <div className='AddBook'>
                <div className='card'>
                    <div className='card-body' style={{background: '#a8ff78', background: '-webkit-linear-gradient(to top, #78ffd6, #a8ff78)',background: 'linear-gradient(to top, #78ffd6, #a8ff78)',}}>
                        <form className='AddBook'>
                            <div className='input-group mb-3'>
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{fontSize: '1.em', fontFamily: '"Rye", Cursive'}}>T</span>
                                </div>
                                <input
                                    className='form-control'
                                    id='title'
                                    type='text'
                                    name='title'
                                    placeholder='Title'
                                    value={this.state.title}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div className='input-group mb-3'>
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{fontSize: '1.em', fontFamily: '"Rye", Cursive'}}>A</span>
                                </div>
                                <input
                                    className='form-control'
                                    id='author'
                                    type='text'
                                    name='author'
                                    placeholder='Author'
                                    value={this.state.author}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div className='input-group mb-3'>
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{fontSize: '1.em', fontFamily: '"Rye", Cursive'}}>I</span>
                                </div>
                                <input
                                    className='form-control'
                                    id='imageURL'
                                    type='text'
                                    name='imageURL'
                                    placeholder='Image URL'
                                    value={this.state.imageURL}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div className='input-group mb-3'>
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{fontSize: '1.em', fontFamily: '"Rye", Cursive'}}>S</span>
                                </div>
                                <input
                                    className='form-control'
                                    id='series'
                                    type='text'
                                    name='series'
                                    placeholder='Series'
                       
                                    value={this.state.series}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div className='input-group mb-3'>
                                <div className="input-group-prepend">
                                    <span className="input-group-text" style={{fontSize: '1.em', fontFamily: '"Rye", Cursive'}}>S</span>
                                </div>
                                <input
                                    className='form-control'
                                    id='synopsis'
                                    type='textarea'
                                    name='synopsis'
                                    placeholder='Synopsis'
                                    value={this.state.synopsis}
                                    onChange={this.handleInputChange}
                                />
                            </div>

                            <button onClick={(event) => this.handleAddBook(event)} className='btn btn-danger'style={{backgroundColor: '#a8ff78', color: 'black'}} type='AddBook'>Add Book</button>
                        </form>
                    </div>
                </div>
            </div>

        )

    }
}

export default createBook;
