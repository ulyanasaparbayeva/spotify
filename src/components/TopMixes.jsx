import React, { useState, useEffect } from 'react';
import { getAccessToken } from './api/auth';
import {Link} from "react-router-dom";


const TopMixes = () => {
  const [mixes, setMixes] = useState([]);
  const apiEndpoint = 'https://api.spotify.com/v1/browse/categories/toplists/playlists';


  async function fetchData() {
    try {
      const accessToken = await getAccessToken();
      const response = await fetch(apiEndpoint, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      return data.playlists.items;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }


  useEffect(() => {
    fetchData()
      .then((data) => {
        setMixes(data);
      })
      .catch((error) => console.error('Error fetching top mixes:', error));
  }, []);


  return (
    <div className="bg-secondary-6">
      <div className="mixeses">
        <div className="text-secondary text-3xl font-bold tracking-[-0.9px]">Your top mixes</div>
        <div className="grid grid-cols-4 pt-custom-top-7 gap-custom-gap-3">
          {mixes.slice(1, 5).map((mix) => (
            <div key={mix.id} className="w-[190px]  mixes bg-box rounded-lg">
              <Link to={`/ProductDetails/${mix.id}`}>
                <img className="w-custom-width-6 pt-5 pb-custom-top-8 rounded-[4px]" src={mix.images[0].url} alt={mix.name} />
                <a href={mix.external_urls.spotify} className="text-secondary font-bold text-xl tracking-[0.6px]">
                  {mix.name}
                </a>
                <div className="text-secondary-4 pt-2 text-lg font-custom-weight pb-custom-bottom-2">
                  {mix.description ? mix.description.split(' ').slice(0, 5).join(' ') : ''}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopMixes;
