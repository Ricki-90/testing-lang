import React from 'react'
import gravare from "./../assets/images/gravare.jpg";

const HeaderSection = () => {
  return (
    <header>
      <div className="container d-flex header">
        <div>logo</div>
        <div className="d-flex header-menu">
          <div className="menu-text">Hem</div>
          <div className="menu-text">Sidorunkarna</div>
          <div className="menu-text">Kortrunkarna</div>
        </div>
      </div>
      <div className="title-langrunkarna d-flex justify-content-center">Välkommen till Långrunkarna</div>

      <div className="d-flex justify-content-center stylning-img">
        <img className="img-gravare" src={gravare} alt="gravare" />
      </div>

    </header>
  )
}

export default HeaderSection