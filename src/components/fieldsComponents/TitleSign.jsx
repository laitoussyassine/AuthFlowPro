import React from 'react'

const TitleSign = ({title, description, className, children}) => {
  return (
    <>
        <div>
            <h2 className={`${className} font-bold text-titleColor`}>{title}</h2>
            <p className={`${className} font-md text-labelColor text-sm`}>{description} {children}</p>
        </div>
    </>
  )
}

export default TitleSign