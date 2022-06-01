import 'bootstrap/dist/css/bootstrap.min.css';
import {  useState } from 'react';
import { toast,ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import './App.css';

import Icon from './components/Icon';







var newarr = new Array(9).fill("empty")

function App() {

  const [currplayer,updateplayer] = useState(false)
 const [iswinner,updatewinner] = useState("")



function reload(){
updateplayer(false)
newarr.fill("empty",0,9)
updatewinner("")
}


function checkwinner(){

if(newarr[0]!=="empty" && newarr[0]===newarr[1] && newarr[1]===newarr[2]){
updatewinner(`${newarr[0]} won`)

}
else if(newarr[3]!=="empty" && newarr[3]===newarr[4] && newarr[4]===newarr[5]){
  updatewinner(`${newarr[3]} won`)
  }
 else if(newarr[6]!=="empty" && newarr[6]===newarr[7] && newarr[7]===newarr[8]){
    updatewinner(`${newarr[6]} won`)
    }
  else if(newarr[0]!=="empty" && newarr[0]===newarr[3] && newarr[3]===newarr[6]){
      updatewinner(`${newarr[0]} won`)
      }
   else if(newarr[1]!=="empty" && newarr[1]===newarr[4] && newarr[4]===newarr[7]){
        updatewinner(`${newarr[1]} won`)
        }
        else if(newarr[2]!=="empty" && newarr[2]===newarr[5] && newarr[5]===newarr[8]){
          updatewinner(`${newarr[2]} won`)
          }
       else if(newarr[0]!=="empty" && newarr[0]===newarr[4] && newarr[4]===newarr[8]){
            updatewinner(`${newarr[0]} won`)
            }
          else  if(newarr[2]!=="empty" && newarr[2]===newarr[4] && newarr[4]===newarr[6]){
              updatewinner(`${newarr[2]} won`)
              }
else if(newarr[0]!=="empty" && newarr[1]!=="empty"  && newarr[2]!=="empty"  && newarr[3]!=="empty"  && newarr[4]!=="empty" &&
newarr[5]!=="empty" && newarr[6]!=="empty" && newarr[7]!=="empty" && newarr[8]!=="empty"  ){
  updatewinner("draw")
}

  
}




function change(index){

if(newarr[index]==="empty"){
  newarr[index] = currplayer ? "CROSS" : "CIRCLE"
  updateplayer(!currplayer)
}
else if(newarr[index]!=="empty"){
  return toast("already filled",{ type:"error"})
}
checkwinner()

if(iswinner){
  return toast(iswinner,{ type:"success"})
}

}



  return (
  


<Container className='p-5'>


  <Row>
  <ToastContainer />
    <Col md={6} className ="offset-md-3">

{iswinner ? (
  <div className='mb-2'>
<h1 className='text-light text-center text-uppercase'>{iswinner}</h1>
<button onClick={reload} className='btn mb-4 reload btn-dark text-center'>Reload</button>
</div> 
) : (

<h1 className='text-light my-3 text-center'>{currplayer ? "CROSS" : "CIRCLE"} TURN</h1>
)
}




 <div className='grid '>
      {newarr.map((ele,index)=>(
     <Card   key={index} className="card" onClick={()=>change(index)}>
        <CardBody  className='box' >
          <Icon name={ele}/>
        </CardBody>
      </Card>
      ))}
</div>    
    </Col>
 

 </Row>

  </Container>



  );
}

export default App;
