import Image from 'next/image'
import React from 'react'

function about() {
  return (
    <div>
      {/* <Image 
        src="https://images.pexels.com/photos/28553422/pexels-photo-28553422.jpeg"
        alt="img"
        width={500}
        height={500}
        style={{width: 300, marginBottom: "1rem", objectFit: "cover"}} 
      />
      <Image 
        src="https://images.pexels.com/photos/28553422/pexels-photo-28553422.jpeg"
        alt="img"
        width={500}
        height={500}
        style={{width: 300, marginBottom: "1rem", objectFit: "cover"}} 
      /> */}
      <Image
        src='https://images.pexels.com/photos/30650522/pexels-photo-30650522.jpeg'
        alt='img'
        width={500}
        height={500}
        loading='eager'
        unoptimized
        style={{width: 300, marginBottom: "1rem", objectFit: "cover"}}
      />
    </div>
  )
}

export default about
