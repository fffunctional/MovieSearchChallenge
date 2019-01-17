
import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import Pagination from "react-js-pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      searchResult: {results: []},
      activePage: 1,
      totalItemsCount: 0
    };
    this.handleChange = debounce(this.handleChange, 500);
    this.handlePageChange = debounce(this.handlePageChange, 500);
  }

  goFetch(path) {
    fetch(path)
      .then(response => response.json())
      .then(searchResult => this.setState({ searchResult }))
      .then(() => {
        this.setState({
          activePage: this.state.searchResult.page,
          totalItemsCount: this.state.searchResult.total_results
        })
      });
  }

  handleChange(e) {
     this.setState({searchTerm: e.target.value});
     this.goFetch('https://api.themoviedb.org/3/search/movie?api_key=403ffcb3b4481da342203f94fb6e937e&query='
       +encodeURIComponent(this.state.searchTerm));
   }

   handlePageChange(pageNumber) {
     this.setState({activePage: pageNumber});
     this.goFetch('https://api.themoviedb.org/3/search/movie?api_key=403ffcb3b4481da342203f94fb6e937e&query='
        +encodeURIComponent(this.state.searchTerm)
        +'&page='+this.state.activePage);
   }

  render() {
    var arr = [];
    if (this.state.searchResult.results) {
      Object.keys(this.state.searchResult.results).forEach(key => {
        arr.push(this.state.searchResult.results[key]);
      });
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1>Movie Search App</h1>
          <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={20}
            totalItemsCount={this.state.totalItemsCount}
            pageRangeDisplayed={10}
            onChange={this.handlePageChange.bind(this)}
          />
          <div>
            <input
              type="text"
              className="input"
              id="search"
              placeholder="Start searching!"
              value={this.state.value}
              onChange={
                (event) => {event.persist();this.handleChange(event)}
              }
              style={{color: 'black'}}
              />
          </div>
          <div>
              {arr.filter(i => i.poster_path).map(i =>
                <div key={i.id} style={{clear: 'both', padding: '50px'}}>
                  <div style={{float: 'left'}}>
                    <img src={'http://image.tmdb.org/t/p/w185' + i.poster_path}
                         alt={i.original_title}/>
                  </div>
                  <div>
                    <h3>{i.original_title}</h3>
                    <h5>{i.release_date}</h5>
                    <div style={{fontSize: "10px"}}>{i.overview}</div>
                  </div>
                </div>
              )}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
