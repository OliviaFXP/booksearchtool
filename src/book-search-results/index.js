import React, { Component } from 'react';
import SearchResultRow from './row'

const sortTypes = {
    title_up: {
        class: 'fa fa-sort-asc',
        sort_column: 'title',
        sort_order: 'up',
        fn: (a, b) => a.localeCompare(b)
    },
    title_down: {
        class: 'fa fa-sort-desc',
        sort_column: 'title',
        sort_order: 'down',
        fn: (a, b) => b.localeCompare(a)
    },
    most_recent_publish_year_up: {
        class: 'fa fa-sort-asc',
        sort_column: 'most_recent_publish_year',
        sort_order: 'up',
        fn: (a, b) => a - b
    },
    most_recent_publish_year_down: {
        class: 'fa fa-sort-desc',
        sort_column: 'most_recent_publish_year',
        sort_order: 'down',
        fn: (a, b) => b - a
    },
    default: {
        class: 'fa fa-sort',
        sort_column: 'title',
        sort_order: 'up',
        fn: (a, b) => a.localeCompare(b)
    }
};

class BookSearchResults extends Component {
    state = {
        currentSort: sortTypes.default
    };

    test = null;

    determineNextSort = (currentSort, column) => {
        let next_sort;
        if (currentSort.sort_column === column) {
            if (currentSort === sortTypes.default) {
                next_sort = sortTypes[column + '_up']
            } else {
                if (currentSort.sort_column === 'title' && currentSort.sort_order === 'up') {
                    next_sort = sortTypes.title_down;
                } else if (currentSort.sort_column === 'title' && currentSort.sort_order === 'down') {
                    next_sort = sortTypes.title_up;
                } else if (currentSort.sort_column === 'most_recent_publish_year'
                    && currentSort.sort_order === 'up') {
                    next_sort = sortTypes.most_recent_publish_year_down;
                } else if (currentSort.sort_column === 'most_recent_publish_year'
                    && currentSort.sort_order === 'down') {
                    next_sort = sortTypes.most_recent_publish_year_up;
                } else {
                    next_sort = sortTypes[column + '_up'];
                }
            }
        } else {
            next_sort = sortTypes[column + '_up'];
        }
        return next_sort;
    }

    onSortChange = (column, e) => {
        this.setState({
            currentSort: this.determineNextSort(this.state.currentSort, column)
        });
    };

    componentDidMount() {

    }

    render() {
        let searchResultRows;
        let results = this.props.results;
        let currentSort = this.state.currentSort;
        if (results) {
            let sortedResult = results.sort((a, b) => {
                return currentSort.fn(a[currentSort.sort_column], b[currentSort.sort_column]);
            })
            searchResultRows = sortedResult.map(b =>
                <SearchResultRow key={b.key} book={b} />
            );
        }

    
        return (
            <div className="wrapper">
                <table className="responsive-table">
                  <caption>List of books search with {this.props.bookSearchTerm}</caption>
                    <thead>
                        <tr>
                            <th scope="col">Book Cover</th>
                            <th scope="col" onClick={this.onSortChange.bind(this, 'title')}>
                                Title
                                {currentSort.sort_column === 'title' ? <i className={currentSort.class} /> : <i className={'fa fa-sort'} />}                                
                            </th>
                            <th scope="col">Author</th>
                            <th scope="col" onClick={this.onSortChange.bind(this, 'most_recent_publish_year')}>
                                Published Date
                                {currentSort.sort_column === 'most_recent_publish_year' ? <i className={currentSort.class} /> : <i className={'fa fa-sort'} />}                                
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchResultRows}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default BookSearchResults;