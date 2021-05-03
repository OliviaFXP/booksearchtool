import React, { Component } from "react";
import './main.css';
import Header from "./header";
import BookSearchFilter from "./book-search-filter";
import BookSearchResults from "../book-search-results";
import Footer from "./footer";

class App extends Component {

  state = {
    searchButtonEnabled: true
  }

  componentDidMount() {
    this.setState({ searchResults: [] });
  }

  getQueryString = (bookTitle) => {
    return bookTitle.trim().replace(/\s+/g, '+');
  }

  buildBookSearchResults = (allBooksResp) => {
    let results = [];
    for (var i = 0; i < allBooksResp.docs.length; i++) {
      results.push({
        key: allBooksResp.docs?.[i].key,
        title: allBooksResp.docs?.[i].title,
        book_cover_url: "http://covers.openlibrary.org/b/isbn/" + allBooksResp.docs?.[i].isbn?.[0] + "-S.jpg",
        author: allBooksResp.docs?.[i].author_name?.join?.(","),
        published_date: allBooksResp.docs?.[i].publish_date?.join?.(","),
        most_recent_publish_year: allBooksResp.docs?.[i].publish_year?.sort?.((a, b) => b - a)[0]
      })
    }
    return results;
  }

  searchBooksByTitle = (bookTitle) => {
    this.setState({ bookSearchTerm: bookTitle });
    this.setState({ searchButtonEnabled: false });
    let qs = this.getQueryString(bookTitle);
    fetch("https://openlibrary.org/search.json?q=" + qs)
      .then(res => res.json())
      .then(allBooksResp => {
        this.setState({ searchResults: this.buildBookSearchResults(allBooksResp) });
        this.setState({ searchButtonEnabled: true });
      })
      .catch((e) => { console.log(e); });
  }

  render() {
    return (
      <div>
        <Header subtitle="Book Search Tool" />
          <div id="wrapper">
            <div className="main">
            <BookSearchFilter searchBooksByTitle ={this.searchBooksByTitle} 
            searchButtonEnabled={this.state.searchButtonEnabled}/>
            <BookSearchResults bookSearchTerm={this.state.bookSearchTerm}
              results={this.state.searchResults} />
            </div>
          </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
