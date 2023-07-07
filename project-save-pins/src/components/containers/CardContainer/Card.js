import  Card  from "../../Card/Card.js" 
import { useAppContext } from '../../../store/ContextApp.js'
import { OpenModalSavePinAction } from "../../../store/Actions.js";


export const CardContainer = (props) => {

    const { state, dispatch } = useAppContext();

    const handleClick = (pinId) => {
        console.log('clicou', pinId)
        dispatch (OpenModalSavePinAction(pinId))
    }
    return (

        <Card {...props} onClick={handleClick}/>
       
    )
}