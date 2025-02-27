import React from 'react'
import Sidebar from '../SideBar/SideBar'
import './Student.css'
import Submit from '../../ExtraComponents/SubmitBtn/Submit'

const Student = () => {
  return (
    <>
        <div className="mainStudenContainer">
            <div className="sideBarleftSide">
                <Sidebar/>
            </div>
            <div className="rightSideStudentPage">
                <form action="" className='studentForm'>
                    <div className="mainStudentFromSection">
                    <h2 style={{textAlign:'center'}}>New Student Form</h2>
                        <div className="nameSectionForm">
                        <div className='flsectionDiv'>
                            <label htmlFor="" >First Name </label>
                            <input type="text" placeholder='First Name' required/>
                        </div>

                        <div className='flsectionDiv'>
                            <label htmlFor="">Last Name </label>
                            <input type="text" placeholder='Last Name' required/>
                        </div>
                        </div>

                        <div className="emailSectionForm">
                            <label htmlFor="">Email</label>
                            <input type="email" placeholder='Email' required/>
                        </div>

                        <div className="uniCollegeSectionForm">
                            <label htmlFor="">College Name</label>
                            <input type="text" placeholder='College Name' required/>
                        </div>

                        <div className="mobileSectionForm">
                           <div className="mobileForm">
                           <label htmlFor="">Mobile Number</label>
                            <input type="text" placeholder='Mobile Number' required/>

                           </div>
                            <div className="linkdinForm">
                                <label htmlFor="">Linkdin</label>
                                <input type="text" placeholder='Linkdin' required/>
                            </div>
                        </div>

                        <div className="adderessSectionForm">
                            <div className="textarea">
                                <label htmlFor="">Address</label>
                                <textarea name="" id="" rows={4} required></textarea>
                            </div>
                            <div>
                                <Submit/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Student