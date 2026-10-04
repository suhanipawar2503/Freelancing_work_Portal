import JobCard from "../components/JobCard";

function Home() {
    // This component represents the home page
    return (
        <main>
            <h1>Find Freelance Work</h1>
            <p>
                Discover projects posted by starttups and clients.
            </p>
            <h2>Available Work</h2>

  {/* Job 1 */}
            <JobCard
                title="E-Commerce Website"
                comapany="Tech startup"
                budget="₹50,000"
                skills="React , Node.js"
                description="Build an online shopping website for a startup."
                deadline="30 Days"
            />

{/* Job 2 */}
            <JobCard
                title="Portfolio Website"
                company="Design Studio"
                budget="₹20,000"
                skills="React, CSS"
                description="Create a professional portfolio website."
                deadline="15 Days"
            />
{/* Job 3 */}

            <JobCard
                title="Mobile App UI"
                comapny="Startup Hub"
                budget="₹30,000"
                skills="Figma, UX/UI"
                description="Design a modern mobile application interface."
                deadline="20 Days"
            />





        </main>

    );
}

export default Home;