import {GoHomeFill} from 'react-icons/go';
import {HiOutlineSearch} from 'react-icons/hi';
import {BsFillPlusSquareFill} from 'react-icons/bs';
import Liked from "../images/Liked.svg"
import Library from "../images/Library.svg"
import React, { useEffect,useState } from 'react';
import { fetchFeaturedPlaylists } from './api/spotifyApi';
import {Link} from "react-router-dom";

const Sidebar = () => {
  const [playlists, setPlaylists] = useState([]);


  useEffect(() => {
    fetchFeaturedPlaylists()
      .then((data) => setPlaylists(data))
      .catch((error) => console.error('Error fetching playlists:', error));
  }, []);


  return (
    <div  className="bg-primary-2 w-sidebar">
      <div className="pl-custom-left pr-custom-left-3">
        <ul className=" pt-[70px]">
        <li className="text-secondary  flex items-center font-semibold text-lg gap-5">
          <GoHomeFill className="w-8 h-8"/>
          <Link to="/">
            Home
          </Link>
         </li>
          <li className="text-secondary pt-5 flex items-center font-semibold text-lg gap-5">
            <HiOutlineSearch className="w-8 h-8"/>
            Search</li>
          <li className="text-secondary pt-5 flex items-center font-semibold text-lg gap-5">
            <img src={Library}/>
            Your Library</li>
          <li className="text-secondary flex pt-5 items-center font-semibold text-lg gap-5">
            <BsFillPlusSquareFill className="w-8 h-8"/>
            Create Playlist</li>
          <li className="text-secondary flex pt-5  pb-5 items-center font-semibold text-lg gap-5">
          <img src={Liked}/>
            <Link to="/Liked">
              Liked Songs
            </Link>
            </li>
        </ul>
        <div className="mt-5 border-bottom"></div>
        <ul className="pt-custom-top-4">
          {playlists.map((playlist) => (
            <li key={playlist.id}>
              <div className="pt-custom-top-5 text-secondary-4 text-lg- font-custom-weight">{playlist.name}</div>
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}
export default Sidebar