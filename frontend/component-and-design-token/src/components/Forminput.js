import React from 'react'

export default function Forminput({label, type, placeholder}) {
  return (
      <div className='formInput'>
          <label>{label}</label>
          <input
              placeholder={placeholder}
              type={type}
              name={label}
          />
          <style jsx>{`
          .formInput {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            transition: all 0.3s ease;
            width: 100%;
            

          }
          .formInput label {
            font-size: 1rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
          }
            .formInput input {
                padding: 1rem 0.4rem;
                font-size: 1rem;
                border: 1px solid #000;
                background-color: #ddd;
                border-radius: 0.3rem;
                width: 95%;
               
            }
            .formInput input:focus {
                outline: none;
                border: 1px solid #333;
                background-color: #fff;
            }
          `}</style>
    </div>
  )
}
