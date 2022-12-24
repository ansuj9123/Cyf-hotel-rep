import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import fakeBooking from "./data/fakeBookings.json";
import CustomerProfile from "./CustomerProfile.js";

// import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = (props) => {
  const [bookings, setBooking] = useState([]);
  const [data, setData] = useState([]);
  const [customerBooking, setCustomerBooking] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [roomId, setRoomId] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckoutDate] = useState("");
  const [numberOfNight, setNumberOfNight] = useState("");

  function handleProfileChange(id) {
    setCustomerBooking(id);
  }

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then((data) => {
        return data.json();
      })
      .then((getdata) => {
        console.log(getdata);
        if (getdata.error) {
          setError(getdata.error);
        } else {
          setData(getdata);
          setBooking(getdata);
        }

        setLoading(false);
      });
  }, []);

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
    setBooking(
      data.filter((booking) => {
        if (booking.firstName.includes(searchVal)) {
          console.log(booking);
          return true;
        }
        if (booking.surname === searchVal) {
          return true;
        }
      })
    );
  };

  function sortBookings(column, order) {
    console.log(order);
    if (column == "id") {
      const dataCopy = [...data];
      if (order) {
        dataCopy.sort((a, b) => {
          if (a.id > b.id) {
            return -1;
          }

          if (a.id < b.id) {
            return 1;
          }
          return 0;
        });
      } else {
        dataCopy.sort((a, b) => {
          if (a.id < b.id) {
            return -1;
          }

          if (a.id > b.id) {
            return 1;
          }
          return 0;
        });
      }

      setBooking(dataCopy);
    }
  }

  function addBooking(e) {
    e.preventDefault(); // prevent the page from refreshing
    const booking = {
      id: +id,
      title: title,
      firstName: firstName,
      surname: surname,
      email: email,
      roomId: +roomId,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
    };
    setBooking([...bookings, booking]);
  }

  return (
    <div className="App-content">
      <div className="container">
        <Search searchData={search} />
        {loading && <p>data is loading...</p>}
        {error && <p>{error}</p>}
        <SearchResults
          mydata={bookings}
          handleProfileChange={handleProfileChange}
          sortBookings={sortBookings}
        />

        <form onSubmit={addBooking}>
          <br />
          <h4>Customer Booking Form</h4>

          <label for="id" className="form-name">ID:</label>
          <br />

          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="ID"
          />
          <br></br>
          <label for="title" className="form-name"> Title:</label><br></br>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <br></br>
          <label for="fname" className="form-name">First Name</label><br></br>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First name"
          />
          <br></br>
          <label for="Surname" className="form-name">Surname</label><br></br>
          <input
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            placeholder="Surname"
          />
          <br></br>
          <label for="for" className="form-name">Email</label><br></br>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        <br></br>
        <label for="roomid" className="form-name">Room ID</label><br></br>
          <input
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            placeholder="Room id"
          />
          <br></br>
          <label for="checkindate" className="form-name">Check In Date</label><br></br>
          <input
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            placeholder="Check in Date"
          />
          <br></br>
          <label for="checkOutDate" className="form-name">Check Out Date</label><br></br>
          <input
            value={checkOutDate}
            onChange={(e) => setCheckoutDate(e.target.value)}
            placeholder="Check out Date"
          />
          <br></br>
          <label for="numberOfNight" className="form-name">Number Of Night</label><br></br>
          <input
            value={numberOfNight}
            onChange={(e) => setNumberOfNight(e.target.value)}
            placeholder="Number of Night"
          />
          <br></br>

          <button className="clicksubmit">Submit</button>
        </form>

        <CustomerProfile customerProfile={customerBooking} />
        {/* <SearchResults results={FakeBookings} /> */}
      </div>
    </div>
  );
};

export default Bookings;

