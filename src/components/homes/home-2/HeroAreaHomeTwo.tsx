
import React from 'react';
import Image from 'next/image';
import hero_img_1 from "@/assets/img/hero/2/hero-stroke-text.png";
import hero_img_2 from "@/assets/img/hero/hero-2-img.png";
import HeroShapeHomeTwo from '@/svg/home-2/HeroShapeHomeTwo';

const HeroAreaHomeTwo = () => {
  return (
    <>

      <div className="section">
        <div className="tp-mouse-move-section tp-hero-2__bg black-bg-3 tp-hero-2__space-1 d-flex align-items-end justify-content-center z-index-1 p-relative fix">
          <div className="tp-hero-distort-2" style={{ backgroundImage: 'url(/assets/img/hero/hero-2-overlay.png)' }}></div>
          <div className="tp-hero-2__circle-wrapper">
            <span className="tp-hero-2__circle-1 tp-mouse-move-element"></span>
            <span className="tp-hero-2__circle-2 tp-mouse-move-element"></span>
            <span className="tp-hero-2__circle-3 tp-mouse-move-element"></span>
            <span className="tp-hero-2__circle-4 tp-mouse-move-element"></span>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="tp-hero-content-2">
                  <h3 className="tp-hero-title-2 text-center tp-char-animation" style={{textTransform: 'lowercase'}}>
                    interred
                    <br />
                    <span className="stroke-text d-flex align-items-end justify-content-center">
                      {/*<Image src={hero_img_1} alt="image-here" />*/}
                      <span className="location-text d-flex align-items-end text-start d-none d-lg-flex">
                        <span className="d-none d-md-block">Ubicados <i className="fa-sharp fa-solid fa-map"></i>
                          <br /> en Calle del Campesino Sin Número Col. Emiliano Zapata</span>
                      </span>
                    </span>
                  </h3>
                </div>

              </div>
            </div>

            <div className="row">
              <div className="col-xl-12">
                <div className="tp-hero-2__thumb-wrap p-relative text-center">
                  <div className="tp-hero-2__thumb z-index-5">
                    <div style={{flex: 1, flexDirection: 'column', textAlign: 'center', verticalAlign: 'center', width: '100%', height: 706, justifyContent: 'center', alignContent: 'center'}}>
                      
                        <Image src={hero_img_2} style={{position: 'absolute',bottom: 20, borderRadius: 10, right: 100}} alt="image-here" />
                        {/*<div style={{position: 'absolute', bottom: 20, right: 100,borderRadius: 70, backgroundColor: 'black'}} >
                          <video width="933" height="436" autoPlay loop muted color='transparent' >
                              <source src="videos/INTERRED.mp4" type="video/mp4"/>
                              Your browser does not support the video tag.
                          </video>
                        </div>*/}
                      
                    </div>
                  </div>
                  {/*<div className="tp-hero-2__thumb-shape d-none d-md-block">
                    <span>
                      <HeroShapeHomeTwo /> 
                    </span>
                  </div>*/}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default HeroAreaHomeTwo;