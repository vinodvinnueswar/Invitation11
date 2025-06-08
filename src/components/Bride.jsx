import React from 'react'
import Br from '../images/Bride/Bride1.png'
import instagram from '../images/Social_network/Instagram.png'
import facebook from '../images/Social_network/facebook.png'
import whatsapp from '../images/Social_network/Whatsapp1.png'

const Bride = () => {
  return (
    <div className="Bride_Container">
        <h2>Bride</h2>
        <div className="Bride_page"  data-aos="fade-up"
     data-aos-duration="3000" >
           <div className="Bride_img"  data-aos="fade-up"
     data-aos-duration="3000">
           <img src={Br} alt="" />
           </div>
           <div className="Bride_details"  data-aos="fade-up"
     data-aos-duration="3000">
            <h3>Rachana</h3>
           <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet incidunt, quod voluptate ut consequatur exercitationem ipsum aut quia reiciendis, voluptas est assumenda necessitatibus rem? Libero pariatur atque consequatur maxime ea!
            </p>
            <div className="social">
                    <div className="instagram">
                                   <img src={instagram} alt="" />
                                   </div>
                    <div className="facebook">
                            <img src={facebook} alt="" />
                        </div>
                        <div className="whatsapp">
                                <img src={whatsapp} alt="" />
                            </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Bride