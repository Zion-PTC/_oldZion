import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { store } from "../../app/store"; 
// import { store } from "../../app/store";

// let playlist2 = store.getState().audioPlayer
// console.log(playlist2);

export const getApi = createAsyncThunk(
  'audioPlayer/getApi',
  async (e) => {
    return e
  }
)

// export const getStream = createAsyncThunk(
//   'audioPlayer/getStream',
//   async (x) => {
//     store.dispatch(audiusApi.endpoints.getPlaylistTracks.initiate(x))
//     return x
//   }
// )

export const audioPlayerSlice = createSlice({
  name: 'audioPlayer',
  initialState: {
    play: false,
    pause: true,
    isShuffleOn: false,               // false = 'off', true = 'on'
    playlist: {
      'name': undefined,
      'tracks': [{
        id: undefined,
        url: undefined
      }],
      'trackCount': undefined
    },
    trackID: undefined,
    selectedTrack: undefined,
    cue: undefined,
    indexesToPrefetch: [0,1,2,3,4],
    log: undefined
  },
  reducers: {
    addTrackToPlaylist: (state, action) => {
      // push track to playlist
      state.playlist.tracks.push(action.payload)
    },
    setPlaylist: (state, action) => {
      state.playlist = action.payload
    },
    setSelectedTrack: (state, action) => {
      state.selectedTrack = action.payload
    },
    setLog: (state, action) => {
      state.log = action.payload
    },
    setTrackUrl: (state, action) => {
      let index = action.payload.index
      state.playlist.tracks[index].url = action.payload.url
    },
    setIndexedToBePrefecthed: (state, action) => {
      state.indexesToPrefetch = action.payload
    },
    setCue: (state, action) => {
      state.cue = action.payload
    },
    selectNextTrack: (state, action) => {
      state.selectedTrack = action.payload
    },
    selectPreviousTrack: (state) => {
      state.selectedTrack --
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getApi.fulfilled, (state, action) => {
        // let idToUpdate = action.payload
        // let currentState = current(state)
        // let trackToBeUpdated = currentState.playlist.data.find(i => i.id === idToUpdate)

      })
    // .addCase(getStream.fulfilled, (state, action) => {
    //   let currentState = current(state)


    // })
  }
})

export const selectAudioPlayer = state => state.audioPlayer
export const {
  addTrackToPlaylist,
  setTrackUrl,
  setSelectedTrack,
  setLog,
  setPlaylist,
  setIndexedToBePrefecthed,
  setCue,
  selectNextTrack
} = audioPlayerSlice.actions
export default audioPlayerSlice.reducer
