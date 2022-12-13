import { img0, img1, img2, img3, img4, img5 } from "../../images/galleryItems";
import GoodsCard from "../GoodsCard/GoodsCard";
import s from './GoodsList.module.css';

function GoodsList() {
  const items = [
    {
      id: 0,
      imgUrl: img0,
      title: 'КРОП-ТОП ADIDAS BY STELLA MCCARTNEY WOLFORD',
      price: 6999
    },
    {
      id: 1,
      imgUrl: img1,
      title: 'ДЖЕМПЕР ДЛЯ ЙОГИ',
      price: 999
    },
    {
      id: 2,
      imgUrl: img2,
      title: 'ФУТБОЛКА ДЛЯ ФІТНЕСУ AEROREADY 3-STRIPES',
      price: 1399
    },
    {
      id: 3,
      imgUrl: img3,
      title: 'ТОЛСТОВКА ADIDAS BY STELLA MCCARTNEY SC',
      price: 4999
    },
    {
      id: 4,
      imgUrl: img4,
      title: 'ШТАНИ ДЛЯ ФІТНЕСУ ADIDAS BY STELLA MCCARTNEY TL',
      price: 3999
    },
    {
      id: 5,
      imgUrl: img5, 
      title: 'ШТАНИ ДЛЯ БІГУ OWN THE RUN ASTRO WIND',
      price: 2799
    }
  ]

  return (
    <div className={s.goodsContainer}>
      {items.map(({ id, imgUrl, title, price }) => {
        return <GoodsCard
                  key={id}
                  imgUrl={imgUrl}
                  title={title} 
                  price={price}
                />
      })}
    </div>
  );
};

export default GoodsList;