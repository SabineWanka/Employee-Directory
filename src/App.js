import React from "react";
import List from "./components/list";


const employees = [
    {
        id: 1,
        firstName = "James",
        lastName = "Jonson",
        mailAdresse = "jamesjonson@gogglemail.com",
        engineer = true
    },
    {
        id: 2,
        firstName = "James",
        lastName = "McAvoy",
        mailAdresse = "james.mcavoy@yahoo.com",
        engineer = false
    },
    {
        id: 3,
        firstName = "Jonas",
        lastName = "Miller",
        mailAdresse = "jonasmiller@gmail.com",
        engineer = false
    },
    {
        id: 4,
        firstName = "Rebecca",
        lastName = "Miller",
        mailAdresse = "rem@gmail.com",
        engineer = true
    },
    {
        id: 5,
        firstName = "James",
        lastName = "Peterson",
        mailAdresse = "peterson@gmail.com",
        engineer = true
    },

]


function App() {
    return <List employees={employees} />;
}

export default App;