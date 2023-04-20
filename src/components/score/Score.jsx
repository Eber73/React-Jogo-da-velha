import style from "./Score.module.css"

import Icon from "../icon/Icon"

function Score () {
  return (
    <>
      <h4>Placar:</h4>
      <div className={style.score}>
        <div className={style.scoreContent}>
          <Icon iconName="circle" />
          <h2>0</h2>
        </div>
        <div className={style.scoreContent}>
          <Icon iconName="x" />
          <h2>0</h2>
        </div>
      </div>
    </>
  )
}


export default Score