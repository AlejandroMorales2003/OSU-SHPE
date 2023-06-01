import styled from "styled-components"
import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom";



/* Keeps the Navbar at the top of the page */
const BarNav = styled.div`
    position: sticky;
    top:0;
    z-index: 999;
`;

/* Puts the white background, sets the height of the navbar, and separates it into setions */
const NavContainer = styled.div`
    background-color: white;
    height: 12vh;
    display: flex;
    align-items: center;
    padding:10px;
    border-bottom: 3px solid black;
`;


/* Left side of the navigation bar -------------------*/

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

/* The SHPE logo */
const SHPELogo = styled.img`
    height: 70px;
    width: 200px;
    cursor: pointer;
`;

/* The bar between the SHPE logo and OSU logo */
const Bar = styled.p`
    font-size: 75px;
    margin-bottom: 10px;
`;

/* The OSU logo */
const OSULogo = styled.img`
    height: 70px;
    width: 70px;
`;

/* Right side of the navigation bar -------------------*/

const Right = styled.div`
    flex: 2;
    font-size: 100px;
`

/* Establishes the list for the Navbar */
const MenuList = styled.ul`
    display: flex;
    justify-content: space-evenly;

    @media (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 60vh;
        position: absolute;
        top: 12vh;
        left: -100%;
        opacity: 1;
        transition: all 0.5s ease;

        ${props => !(props.touch)} {
            //top: 12vh;
            align-items: center;
            background: white;
            left: 0;
            opacity: 1;
            transition: all 0.5s ease;
            z-index: 1;
        }
    } 
`

/* Decoration for each navmenu item */
const MenuItem = styled.li`
    font-size: 29px;
    list-style-type: none;
    text-decoration:none;
    //text-shadow: 1px 1px 1px black;

    ${props => !(props.touch)} {
            padding: 2vh 100%;
            border: 1px solid black;
        }

`

/* Link decoration for menu items */
const Links = styled(Link)`
    text-decoration:none;
    color: #ED5D29;
    //transition: all .5s ease-in;

    &:hover {
        font-size: 27px;
        color: black;
    }
`;

/* The Hamburger logo */
const Hamburger = styled.img`
    height: 35px;
    width: 35px;
    display: ${props => props.dis ? 'none' : 'block'};
`;

function Navbar() {

    const [click,setClick] = useState(false);
    const [button,setButton] = useState(true);
    const handleClick = () => setClick(!click);

    /* Closes the menu when in mobile mode */
    const closeMobileMenu = () =>  {
        setClick(false);
    }

    /* shows the button once the screen reaches a certain size */
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    /* Makes sure the button doesn't appear when the page is refreshed */
    useEffect(() => {
        showButton()
    }, []);

    function scrollToTop() {
        window.scrollTo(0, 0);
    }

    function allOnClick() {
        closeMobileMenu();
        scrollToTop();
    }

    /* checks for the size of the page to place the button */
    window.addEventListener('resize',showButton);

    return (
        <BarNav>
            <NavContainer>
                <Left>
                    <Links to='/OSU-SHPE' onClick={allOnClick}>
                        <SHPELogo src="/OSU-SHPE/images/shpe.png"/>
                    </Links>
                    <Bar>|</Bar>
                    <OSULogo src="/OSU-SHPE/images/osu.png"/>
                </Left>
                
                <Right>
                    <MenuList touch={click}>
                        <MenuItem touch={click}>
                            <Links to="/OSU-SHPE" onClick={allOnClick}>
                                Home
                            </Links>
                        </MenuItem>

                        <MenuItem>
                            <Links to="/OSU-SHPE/about" onClick={allOnClick}>
                                About Us
                            </Links>
                        </MenuItem>

                        <MenuItem>
                            <Links to="/OSU-SHPE/officers" onClick={allOnClick}>
                                Officers
                            </Links>
                        </MenuItem>

                        <MenuItem>
                            <Links to="/OSU-SHPE/events" onClick={allOnClick}>
                                Events
                            </Links>
                        </MenuItem>

                        <MenuItem>
                            <Links to="/OSU-SHPE/calenders" onClick={allOnClick}>
                                Calender
                            </Links>
                        </MenuItem>

                        <MenuItem>
                            <Links to="/OSU-SHPE/shpetinas" onClick={allOnClick}>
                                SHPEtinas
                            </Links>
                        </MenuItem>
                    </MenuList>
                </Right>
                <Hamburger src={click ? "/OSU-SHPE/images/xmark.png":"/OSU-SHPE/images/ham.png"} onClick={handleClick} dis={button}/>

            </NavContainer>    
        </BarNav>
    )
};

export default Navbar