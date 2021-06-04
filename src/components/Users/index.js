import React, { useEffect, useState } from 'react';
import { getUserDetails } from '../../actions/users';
import { connect } from "react-redux";
import './user.css';

function Users({ getUserDetails, userReducer }) {

  const [userDetails, setUserDetails] = useState([]);

  const handleButtonClick = () => {
    console.log("Step 1: Make a call to Action-creator from Users Component");
    getUserDetails();
  }

  useEffect(() => {

    console.log("Step 5: Inside UseEffect of User Component to update the UI");
    setUserDetails(userReducer.userDetails.data);

  }, [userReducer.userDetails])

  return (
    <div className="container">
      <button className="btn" value="click me" onClick={handleButtonClick}>Fetch Data</button>

      <table>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
          {
            userDetails && userDetails.map((item, key) => {
              return (
                <tr key={key}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>{item.website}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = (state) => ({
  userReducer: state.userReducer
});

const mapDispatchToProps = {
  getUserDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);