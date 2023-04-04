export default function Card(props) {
  const { card } = props;

  return (
    <div className="card" onClick={props.handleClick}>
      <img src={card.avatar} alt={card.name} className="card__img" />
      <div className="card__content">
        <h3 className="card__name">{card.name}</h3>
        <p className="card__email">{card.email}</p>
      </div>
    </div>
  );
}
