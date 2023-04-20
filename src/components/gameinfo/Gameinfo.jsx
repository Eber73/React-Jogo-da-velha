import style from ".//Gameinfo.module.css"

import Icon from "../icon/Icon"
import Button from "../button/Button"

function GameInfo ({ currentPlayer, winner, onReset, isDraw }) {
  
  const shouldEnableButton = () => winner !==0 || isDraw
  

  return(
    <div className={style.gameInfo}>
      {
        !isDraw && winner === 0 && 
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
        !isDraw && winner !== 0 &&
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
      {
        isDraw && <h4>Empete!</h4>
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