import React, {useState} from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import fakeBooking from './data/fakeBookings.json'


// import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = props => {
  const [bookings, setBooking] = useState(fakeBooking);


  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults mydata={bookings}/>
        {/* <SearchResults results={FakeBookings} /> */}
      </div>
    </div>
  );
};

export default Bookings;
