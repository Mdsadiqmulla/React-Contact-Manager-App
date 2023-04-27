import React from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList"

function App() {
    const contacts = [
      {
        id: "1",
        name: "Sadiq",
        email: "sadiq786@gmail.com"
      },
      {
        id: "2",
        name: "Sameer",
        email: "sameer786@gmail.com"
      },
      {
        id: "3",
        name: "Sohail",
        email: "sohail786@gmail.com"
      }  
    ]
    return (
    
      <div className="ui container">
        <Header></Header>
        <AddContact></AddContact>
        <ContactList contacts={contacts}></ContactList>
      </div>
    
  );
}

export default App;
