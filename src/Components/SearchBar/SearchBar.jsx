import "./SearchBar.css" ;

function SearchBar(){
    return(
    <div className="container">
    <div className="search-bar">
      <input type="text" placeholder="Enter GitHub username" id="usernameInput"></input>
      <button id="searchButton">Search</button>
    </div>
  </div>
    );
}
export default SearchBar;