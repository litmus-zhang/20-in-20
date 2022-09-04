
import React from 'react'

export default function CheckBox() {
  return (
      <div className='checkbox'>
         
          <input
              type='checkbox'
              name='checkbox'
          />
           <p>Remember me</p>
          
          <style jsx>{`
          .checkbox {
            display: flex;
            align-items: center;
            align-content: center;
            gap: .5rem;
            transition: all 0.3s ease;
            width: 100%;
          }
            .checkbox p {
                font-size: 0.9rem;
                font-weight: 600;
            }
            .checkbox input {
                font-size: 1rem;
                border: 1px solid #000;
                background-color: #ddd;
                border-radius: 0.3rem;
                cursor: pointer;
            }
            `}</style>
    </div>
  )
}
