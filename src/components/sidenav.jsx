import React from "react";
import dashboardlogo from "../assets/images/dashboard.svg";
import appointmentlogo from '../assets/images/appointment.svg'
import insurance from '../assets/images/insurance-card.svg'
import labservice from '../assets/images/labtest.svg'
import notification from '../assets/images/notification.svg'
import profile from '../assets/images/profile.svg'
import help from '../assets/images/help.svg'

const sidenav = () => {
  return (
    <div className="sidenav z-0 border w-[310px] h-[856px] top-[120px] flex flex-col ">
      <div className="relative flex justify-center items-center w-[310px] h-[65px] border">
        <img
          src={dashboardlogo}
          alt="dashboard logo"
          className="absolute w-[35.64px] h-[35.64px] top-[13px] left-[36px]"
        />
        <div className="w-[135px] h-[32px] top-[17px] left-[83px] ">
          <p className="font-poppins font-[500] text-[24px] leading-[32px]">
            Dashboard
          </p>
        </div>
      </div>
      <div className="linear relative flex justify-center items-center w-[310px] h-[65px] border-r-[5px] border-green bg-gradient-to-r from-white to-darkgreen">
        <img
          src={appointmentlogo}
          alt="dashboard logo"
          className="absolute w-[35.64px] h-[35.64px] top-[13px] left-[36px]"
        />
        <div className="absolute w-[135px] h-[32px] top-[17px] left-[83px] ">
          <p className="font-poppins font-[500] text-[24px] leading-[32px]">
            Appointment
          </p>
        </div>
      </div>
      <div className="relative flex justify-center items-center w-[310px] h-[65px] border">
        <img
          src={insurance}
          alt="dashboard logo"
          className="absolute w-[35.64px] h-[35.64px] top-[13px] left-[36px]"
        />
        <div className="absolute w-[135px] h-[32px] top-[17px] left-[83px] ">
          <p className="font-poppins font-[500] text-[24px] leading-[32px]">
            Insurance
          </p>
        </div>
      </div>
      <div className="relative flex justify-center items-center w-[310px] h-[65px] border">
        <img
          src={labservice}
          alt="dashboard logo"
          className="absolute w-[35.64px] h-[35.64px] top-[13px] left-[36px]"
        />
        <div className="absolute w-[135px] h-[32px] top-[17px] left-[83px]">
          <p className="font-poppins font-[500] text-[24px] leading-[32px]">
            Lab Service
          </p>
        </div>
      </div>
      <div className="relative flex justify-center items-center w-[310px] h-[65px] border">
        <img
          src={notification}
          alt="dashboard logo"
          className="absolute w-[35.64px] h-[35.64px] top-[13px] left-[36px]"
        />
        <div className="w-[135px] h-[32px] top-[17px] left-[83px] ">
          <p className="font-poppins font-[500] text-[24px] leading-[32px]">
            Notification
          </p>
        </div>
      </div>

      <div className="relative flex justify-center items-center w-[310px] h-[65px] border">
        <img
          src={profile}
          alt="dashboard logo"
          className="absolute w-[35.64px] h-[35.64px] top-[13px] left-[36px]"
        />
        <div className="w-[135px] h-[32px] top-[17px] left-[83px] ">
          <p className="font-poppins font-[500] text-[24px] leading-[32px]">
            Profile
          </p>
        </div>
      </div>
      <div className="absolute mt-[763px]">
      <div className="relative flex justify-center items-center w-[310px] h-[65px]  border">
        <img
          src={help}
          alt="dashboard logo"
          className="absolute w-[35.64px] h-[35.64px] top-[13px] left-[36px]"
        />
        <div className="w-[135px] h-[32px] top-[17px] left-[83px] ">
          <p className="font-poppins font-[500] text-[24px] leading-[32px]">
            Need Help?
          </p>
        </div>
      </div>
      </div>
    </div>
    
  );
};

export default sidenav;
