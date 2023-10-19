import React from "react";
import Icon from "../images/Icon.svg"
import Icons from "../images/Icons.svg"
import HeadIcon from "../images/HeadIcon.svg"
import icons from "../images/icons.png";
import Likes from "../images/Likes.svg"
import {FiArrowDownCircle, FiHash, FiHeart, FiMoreHorizontal} from "react-icons/fi";
import {BiTime} from "react-icons/bi";
import Play from "../images/Play.svg";
import {GoSearch} from "react-icons/go";
import { useSelector } from "react-redux";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import {toggleLike} from "../action";
import { useDispatch} from "react-redux";
import  { useState } from 'react';
import Audio from "./Audio";

const Liked = () => {
  const dispatch = useDispatch();
  const likedSongs = useSelector((state) => state.likedSongs);
  const [selectedSong, setSelectedSong] = useState(null);

  const handleSongSelection = (song) => {
    setSelectedSong(song);
  };



  return (
    <div className="w-full">
      <div className="bg-liked made">
        <div className="flex justify-between items-center pt-5 pb-5">
          <div className="flex gap-custom-gap-2 cursor-pointer">
            <img src={Icon}/>
            <img src={Icons}/>
          </div>
          <div className="flex user-bg gap-custom-gap-5">
            <img src={HeadIcon}/>
            <div className="text-white text-lg font-bold">davedirect3</div>
            <img src={icons}/>
          </div>
        </div>
        <div className="flex gap-5 pb-custom-bottom-3">
          <img src={Likes} className="pt-custom-top-9 object-contain"/>
          <div className="pt-custom-top-13">
            <span className="text-secondary text-base">
              PUBLIC <br/>
            PLAYLIST
            </span>
            <div className="text-white font-black text-[97px] whitespace-nowrap tracking-[-7.32px]">Liked Songs</div>
            <div className="flex pt-custom-top-14 gap-2 items-center">
              <img src={HeadIcon}/>
              <div className="text-white text-lg font-bold">davedirect3</div>
              <div className="flex items-center text-white text-lg gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none">
                <circle cx="2.5" cy="2.5" r="2.5" fill="white"/>
              </svg>
                <div>
                  34 songs
                </div>
             </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-likeds made">
        <div className="flex  items-center justify-between pl-">
          <div className="flex cursor-pointer items-center pt-custom-bottom-3">
            <img src={Play}/>
            <div className="gap-[22px] flex">
              <FiHeart className="text-white text-custom-size-3 ml-9"/>
              <FiArrowDownCircle className="text-white text-custom-size-3 mr-custom-left-3"/>
              <FiMoreHorizontal className="text-white text-custom-size-4 ml-custom-left-4 "/>
            </div>
          </div>
          <div className="flex items-center">
            <GoSearch className="text-secondary"/>
            <div className="text-secondary text-lg font-custom-weight pl-custom-right pr-3.5">
              Custom order
            </div>
            <img src={icons}/>
          </div>
        </div>
        <div className="flex pt-custom-top-11  justify-between border-group pb-3.5">
          <div className="flex">
            <FiHash className="text-secondary-4"/>
            <div className="text-secondary-4 text-sm font-custom-weight">TITLE</div>
          </div>
          <div className="text-secondary-4 text-sm font-custom-weight pl-[100px]">ALBUM</div>
          <div className="text-secondary-4 text-sm font-custom-weight">DATE ADDED</div>
          <div><BiTime className="text-secondary-4"/></div>
        </div>
        <div className="h-screen overflow-x-auto">
          <div className="text-white pt-custom-top-4 pb- pt-custom-top-4">
            {likedSongs.map((song,index) => (
              <div key={song.id}  onClick={() => handleSongSelection(song)}
                   className="flex pt-2.5 items-center justify-between cursor-pointer">
                <div className="flex  gap-custom-gap-4 items-center">
                  <div className="text-secondary-4 font-custom-weight text-custom-size-5">{index+1}</div>
                  {song.album && song.album.images && song.album.images.length > 0 ? (
                    <img
                      src={song.album.images[0].url}
                      alt={song.album.name}
                      width="52"
                      height="52"
                    />
                  ) : (
                    <div></div>
                  )}
                  <div  className="pt-custom-top-2.5 text-secondary text-xl font-custom-weight tracking-[0.2px]">
                    {song.name}
                    <span className="block text-secondary-4 text-lg font-custom-weight">{song.album.artists[0].name}</span>
                  </div>
                </div>
                <div
                  className="cursor-pointer flex items-center"
                  onClick={() => dispatch(toggleLike(song.id))}
                >
                  <BsHeartFill className={`w-7 h-7 text-secondary-5 ${likedSongs.includes(song.id) ? 'liked' : ''}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Audio selectedSong={selectedSong} />
    </div>
  );
};

export default Liked;
