const initialState = {
  likedSongs: JSON.parse(localStorage.getItem('likedSongs')) || [],
};

const likedSongsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_LIKE":
      const song = action.payload;
      if (state.likedSongs.some((likedSong) => likedSong.id === song.id)) {
        return {
          ...state,
          likedSongs: state.likedSongs.filter((likedSong) => likedSong.id !== song.id),
        };
      } else {
        return {
          ...state,
          likedSongs: [...state.likedSongs, song],
        };
      }
    default:
      return state;
  }
};

export default likedSongsReducer