import React from 'react';

const BusinessDetails = () => (
  <div className="business-details-container">
    <h3>Hours</h3>
    <table>
      <tbody className="biz-hours">
        <tr><th>Mon</th><td>Closed</td></tr>
        <tr><th>Tue</th><td>10:30 am - 1:00 am</td></tr>
        <tr><th>Wed</th><td>10:30 am - 1:00 am</td></tr>
        <tr><th>Thu</th><td>10:30 am - 1:00 am</td></tr>
        <tr><th>Fri</th><td>10:30 am - 1:00 am</td></tr>
        <tr><th>Sat</th><td>10:30 am - 1:00 am</td></tr>
        <tr><th>Sun</th><td>10:30 am - 1:00 am</td></tr>
      </tbody>
    </table>
    <h3>More business info</h3>
    <ul className="biz-extra-info">
      <li>Takes Reservations  <b>Yes</b></li>
      <li>Delivery  <b>No</b></li>
      <li>Take-out  <b>Yes</b></li>
      <li>Accepts Credit Cards  <b>Yes</b></li>
      <li>Accepts Android Pay <b>Yes</b></li>
      <li>Accepts Apple Pay  <b>No</b></li>
      <li>Accepts Bitcoin  <b>No</b></li>
      <li>Good For  <b>Lunch, Dinner</b></li>
      <li>Parking  <b>Garage, Street</b></li>
      <li>Bike Parking  <b>No</b></li>
      <li>Wheelchair Accessible  <b>Yes</b></li>
      <li>Good for Kids  <b>Yes</b></li>
      <li>Good for Groups  <b>Yes</b></li>
      <li>Attire  <b>Casual</b></li>
      <li>Ambience  <b>Casual, Trendy</b></li>
      <li>Noise Level  <b>Average</b></li>
      <li>Alcohol  <b>Full Bar</b></li>
      <li>Outdoor Seating  <b>No</b></li>
      <li>Wi-Fi  <b>Free</b></li>
      <li>Has TV  <b>No</b></li>
      <li>Dogs Allowed  <b>No</b></li>
      <li>Waiter Service  <b>Yes</b></li>
      <li>Drive-Thru  <b>No</b></li>
      <li>Caters  <b>Yes</b></li>
      <li>Offers Military Discount  <b>Yes</b></li>
      <li>Gender Neutral Restrooms  <b>Yes</b></li>
    </ul>
  </div>
);

export default BusinessDetails;
