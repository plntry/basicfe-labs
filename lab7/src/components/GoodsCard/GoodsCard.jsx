import s from './GoodsCard.module.css';

const GoodsCard = ({ imgUrl, title, price }) => {
  return (
    <div className={s.card}>
      <img className={s.cardImage} src={imgUrl} alt="goods"/>
      <div className={s.cardText}>
        <div className={s.cardTitle}>{title}</div>
        <div className={s.cardPrice}>{`${price} грн`}</div>
      </div>
    </div>
  );
};

export default GoodsCard;