import { useState } from "react";


function JobCard(props) {
    // Props contain the data received from the parent component
    // State 1: Stores whether this job is saved or not
    // Initially, the job is not saved (false)
    const [isSaved, setIsSaved] = useState(false);

    // State 2: Controls whether additional details are visible
    // Initially, details are hidden (false)
    const [showDetails, setShowDetails] = useState(false);



    return (
        <div className="job-card">

            {/* Display job information received through props */}
            <h2>{props.title}</h2>
            <p>Comapny :{props.company}</p>
            <p>Budget: {props.budget}</p>
            <p>Skills:{props.skills}</p>

            {/* Save / Unsave Job button */}
            <button onClick={() => setIsSaved(prevVal => !prevVal)}>
                {isSaved ? "♥ Saved" : "♡ Save Job"}
            </button>

            {/* Show / Hide Details button */}
            <button onClick={() => setShowDetails(prevVal => !prevVal)}>
                {showDetails ? "Hide Details" : "View Details"}

            </button>

            {/* Conditional rendering based on state */}

            {showDetails && (
                <div>
                    <p>Description: {props.description}</p>
                    <p>Deadline: {props.deadline}</p>
                </div>
            )}
        </div>
    );
}

export default JobCard;