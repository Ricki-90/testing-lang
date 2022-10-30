import React from 'react'

const HeaderSection = () => {
  return (
    <header>
      <div className="container d-flex header">
        <div className="d-flex header-menu">
          <div className="menu-text">Hem</div>
          <div className="menu-text">Bildarkiv</div>
          <div className="menu-text">Kortrunkarna</div>
          <div className="menu-text">Kontakt</div>
        </div>
      </div>
      <div className="title-langrunkarna d-flex justify-content-center">Välkommen till Långrunkarna</div>
    </header>
  )
}

export default HeaderSection