
const clientId = '8c6acc08e2404257b655380edd2b6c59';
const clientSecret = '042a79a6dbb84c17a3665914d7c9e4a3';

export const getAccessToken = async () => {
  try {
    const authResponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret),
      },
      body: 'grant_type=client_credentials',
    });

    if (!authResponse.ok) {
      throw new Error('Authentication failed');
    }

    const authData = await authResponse.json();
    return authData.access_token;
  } catch (error) {
    console.error('Error getting access token:', error);
    return null;
  }
};
