// import React from "react";
import SearchButton from "./SearchButton";
import React, {useState, useEffect} from "react";
import Bookings from "./Bookings";
const Search = (props) => {

  const [searchInput, setSearchInput] = useState("");
   function handleSearchInput(e) {
    setSearchInput(e.target.value)
    console.log(searchInput);
   }
    function newValue(e) {
        e.preventDefault();
        // <Bookings searchInput={searchInput}/>
        console.log(searchInput);
        props.searchData(searchInput)
       
      }
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className ="form-group search-box" onSubmit={newValue}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                onChange={handleSearchInput}
                value={searchInput}
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
              />
              <SearchButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
