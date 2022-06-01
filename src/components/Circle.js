import { Col, Container ,Card,CardBody,Row, CardImg } from "reactstrap"
import "./Img.css"


function Circle(){




return (


    <Container className='p-5'>
    
    
      <Row>

        <Col md={6} className ="offset-md-3">
        
         <Card  className='imgbox bg-light'>
            <CardBody>
           

           <img  className='img ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_FNudCOGfF6f0Nq1so6yhOpE-n_lHVJuMQqBxbVJ4cD76zsWpk3aoQaoZ6S93uhIu-Gg&usqp=CAU' alt='circle' ></img>
      

            </CardBody>
          </Card>
     
 
        </Col>
     
    
     </Row>
    
      </Container>
    
    )


}


export default Circle