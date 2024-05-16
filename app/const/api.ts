const apiKey = '4f098a761153500ca2a6a2d39980f694';
const baseUrl = 'https://api.themoviedb.org/3';
const options = '&language=tr-TR&page=1';

export const nowPlayingApi = `${baseUrl}/movie/now_playing?api_key=${apiKey}${options}`;
export const popularApi = `${baseUrl}/movie/popular?api_key=${apiKey}${options}`;
export const topRatedApi = `${baseUrl}/movie/top_rated?api_key=${apiKey}${options}`;
export const upComingApi = `${baseUrl}/movie/upcoming?api_key=${apiKey}${options}`;
export const trendingApi = `${baseUrl}/trending/all/day?api_key=${apiKey}`;

export const lowResImage = (path: string) =>
  `https://image.tmdb.org/t/p/w200${path}`;
export const highResImage = (path: string) =>
  `https://image.tmdb.org/t/p/w500${path}`;
export const originalImage = (path: string) =>
  `https://image.tmdb.org/t/p/original${path}`;

export const searchMoviesApi = (term: string) =>
  `${baseUrl}/search/movie?api_key=${apiKey}${options}&query=${term}`;

export const movieApi = (id: number) =>
  `${baseUrl}/movie/${id}?api_key=${apiKey}${options}`;

export const genresApi = `${baseUrl}/genre/movie/list?api_key=${apiKey}&language=tr-TR`;

export const genreMoviesApi = (genreId: number) =>
  `${baseUrl}/discover/movie?api_key=${apiKey}${options}&with_genres=${genreId}`;

export const similarMoviesApi = (id: number) =>
  `${baseUrl}/movie/${id}/similar?api_key=${apiKey}${options}`;

export const creditsApi = (id: number) =>
  `${baseUrl}/movie/${id}/credits?api_key=${apiKey}`;

export const personPopularApi = `${baseUrl}/person/popular?api_key=${apiKey}${options}`;

export const personApi = (id: number) =>
  `${baseUrl}/person/${id}?api_key=${apiKey}`;

export const personMoviesApi = (id: number) =>
  `${baseUrl}/person/${id}/movie_credits?api_key=${apiKey}`;

export const movieReviewsApi = (id: number) =>
  `${baseUrl}/movie/${id}/reviews?api_key=${apiKey}${options}`;

export const movieProvidersApi = (id: number) =>
  `${baseUrl}/movie/${id}/watch/providers?api_key=${apiKey}`;

export const movieCertificationsApi = `${baseUrl}/certification/movie/list?api_key=${apiKey}`;
