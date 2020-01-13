import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match',
        }
        this.sortByOptions = {
            "Best Match": 'best_match',
            "Highest Rated": 'rating',
            "Most Reviewed": 'review_count',
        }
        this.handleSortByChange = this.handleSortByChange.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.renderSortByOptions = this.renderSortByOptions.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    renderSortByOptions() {
            return Object.keys(this.sortByOptions).map(option => {
                let sortByOptionValue = this.sortByOptions[option];
                return <li onClick={ this.handleSortByChange.bind(this, sortByOptionValue) } className={ this.getSortByClass(sortByOptionValue) } key={sortByOptionValue}>{option}</li>
            });
    }

    getSortByClass(sortByOption) {
        if (this.state.sortBy === sortByOption) {
            return 'active'
        } else {
            return ''
        }
    }

    handleSortByChange(change) {
        this.setState({
            sortBy: change
        })
    }
    handleTermChange(e) {
        this.setState({
            term: e.target.value
        })
    }
    handleLocationChange(e) {
        this.setState({
            location: e.target.value
        })
    }
    handleSearch(e) {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        e.preventDefault();
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        { this.renderSortByOptions() }
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input onChange={ this.handleTermChange } value={this.state.term} placeholder="Search Businesses" />
                    <input onChange={ this.handleLocationChange } value={this.state.location} placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    { /* eslint-disable-next-line */ }
                    <a onClick={this.handleSearch}>Let's Go</a>
                </div>
            </div>
        )
    }
}
export default SearchBar;