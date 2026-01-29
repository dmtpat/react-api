import Card from "./Card.components"

function CardContainer(props) {
    const actors = props.actors;
    const twoLists = props.lists;
    return (
        <div className={`card_container ${twoLists ? "half_width" : "full_width"}`}>
            {actors.map((actor) => {
                return (
                    <Card actor={actor} lists={twoLists} />
                )
            })}
        </div>
    )
}
export default CardContainer