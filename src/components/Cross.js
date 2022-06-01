import { Col, Container ,Card,CardBody,Row } from "reactstrap"
import "./Img.css"


function Cross(){




return (


    <Container className='p-5'>
    
    
      <Row>

        <Col md={6} className ="offset-md-3">
        


         <Card  className='imgbox bg-light'>
            <CardBody>
           
            <img  className='img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Cross-draw-image.svg/640px-Cross-draw-image.svg.png' alt='cross' ></img>
            </CardBody>
          </Card>
     
 
        </Col>
     
    
     </Row>
    
      </Container>
    
    










)


}


export default Cross