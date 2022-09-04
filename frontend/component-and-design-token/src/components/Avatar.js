import React from 'react'

export default function Avatar() {
  return (
      <div className='Avatar'>
          <img
          className='Avatar__image'
              src='https://joeschmoe.io/api/v1/random'
              alt='avatar'
              
          />
          <style jsx>{`
          .Avatar {
          
            width: 150px;
            height: 150px;
            border-radius: 50%;
            overflow: hidden;
            border: 4px solid #000;
            // animation: Avatar 2s linear infinite;
          }
            .Avatar__image {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
          @keyframes Avatar {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          `}</style>
    </div>
  )
}
