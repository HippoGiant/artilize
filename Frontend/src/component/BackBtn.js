import React from 'react'
import { useHistory } from 'react-router-dom'
import { FaAngleLeft } from 'react-icons/fa'
function BackBtn(props) {
  const history = useHistory()
  const goBack = () => {
    history.goBack()
  }

  return (
    <>
      <div className="backBtn displayN" onClick={goBack}>
        εεδΈι 
        <FaAngleLeft />
      </div>
    </>
  )
}

export default BackBtn
