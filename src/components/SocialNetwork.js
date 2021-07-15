import React from 'react';

const SocialNetwork = () => {

  const anim = () => {
    let navLinks = document.querySelectorAll('.social-network a');
    // On récupére la classe de social network et on effectue un for de chaque logo sur le quel on mettre notre évènement lorsque on passe au dessus(OnMoussHover°)

    navLinks.forEach(link => {
      link.addEventListener('mouseover', (e) => {
        let attrX = e.offsetX - 30;
        let attrY = e.offsetY - 15;

        link.style.transform = `translate( ${attrX}px, ${attrY}px)`;
        // On lui donne des axe de direction
      })
      link.addEventListener('mouseleave', () => {
        link.style.transform = '';
        // transform => revenir a sa place initial
      })
    })
  }

  return (
    <div className="social-network">
      <ul className="content">
        <a href="https://www.facebook.com/yasmina.benyaich.7/" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim} >
          <li><i className="fab fa-facebook-f"></i></li>
        </a>
        <a href="https://github.com/yasminabenyaich" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim} >
          <li><i className="fab fa-github"></i></li>
        </a>
        <a href="https://www.instagram.com/yas_bny/" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim} >
          <li><i className="fab fa-instagram"></i></li>
        </a>
      </ul>
    </div>
  );
};

export default SocialNetwork;