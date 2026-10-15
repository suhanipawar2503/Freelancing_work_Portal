import { useState } from "react";

function JobCard(props) {

    // State 1: Stores whether this job is saved
    const [isSaved, setIsSaved] = useState(false);

    // State 2: Controls whether job details are visible
    const [showDetails, setShowDetails] = useState(false);

    //Event Handler : runs when save job is clicked
    function handleSaveJob() {
        setIsSaved(previousValue => !previousValue);
    }

    //Event Handler:  runs when View Details is clicked 
    function handleToggleDetails() {
        setShowDetails(previousValue => !previousValue);
    }

    return (
        <div className="job-card">

            {/* Data coming from Home through props */}
            <h2>{props.title}</h2>

            <p>Company: {props.company}</p>

            <p>Budget: {props.budget}</p>

            <p>Skills: {props.skills}</p>


            {/*Event 1: Save / Unsave Job */}
            <button
                onClick={handleSaveJob}
            >
                {isSaved ? "♥ Saved" : "♡ Save Job"}
            </button>


            {/* Event 2: Show / Hide Details */}
            <button
                onClick={handleToggleDetails}
            >
                {showDetails ? "Hide Details" : "View Details"}
            </button>


            {/* Job Details */}
            {showDetails && (
                <div>
                    <p>Description: {props.description}</p>
                    <p>Deadline: {props.deadline}</p>
                </div>
            )}


            {/* Apply button */}
            {/* onApply is a function received from Home through props */}
            <button
                onClick={props.onApply}

            >
                {props.isApplied ? "Withdraw Application" : "Apply Now"}
            </button>

        </div>
    );
}

export default JobCard;