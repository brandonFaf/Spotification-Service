/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
  DateTime: any;
  Upload: any;
};

export type _ListAccess = {
  __typename?: '_ListAccess';
  create?: Maybe<Scalars['Boolean']>;
  read?: Maybe<Scalars['JSON']>;
  update?: Maybe<Scalars['JSON']>;
  delete?: Maybe<Scalars['JSON']>;
  auth?: Maybe<Scalars['JSON']>;
};

export type _ListMeta = {
  __typename?: '_ListMeta';
  name?: Maybe<Scalars['String']>;
  access?: Maybe<_ListAccess>;
  schema?: Maybe<_ListSchema>;
};

export type _ListSchema = {
  __typename?: '_ListSchema';
  type?: Maybe<Scalars['String']>;
  queries?: Maybe<Array<Maybe<Scalars['String']>>>;
  relatedFields?: Maybe<Array<Maybe<_ListSchemaRelatedFields>>>;
};

export type _ListSchemaRelatedFields = {
  __typename?: '_ListSchemaRelatedFields';
  type?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type _QueryMeta = {
  __typename?: '_QueryMeta';
  count?: Maybe<Scalars['Int']>;
};

export type AddedBy = {
  __typename?: 'AddedBy';
  href?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  external_urls?: Maybe<ExternalUrls>;
};

export type Admin = {
  __typename?: 'Admin';
  _label_?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  password_is_set?: Maybe<Scalars['Boolean']>;
};

export type AdminCreateInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
};

export type AdminsCreateInput = {
  data?: Maybe<AdminCreateInput>;
};

export type AdminsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<AdminUpdateInput>;
};

export type AdminUpdateInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
};

export type AdminWhereInput = {
  AND?: Maybe<Array<Maybe<AdminWhereInput>>>;
  OR?: Maybe<Array<Maybe<AdminWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_contains?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  email_starts_with?: Maybe<Scalars['String']>;
  email_not_starts_with?: Maybe<Scalars['String']>;
  email_ends_with?: Maybe<Scalars['String']>;
  email_not_ends_with?: Maybe<Scalars['String']>;
  email_i?: Maybe<Scalars['String']>;
  email_not_i?: Maybe<Scalars['String']>;
  email_contains_i?: Maybe<Scalars['String']>;
  email_not_contains_i?: Maybe<Scalars['String']>;
  email_starts_with_i?: Maybe<Scalars['String']>;
  email_not_starts_with_i?: Maybe<Scalars['String']>;
  email_ends_with_i?: Maybe<Scalars['String']>;
  email_not_ends_with_i?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  isAdmin_not?: Maybe<Scalars['Boolean']>;
  password_is_set?: Maybe<Scalars['Boolean']>;
};

export type AdminWhereUniqueInput = {
  id: Scalars['ID'];
};

export type AuthenticateAdminOutput = {
  __typename?: 'authenticateAdminOutput';
  token?: Maybe<Scalars['String']>;
  item?: Maybe<Admin>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE',
}

export type ExternalUrls = {
  __typename?: 'ExternalUrls';
  spotify?: Maybe<Scalars['String']>;
};

export type Followers = {
  __typename?: 'Followers';
  href?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Int']>;
};

export type Images = {
  __typename?: 'Images';
  height?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
};

export type Items = {
  __typename?: 'Items';
  added_at?: Maybe<Scalars['String']>;
  is_local?: Maybe<Scalars['Boolean']>;
  primary_color?: Maybe<Scalars['String']>;
  track?: Maybe<Track>;
  added_by?: Maybe<AddedBy>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAdmin?: Maybe<Admin>;
  createAdmins?: Maybe<Array<Maybe<Admin>>>;
  updateAdmin?: Maybe<Admin>;
  updateAdmins?: Maybe<Array<Maybe<Admin>>>;
  deleteAdmin?: Maybe<Admin>;
  deleteAdmins?: Maybe<Array<Maybe<Admin>>>;
  unauthenticateAdmin?: Maybe<UnauthenticateAdminOutput>;
  authenticateAdminWithPassword?: Maybe<AuthenticateAdminOutput>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  createPlaylist?: Maybe<Playlist>;
  createPlaylists?: Maybe<Array<Maybe<Playlist>>>;
  updatePlaylist?: Maybe<Playlist>;
  updatePlaylists?: Maybe<Array<Maybe<Playlist>>>;
  deletePlaylist?: Maybe<Playlist>;
  deletePlaylists?: Maybe<Array<Maybe<Playlist>>>;
};

export type MutationCreateAdminArgs = {
  data?: Maybe<AdminCreateInput>;
};

export type MutationCreateAdminsArgs = {
  data?: Maybe<Array<Maybe<AdminsCreateInput>>>;
};

export type MutationUpdateAdminArgs = {
  id: Scalars['ID'];
  data?: Maybe<AdminUpdateInput>;
};

export type MutationUpdateAdminsArgs = {
  data?: Maybe<Array<Maybe<AdminsUpdateInput>>>;
};

export type MutationDeleteAdminArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteAdminsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};

export type MutationAuthenticateAdminWithPasswordArgs = {
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type MutationCreateUserArgs = {
  data?: Maybe<UserCreateInput>;
};

export type MutationCreateUsersArgs = {
  data?: Maybe<Array<Maybe<UsersCreateInput>>>;
};

export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  data?: Maybe<UserUpdateInput>;
};

export type MutationUpdateUsersArgs = {
  data?: Maybe<Array<Maybe<UsersUpdateInput>>>;
};

export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteUsersArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};

export type MutationCreatePlaylistArgs = {
  data?: Maybe<PlaylistCreateInput>;
};

export type MutationCreatePlaylistsArgs = {
  data?: Maybe<Array<Maybe<PlaylistsCreateInput>>>;
};

export type MutationUpdatePlaylistArgs = {
  id: Scalars['ID'];
  data?: Maybe<PlaylistUpdateInput>;
};

export type MutationUpdatePlaylistsArgs = {
  data?: Maybe<Array<Maybe<PlaylistsUpdateInput>>>;
};

export type MutationDeletePlaylistArgs = {
  id: Scalars['ID'];
};

export type MutationDeletePlaylistsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};

export type Owner = {
  __typename?: 'Owner';
  display_name?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  external_urls?: Maybe<ExternalUrls>;
};

export type Playlist = {
  __typename?: 'Playlist';
  _label_?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  snapshotId: Scalars['String'];
  name: Scalars['String'];
  users?: Maybe<Array<Maybe<User>>>;
  _usersMeta?: Maybe<_QueryMeta>;
  spotifyId: Scalars['String'];
  lastUpdated?: Maybe<Scalars['DateTime']>;
};

export type PlaylistUsersArgs = {
  where?: Maybe<UserWhereInput>;
  search?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type Playlist_UsersMetaArgs = {
  where?: Maybe<UserWhereInput>;
  search?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type PlaylistCreateInput = {
  snapshotId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  users?: Maybe<UserRelateToManyInput>;
  spotifyId?: Maybe<Scalars['String']>;
  lastUpdated?: Maybe<Scalars['DateTime']>;
};

export type PlaylistsCreateInput = {
  data?: Maybe<PlaylistCreateInput>;
};

export type PlaylistsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<PlaylistUpdateInput>;
};

export type PlaylistUpdateInput = {
  snapshotId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  users?: Maybe<UserRelateToManyInput>;
  spotifyId?: Maybe<Scalars['String']>;
  lastUpdated?: Maybe<Scalars['DateTime']>;
};

export type PlaylistWhereInput = {
  AND?: Maybe<Array<Maybe<PlaylistWhereInput>>>;
  OR?: Maybe<Array<Maybe<PlaylistWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  snapshotId?: Maybe<Scalars['String']>;
  snapshotId_not?: Maybe<Scalars['String']>;
  snapshotId_contains?: Maybe<Scalars['String']>;
  snapshotId_not_contains?: Maybe<Scalars['String']>;
  snapshotId_starts_with?: Maybe<Scalars['String']>;
  snapshotId_not_starts_with?: Maybe<Scalars['String']>;
  snapshotId_ends_with?: Maybe<Scalars['String']>;
  snapshotId_not_ends_with?: Maybe<Scalars['String']>;
  snapshotId_i?: Maybe<Scalars['String']>;
  snapshotId_not_i?: Maybe<Scalars['String']>;
  snapshotId_contains_i?: Maybe<Scalars['String']>;
  snapshotId_not_contains_i?: Maybe<Scalars['String']>;
  snapshotId_starts_with_i?: Maybe<Scalars['String']>;
  snapshotId_not_starts_with_i?: Maybe<Scalars['String']>;
  snapshotId_ends_with_i?: Maybe<Scalars['String']>;
  snapshotId_not_ends_with_i?: Maybe<Scalars['String']>;
  snapshotId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  snapshotId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  users_every?: Maybe<UserWhereInput>;
  users_some?: Maybe<UserWhereInput>;
  users_none?: Maybe<UserWhereInput>;
  users_is_null?: Maybe<Scalars['Boolean']>;
  spotifyId?: Maybe<Scalars['String']>;
  spotifyId_not?: Maybe<Scalars['String']>;
  spotifyId_contains?: Maybe<Scalars['String']>;
  spotifyId_not_contains?: Maybe<Scalars['String']>;
  spotifyId_starts_with?: Maybe<Scalars['String']>;
  spotifyId_not_starts_with?: Maybe<Scalars['String']>;
  spotifyId_ends_with?: Maybe<Scalars['String']>;
  spotifyId_not_ends_with?: Maybe<Scalars['String']>;
  spotifyId_i?: Maybe<Scalars['String']>;
  spotifyId_not_i?: Maybe<Scalars['String']>;
  spotifyId_contains_i?: Maybe<Scalars['String']>;
  spotifyId_not_contains_i?: Maybe<Scalars['String']>;
  spotifyId_starts_with_i?: Maybe<Scalars['String']>;
  spotifyId_not_starts_with_i?: Maybe<Scalars['String']>;
  spotifyId_ends_with_i?: Maybe<Scalars['String']>;
  spotifyId_not_ends_with_i?: Maybe<Scalars['String']>;
  spotifyId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  spotifyId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastUpdated?: Maybe<Scalars['DateTime']>;
  lastUpdated_not?: Maybe<Scalars['DateTime']>;
  lastUpdated_lt?: Maybe<Scalars['DateTime']>;
  lastUpdated_lte?: Maybe<Scalars['DateTime']>;
  lastUpdated_gt?: Maybe<Scalars['DateTime']>;
  lastUpdated_gte?: Maybe<Scalars['DateTime']>;
  lastUpdated_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lastUpdated_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type PlaylistWhereUniqueInput = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  allAdmins?: Maybe<Array<Maybe<Admin>>>;
  Admin?: Maybe<Admin>;
  _allAdminsMeta?: Maybe<_QueryMeta>;
  _AdminsMeta?: Maybe<_ListMeta>;
  authenticatedAdmin?: Maybe<Admin>;
  allUsers?: Maybe<Array<Maybe<User>>>;
  User?: Maybe<User>;
  _allUsersMeta?: Maybe<_QueryMeta>;
  _UsersMeta?: Maybe<_ListMeta>;
  allPlaylists?: Maybe<Array<Maybe<Playlist>>>;
  Playlist?: Maybe<Playlist>;
  _allPlaylistsMeta?: Maybe<_QueryMeta>;
  _PlaylistsMeta?: Maybe<_ListMeta>;
  appVersion?: Maybe<Scalars['String']>;
  getPlaylistFromSpotify?: Maybe<SpotifyPlaylist>;
  _ksListsMeta?: Maybe<Array<Maybe<_ListMeta>>>;
};

export type QueryAllAdminsArgs = {
  where?: Maybe<AdminWhereInput>;
  search?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type QueryAdminArgs = {
  where: AdminWhereUniqueInput;
};

export type Query_AllAdminsMetaArgs = {
  where?: Maybe<AdminWhereInput>;
  search?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type QueryAllUsersArgs = {
  where?: Maybe<UserWhereInput>;
  search?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type Query_AllUsersMetaArgs = {
  where?: Maybe<UserWhereInput>;
  search?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type QueryAllPlaylistsArgs = {
  where?: Maybe<PlaylistWhereInput>;
  search?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type QueryPlaylistArgs = {
  where: PlaylistWhereUniqueInput;
};

export type Query_AllPlaylistsMetaArgs = {
  where?: Maybe<PlaylistWhereInput>;
  search?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type QueryGetPlaylistFromSpotifyArgs = {
  id: Scalars['ID'];
};

export type SpotifyPlaylist = {
  __typename?: 'SpotifyPlaylist';
  collaborative?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  public?: Maybe<Scalars['Boolean']>;
  snapshotId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  tracks?: Maybe<Tracks>;
  owner?: Maybe<Owner>;
  images?: Maybe<Array<Maybe<Images>>>;
  followers?: Maybe<Followers>;
  external_urls?: Maybe<ExternalUrls>;
};

export type Track = {
  __typename?: 'Track';
  id?: Maybe<Scalars['String']>;
};

export type Tracks = {
  __typename?: 'Tracks';
  href?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  next?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  previous?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<Maybe<Items>>>;
};

export type UnauthenticateAdminOutput = {
  __typename?: 'unauthenticateAdminOutput';
  success?: Maybe<Scalars['Boolean']>;
};

export type User = {
  __typename?: 'User';
  _label_?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type UserCreateInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type UserRelateToManyInput = {
  create?: Maybe<Array<Maybe<UserCreateInput>>>;
  connect?: Maybe<Array<Maybe<UserWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<UserWhereUniqueInput>>>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type UsersCreateInput = {
  data?: Maybe<UserCreateInput>;
};

export type UsersUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<UserUpdateInput>;
};

export type UserUpdateInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type UserWhereInput = {
  AND?: Maybe<Array<Maybe<UserWhereInput>>>;
  OR?: Maybe<Array<Maybe<UserWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_contains?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  email_starts_with?: Maybe<Scalars['String']>;
  email_not_starts_with?: Maybe<Scalars['String']>;
  email_ends_with?: Maybe<Scalars['String']>;
  email_not_ends_with?: Maybe<Scalars['String']>;
  email_i?: Maybe<Scalars['String']>;
  email_not_i?: Maybe<Scalars['String']>;
  email_contains_i?: Maybe<Scalars['String']>;
  email_not_contains_i?: Maybe<Scalars['String']>;
  email_starts_with_i?: Maybe<Scalars['String']>;
  email_not_starts_with_i?: Maybe<Scalars['String']>;
  email_ends_with_i?: Maybe<Scalars['String']>;
  email_not_ends_with_i?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumber_not?: Maybe<Scalars['String']>;
  phoneNumber_contains?: Maybe<Scalars['String']>;
  phoneNumber_not_contains?: Maybe<Scalars['String']>;
  phoneNumber_starts_with?: Maybe<Scalars['String']>;
  phoneNumber_not_starts_with?: Maybe<Scalars['String']>;
  phoneNumber_ends_with?: Maybe<Scalars['String']>;
  phoneNumber_not_ends_with?: Maybe<Scalars['String']>;
  phoneNumber_i?: Maybe<Scalars['String']>;
  phoneNumber_not_i?: Maybe<Scalars['String']>;
  phoneNumber_contains_i?: Maybe<Scalars['String']>;
  phoneNumber_not_contains_i?: Maybe<Scalars['String']>;
  phoneNumber_starts_with_i?: Maybe<Scalars['String']>;
  phoneNumber_not_starts_with_i?: Maybe<Scalars['String']>;
  phoneNumber_ends_with_i?: Maybe<Scalars['String']>;
  phoneNumber_not_ends_with_i?: Maybe<Scalars['String']>;
  phoneNumber_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  phoneNumber_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UserWhereUniqueInput = {
  id: Scalars['ID'];
};
