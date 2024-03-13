import React from 'react'
import { Button } from "@/components/ui/button";

const SubmitButton = ({title, className}) => {
  return (
    <>
        <Button className={`${className} flex mx-auto w-4/5 bg-buttonBg text-white hover:text-black`} variant="secondary">{title}</Button>
    </>
  )
}

export default SubmitButton