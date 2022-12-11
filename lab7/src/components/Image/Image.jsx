import React, { useState } from 'react'
import s from './Image.module.css'

function Image ({ imgUrl }) {
  const [isAddBtnDisabled, setIsAddBtnDisabled] = useState(false)
  const [imgWidth, setImgWidth] = useState(600)

  function addImg() {
    setIsAddBtnDisabled(true)
  }

  function removeImg() {
    setIsAddBtnDisabled(false)
  }

  function enlargeImg() {
    setImgWidth(imgWidth + 65)
  }

  function shrinkImg() {
    setImgWidth(imgWidth - 65)
  }

  return (
    <>
        <div className={s.imgBtns}>
            <div className={s.imgBtn} id="add-img-btn" onClick={addImg}>Додати</div>
            <div className={s.imgBtn} id="bigger-img-btn" onClick={enlargeImg}>Збільшити</div>
            <div className={s.imgBtn} id="smaller-img-btn" onClick={shrinkImg}>Зменшити</div>
            <div className={s.imgBtn} id="delete-img-btn" onClick={removeImg}>Видалити</div>
        </div>
        <img
            src={imgUrl}
            hidden={!isAddBtnDisabled}
            width={imgWidth}
            alt="city"
        />
    </>
      
  )
}

export default Image