import { useState } from "react";
import JobCard from "../components/JobCard";

function Home() {

    // State stored in the parent component
    // It stores the IDs of jobs that the freelancer has applied to
    const [appliedJobs, setAppliedJobs] = useState([]);


    // This function is passed to JobCard through props
    function handleApply(jobId) {

        // Check whether the freelancer has already applied
        // If already applied, remove the application
        if (appliedJobs.includes(jobId)) {

            setAppliedJobs(previousJobs =>
                previousJobs.filter(id => id !== jobId)
            );
        }
        else {// If not applied, add the application

            setAppliedJobs(previousJobs => [...previousJobs, jobId]);

        }
    }


    return (
        <main>

            <h1>Find Freelance Work</h1>

            <p>
                Discover projects posted by startups and clients.
            </p>


            {/* Application count comes from state */}
            {/* Conditional rendering using if/else logic */}
            {appliedJobs.length === 0 ? (
                <p>
                    You haven't applied to any jobs yet.
                    Explore the available work below!!
                </p>) :
                (
                    <p>
                        You have applied to {appliedJobs.length} job(S).
                    </p>
                )}



            <h2>Available Work</h2>


            {/* Job 1 */}
            <JobCard
                title="E-Commerce Website"
                company="Tech Startup"
                budget="₹50,000"
                skills="React, Node.js"
                description="Build an online shopping website for a startup."
                deadline="30 Days"

                // Passing state information to child
                isApplied={appliedJobs.includes(1)}

                // Passing function to child
                onApply={() => handleApply(1)}
            />


            {/* Job 2 */}
            <JobCard
                title="Portfolio Website"
                company="Design Studio"
                budget="₹20,000"
                skills="React, CSS"
                description="Create a professional portfolio website."
                deadline="15 Days"

                isApplied={appliedJobs.includes(2)}
                onApply={() => handleApply(2)}
            />


            {/* Job 3 */}
            <JobCard
                title="Mobile App UI"
                company="Startup Hub"
                budget="₹30,000"
                skills="Flutter, UI/UX"
                description="Design a modern mobile application interface."
                deadline="20 Days"

                isApplied={appliedJobs.includes(3)}
                onApply={() => handleApply(3)}
            />

        </main>
    );
}

export default Home;