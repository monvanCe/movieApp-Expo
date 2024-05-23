const lowResImage = (path: string) => `https://image.tmdb.org/t/p/w200${path}`;

const highResImage = (path: string) => `https://image.tmdb.org/t/p/w500${path}`;

const originalImage = (path: string) => `https://image.tmdb.org/t/p/original${path}`;

export default {
  lowResImage,
  highResImage,
  originalImage,
};
