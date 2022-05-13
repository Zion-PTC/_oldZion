import { ZionResponse, IZionResponse } from '@zionstate_node/node-fetch';
import { searchUsers } from './AudiusRequest';
searchUsers;

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
  type App_name_trailing_T = {
    count: number;
    name: string;
  };
  type AudiusResponse_T<T> = {
    data?: T;
  };
  interface artwork<T> extends profile_picture {}
  interface track_artwork extends profile_picture {}
  interface playlist_artwork extends profile_picture {}
  interface IRemix_parent extends Remix_parent_T {}
  interface ITrack_element extends Track_element_T {}
  interface IActivity extends Activity_T {}
  interface IFavoriTe extends Favorite_T {}
  interface IApp_name_trailing extends App_name_trailing_T {}
  interface IUser extends UserT, Base {}
  interface ITrack extends TrackT, Base, Base2<track_artwork> {}
  interface IPlaylist extends Playlist_T, Base, Base2<playlist_artwork> {}
  interface IHashtags {
    tracks: ITrack[];
    users: IUser[];
  }
  //
  interface IAudiusResponse<T> extends AudiusResponse_T<T>, IZionResponse {}

  interface IUser extends IAudiusResponse<IUser> {}
  interface ITracks extends IAudiusResponse<ITrack[]> {}
  interface IReposts extends IAudiusResponse<IActivity[]> {}
  interface IFavorites extends IAudiusResponse<IFavoriTe[]> {}
  interface ITags extends IAudiusResponse<string[]> {}
  interface IPlaylist extends IAudiusResponse<IPlaylist[]> {}
  interface ITrack extends IAudiusResponse<ITrack> {}
  interface IPlaylist_tracks extends IAudiusResponse<ITrack[]> {}
  interface IUser_search extends IAudiusResponse<IUser[]> {}
  interface IPlaylist_search_result extends IAudiusResponse<IPlaylist[]> {}
  interface ITrack_search extends IAudiusResponse<ITrack[]> {}
  interface IApp_name_trailing extends IAudiusResponse<IApp_name_trailing[]> {}
  interface IHashtag_search extends IAudiusResponse<IHashtags> {}

  export class AudiusResponse extends ZionResponse {}

  export type AudiusResponses =
    | IUser
    | ITracks
    | IReposts
    | IFavorites
    | ITags
    | IUser
    | IUser_search
    | IPlaylist
    | IPlaylist_tracks
    | IPlaylist_search_result
    | ITrack
    | ITrack_search
    | IHashtag_search
    | IApp_name_trailing;
}
