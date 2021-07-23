import React, { useState } from "react";
//Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux and Routes
import { useDispatch, useSelector } from "react-redux";
import { fadeIn } from "../animation";
import { fetchSearch } from "../redux/action/gameAction";
//
import SideNav from './SideNav'
import { Link } from "react-router-dom";
import { userLogout } from "../redux/action/userAction";

function Header() {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  //check if sign in or not
  const loginInfo = JSON.parse(localStorage.getItem('credential'))
  const credential = useSelector((state) => state.users.credential)

  //
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  //handle sign out
  const handleSignOut = () => {
    localStorage.removeItem("credential");
    dispatch(userLogout())
  }

  return (
    <div id="test" style={{ position: 'sticky', top: 0, left: 0, zIndex: 20 }}>
      <StyledNav variants={fadeIn} initial="hidden" animate="show">
        <SideNav />
        <form className="search">
          <input placeholder='Search...' type="text" name="search" value={textInput} onChange={inputHandler} />
          <button onClick={submitSearch} type="submit">
            <i className="uil uil-search"></i>
          </button>
        </form>
        {
          (loginInfo || credential) ?
            <>
              <Sign to='/'>Hi {loginInfo.name.split(' ')[0]}</Sign>
              <Sign to='/' onClick={handleSignOut}>Sign out</Sign>
            </>
            :
            <>
              <Sign to='signup'>Sign Up</Sign>
              <Sign to='signin'>Sign In</Sign>
            </>
        }
      </StyledNav>
    </div >
  )
};


const StyledNav = styled(motion.nav)`
  width: 100%;
  position:absolute;
  top:0;
  left:0;
  display:flex;
  padding-bottom:1rem;
  justify-content: space-between;
  align-items:center;
  background: rgba(0,0,0,0.8);
  form{
    flex:1;
    position: relative;
    padding-left: 10%;
  }
  input {
    font-size: 1.5rem;
    padding:0px 6rem 0px 2.5rem;
    border: none;
    margin-top: 1rem ;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    width: 80%;
    background: #f1f1f1;
    min-height: 50px;
    border-radius: 50px;
    &:focus{
      outline:none;
    }
  }
                
  button {
    position: absolute;
    top:0;
    right:18%;
    transform: translate(5%,42%);

    padding:0.5rem 0.7rem;
    min-height: 40px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    background: #ff7676;/* fallback color*/
    background: linear-gradient(45deg, rgba(241,39,17,0.7), rgba(245,175,25,0.7));
    color: white;
    border-left: none; /* Prevent double borders */

    font-size: 1.5rem;
    z-index: 5;
}
`;

const Sign = styled(Link)`
height: 8vh;
width:8rem;
color:white;
line-height: 8vh;
opacity:0.7;
font-size: 1.2rem;
margin: 2px;
padding-top: 8px;
&:hover{
  cursor: pointer;
  /* border-bottom: 5px solid #ff7676; */
  opacity:1;
  padding-left:10px
}
@media screen and (max-width: 900px) {
  font-size: 1rem;
  text-align:center;
  width:5rem;
}
`;


export default Header;