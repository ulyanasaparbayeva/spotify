import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAccessToken } from "./api/auth";
import Back from "../images/Back.svg"
import Forward from "../images/Forward.svg"
 import Play from "../images/Play.svg"
import icons from "../images/icons.png"
import {FiHeart,FiMoreHorizontal,FiArrowDownCircle,FiHash} from 'react-icons/fi';
import {BiTime} from 'react-icons/bi';
import {GoSearch} from 'react-icons/go';
import {BsHeartFill} from 'react-icons/bs';
import { useDispatch } from "react-redux";
import {toggleLike} from "../action";
import { useSelector } from "react-redux";
import { BsHeart } from "react-icons/bs";
import Audio from "./Audio";


const ProductDetails = () => {


 const dispatch = useDispatch();
 const likedSongs = useSelector((state) => state.likedSongs);


 const [selectedSong, setSelectedSong] = useState(null);
 const { playlistId } = useParams();
 const [playlistItems, setPlaylistItems] = useState([]);


 console.log("Current playlistId:", playlistId);
 const [showFullDescription, setShowFullDescription] = useState(false);
 const [playlistData, setPlaylistData] = useState(null);




 useEffect(() => {
  console.log("Current playlistId:", playlistId);
  const fetchData = async () => {
   try {
    const accessToken = await getAccessToken();
    const apiEndpoint = `https://api.spotify.com/v1/playlists/${playlistId}`;
    const response = await fetch(apiEndpoint, {
     headers: {
      Authorization: `Bearer ${accessToken}`,
     },
    });
    const data = await response.json();
    setPlaylistData(data);
    if (data.tracks && data.tracks.items) {
     setPlaylistItems(data.tracks.items);
    }
   } catch (error) {
    console.error("Error fetching playlist data:", error);
   }
  };

  fetchData();
 }, [playlistId]);

 console.log(playlistData)

 const toggleDescription = () => {
  setShowFullDescription(!showFullDescription);
 };



 return (
   <div className="product-details  w-full ">
    <div className="bg-details">
     { playlistData ? (
       <>
        <div className="pt-5 pl-custom-left-2 pb-5  flex gap-custom-gap-2 bg-[#DDF628]">
         <img src={Back} className="cursor-pointer"/>
         <img src={Forward} className="cursor-pointer"/>
        </div>
        <div className="flex gap-8 pt-custom-top-9 made pb-custom-bottom-3">
         <div>
          <img className="w-custom-width-4 h-custom-height-4 object-contain"
               src={playlistData.images[0].url} alt={playlistData.name}/>
         </div>
         <div>
          <h2 className="tracking-[-7.32px] text-secondary font-black text-custom-size-2">
           {playlistData.name ? playlistData.name.split(' ').slice(0,1).join(' ') :''}</h2>
          <div
            className={`pt-3 text-xl text-secondary font-custom-weight ${
              showFullDescription ? "" : "truncate"
            }`}
          >
           {showFullDescription ? (
             playlistData.description
           ) : (
             <>
              {playlistData.description.split(" ").slice(0, 4).join(" ")}
              <span
                className="text-xl font-custom-weight text-color cursor-pointer"
                onClick={toggleDescription}
              >
                  {" "}
               and more
                </span>
             </>
           )}
          </div>
         </div>
        </div>

       </>
     ) : (
       <p>Loading...</p>
     )}
    </div>
    <div className="bg-[#121212]">
     <div className="flex items-center justify-between pl-">
      <div className="flex cursor-pointer items-center pt-custom-bottom-3">
       <img src={Play} className="pl-6"/>
       <div className="gap-[22px] flex">
        <FiHeart className="text-white text-custom-size-3 ml-9"/>
        <FiArrowDownCircle className="text-white text-custom-size-3 mr-custom-left-3"/>
        <FiMoreHorizontal className="text-white text-custom-size-4 ml-custom-left-4 "/>
       </div>
      </div>
      <div className="flex items-center pr-custom-left-2">
       <GoSearch className="text-secondary "/>
       <div className="text-secondary text-lg font-custom-weight pl-custom-right pr-3.5">
        Custom order
       </div>
       <img src={icons}/>
      </div>
     </div>
     {playlistItems.length > 0 && (
       <div className="made pt-custom-top-11">
        <div className="flex justify-between border-group pb-3.5">
         <div className="flex">
          <FiHash className="text-secondary-4"/>
          <div className="text-secondary-4 text-sm font-custom-weight">TITLE</div>
         </div>
       <div className="text-secondary-4 text-sm font-custom-weight">ALBUM</div>
         <div className="text-secondary-4 text-sm font-custom-weight">DATE ADDED</div>
         <div><BiTime className="text-secondary-4"/></div>
        </div>
        <div className="pt-custom-top-4">
         {playlistItems.map((item,index) => {
          return (
            <div className="text-white flex gap-custom-gap-4 padding cursor-pointer  justify-between"
                 key={item.track.id} >
             <div className="flex gap-custom-gap-4" onClick={() => setSelectedSong(item.track)}>
              <div className="flex items-center gap-custom-gap-6">
               <div className="text-secondary-4 font-custom-weight text-custom-size-5">{index +1}</div>
               <img
                 src={item.track.album.images[0].url}
                 alt={item.track.name}
                 width="52"
                 height="52"
               />
              </div>
              <div>
               <div className="pt-custom-top-2.5 text-secondary text-xl font-custom-weight tracking-[0.2px]">
                {item.track.name }
               </div>
               <div className="block text-secondary-4 text-lg font-custom-weight">
                {item.track.artists[0].name}
               </div>
              </div>
             </div >
             <div
               className="cursor-pointer flex items-center"
               onClick={() => dispatch(toggleLike(item.track))}
             >
              {likedSongs.some((likedSong) => likedSong.id === item.track.id) ? (
                <BsHeartFill className="w-7 h-7 text-secondary-5" />
              ) : (
                <BsHeart className="w-7 h-7 " />
              )}
             </div>
            </div>
          );
         })}
         }
        </div>

       </div>
     )}
    </div>
    <Audio selectedSong={selectedSong} />
   </div>

 );
};

export default ProductDetails;
