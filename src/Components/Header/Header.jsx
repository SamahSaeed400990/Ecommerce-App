import {React , useRef ,useEffect} from 'react'
import { Container } from 'reactstrap'
import logo from '../../Assets/images/res-logo.png'
import { NavLink,Link } from 'react-router-dom'
import '../../styles/header.css'
import { useSelector , useDispatch} from 'react-redux'
import {cartUiActions} from '../../store/Shopping/CartUiSlice'
const nav_links =[
    {
        display: 'Home',
        path:'/home'
    },
    {
        display: 'Foods',
        path:'/foods'
    },
    {
        display: 'Cart',
        path:'/cart'
    },
    {
        display: 'Contact',
        path:'/contact'
    },
     
]
const Header = () => {
    const menuRaf = useRef(null)
    const menuToggle = ()=>menuRaf.current.classList.toggle('show_menu')
    
    const headerRef=useRef(null)
    const totalQuantity = useSelector(state =>state.cart.totalQuantity)
    const dispatch = useDispatch()
    const toggleCart = ()=>{
        dispatch(cartUiActions.toggle())
    }
    const handleScroll = () =>{
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop){

            headerRef.current.classList.add('header_shrink')
        }
        else{
            headerRef.current.classList.remove('header_shrink')
        }
       
    }
    useEffect(()=>{
        window.addEventListener('scroll' , handleScroll)
        return ()=> window.removeEventListener('scroll' , handleScroll)
    },[])


    
  return <header className="header" ref={headerRef} >
    <Container>
        <div className="nav_wrapper d-flex justify-content-between align-items-center">
            <div className="logo">
                <img src={logo} alt="log" />
                <h5>Testy Treat</h5>
            </div>

            <div className="navigation" ref={menuRaf} onClick={menuToggle}>
                <div className="menu d-flex align-items-center gap-5 text-decoration-none">
                    {
                        nav_links.map((item,index)=>
                        <NavLink to={item.path} key={index}
                          
                         className={navClass => navClass.isActive ? 'active_menu' : ''}
                         >
                            
                            {item.display}
 
                        </NavLink>
                    )
                    }
                </div>
            </div>
            <div className="nav_right d-flex align-items-center gap-3">
                <span className="cart_icon" onClick={toggleCart}>
                    <i class="ri-shopping-basket-line"></i>
                    <span className='cart_badge'>{totalQuantity}</span>
                </span>
                <span className="user">
                    <Link to='/login'><i class="ri-user-line"></i></Link>
                </span>
                <span className="mobile_menu" onClick={menuToggle}>
                    <i class="ri-menu-line"></i>
                </span>
            </div>
        </div>
    </Container>
  </header>
}

export default Header