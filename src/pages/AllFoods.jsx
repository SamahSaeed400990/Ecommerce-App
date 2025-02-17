import {React,useState} from 'react'
import Helmet  from '../Components/Helmet/Helmet'
import CommonSection from '../Components/UI/common-section/CommonSection'
import { Container ,Row,Col } from 'reactstrap'
import products from '../Assets/fake-Data/products'
import ProductCard from '../Components/UI/productCard/ProductCard'
import ReactPaginate from 'react-paginate'
import '../styles/all-foods.css'
import '../styles/pagination.css'
import '../styles/food-details.css'
const AllFoods = () => {
  const [searchTerm , setSearchTerm] =useState('')
  const [pageNumber , setPageNumber] =useState(0)
  const productPerPage = 8
  // eslint-disable-next-line array-callback-return
  const searchedProduct = products.filter(item =>{
    if(searchTerm.value === '') return item
    if(item.title.toLowerCase().includes(searchTerm.toLowerCase()))
      return item
  })
  const visitedPage = pageNumber * productPerPage
  const displayedPage = searchedProduct.slice(visitedPage , visitedPage + productPerPage)
  const pageCount = Math.ceil(searchedProduct.length / productPerPage)
  const changePage = ({selected})=>{
    setPageNumber(selected)
  }
 
  
  return<>
    <Helmet title='All-Foods'>
      <CommonSection title='All Foods'/>
      <section>
        <Container>
          
          <Row>
            <Col lg='6' md='6' sm='6' xs='12'>
              <div className="search d-flex align-items-center justify-content-between">
                <input type="text" placeholder='Search...' value={searchTerm}
                 onChange={e=> setSearchTerm(e.target.value)}/>
                <span><i className="ri-search-line"></i></span>
              </div>
            </Col>
            <Col lg='6' md='6' sm='6'  xs='12' className='mb-5'>
               <div className="sorting text-end">
                  <select className='w-50'>
                    <option>Defualt</option>
                    <option value="ascending">Alphabeticly, A-Z</option>
                    <option value="descending">Alphabeticly, Z-A</option>
                    <option value="high-price">High Price</option>
                    <option value="low-price">Low Price</option>
                  </select>
               </div>
            </Col>
            {
              displayedPage.map(item =>
                <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mb-4'>
                  <ProductCard item={item}/>
                </Col>
              )
            }
            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel='Prev'
                nextLabel='Next'
                containerClassName='paginationBtn'
              /> 
            </div>
          </Row>
          
        </Container>
      </section>
    </Helmet>
  </> 
}

export default AllFoods