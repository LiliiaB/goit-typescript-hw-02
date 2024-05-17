export interface UnsplashPhoto {
  id: string;
  description: string | null;
  urls: {
    full: string;
    regular: string;
    small: string;
  };
  likes: number;
  user: {
    name: string;
  };
}

export interface UnsplashResponse {
  results: UnsplashPhoto[];
  total: number;
  total_pages: number;
}
