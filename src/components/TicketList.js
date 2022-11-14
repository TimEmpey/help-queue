import React from "react";
import Ticket from "./Ticket";

const mainTicketList = [
  {
    names:"Thato and Haley",
    location:"3A",
    issue:"Firebase wont't not save record!"    
  },
  {
    names:"Sleater and Kinney",
    location:"4B",
    issue:"Prop types are throwing an error."
  },
  {
    names: "Imani & Jacob",
    location: "9F",
    issue: "Child compnent isn't"
  }
];

function TicketList(){
  return (
    <React.Fragment>    
      <hr/>
      {mainTicketList.map((ticket, index) =>
        <Ticket 
        names = {ticket.names}
        location = {ticket.location}
        issues = {ticket.issue}
        key = {index} />
      )}
    </React.Fragment>

  );
}

export default TicketList;