import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./componets/Title";
import EmployeeCard from "./components/EmployeeCard";
import employee from "./employee.json";



function App() {
    return (
        <Wrapper>
            <Title>Employee Directory</Title>
            <EmployeeCard

                firstName={employee[0].firstName}
                lastName={employee[0].lastName}
                image={employee[0].image}
                mailAdresse={employee[0].mailAdresse}
                engineer={employee[0].engineer}
            />
            <EmployeeCard

                firstName={employee[1].firstName}
                lastName={employee[1].lastName}
                image={employee[1].image}
                mailAdresse={employee[1].mailAdresse}
                engineer={employee[1].engineer}
            />
            <EmployeeCard

                firstName={employee[2].firstName}
                lastName={employee[2].lastName}
                image={employee[2].image}
                mailAdresse={employee[2].mailAdresse}
                engineer={employee[2].engineer}
            />
            <EmployeeCard

                firstName={employee[3].firstName}
                lastName={employee[3].lastName}
                image={employee[3].image}
                mailAdresse={employee[3].mailAdresse}
                engineer={employee[3].engineer}
            />
            <EmployeeCard

                firstName={employee[4].firstName}
                lastName={employee[4].lastName}
                image={employee[4].image}
                mailAdresse={employee[4].mailAdresse}
                engineer={employee[4].engineer}
            />
        </Wrapper>
    );
}

export default App;