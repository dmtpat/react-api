

function Card(props) {
    const actor = props.actor;
    const lists = props.lists;
    return (
        <div className={`card ${lists ? "little_card" : "big_card"}`} key={actor.id}>
            <h2><strong>{actor.name}</strong> <span className={`date  ${actor.death_year ? "dead" : "alive"}`}>({actor.birth_year} - {actor.death_year ? actor.death_year : "Alive"})</span></h2>
            <img src={actor.image} alt="" />

            <p><u>Nationality</u>: <strong>{actor.nationality}</strong></p>
            <p><u>Biography</u>:</p>
            <div className="bio">{actor.biography}</div>
            <h5><u>Awards</u>: {actor.awards.join(" - ")} </h5>
        </div>
    )
}
export default Card