import React from "react";
import "./style.css";

function EmployeeCard(props) {

    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.firstName.lastName} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.firstName}{props.lastName}
                    </li>
                    <li>
                        <strong>Mail:</strong> {props.mailAdresse}
                    </li>
                    <li>
                        <strong>Engineer:</strong> {props.engineer}
                    </li>
                </ul>
            </div>
        </div>
    );
}
// not sure where I have to integrate the filter method, thats why I am commenting that out 
//function EmployeeCard(props) {
// filter method to create a new array containing only employees that are engineers
//const isEngineer = props.employees.filter(employee => !employee.engineer);

//return (
// <ul className="list-group">
//    {props.employees.map(employee => (
//        <li className="list-group-item" key={employee.id}>
//            {employee.name}
//        </li>
//    ))}
//</ul>
//);
//}
export default EmployeeCard;
