import React from "react"
import SbEditable from "storyblok-react"

const Footer = () => {
  return (
    <footer className="container-fluid text-center flex flex-col items-center py-20 container mx-auto">
      <div className='footer_container container'>
        <p>© 2021 Sommelier</p>
        <div className='footer__social-container'>
          <a href='#'>Telegram</a>
          <a href='#'>Discord</a>
          <a href='#'>Twitter</a>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer
