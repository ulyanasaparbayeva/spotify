
export const TOGGLE_LIKE = 'TOGGLE_LIKE';

export const toggleLike = (song) => {
  const likedSongs = JSON.parse(localStorage.getItem('likedSongs')) || [];
  const updatedLikedSongs = likedSongs.some((likedSong) => likedSong.id === song.id)
    ? likedSongs.filter((likedSong) => likedSong.id !== song.id)
    : [...likedSongs, song];
  localStorage.setItem('likedSongs', JSON.stringify(updatedLikedSongs));
  return {
    type: TOGGLE_LIKE,
    payload: updatedLikedSongs,
  };
};
