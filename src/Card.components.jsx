

function Card(props) {
    const actor = props.actor;
    return (
        <div className='card' key={actor.id}>
            <h2>{actor.name}</h2>
            <img src={actor.image} alt="" />
            <p>{actor.birth_year}</p>
            <p>{actor.nationality}</p>
            <span>{actor.biography}</span>
            <h5>{actor.awards}</h5>
        </div>
    )
}
export default Card