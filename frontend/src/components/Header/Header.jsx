import React from 'react'
import './Header.css'
import { useTypewriter } from 'react-simple-typewriter'

const Header = () => {

const domainList = [
  "Order your favourite food here"
    
]

const [text] = useTypewriter({
  words: domainList,
  loop: {},
  typeSpeed: 100,
  deleteSpeed: 80
})


  const viewmenu = () => {
    const element = document.getElementById('explore-menu')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>{text}</h2>
        <p>Feeling snacky? 😋 Roll, munch, and slurp your way through our menu!
          From cheesy rolls to spicy noodles — your cravings don’t stand a chance.
          Order now and let the snacking party begin!.</p>
        <button onClick={viewmenu} >View Menu</button>
      </div>
    </div>
  )
}

export default Header