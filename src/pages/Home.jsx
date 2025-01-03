import React, { useEffect, useState } from 'react'
import  Helmet  from  '../Components/Helmet/Helmet'
import { Row ,Col, Container ,ListGroup,ListGroupItem } from 'reactstrap'
import Hero from '../Assets/images/hero.png'
import '../styles/home.css'
import { Link } from 'react-router-dom'
import Category from '../Components/UI/Category/Category'
import featurImg1 from '../Assets/images/service-01.png'
import featurImg2 from '../Assets/images/service-02.png'
import featurImg3 from '../Assets/images/service-03.png'
import products from '../Assets/fake-Data/products'
import foodCategoryImg1 from '../Assets/images/hamburger.png'
import foodCategoryImg2 from '../Assets/images/pizza.png'
import foodCategoryImg3 from '../Assets/images/bread.png'
import ProductCard from '../Components/UI/productCard/ProductCard'
import whyImg from '../Assets/images/location.png'
import networkImg from '../Assets/images/network.png'
import Testimonial from '../Components/UI/slider/Testimonial'

const featureData =[
  {
    title:"Quick Delivery",
    imgUrl:featurImg1,
     desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.'

  },
  {
    title:"Super Dine In",
    imgUrl:featurImg2, 
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.'
  },
  {
    title:"Easy Pick Up",
    imgUrl:featurImg3,
     desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.'
  },
]
const Home = () => {

  const[category,setCategory] = useState('ALL')
  const[allProducts,setAllProducts] = useState(products)
  
  const[hotPizza ,setHotPizza] =useState([])

  useEffect(()=>{
    const filterdPizza = products.filter(item=> item.category === 'Pizza')
    const slicePizza =  filterdPizza.slice(0,4)
    setHotPizza(slicePizza)
  },[])
  useEffect(()=>{
     if(category === 'ALL'){
      setAllProducts(products)
     }
     if(category === 'BURGER'){
       const fillterdProduct = products.filter(item=> item.category ==='Burger')
       setAllProducts(fillterdProduct)
     }
     if(category === 'PIZZA'){
       const fillterdProduct = products.filter(item=> item.category ==='Pizza')
       setAllProducts(fillterdProduct)
     }
     if(category === 'BREAD'){
       const fillterdProduct = products.filter(item=> item.category ==='Bread')
       setAllProducts(fillterdProduct)
     }

  },[category])



  return <>
   <Helmet title='Home' >
      <section className='home'>
        <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero_content">
              <h5 className='mb-3'>Easy way to make an order</h5>
              <h1 className='mb-4 hero_title'><span>HUNGRY?</span>Just wait food <span> 
                at your door</span>
              </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui magni
                 delectus tenetur autem, sint veritatis!
              </p>
              <div className="hero_btns mt-4 d-flex  gap-5 align-items-center">
                <button className='order_btn d-flex justify-content-between align-items-center'>
                  Order Now <i class="ri-arrow-right-s-line"></i>
                </button>
                <button className='all_food-btn'><Link to='/foods'>See All Foods</Link></button>
              </div>
              <div className=' hero_service d-flex gap-5 align-items-center mt-5'>
                <p className=' d-flex gap-2 align-items-center'><span className='shipping_icon'><i class="ri-car-line"></i></span>No shipping charge</p>
                <p className=' d-flex gap-2 align-items-center'><span className='shipping_icon'><i class="ri-shield-check-line"></i></span>100% secure checkout</p>
              </div>
            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className="hero_img">
              <img src={Hero} alt="hero_img" className='w-100' />
            </div>
          </Col>
        </Row>
        </Container>
      </section>
      <section className='home'>
        <Category/>
      </section>
      <section className='home'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h5 className='feature_subtitle mb-4'>What we serve</h5>
              <h2 className='feature_title'>Just sit back at home</h2>
              <h2 className='feature_title'>we will <span className='feature-span'>take care</span></h2>
              <p className='mb-1 mt-4 feature_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quisquam.</p>
              <p className='mb-1 feature_text' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quisquam.</p>
           
            </Col>
            { featureData.map((item,index)=>(

              <Col lg='4' md='6' sm='6' key={index} className='mt-5'>

                  <div className="feature_item text-center p-3 px-5 py-3">
                      <div className="feature_img">
                        <img src={item.imgUrl} alt="feature_img" className='w-25 mb-3' />
                      </div>
                      <h5 className='fw-bold mb-3'>{item.title}</h5>
                      <p>{item.desc}</p>
                  </div>

              </Col>     
            ))}
          </Row>
     
        </Container>
      </section>
      <section className='home'>
        <Container>
          <Row>
            <Col lg='12' className='text-center' >
              <h2>Popular Foods</h2>
            </Col>
            <Col lg='12'>
              <div className="food_category d-flex justify-content-center align-items-center gap-2">
                <button className={`all_btn ${category === 'ALL'? 'foodBtnActive': ''}`}  onClick={()=>setCategory('All')}>All</button>
                <button className={`d-flex align-items-center gap-2 ${category === 'BURGER'? 'foodBtnActive': ''} `}
                onClick={()=>setCategory('BURGER')}><img src={foodCategoryImg1} alt="foodCategoryImg1" />Burger</button>
                <button className={`d-flex align-items-center gap-2 ${category === 'PIZZA'? 'foodBtnActive': ''} `}
                 onClick={()=>setCategory('PIZZA')}><img src={foodCategoryImg2} alt="foodCategoryImg2" />Pizza</button>
                <button className={`d-flex align-items-center gap-2 ${category === 'BREAD'? 'foodBtnActive': ''} `}
                 onClick={()=>setCategory('BREAD')}><img src={foodCategoryImg3} alt="foodCategoryImg3" />Bread</button>
              </div>
            
            </Col>
            {
              allProducts.map(item=>(
                <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mt-5'>
                <ProductCard item={item}/>
              </Col>
              ))
            }
            
          </Row>
        </Container>
      </section>
      <section className='why_choose-us home'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
            <img src={whyImg} alt="why_testy" className='w-100'/>
            </Col>
            <Col lg='6' md='6'>
            <div className="why_testy">
              <h2 className="testy_title mb-4"> Why <span>Tasty Treat?</span> </h2>
              <p className='why_testy_desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, minus. Tempora reprehenderit a corporis velit, laboriosam vitae ullam, repellat illo sequi odio esse iste fugiat dolor
                , optio incidunt eligendi deleniti!
              </p>
              <ListGroup className='mt-4'>
                <ListGroupItem className='border-0 ps-0'>
                  <p className=' choose_us-title d-flex align-items-center gap-2'>
                  <i class="ri-checkbox-circle-line"></i>
                  Fresh and tasty foods
                  </p>
                  <p className='choose_us-desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, voluptatibus.</p>
                </ListGroupItem>
                <ListGroupItem className='border-0 ps-0'>
                  <p className='choose_us-title d-flex align-items-center gap-2'><i class="ri-checkbox-circle-line"></i>
                  Quality support</p>
                  <p className='choose_us-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, earum.</p>
                </ListGroupItem>
                <ListGroupItem className='border-0 ps-0'>
                  <p className='choose_us-title d-flex align-items-center gap-2'>
                  <i class="ri-checkbox-circle-line"></i>
                  Order from any location
                  </p>
                  <p className='choose_us-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, earum.</p>
                </ListGroupItem>
              </ListGroup>
            </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='pt-0 home'>
        <Container >
          <Row>
            <Col lg='12' className='text-center'>
              <h2 >Hot Pizza</h2>
            </Col>
            {hotPizza.map(item=>(
              <Col lg='3' md='4' key={item.id} className='mb-5'>

                <ProductCard item={item}/>
              
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className='home'>
        <Container>
          <Row>
            
            <Col lg='6' md='6'>

              <div className="testmonial  ">
                  <h5 className="testmonial_subtitle mb-4">
                  Testimonial
                  </h5>
                  <h2 className='testmonial_title mb-4'>What our <span>customers</span> are saying</h2>
                  <p className="testmonial_desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Distinctio quasi qui minus quos sit perspiciatis inventore
                      quis provident placeat fugiat!
                  </p>
                  <Testimonial/>
              </div>
            
            </Col>
            <Col lg='6' md='6'>

              <img src={networkImg} alt="testmonial"  className='w-100'/>
            
            </Col>
          </Row>
        </Container>
      </section>
  </Helmet>
  </>
}

export default Home