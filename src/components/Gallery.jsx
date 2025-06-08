import React from 'react'
import Img1 from '../images/BRGR/BRGR2.jpg'
import Img2 from '../images/BRGR/BRGR3.jpg'
import Img3 from '../images/Bride/Bride1.png'
import Img4 from '../images/Groom/Groom2.png'
import Img5 from '../images/Bride/Bride3.png'
import Img6 from '../images/Groom/Groom4.png'

const Gallery = () => {
    const data = [
        {
            image: Img1
        },
        {
            image: Img2
        },
        {
            image: Img3
        },
        {
            image: Img4
        },
        {
            image: Img5
        },
        {
            image: Img6
        },
   ]
//    const [active ,setActive] = useState(0);
//       const handleClick = (index) => {
//        setActive(index);
//      };
  return (
    <div className="Gallery_Container">
         <h4>Gallery</h4>
        <div className="Gallery"  data-aos="fade-up"
     data-aos-duration="3000">
            {
                data.map((item , index) => {
                    return(
                        <div className="BRGR_images">
                            <img src={item.image} alt="" />
                        </div>
                    )
                })
            }
            {/* {
                data.map((item , index) => {
                    return(
                        <div className="BRGR_images" key={index}>
                           
                            <div className={ index === active ? "active" : ""} onClick={() => handleClick(index)}>
                            <img src={item.image} alt="" />
                            </div>

                        </div>
                    )
                })
            } */}
        </div>
    </div>
  )
}

export default Gallery