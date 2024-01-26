import React from 'react'

import chat from '../designs/img/icon-chat.png'
import money from '../designs/img/icon-money.png'
import security from '../designs/img/icon-money.png'
import Features from '../layouts/Features'

const Home = () => {

  const featureData = [
    {
      name: "Chat",
      src : chat,
      alt: "Chat Icon",     
      title: "You are our #1 priority",
      paragraph: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    },
    {
      name: "Money",
      src: money,
      alt: "Money Icon",
      title:"More savings means higher rates",
      paragraph: "The more you save with us, the higher your interest rate will be!",
    },
    {
      name: "Security",
      src: security,
      alt: "Security Icon",
      title:"Security you can trust",
      paragraph: "We use top of the line encryption to make sure your data and money is always safe.!",
    },
  ];
    
  return (
    <>
        <main>
        <div className="hero">
            <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">Open a savings account with Argent Bank today!</p>
            </section>
        </div>
        <section className="features">
            <h2 className="sr-only">Features</h2>
            {featureData.map(
                 feature =>
                 <Features 
                   key={feature.name}
                   src= {feature.src}
                   alt= {feature.alt}
                   title= {feature.title}
                   paragraph= {feature.paragraph}
                 />
               
            )}
        </section>
        </main>
    </>
  )
}

export default Home