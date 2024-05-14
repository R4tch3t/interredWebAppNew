
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import circle_img_1 from "@/assets/img/hero/hero-circle-2.png";
import circle_img_2 from "@/assets/img/hero/hero-circle-1.png";
import about_img_1 from "@/assets/img/hero/hero-2.1-img.png";
import about_hand from "@/assets/img/hero/hero-hand.png";
import about_star from "@/assets/img/hero/hero-star.png";

import brand_img_1 from "@/assets/img/brand/logo2-1.svg";
import brand_img_2 from "@/assets/img/brand/logo2-2.svg";
import brand_img_3 from "@/assets/img/brand/logo2-3.svg";
import brand_img_4 from "@/assets/img/brand/logo2-4.svg";
import brand_img_5 from "@/assets/img/brand/logo2-5.svg";
import Router, { useRouter } from 'next/router';

interface DataType {
  experienc_year: number;
  experienc_text: React.JSX.Element;
  subtitle: string;
  title: string;
  sm_info_1: React.JSX.Element;
  sm_info_2: React.JSX.Element;
  link_text: string;
  brand_images: any[];
}

const about_content: DataType = {
  experienc_year: 100,
  experienc_text: <>MB <br /> de descarga <br />y bajada también!</>,
  subtitle: "Hello There!",
  title: "I'm Diego",
  sm_info_1: <>I am a UI Designer building usable human <br /> interfaces for the digital world.</>,
  sm_info_2: <>Suspendisse convallis, mauris a placerat rutrum, lorem <br /> libero sodales ipsum, quis tincidunt.!</>,
  link_text: "NEED THIS? LETS TALK",
  brand_images: [
    brand_img_1, brand_img_2, brand_img_3, brand_img_4, brand_img_5
  ]
}

const { experienc_year, experienc_text, subtitle, title, sm_info_1, sm_info_2, link_text, brand_images } = about_content


const ContratarAreaHomeTwo = () => {
  
  return (
    <>
      <div className="section">
        <div className="tp-hero-2__bg black-bg-3 tp-hero-2__space-2 d-flex align-items-start justify-content-center p-relative z-index-1">
          <div className="tp-hero-2__boder-circle">
            <span></span>
          </div>
          <div className="container">
            <div className="tp-hero-2__exp-thumb-main p-relative">
              <div className="tp-hero-2__circle-img-wrap">
                <div className="tp-hero-2__circle-img p-relative">
                  <Image className="img-1" src={circle_img_1} alt="image-here" />
                  <div className="tp-hero-2__circle-img-2">
                    <Image src={circle_img_2} alt="image-here" />
                  </div>
                </div>
              </div>
              <div className="row align-items-center z-index-5">
                <div className="col-xl-3 col-lg-4 col-md-2">
                  <div className="tp-hero-2__exp-thumb-wrap p-relative text-end">
                    <div className="tp-hero-2__exp-thumb-bg">
                      <Image src={about_img_1} alt="image-here" />
                    </div>
                    <div className="tp-hero-2__exp-thumb-text">
                      <span>{experienc_year}</span>
                      <p>{experienc_text}</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-xl-1 col-lg-1 col-md-1">
                  <Link href={'https://w.app/MktXmn'} target='_blank'>
                    <div className='card-prices'  style={{width: 300, height: 200,paddingTop: 15, backgroundColor: '#9D0870', borderRadius: 10, borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}>
                      
                      <p style={{textAlign: 'center', color: 'white', fontSize: 18}} >Navega con</p>
                      <br/>
                      <div style={{display: 'inline-block', width: '100%', paddingLeft: 55}} >
                        <div style={{display: 'inline-block', fontSize: 70, color: 'black', fontWeight: 'bold'}} >{'40  '}</div>
                        <div style={{display: 'inline-block', color: 'black', fontSize: 30}}>Megas</div>
                      </div>
                      <br/>
                      <br/>
                      <p style={{textAlign: 'center', color: 'white', fontSize: 18}} >de velocidad</p>
                    </div>
                  </Link>

                  <div  style={{width: 300, height: 300, backgroundColor: 'white', border:'dotted', borderWidth: 0.5, borderColor: 'gray'}}>
                    <div style={{textAlign: 'center', fontSize: 20}} >Navegación simétrica</div>
                    <div style={{textAlign: 'center', fontSize: 14}} >misma velocidad de subida y de bajada</div>
                    <div style={{height: 40}} />
                    <div style={{textAlign: 'center', fontSize: 14, textDecorationLine: 'line-through'}} >de $400 a</div>
                    <div style={{height: 10}} ></div>
                    <div style={{textAlign: 'center', fontSize: 70, fontWeight: 'bold'}} >$350</div>
                    <div style={{height: 10}} ></div>
                    <div style={{textAlign: 'right', fontSize: 14, fontWeight: 'bold', paddingRight: 50}} >Iva incluido</div>
                    <div style={{textAlign: 'center', fontSize: 14}} >en pago puntual</div>
                    <div style={{position: 'absolute', bottom: 5, width: 300,textAlign: 'center', fontSize: 20}} >Navega + Rápido</div>
                  </div>
                  {/*<div className="tp-hero-2__exp-info">
                    <span className="tp-hero-2__exp-subtitle"> <b>
                      <Image className="tp-ring-effect" src={about_hand} alt="image-here" />
                    </b> {subtitle}
                    </span>
                    <h4 className="tp-hero-2__exp-title">
                      {title}
                    </h4>
                    <p className="child-1">
                      {sm_info_1}
                    </p>
                    <p className="child-2 ">
                      {sm_info_2}
                    </p>
                    <Link className="tp-hero-2__exp-link" href="/contact">
                      {link_text}
                      <svg width="22" height="10" viewBox="0 0 22 10" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5.00012H20.1997" stroke="currentcolor" strokeWidth="1.5"
                          stroke-inecap="round" stroke-inejoin="round" />
                        <path d="M17 1L20.9999 4.99993L17 8.99987" stroke="currentcolor" strokeWidth="1.5"
                          stroke-inecap="round" stroke-inejoin="round" />
                      </svg>
                    </Link>
                  </div>*/}
                </div>

                <div className="col-xl-1 col-lg-1 col-md-1" style={{position: 'relative',left: 220, bottom: 20}}>
                  <div className='card-prices' style={{width: 300, height: 200,paddingTop: 15, backgroundColor: '#06C894', borderRadius: 10, borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}>
                    
                    <p style={{textAlign: 'center', color: 'white', fontSize: 18}} >Navega con</p>
                    <br/>
                    <div style={{display: 'inline-block', width: '100%', paddingLeft: 55}} >
                      <div style={{display: 'inline-block', fontSize: 70, color: 'black', fontWeight: 'bold'}} >{'60  '}</div>
                      <div style={{display: 'inline-block', color: 'black', fontSize: 30}}>Megas</div>
                    </div>
                    <br/>
                    <br/>
                    <p style={{textAlign: 'center', color: 'white', fontSize: 18}} >de velocidad</p>
                  </div>

                  <div style={{width: 300, height: 300, backgroundColor: 'white', border:'dotted', borderWidth: 0.5, borderColor: 'gray'}}>
                    <div style={{textAlign: 'center', fontSize: 20}} >Navegación simétrica</div>
                    <div style={{textAlign: 'center', fontSize: 14}} >misma velocidad de subida y de bajada</div>
                    <div style={{height: 40}} />
                    <div style={{textAlign: 'center', fontSize: 14, textDecorationLine: 'line-through'}} >de $600 a</div>
                    <div style={{height: 10}} ></div>
                    <div style={{textAlign: 'center', fontSize: 70, fontWeight: 'bold'}} >$550</div>
                    <div style={{height: 10}} ></div>
                    <div style={{textAlign: 'right', fontSize: 14, fontWeight: 'bold', paddingRight: 50}} >Iva incluido</div>
                    <div style={{textAlign: 'center', fontSize: 14}} >en pago puntual</div>
                    <div style={{position: 'absolute', bottom: 5, width: 300,textAlign: 'center', fontSize: 20}} >Navega + Rápido</div>
                  </div>
                </div>

                <div className="col-xl-1 col-lg-1 col-md-1" style={{position: 'relative',left: 440}}>
                  <div className='card-prices' style={{width: 300, height: 200,paddingTop: 15, backgroundColor: '#C90614', borderRadius: 10, borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}>
                    
                    <p style={{textAlign: 'center', color: 'white', fontSize: 18}} >Navega con</p>
                    <br/>
                    <div style={{display: 'inline-block', width: '100%', paddingLeft: 55}} >
                      <div style={{display: 'inline-block', fontSize: 70, color: 'black', fontWeight: 'bold'}} >{'100  '}</div>
                      <div style={{display: 'inline-block', color: 'black', fontSize: 30}}>Megas</div>
                    </div>
                    <br/>
                    <br/>
                    <p style={{textAlign: 'center', color: 'white', fontSize: 18}} >de velocidad</p>
                  </div>

                  <div style={{width: 300, height: 300, backgroundColor: 'white', border:'dotted', borderWidth: 0.5, borderColor: 'gray'}}>
                    <div style={{textAlign: 'center', fontSize: 20}} >Navegación simétrica</div>
                    <div style={{textAlign: 'center', fontSize: 14}} >misma velocidad de subida y de bajada</div>
                    <div style={{height: 40}} />
                    <div style={{textAlign: 'center', fontSize: 14, textDecorationLine: 'line-through'}} >de $700 a</div>
                    <div style={{height: 10}} ></div>
                    <div style={{textAlign: 'center', fontSize: 70, fontWeight: 'bold'}} >$650</div>
                    <div style={{height: 10}} ></div>
                    <div style={{textAlign: 'right', fontSize: 14, fontWeight: 'bold', paddingRight: 50}} >Iva incluido</div>
                    <div style={{textAlign: 'center', fontSize: 14}} >en pago puntual</div>
                    <div style={{position: 'absolute', bottom: 5, width: 300,textAlign: 'center', fontSize: 20}} >Navega + Rápido</div>
                  </div>
                </div>

              </div>
            </div>
            
            {/*<div className="tp-hero-2__exp-brand-wrap">
              <span className="tp-hero-2__exp-brand-title">
                <b>
                  <Image className="tp-zoom-in-out" src={about_star} alt="image-here" />
                </b>

                Clients
              </span>
              <div className="row row-cols-lg-4 row-cols-md-2 ">

                {brand_images.map((item, index) => (
                  <div key={index} className="col-xl mb-10">
                    <div className="tp-hero-2__exp-brand">
                      <Image src={item} alt="image-here" />
                    </div>
                  </div>
                ))}
              </div>

            </div>*/}

          </div>
        </div>
      </div>
    </>
  );
};

export default ContratarAreaHomeTwo;