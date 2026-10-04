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

            <JobCard
                title="E-Commerce Website"
                comapany="Tech startup"
                budget="₹50,000"
                skills="React , Node.js"
            />

            <JobCard
                title="Portfolio Website"
                company="Design Studio"
                budget="₹20,000"
                skills="React, CSS"
            />

            <JobCard
                title="Mobile App UI"
                comapny="Startup Hub"
                budget="₹30,000"
                skills="Figma, UX/UI"
            />





        </main>

    );
}

export default Home;