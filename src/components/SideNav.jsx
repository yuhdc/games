import React from 'react';
//switch
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
//framer motion
import { motion } from 'framer-motion';
//css
import '../style/sideNav.css'
import { useDispatch } from 'react-redux';
import { createAction } from '../redux/action/actionCreator';
import { CLEAR_SEARCHED } from '../redux/constant';

function SideNav() {
    const dispatch = useDispatch();
    /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
    const openNav = () => {
        dispatch(createAction({ type: CLEAR_SEARCHED }));
        document.getElementById('menu').style.display = 'none';

        const mWidth = window.innerWidth
        if (mWidth < 720) {
            document.getElementById("mySidenav").style.width = "100%";
            document.getElementById("root").style.marginLeft = " 100%";
        }
        else {
            document.getElementById("mySidenav").style.width = "250px";
            document.getElementById("root").style.marginLeft = " 250px";
        }
    }

    /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("root").style.marginLeft = "0";
        setTimeout(() => {
            document.getElementById('menu').style.display = 'inline-block';
        }, 500)
    }

    return (
        <div>
            <div id="mySidenav" className="sidenav">
                <span className="closebtn" onClick={() => closeNav()}>&times;</span>
                <a href='/'>Home</a>
                <a href='/' >Your Account</a>
                <a href='/'>Favorite Games</a>
                <a href='/'>Setting</a>
            </div>
            {/* <img src={logo} alt="logo" /> */}
            <Logo className='btn' id='menu' onClick={openNav}><i className="uil uil-bars"></i></Logo>
        </div>
    );
}

const Logo = styled(motion.div)`
    margin-top: 10px;
    background: rgba(0,0,0,0.1);
    padding:0.5rem 1rem;
    color:white;
    font-size: 40px;
    cursor: pointer;
    img{
        width: 6rem;
        height: 4rem;
    }
`;


export default SideNav;
