import React, { useState } from 'react'
import './RequestModal.css'
import axiosClient from '../axiosClient'
function RequestsModal({requests, closeModal}) {

    const [acceptSuccess, setAcceptSuccess] = useState('');
    const [rejectMess, setRejectMess] = useState('')
    const handleAccept = async (request)=>{
        const res = await axiosClient.post("/user/subscribe", {username:request})
        setAcceptSuccess('User subscription request accepted')
    }


    const handleReject = async (request)=>{
        const res = await axiosClient.post("/user/rejectsubscribe", {username:request})
        setRejectMess('User subscription rejected')
    }

  return (

   <>
   <div className='backg'></div>
   <div className='request-modal'>
        <div style={{position:'relative'}}>
        <h3>Subscription Requests</h3>
        <div style={{position:'absolute', top:2, right:5, cursor:'pointer'}} onClick={()=>closeModal()}>x</div>

            <div className="requests">
                {
                    requests?.map(request=>(
                        <div className="request">
                    <p>{request}</p>
                    <button className='accept' onClick={()=>handleAccept(request)}>Accept</button>
                    <button className='reject' onClick={()=>handleReject(request)}>reject</button>
                </div>
                    ))
                }
            </div>
                {acceptSuccess && <p style={{color:'green', textAlign:'center', marginTop:10}}>{acceptSuccess}</p>}
                {rejectMess && <p style={{color:'green', textAlign:'center', marginTop:10,}} >{rejectMess}</p>}
        </div>
        
    </div>
   </>
  )
}

export default RequestsModal