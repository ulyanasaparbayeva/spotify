import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import React, { useEffect, useState } from 'react';
import { fetchFeaturedPlaylists } from './api/spotifyApi';

const Banner = () => {
  const [featuredPlaylists, setFeaturedPlaylists] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    async function fetchPlaylists() {
      try {
        const playlists = await fetchFeaturedPlaylists();
        setFeaturedPlaylists(playlists);
        setDataLoaded(true);
      } catch (error) {
        console.error('Error fetching featured playlists:', error);
      }
    }

    fetchPlaylists();
  }, []);

  return (
    <div className="w-full bg-home">
      <div className="made w-full">
        <div className="pt-5 flex gap-custom-gap-2">
          <div className="banner-icon-bg flex items-center justify-center">
            <FiChevronLeft className="banner-icon" />
          </div>
          <div className="banner-icon-bg flex items-center justify-center">
            <FiChevronRight className="banner-icon" />
          </div>
        </div>
        <div className="pt-custom-top-6 text-secondary text-custom-size font-bold tracking-[-0.39px] pb-custom-bottom">
          Good afternoon
        </div>
        <div className="playlist-list grid grid-cols-2 pb-custom-top-6 gap-custom-gap-3 relative">
          {dataLoaded ? (
            featuredPlaylists.slice(0, 6).map((playlist) => (
              <div key={playlist.id} className="flex items-center rounded-md relative">
                <div className="playlist-bg"></div>
                <img
                  className="w-custom-width-2 h-custom-height-2 banner-images"
                  src={playlist.images[0].url}
                  alt={playlist.name}
                />
                <h3 className="pl-custom-left-3 text-secondary font-bold tracking-[0.2px] text-xl">
                  {playlist.name}
                </h3>
              </div>
            ))
          ) : (
            <div className="text-white font-bold text-xl">Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
