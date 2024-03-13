import React from "react"
const LabelField = ({title, className}) => {
  return (
    <>
        <label htmlFor="" className={`${className} "text-labelColor text-lg"`} >{title}</label>
    </>
  )
}

export default LabelField