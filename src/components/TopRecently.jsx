import React, {useEffect, useState} from "react";
import {getAccessToken} from "./api/auth";
import {Link} from "react-router-dom";


const TopRecently = () => {

const [RecentlyPlayed, setRecentlyPlayed] = useState([]);
const categoryId = "0JQ5DAqbMKFQ00XGBls6ym"

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = await getAccessToken();
        const apiEndpoint = `https://api.spotify.com/v1/browse/categories/${categoryId}/playlists`;
        const response = await fetch(apiEndpoint, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const data = await response.json();
        setRecentlyPlayed(data.playlists.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [categoryId]);


  return (
    <div className="made bg-secondary-6">
      <div className="text-secondary font-bold text-xl tracking-[0.6px] pt-custom-top-6">
        Recently played
      </div>
      <div className="grid grid-cols-4 pt-custom-top-7 gap-custom-gap-3 pb-custom-top-4">
        {RecentlyPlayed.slice(0, 4).map((playlist) => (
          <div
            key={playlist.id}
            className="w-[190px] mixes bg-box rounded-lg"
          >
            <Link to={`/ProductDetails/${playlist.id}`}>
              <img
                src={playlist.images[0].url}
                alt={playlist.name}
                className="w-custom-width-6 pt-5 pb-custom-top-8 rounded-[4px]"
              />
              <a
                href={playlist.external_urls.spotify}
                className="text-secondary font-bold text-xl tracking-[0.6px]"
              >
                {playlist.name ? playlist.name.split(' ').slice(0,4).join(' ') : ''}
              </a>
              <div className="text-secondary-4 pt-2 text-lg font-custom-weight pb-custom-bottom-2">
                {playlist.description ? playlist.description.split(' ').slice(0,6).join(' ') : ''}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
 }
 export default TopRecently