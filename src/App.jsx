import { useState } from 'react'
import Navigator from "./components/nav"
import Hero from "./components/Hero"
import Card from "./components/Card"
import './App.css'
import data from './data'

export default function App() {

    const info = data.map(item =>{
        return(
          <Card 
          // imag={item.coverImg}            //rest pics don't exist!!!
          // rating={item.stats.rating} 
          // title={item.title}
          // reviewCount={item.stats.reviewCount}
          // location={item.location}
          // price={item.price}
          // openspot={item.openSpots}

          key={item.id}
          item={item}
          />
        )
    })

    return (
      <>
        <Navigator/>
        <Hero />
        <section className="cards-list">
          {info}
        </section>
      </>  
    )
}
