import React ,{useEffect, useRef} from 'react'
import  Helmet from '../Components/Helmet/Helmet'
import CommonSection from '../Components/UI/common-section/CommonSection'
import { Container , Row , Col } from 'reactstrap'
import { Link } from 'react-router-dom'
 
const Register = () => {
  const registerNameRef  = useRef()
  const registerEmailRef  = useRef()
  const registerPasswordRef  = useRef()
  useEffect(()=>{
    registerNameRef.current.focus()
  },[])
  const handelSubmit = (e)=>{
        e.preventDefault()
  }
  return<>
    <Helmet title='Register'>
      <CommonSection title='Register'/>
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12' className='m-auto text-center'>
            <form  className='form mb-5' onSubmit={handelSubmit}>
              <div className="form_group">
                <input type="text" placeholder='Name' required ref={registerNameRef}/>
              </div>
              <div className="form_group">
                <input type="email" placeholder='Email' required ref={registerEmailRef}/>
              </div>
              <div className="form_group">
                <input type="password" placeholder='Password' required  ref={registerPasswordRef}/>
              </div>
              <button type='submit' className='addToCart_btn'>Register</button>

            </form>
            <Link to='/login'>Already have an account? Login</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  </>
}

export default Register