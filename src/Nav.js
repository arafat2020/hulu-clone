import React from 'react';
import './Nav.css'
import requists from './requists';

const Nav = ({setoption}) => {
    return (
        <div className="nav">
            <h2 onClick={()=> setoption(requists.fetchTrending)} >Trending</h2>
            <h2 onClick={()=> setoption(requists.fetchToprated)} >Top Rated</h2>
            <h2 onClick={()=> setoption(requists.actionMovie)} >Action</h2>
            <h2 onClick={()=> setoption(requists.comideyMovie)} >Comedy</h2>
            <h2 onClick={()=> setoption(requists.horrorMovie)} >Horror</h2>
            <h2 onClick={()=> setoption(requists.romanceMovie)} >Romance</h2>
            <h2 onClick={()=> setoption(requists.mystryMovie)} >Mystery</h2>
            <h2 onClick={()=> setoption(requists.scifiMovie)} >Sci-Fi</h2>
            <h2 onClick={()=> setoption(requists.westernMovie)} >Western</h2>
            <h2 onClick={()=> setoption(requists.animationMovie)} >Animation</h2>
            <h2 onClick={()=> setoption(requists.tvMovie)} >Movie</h2>
        </div>
    );
};

export default Nav;