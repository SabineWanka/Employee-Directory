import React from "react";

function List(props) {
    // filter method to create a new array containing only employees that are engineers
    const isEngineer = props.employees.filter(employee => !employee.engineer);

    return (
        <ul className="list-group">
            {props.employees.map(employee => (
                <li className="list-group-item" key={employee.id}>
                    {employee.name}
                </li>
            ))}
        </ul>
    );
}

export default List;
