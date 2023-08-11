import React from 'react'
import '../styles/Files.css'
import {FaFolder,FaRegArrowAltCircleUp} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Files = () => {
  return (
    <div>
      <div id='files-container'>
       <div id='files-div'>
         <div id='files-title'>
          <h3>Files</h3>
         </div>

         <div id='files'>
            <Link to={"/ai"}>
            <div className='file'>
                 <FaFolder className='file-folder-icon'/>
              <div className='file-folder-title'>Artificial Intelligence</div>
           </div>
            </Link>
            
            <Link to={"/dt"}>
           <div className='file'>
                 <FaFolder className='file-folder-icon'/>
              <div className='file-folder-title'>Design Thinking</div>
           </div>
           </Link>

           <Link to={"/bc"}>
           <div className='file'>
                 <FaFolder className='file-folder-icon'/>
              <div className='file-folder-title'>BCVS-3</div>
           </div>
           </Link>


           <Link to={"/rpa"}>
           <div className='file'>
                 <FaFolder className='file-folder-icon'/>
              <div className='file-folder-title'>RPA-OE</div>
           </div>
           </Link>

           <Link to={"/me"}>
           <div className='file'>
                 <FaFolder className='file-folder-icon'/>
              <div className='file-folder-title'>MERN Stack Developement</div>
           </div>
           </Link>

           <Link to={"/cn"}>
           <div className='file'>
                 <FaFolder className='file-folder-icon'/>
              <div className='file-folder-title'>Computer Networks</div>
           </div>
           </Link>

           <Link to={"/bs"}>
           <div className='file'>
                 <FaFolder className='file-folder-icon'/>
              <div className='file-folder-title'>Business Strategy</div>
           </div>
           </Link>
         </div>
         <div id='fileupload-container'>
          <h2><a target='blank' href='https://script.google.com/macros/s/AKfycbyZ5Tsn5irCD7GWiHp0PCbeI-MhP0ifk7tEElYnhX-b45SHgguHk3HqGWic1Ok6hgKhSQ/exec'> Upload FIles</a></h2>
       </div>
       </div>
       
      </div>
    </div>
  )
}

export default Files