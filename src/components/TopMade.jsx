import {useState,useEffect} from "react";
import {getAccessToken} from "./api/auth";
import {Link} from "react-router-dom";

const TopMade = () => {
  const [madeForYou, setMadeForYou] = useState([]);
  const apiEndpoint = 'https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFHOzuVTgTizF/playlists';


  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = await getAccessToken();
        const response = await fetch(apiEndpoint, {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        });
        const data = await response.json();
        setMadeForYou(data.playlists.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [apiEndpoint]);

  return (
    <div className="made bg-secondary-6">
      <div className="text-secondary font-bold text-xl tracking-[0.6px] pt-custom-top-6">
        Made for you
      </div>
      <div className="grid grid-cols-4 pt-custom-top-7 gap-custom-gap-3">
        {madeForYou.splice(7,4).map((playlist) => (
        <div key={playlist.id} className="w-[190px] mixes bg-box rounded-lg">
          <Link to={`/ProductDetails/${playlist.id}`}>
            <img  className="pb-custom-top-8 pt-5 w-custom-width-6" src={playlist.images[0].url} alt={playlist.name}/>
            <a href={playlist.external_urls.spotify} className="text-secondary font-bold text-xl tracking-[0.6px]">
              {playlist.name ? playlist.description.split(' ').slice(0,2).join(' ') :''}
            </a>
            <div className="text-secondary-4 pt-2 text-lg font-custom-weight pb-custom-bottom-2">
              {playlist.description ? playlist.description.split(' ').slice(0, 3).join(' ') : ''}</div>
          </Link>
        </div>
      ))}</div>
    </div>
  )
}
export default TopMade