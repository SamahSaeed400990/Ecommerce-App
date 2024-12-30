import React from 'react'
import gatecoryImg1 from '../../../Assets/images/category-01.png'
import gatecoryImg2 from '../../../Assets/images/category-02.png'
import gatecoryImg3 from '../../../Assets/images/category-03.png'
import gatecoryImg4 from '../../../Assets/images/category-04.png'
import { Container , Row ,Col } from 'reactstrap'
import '../../../styles/Category.css'
const GategoryData =[
    {
        display:'Fastfood',
        imgUrl: gatecoryImg1,
    },
    {
        display:'Pizza',
        imgUrl: gatecoryImg2,
    },
    {
        display:'Asian Food',
        imgUrl: gatecoryImg3,
    },
    {
        display:'Row Meat',
        imgUrl: gatecoryImg4,
    },
]
const Category = () => {
  return<>
  <Container>
    <Row>
        {
            GategoryData.map((item,index)=>(
                <Col lg='3' md='4' sm='6' xs='6' className='mb-4'>
                    <div className='Category_item d-flex align-items-center gap-3'>
                        <div className="Category_img">
                            <img src={item.imgUrl} alt="Category_img" />
                        </div>
                        <h6>{item.display}</h6>
                    </div>
                
                </Col>
            )
            
            )
        }
        <Col lg='3' md='4'></Col>
    </Row>
  </Container>
  </>
}

export default Category