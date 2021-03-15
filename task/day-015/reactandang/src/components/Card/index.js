import "./Card.css";

const Card = ({ gambar, title, ...rest }) => {
  return (
    <div className="card__main">
      <img className="card__img" src={gambar} alt="Card" />
      <h3 className="card__title">{title}</h3>
    </div>
  );
};

export const CardBlack = ({ gambar, title, ...rest }) => {
  return (
    <div className="card__main">
      <img className="card__img" src={gambar} alt="Card" />
      <h3 className="black__bg">{title}</h3>
    </div>
  );
};

export default Card;
