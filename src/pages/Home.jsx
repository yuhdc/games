import React, { useEffect } from 'react';
import Game from '../components/game';
import GameDetail from '../components/gameDetail.jsx';
import Footer from '../components/footer'
//redux
import { useDispatch, useSelector } from "react-redux";
import { loadGame } from "../redux/action/gameAction.js";
//styled components
import styled from 'styled-components';
//animation
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { fadeIn } from "../animation.js";
//router
import { useLocation } from 'react-router-dom';
import { Title } from '../components/HOC';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
//custom css
import '../style/swipe.css'
import SwiperCore, {
    Pagination, Navigation, EffectCoverflow
} from 'swiper/core';
import Loading from '../components/loading';
// install Swiper modules
SwiperCore.use([Pagination, Navigation, EffectCoverflow]);


function Home(props) {
    //get current location
    const location = useLocation();
    const pathId = location.pathname.split('/')[2];

    //fetch data from api
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGame());
    }, [dispatch]);

    //get games from redux
    const { popular, searched, upcoming } = useSelector((state) => state.games)


    const isloading = useSelector((state) => state.games.isloading);

    return (
        <>
            {
                isloading ? <Loading /> :
                    <GameList variants={fadeIn} initial="hidden" animate="show">
                        <AnimateSharedLayout type="crossfade">
                            <AnimatePresence>
                                {pathId && <GameDetail pathId={pathId} />}
                            </AnimatePresence>
                            {searched.length ? (
                                <div className="searched" >
                                    <Games>
                                        <Title style={{ paddingLeft: '5rem' }}>Searched Games</Title>
                                        {searched.map((game) => (
                                            <Game
                                                name={game.name}
                                                released={game.released}
                                                id={game.id}
                                                image={game.background_image}
                                                key={game.id}
                                            />
                                        ))}
                                    </Games>
                                </div>
                            ) : (
                                ""
                            )}
                            <Games>
                                <Title>Upcoming Games</Title>
                                {upcoming?.map((game) => {
                                    return <Game
                                        key={game.id}
                                        id={game.id}
                                        name={game.name}
                                        released={game.released}
                                        slug={game.slug}
                                        image={game.background_image} />
                                })}
                            </Games>

                            <PopGames>
                                <Title style={{ padding: 20, textAlign: 'center', fontSize: '2rem' }}>Popular games</Title>
                                <Swiper
                                    effect={'coverflow'}
                                    grabCursor={true}
                                    centeredSlides={true}
                                    coverflowEffect={{
                                        "rotate": 50,
                                        "stretch": 0,
                                        "depth": 100,
                                        "modifier": 1,
                                        "slideShadows": true
                                    }}
                                    slidesPerView={1}
                                    spaceBetween={20}
                                    breakpoints={{
                                        "640": {
                                            "slidesPerView": 2,
                                            "spaceBetween": 20
                                        },
                                        "960": {
                                            "slidesPerView": 3,
                                            "spaceBetween": 40
                                        },
                                        "1280": {
                                            "slidesPerView": 4,
                                            "spaceBetween": 50
                                        }
                                    }}
                                    loop={false}
                                    pagination={{ clickable: true, dynamicBullets: true }}>
                                    {popular?.map((game) => {
                                        return (
                                            <SwiperSlide key={game.id}>
                                                <Game
                                                    id={game.id}
                                                    name={game.name}
                                                    released={game.released}
                                                    slug={game.slug}
                                                    image={game.background_image} />
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            </PopGames>
                        </AnimateSharedLayout>
                    </GameList >
            }
            <Footer />
        </>
    );
}


const GameList = styled(motion.div)`
            padding-top: 10%;
            transition: color 0.2s ease 0s, background-color 0.2s ease 0s;
            background: #1c0422e5;  /* fallback for old browsers */
            background: -webkit-linear-gradient(to top top, rgba(44, 83, 100,0.9), rgba(54,0,51,0.9),black);  /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to top, rgba(44, 83, 100,0.9), rgba(54,0,51,0.9),rgb(37,38,39)); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            `;

const Games = styled(motion.div)`
            padding: 50px 5rem 10%;
            min-height: 80vh;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
            grid-column-gap: 3rem;
            grid-row-gap: 5rem;
            `;

const PopGames = styled(motion.div)`
            z-index  :10 ;
            padding:0 0.1rem ;
            padding-bottom: 15px;
            min-height: 50vh;
            background:rgba(44, 60, 80, 0.8);
            /* display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 220px));
            grid-column-gap: 3rem;
            grid-row-gap: 5rem; */
            `;


export default Home;