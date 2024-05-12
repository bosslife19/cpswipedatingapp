import React, { useState, useEffect } from "react";
import axiosClient from "../axiosClient";
import "./home.css";

function PaymentDetailsModal({ userId, closeModal, setRequests }) {
  const [paymentDetails, setPaymentDetails] = useState(null);

  const currentUser = JSON.parse(localStorage.getItem('user'));
  const fetchPaymentDetails = async (userId) => {
    try {
      const response = await axiosClient.get(`/user/paymentdetails/${userId}`);
      setPaymentDetails(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching payment details:", error);
    }
  };


  useEffect(() => {
    if (userId) {
      fetchPaymentDetails(userId);
      
    }
  }, [userId]);

  const handleSubscribeRequest = async()=>{
    try{
      const res = await axiosClient.post(`/user/requestsubscribe/${userId}`, {username:currentUser.username})

      setRequests([...res.data.subscription_requests, userId])
      console.log(res.data)
      

     
      closeModal();
      
    }catch(error){
      console.log(error);
    }
  }
  return (
    <>
      <div className="firstG"></div>
      <div className="details">
      <div className="inner">
        {paymentDetails && (
          <>
            <p>
              Subscription Price:{" "}
              <span style={{ fontWeight: "bold" }}>
                ${paymentDetails.price}
              </span>
            </p>
            <p style={{ marginTop: 8 }}>Payment Details</p>
            <p style={{ marginTop: 5, fontWeight: "700" }}>
              {paymentDetails.paymentDetails}
            </p>

            <button className="requestB" onClick={handleSubscribeRequest}>Send Request</button>
          </>
        )}

        <div onClick={closeModal}>&times;</div>
      </div>
    </div>
    </>
  );
}

export default PaymentDetailsModal;
