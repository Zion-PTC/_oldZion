import { createSlice } from "@reduxjs/toolkit";

// function getPlaylist() {
//   const dispatch = useDispatch()
//   const trackStream = dispatch(useGetTrackQuery())

//   return (
//     <div>

//     </div>
//   )
// }




export const audioPlayerSlice = createSlice({
  name: 'audioPlayer',
  initialState: {
    play: false,
    pause: true,
    nextTrack: false,
    previousTrack: false,
    isShuffleOn: false,               // false = 'off', true = 'on'
    playlist: [],
    trackUrl: undefined,
    trackID: undefined,
    selectedTrack: undefined

  },
  reducers: {
    addTrackToPlaylist: state => {
      // push track to playlist
    },
    setPlaylist: (state, action) => {
      // useDispatch(get)
    },
    setSelectedTrack: (state, action) => {
      state.selectedTrack = action.payload
      console.log(state.selectedTrack);
    }
  }
})

export const selectAudioPlayer = state => state.audioPlayer
export const { addTrackToPlaylist, setTrackUrl, setSelectedTrack } = audioPlayerSlice.actions
export default audioPlayerSlice.reducer
