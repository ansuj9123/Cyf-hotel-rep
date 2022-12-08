import React from "react";
import Footer from "./Footer";
import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import SearchResults from "./SearchResults";
import Restaurant from "./Restaurant";
import RestaurantButton from "./RestaurantButton";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Heading />
      </header>

      <Bookings />
      <Restaurant />

      <br />

      <TouristInfoCards />
      <Footer
        arr={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789",
        ]}
      />
    </div>
  );
};

export default App;
