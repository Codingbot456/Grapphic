import React from 'react'
import Nav from '../components/layout/Nav'
import serv1 from './../assets/images/service-1.png';
import serv2 from './../assets/images/service-2.png';
import serv3 from './../assets/images/service-3.png';



const About = () => {
  return (
    <>
    <div className='about container-fluid'>
        <div className='about-info'>
            <img></img>
            <div className='my-dt'>
            <h2>I’m Janet Graphic designer, a graphic designer with extensive experience</h2>
            <p1>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit.</p1>
            </div>
            <button>ContactMe</button>
        </div>


        <div className='awards '>
          <h3 >Awards & Recognitions</h3>
          <div className='awards-detail' >
            <div className='inst'>
              <p1>INFINITY AWARDS</p1>
              </div>
            <div className='why'>
              <h5> Best Illustration 2020</h5>
            </div>
            <div className='dates'><p1>2013</p1></div>
          </div>

          <div className='awards-detail' >
            <div className='inst'>
              <p1>INFINITY AWARDS</p1>
              </div>
            <div className='why'>
              <h5> Best Illustration 2020</h5>
            </div>
            <div className='dates'><p1>2013</p1></div>
          </div>

           <div className='awards-detail' >
            <div className='inst'>
              <p1>INFINITY AWARDS</p1>
              </div>
            <div className='why'>
              <h5> Best Illustration 2020</h5>
            </div>
            <div className='dates'><p1>2013</p1></div>
          </div>

          <div className='awards-detail' >
            <div className='inst'>
              <p1>INFINITY AWARDS</p1>
              </div>
            <div className='why'>
              <h5> Best Illustration 2020</h5>
            </div>
            <div className='dates'><p1>2013</p1></div>
          </div>

          <div className='awards-detail' >
            <div className='inst'>
              <p1>INFINITY AWARDS</p1>
              </div>
            <div className='why'>
              <h5> Best Illustration 2020</h5>
            </div>
            <div className='dates'><p1>2013</p1></div>
          </div>

        </div>


        <div className='work'>
          <h3 >Brands i worked with</h3>

          <div className='brands'>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>

          </div>

        </div>



      <div className='services'>

        <h3>My services</h3>
        <div className='my-serv'> 
        <div className='serv-info'>
          <div className='serv-img'>
          <img src={serv1} alt="Example" />
          </div>
        <div className='serv-detail p-2'>
        <h4>Illustrations</h4>
         <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p1>
        </div>
        

  

        </div>

        <div className='serv-info'>
          <div className='serv-img'>
          <img src={serv2} alt="Example" />
          </div>
        <div className='serv-detail p-2'>
        <h4>Web Design</h4>
         <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p1>
        </div>
        

  

        </div>
        
        <div className='serv-info'>
          <div className='serv-img'>
          <img src={serv3} alt="Example" />
          </div>
        <div className='serv-detail p-2'>
        <h4>Branding</h4>
         <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p1>
        </div>
        

  

        </div>

        </div>

       

      </div>

        

    </div>

   </>
    
  )
}

export default About