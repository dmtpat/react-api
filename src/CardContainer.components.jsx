import Card from "./Card.components"

function CardContainer(props) {
    const actors = props.actors;
    const twoLists = props.lists;
    const tipe = props.tipe;
    return (
        <div className={`card_container ${twoLists ? "half_width" : "full_width"}`}>
            {actors.map((actor) => {
                return (
                    <Card actor={actor} lists={twoLists} tipe={tipe} />
                )
            })}
        </div>
    )
}
export default CardContainer