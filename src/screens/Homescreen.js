import React from 'react'
import Banner from '../Banner';
import "./HomeScreen.css";
import Nav from '../Nav';
import requests from '../Requests';
import Row from '../Row.js'

function Homescreen() {
  return (
    <div className='homeScreen'>
        {/* Nav */}
        <Nav />


        {/* Banner */}
        <Banner />

        {/* Row */}
        <Row title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals} isLargeRow/>
        <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
        <Row title="Comedy" fetchURL={requests.fetchComedyMovies}/>
        <Row title="Horror" fetchURL={requests.fetchHorrorMovies}/>
        <Row title="Romance" fetchURL={requests.fetchRomanceMovies}/>
        <Row title="Documentaries" fetchURL={requests.fetchDocumentaries}/>
    </div>
  )
}

export default Homescreen