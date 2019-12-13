import React from 'react';
import './SearchBar.css';

// const sortByOptions = {
//     "Best Match": best_match,
//     "Highest Rated": rating,
//     "Most Reviewed": review_count
// }
class SearchBar extends React.Component {
    // renderSortByOptions() {
    //     return Object.keys(sortByOptions).map(sortByOption => {
    //         let sortByOptionValue = sortByOption;
    //         return (
    //             <li key={sortByOptionValue}>{sortByOption}</li>
    //         )
    //     });
    // }
    render() {
        return (
            <div class="SearchBar">
                <div class="SearchBar-sort-options">
                    {/* <ul>
                        {renderSortByOptions()}
                    </ul> */}
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a href>Let's Go</a>
                </div>
            </div>
        )
    }
}
export default SearchBar;