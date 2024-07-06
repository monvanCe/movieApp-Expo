interface ITheme {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  primaryText: string;
  secondaryText: string;
  tertiaryText: string;
  error: string;
  warning: string;
  success: string;
  info: string;
  border: string;
  divider: string;
  iconPrimary: string;
  iconSecondary: string;
}

interface IUser {
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

interface IMovie {
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

interface IChildren {
  children: React.ReactNode;
}

interface IUserAddList {
  onPress: () => void;
}

interface IOnPress {
  onPress: () => void;
}

interface IImages {
  images: string[];
}

interface IText {
  text: string;
}

interface ITexts {
  texts: string[];
}

interface IOnPressWithParam {
  onPress: (param: string) => void;
}

interface IMovies {
  movies: IMovie[];
}

interface IICon {
  icon: string;
}

interface IVisible {
  visible: boolean;
}
