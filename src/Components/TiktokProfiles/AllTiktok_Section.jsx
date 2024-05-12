import React, { useContext, useState } from "react";
import { Nav } from "../../tiktokBG/tiktok_Navbar/Nav";
import { Tiktok_homerun } from "../../tiktokBG/Tiktok_homerun";
import Login from "../Registeration/Login";
import { useEffect } from "react";
import { AppContext } from "../../main";
import axiosClient from "../../axiosClient";
import { ThreeDots } from "react-loader-spinner";

export const AllTiktok_Section = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  const { appState, setAppState } = useContext(AppContext);
  const currentUser = localStorage.getItem("user");
  const user = JSON.parse(currentUser);

  const getAll = async () => {

    try {
      setLoading(true)
      const res = await axiosClient.get(`/user/all/${user.id}`);
      // console.log(res.data);
      setAppState({...appState, users:res.data})
      setLoading(false)
    } catch (error) {
      console.log(error);
      
    }
    
  };
  useEffect(() => {
    
    getAll();
  }, []);

  return (
    <>
      {loading ? (
        <div style={{width:200, margin:'auto', marginTop: 300}}>
          <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{margin:'auto'}}
          wrapperClass=""
        />
        </div>
        
      ) : (
        <div className="">
          <div className="">
            <Nav />
            <Tiktok_homerun/>
          </div>
        </div>
      )}
    </>
  );
};
