export interface IUser {
  id?: string;
  token?: string;
  username?: string;
  description?: string;
  profilePictureURL?: string;
  gender?: string;
  isPremium?: boolean;
  isAdmin?: boolean;
  language?: string;
  notificationToken?: string;
}

export interface IMovie {
  id: number;
  isAdult: boolean;
  backdropPath: string;
  genreIds: number[];
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath: string;
  releaseDate: string;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
}

export enum appTheme {
  Light = 'light',
  Dark = 'dark',
}

export enum storageKeys {
  appTheme = 'appTheme',
  appLanguage = 'appLanguage',
}
