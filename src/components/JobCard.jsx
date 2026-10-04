function JobCard(props)
// Props contain the data received from the parent component

{
    return (
        <div>
            <h2>{props.title}</h2>
            <p>Comapny :{props.company}</p>
            <p>Budget: {props.budget}</p>
            <p>Skills:{props.skills}</p>
        </div>
    );
}

export default JobCard;