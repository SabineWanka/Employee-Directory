import React from "react";

function List(props) {
    // filter method to create a new array containing only employees that are engineers
    const isEngineer = props.employees.filter(employee => !employee.engineer);

    return (
        <ul className="list-group">
            {props.groceries.map(item => (
                <li className="list-group-item" key={item.id}>
                    {item.name}
                </li>
            ))}
        </ul>
    );
}

export default List;
