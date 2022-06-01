import Circle from './Circle'
import Cross from './Cross'

function Icon(props){


if(props.name==="CIRCLE"){
  return <Circle/>
}else if(props.name==="CROSS"){
  return <Cross/>
}

}



export default Icon