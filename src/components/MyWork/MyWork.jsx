import React from 'react'
import "./MyWork.css"
import theme from "../../assets/theme.svg"
import myworkdata from "../../../public/myWorkData.js"  
import { FaArrowRight } from 'react-icons/fa'

const MyWork = () => {

   function hadleProjectLink(work) {
    window.open(work)
   }

  return (
    <>
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={theme} alt="" />
        </div>
         <div className="mywork-container">
              {myworkdata.map((work , index)=> {
                return <img key={index} src={work.w_img} alt="" onClick={()=> hadleProjectLink(work.w_link) } />
              })}
         </div>
    </div>
    </>
  )
}

export default MyWork