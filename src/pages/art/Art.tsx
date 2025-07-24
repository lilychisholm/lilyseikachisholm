import React, { useState } from 'react';
import BaseTemplate from '../../components/BaseTemplate/BaseTemplate.tsx';
import './Art.css';
//import SwirlGirl from '../../images/swirlgirl.png';
import birthday from '../../images/IMG_8378.jpg';
import ox from '../../images/IMG_8379.jpg';
import store from '../../images/IMG_8380.jpg';
import art1 from '../../images/IMG_0491.JPG';
import art2 from '../../images/IMG_1868.jpg';
import art3 from '../../images/IMG_1870 (1).jpg';
import art4 from '../../images/IMG_7748.jpg';
import art5 from '../../images/IMG_7810.jpg';
import art6 from '../../images/IMG_8378.jpg';
import art7 from '../../images/IMG_8379.jpg';
import art8 from '../../images/IMG_8380.jpg';
import art9 from '../../images/IMG_8381.jpg';
import selfie from '../../images/81EC8A9C-D42D-4D34-9DD9-4B7E6AA42142.jpg'


const images = [
  {
    src: birthday,
    alt: 'Art 1',
    desc: 'Description for Art 1',
  },
  {
    src: ox,
    alt: 'Art 2',
    desc: 'Description for Art 2',
  },
  {
    src: store,
    alt: 'Art 3',
    desc: 'Description for Art 3',
  },
  {
    src: art1,
    alt: 'Art 1',
    desc: 'Description for Art 1',
  },
  {
    src: art2,
    alt: 'Art 1',
    desc: 'Description for Art 1',
  },
  {
    src: art3,
    alt: 'Art 2',
    desc: 'Description for Art 2',
  },
  {
    src: art4,
    alt: 'Art 3',
    desc: 'Description for Art 3',
  },
  {
    src: art5,
    alt: 'Art 1',
    desc: 'Description for Art 1',
  },
  {
    src: art9,
    alt: 'Art 3',
    desc: 'Description for Art 3',
  },
  {
    src: selfie,
    alt: 'Art 3',
    desc: 'Description for Art 3',
  },
];

const Art = () => {
  const [modal, setModal] = useState<{src: string, alt: string, desc: string} | null>(null);

  return (
    <div className="art-page">
      <BaseTemplate isArtPage>
        <div className="art-page-container">
          {/* <div className="art-hero">
            <img src={SwirlGirl} alt="Swirl Girl" className="swirlgirl" />
            <div className="art-text-container">
              <h1 className="art-title">Art</h1>
              <h2 className="art-subtitle">explore the portfolio</h2>
            </div>
          </div> */}
          <div className="gallery">
            {images.map((img, i) => (
              <div className="gallery-item" key={i} onClick={() => setModal(img)}>
                <img className="gallery-img" src={img.src} alt={img.alt} />
              </div>
            ))}
          </div>
          {modal && (
            <div className="gallery-modal-backdrop" onClick={() => setModal(null)}>
              <div className="gallery-modal" onClick={e => e.stopPropagation()}>
                <button className="gallery-modal-close" onClick={() => setModal(null)}>&times;</button>
                <img className="gallery-modal-img" src={modal.src} alt={modal.alt} />
                <div className="gallery-modal-desc">{modal.desc}</div>
              </div>
            </div>
          )}
        </div>
      </BaseTemplate>
    </div>
  );
}

export default Art;