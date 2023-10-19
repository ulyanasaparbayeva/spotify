import { getAccessToken } from './auth';

export const fetchFeaturedPlaylists = async () => {
  const accessToken = await getAccessToken();


  if (!accessToken) {
    return [];
  }

  try {
    const response = await fetch('https://api.spotify.com/v1/browse/featured-playlists', {
      headers: {
        'Authorization': 'Bearer ' + accessToken,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch featured playlists');
    }

    const data = await response.json();
    return data.playlists.items;
  } catch (error) {
    console.error('Error fetching featured playlists:', error);
    return [];
  }
};







