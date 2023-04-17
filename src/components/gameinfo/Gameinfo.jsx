import style from ".//Gameinfo.module.css"

import Icon from "../icon/Icon"
import Button from "../button/Button"

function GameInfo ({ currentPlayer, winner, onReset }) {
  
  const shouldEnableButton = () =>{
    if (winner !== 0) return true
  }

  return(
    <div className={style.gameInfo}>
      {
        winner === 0 && 
        <>
          <h4>Próximo a jogar:</h4>
         {
            currentPlayer === 1 && <Icon iconName="circle" />
          }
         {
            currentPlayer === -1 && <Icon iconName="x" />
         }
        </>
      }
      {
        winner !== 0 &&
         <>
          <h4>Fim de jogo! Vencedor: </h4>
          {
            winner === 1 && <Icon iconName="circle" />
          }
          {
            winner === -1 && <Icon iconName="x" />
          }
        </>
      }    
      <Button
        onClick={onReset}
        disabled={!shouldEnableButton()}
      >
        Reiniciar
      </Button>
   </div>
  )
}


export default GameInfo