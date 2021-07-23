import React from 'react';
//styled components
import styled from 'styled-components';
//custom css
import '../style/uptotop.css'

function Footer(props) {
    //show scrollup
    const scrollUp = () => {
        const scrollUp = document.getElementById("scroll-up");
        // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
        if (scrollUp) return
        if (window.scrollY >= 410) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
        window.addEventListener("scroll", scrollUp);
    }
    // window.onscroll = function (e) {
    //     console.log(window.scrollY);
    // }


    return (
        <footer>
            <StyleNav>
                <Social>
                    <Link href="https://www.linkedin.com/in/cao-duc-huy-09a928133/" alt='linked' rel='noreferrer' target="_blank" >
                        <i className="uil uil-linkedin"></i>
                    </Link>

                    <Link href="https://github.com/yuhdc" rel='noreferrer' alt='github' target="_blank" >
                        <i className="uil uil-github"></i>
                    </Link>

                    <Link href="https://codepen.io/your-work" alt='codepen' rel='noreferrer' target="_blank" >
                        <i className="uil uil-cube codepen"></i>
                    </Link>
                </Social>
                <Copyright>
                    <small>
                        Copyright &copy; Cao Duc Huy
                    </small>
                </Copyright>
            </StyleNav>
            <div>
                <a onScroll={scrollUp} href="#top" className="scrollup" id="scroll-up">
                    <i className="uil uil-arrow-up scrollup__icon"></i>
                </a>
            </div>
        </footer>
    );
}

const StyleNav = styled.div`
    padding: 3rem 0 1rem 0;
    text-align: center;
    /* border-top:solid 1px white; */

    background: #1c0422e5;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, rgba(44, 83, 100,0.9), rgba(54,0,51,0.9));  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, rgba(44, 83, 100,0.9), rgba(54,0,51,0.9)); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

`;

const Social = styled.div`
    padding-bottom: 0.5rem;
    font-weight: bolder;
`;


const Copyright = styled.div`
    color:white;
`;

const Link = styled.a`
    font-size: 1.6rem;
    margin: auto 0.5rem;
    color:#fff;

    i{}&:hover
    {
        opacity: 0.7;
        color: black;
    }
`;

export default Footer;