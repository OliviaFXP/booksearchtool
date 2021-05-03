import React, { Component } from 'react';

class BookSearchFilter extends Component {
    state = {}

    onSearchChagne = (e) => {
        e.preventDefault();
        this.props.searchBooksByTitle(this.state.titleSearchTerm);
    }

    onTextChange = (e) => {
        e.preventDefault();
        this.setState({ titleSearchTerm: e.target.value });
    }

    render() {
        
        const titleSearchTerm = this.state.titleSearchTerm || '';

        return (         
            <div id="search-bar">
                <label htmlFor="query">Search</label> 
                <input id="query" type="search" value={titleSearchTerm} onChange={this.onTextChange}/>
                <button id="search" disabled={!this.props.searchButtonEnabled} 
                        onClick={this.onSearchChagne}>Search</button>
            </div>                
        );
    }
}

export default BookSearchFilter;