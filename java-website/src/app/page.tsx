import Homepage from '@/Components/Homepage';
import Image from 'next/image'

export default function Home() {
  const backgroundImageUrl = '../Background/Background_3.jpg';

  return (
    <div className="relative h-screen bg-cover bg-center" >
      
      <div className="absolute z-0 inset-0 bg-cover bg-center blur-sm h-screen w-screen" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
        {/* Bg Image */}
      </div> 
      <div className="absolute z-1 inset-0 bg-overlay h-screen w-screen bg-black opacity-40">
        {/* Overlay Black */}
      </div> 


      {/* Your content goes here */}
      <div className='relative h-screen w-screen z-10'>
        <Homepage />
      </div>
      
    </div>
  );
}
