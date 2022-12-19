import React,{useState} from "react";
import data from "./data/fakeBookings.json";
const SearchResults = (props) => {
  const [highlighted, sethighlighted] = useState('white');
  const [idOrder, setIdOrder] = useState(true)
function highlightedHandler (){
sethighlighted(highlighted=='white'?"grey":"white")
}



  console.log(data);
  return (
    <div class="container">
      <table class="table">
        <thead>
          <tr
            onClick={highlightedHandler}
            style={{ backgroundColor: highlighted }}
          >
            <th onClick={() => {
              props.sortBookings("id",idOrder);
              setIdOrder(!idOrder)
            } } scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">FirstName</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Number of Night</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {props.mydata.map((value) => {
            return (
              <tr
                onClick={highlightedHandler}
                style={{ backgroundColor: highlighted }}
              >
                <th scope="row">{value.id}</th>
                <td>Mr</td>
                <td>{value.firstName}</td>
                <td>{value.surname}</td>
                <td>{value.email}</td>
                <td>{value.roomId}</td>
                <td>{value.checkInDate}</td>
                <td>{value.checkOutDate}</td>
                <td>{value.numberOfNight}</td>
                <td><button onClick={() => props.handleProfileChange(value)} className="btn-button">Show Profile</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
