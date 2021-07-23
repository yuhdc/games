import React from 'react';
//styled components
import styled from 'styled-components';
import { smallImage } from '../util';
//animation
import { motion } from 'framer-motion'
import { popup } from '../animation'
//redux
import { useDispatch } from 'react-redux';
import { loadDetail } from "../redux/action/gameDetailAction";
//router
import { NavLink } from 'react-router-dom';


function Game({ name, released, image, slug, id }) {
    const stringPathId = id.toString();


    //handle load detail
    const dispatch = useDispatch();
    //dispatch game to redux store once click
    const handleGameDetail = (game_id) => {
        document.body.style.overflow = 'hidden'
        dispatch(loadDetail(game_id));
    }

    return (
        <StyleGame
            onClick={() => handleGameDetail(id)}
            variants={popup}
            initial='hidden'
            animate='show'
            layoutId={stringPathId}
        >
            <NavLink to={`/game/${id}`}>
                <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
                <p>Released date: {released}</p>
                <motion.img
                    layoutId={`image ${stringPathId}`}
                    src={smallImage(image, 640)} alt={slug} />
            </NavLink>
        </StyleGame >
    );
}

const StyleGame = styled(motion.div)`
    background: rgba(235,235,235,0.8);
    min-height: 30vh;
    /* height: 50vh; */
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
    
`


export default Game;