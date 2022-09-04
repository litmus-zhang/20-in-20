import React from 'react'

export default function Button({text}) {
  return (
      
          <button className='btn'>
              <span>
                  {text} 
          </span>
          
          <style jsx>{`
            .btn {
                background-color: #000;
                color: #fff;
                padding: 1rem 2rem;
                width: 100%;
                border: none;
                border-radius: 0.5rem;
                font-size: 1rem;
                font-weight: 600;
                cursor: pointer;
            }
            .btn:hover {
                background-color: #333;
                transition: all 0.3s ease;

            }
            .btn span {
                display: flex;
                align-items: center;
                gap: 1rem;
                justify-content: center;
            }
            `}</style>
          </button>
     
  )
}
