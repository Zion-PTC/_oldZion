import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
    playStatus: 'pause',
    currentPosition : '00:00',
    currentTrackBufferStatus : {
      'bufferedTime': undefined
    },
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
    indexesToPrefetch: [0, 1, 2, 3, 4],
    log: undefined
  },
  reducers: {
    setPlay: (state) => {
      state.play = !state.play
    },
    setPlayStatus: (state, action) => {
      state.playStatus = action.payload
    },
    setCurrentPosition: (state, action) => {
      state.currentPosition = action.payload
    },
    setCurrentTrackBufferStatus: (state, action) => {
      state.currentTrackBufferStatus = action.payload
    },
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
    playNextTrack: (state) => {
      state.selectedTrack ++
    },
    playPreviousTrack: (state) => {
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
  setPlay,
  setPlayStatus,
  setCurrentPosition,
  addTrackToPlaylist,
  setTrackUrl,
  setSelectedTrack,
  setLog,
  setPlaylist,
  setIndexedToBePrefecthed,
  setCue,
  playNextTrack,
  playPreviousTrack,
} = audioPlayerSlice.actions
export default audioPlayerSlice.reducer
