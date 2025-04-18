
import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
  const slider = useRef();
  const tx = useRef(0);

  const slideForward = () => {
    if (tx.current > -50) {
      tx.current -= 25;
      slider.current.style.transform = `translateX(${tx.current}%)`;
    }
  };

  const slideBackward = () => {
    if (tx.current < 0) {
      tx.current += 25;
      slider.current.style.transform = `translateX(${tx.current}%)`;
    }
  };

  return (
    <div className='testimonials'>
      <img src={next_icon} alt='Next' className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt='Back' className='back-btn' onClick={slideBackward} />

      <div className="slider">
        <ul ref={slider}>
          <li> 
            <div className='slide'>
              <div className='user-info'>
                <img src={user_1} alt='User 1'/>
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div> 
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>

          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_2} alt='User 2'/>
                <div>
                  <h3>Emily Smith</h3>
                  <span>Edusity, Canada</span>
                </div>
              </div>
              <p>
                I am grateful for the hands-on experience and interactive classes at Edusity. The professors are knowledgeable and always ready to help. I feel more confident about my future.
              </p>
            </div>
          </li>

          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_3} alt='User 3'/>
                <div>
                  <h3>James Lee</h3>
                  <span>Edusity, UK</span>
                </div>
              </div>
              <p>
                The learning environment is truly inspiring. The curriculum is up-to-date with real-world relevance, and the support system for students is amazing.
              </p>
            </div>
          </li>

          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_4} alt='User 4'/>
                <div>
                  <h3>Sophia Patel</h3>
                  <span>Edusity, India</span>
                </div>
              </div>
              <p>
                Edusity has transformed the way I learn and grow. I love the mix of technology and traditional teaching methods. Highly recommended!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Testimonials;
