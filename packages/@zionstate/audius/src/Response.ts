export namespace ApiResponses {
  type Base = {
    id: string;
    repost_count: number;
  };
  type Base2<T> = {
    description: string;
    user: IUser;
    favorite_count: number;
    artwork: artwork<T>;
  };
  type cover_photo = {
    '640x': string;
    '2000x': string;
  };
  type profile_picture = {
    '150x150': string;
    '480x480': string;
    '1000x1000': string;
  };
  type UserT = {
    album_count: number;
    bio: string;
    cover_photo: cover_photo;
    followee_count: number;
    follower_count: number;
    handle: string;
    is_verified: boolean;
    location: string;
    name: string;
    playlist_count: number;
    profile_picture: profile_picture;
    track_count: number;
  };
  type TrackT = {
    genre: string;
    mood: string;
    release_date: string;
    remix_of: IRemix_parent;
    tags: string;
    title: string;
    duration: number;
    downloadable: boolean;
    play_count: number;
  };
  type Track_element_T = {
    parent_track_id: string;
  };
  type Remix_parent_T = {
    tracks: [ITrack_element];
  };
  type Activity_T = {
    timestamp: string;
    item_type: {};
    item: {};
  };
  type Favorite_T = {
    favorite_item_id: string;
    favorite_type: string;
    user_id: string;
  };
  type Playlist_T = {
    is_album: boolean;
    playlist_name: string;
    total_play_count: number;
  };
  type App_name_trailing_metric_T = {
    count: number;
    name: string;
  };
  type Response_T<T> = {
    data: T;
  };
  interface track_artwork extends profile_picture {}
  interface playlist_artwork extends profile_picture {}
  interface artwork<T> extends profile_picture {}
  interface IRemix_parent extends Remix_parent_T {}
  interface ITrack_element extends Track_element_T {}
  interface IActivity extends Activity_T {}
  interface IFavoriTe extends Favorite_T {}
  interface IApp_name_trailing_metric extends App_name_trailing_metric_T {}
  interface IResponse<T> extends Response_T<T> {}
  interface IUser extends UserT, Base {}
  interface ITrack extends TrackT, Base, Base2<track_artwork> {}
  interface IPlaylist extends Playlist_T, Base, Base2<playlist_artwork> {}

  interface User_response extends IResponse<IUser> {}
  interface Tracks_response extends IResponse<ITrack[]> {}
  interface Reposts extends IResponse<IActivity[]> {}
  interface Favorites_reponse extends IResponse<IFavoriTe[]> {}
  interface Tags_response extends IResponse<string[]> {}
  interface User_search extends IResponse<IUser[]> {}
  interface Playlist_response extends IResponse<IPlaylist[]> {}
  interface Playlist_tracks_response extends IResponse<ITrack[]> {}
  interface Playlist_search_result extends IResponse<IPlaylist[]> {}
  interface Track_response extends IResponse<ITrack> {}
  interface Track_search extends IResponse<ITrack[]> {}
  interface App_name_trailing_response
    extends IResponse<IApp_name_trailing_metric[]> {}

  export type AudiusResponses =
    | User_response
    | Tracks_response
    | Reposts
    | Favorites_reponse
    | Tags_response
    | User_response
    | User_search
    | Playlist_response
    | Playlist_tracks_response
    | Playlist_search_result
    | Track_response
    | Track_search
    | App_name_trailing_response;
}
