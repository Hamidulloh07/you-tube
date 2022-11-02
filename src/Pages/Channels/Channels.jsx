import React, { Component, useEffect, useState } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import "./Channel.scss";
import useProfile from "../../Hooks/useProfile";
import { Link, useParams } from "react-router-dom";
import LikeQ from "../../Assets/Images/LikeQ.svg";
import Search from "../../Assets/Images/search.svg";
import ChanellApi from "./ChanellApi";
import ChannelVideoApi from "./ChannelVidoeApi";
import ChanelSingleApi from "./ChanelSingleApi";

const Channels = () => {
  const [user, setUser] = useProfile();
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}?page=2`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data.data);
      })
      .catch((err) => {
        console.log(err);
      });


    
  }, [id]);
  return (
    <div>
      <SideBar />
      <div className="Channels py-2">
        <img className="w-100 rounded-4 mt-1" src={user.thumbnailUrl} alt="picsum" />

        <div >
          <div className="d-flex align-items-center justify-content-between mt-3">
            <div  className="d-flex align-items-center justify-content-between">
              <img className="avatar-channel me-3" src={user.avatar} alt={user.last_name} width={80} height={80}/>
              <div>
                <h3 className="mb-1">{user.first_name}</h3>
                <span>{`${user.id * 12}k subscribed`}</span>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <button className="bg-transparent">
                <img src={LikeQ} alt="Like" width={22} height={26} />
              </button>
              <button className="Subscribe">Subscribe 2.3m</button>
            </div>
          </div>

          <div className="d-flex single-tan mt-4">
            <div className="">
              <ul className="channel-navber d-flex align-items-center list-unstyled">
                <li className="channelItem"><Link>Home</Link></li>
                <li className="channelItem"><Link>Videos</Link></li>
                <li className="channelItem"><Link>Playlists</Link></li>
                <li className="channelItem"><Link>Channels</Link></li>
                <li className="channelItem"><Link>Discussion</Link></li>
                <li className="channelItem"><Link>About</Link></li>
                <li className="channelItem"><Link>
                  <img src={Search} alt="Search" />
                </Link></li>
              </ul>

              <ChanelSingleApi/>
            </div>

            <div className="yan text-center ms-5">
              <h3>Recommended channel</h3>
              <ChanellApi/>
            </div>
          </div>

          <div>
            <h2>Next</h2>
            <div className="w-100">
            <ChannelVideoApi/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Channels;
