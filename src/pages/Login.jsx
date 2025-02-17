import React ,{useEffect, useRef} from 'react'
import  Helmet from '../Components/Helmet/Helmet'
import CommonSection from '../Components/UI/common-section/CommonSection'
import { Container , Row , Col } from 'reactstrap'
import { Link } from 'react-router-dom'
 
const Login = () => {
  const loginEmailRef  = useRef()
  const loginPasswordRef  = useRef()
  useEffect(()=>{
    loginEmailRef.current.focus()
     
  },[])
  const handelSubmit = (e)=>{
        e.preventDefault()
  }
  return<>
    <Helmet title='Login'>
      <CommonSection title='Login'/>
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12' className='m-auto text-center'>
            <form  className='form mb-5' onSubmit={handelSubmit}>
              <div className="form_group">
                <input type="email" placeholder='Email' required ref={loginEmailRef} />
              </div>
              <div className="form_group">
                <input type="password" placeholder='Password' required  ref={loginPasswordRef}/>
              </div>
              <button type='submit' className='addToCart_btn'>Login</button>

            </form>
            <Link to='/register'>Do not have an account? Create an acount</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  </>
}

export default Login