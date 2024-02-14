
import myImage from '../components/images/img2.png';
import myImage2 from '../components/images/webpage2sec.png';
import myImage3 from '../components/images/webpagefooter.png';
import Chatbot from '../components/Chatbot';

import { RiCustomerService2Fill } from "react-icons/ri";

import Navbar from '../components/Navbar';
import Cars from '../components/Cars';
export default function Home({visible,close}) {
    
  return (
    <div>
      <>
  
    
  <Navbar />
  <img className='w-full mt-[56px]' src={myImage} alt='hero' />
  <Cars />
  <img className='w-full mt-[56px]' src={myImage2} alt='hero' />
    
    <button
      className={`fixed bttt bottom-10 right-10 z-50 bg-[#002b57] text-white rounded-full p-2 hover:bg-gray-900`}
      onClick={close}
    > 

<RiCustomerService2Fill className='w-[55px] h-[55px] '/>
      
    </button>

    <Chatbot visible={visible} close={close} />
    <img className='w-full mt-[6px]' src={myImage3} alt='hero' />

  </>
    </div>
  )
}
