import "./cart-list.styles.css";
import Card from "./card/card.component";

function CardList({ monsters }) {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        const { name, email, id } = monster;
        return <Card key={id} monster={monster} />;
      })}
    </div>
  );
}

export default CardList;
