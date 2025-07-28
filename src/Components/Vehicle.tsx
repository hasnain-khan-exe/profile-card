import React from "react";


interface VehicleProps {
    vehicle: string;
    active?: boolean;
    onClick?: () => void;
}


const Vehicle: React.FC<VehicleProps> = ({ vehicle, active, onClick }) => {
    return (
        // <button className="list-group-item list-group-item-action active" style={{ fontSize: '1.25rem'}}>
        //     <span role="img" aria-label="car" className="me-2">🚗</span>{vehicle}
        // </button>
        <button className={`no-border list-group-item list-group-item-action${active ? " active" : ""}`} id="list-home-list" data-bs-toggle='list' role='tab' aria-controls="list-home" onClick={onClick}>
            <span role="img" aria-label="car" className="me-2">🚗</span>{vehicle}
        </button>
    );
};


export default Vehicle;