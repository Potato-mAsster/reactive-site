import React from "react";
import "../Chart/Chart.css";

export default function Top(props) {
  return (
    <tr>
      <td>{props.site}</td>
      <td>{props.raiting}</td>
      <td>{props.contry}</td>
      <td>{props.category}</td>
      <td>{props.rank}</td>
      <td>{props.updateData}</td>
    </tr>
  );
}
