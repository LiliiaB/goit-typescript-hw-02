export interface UnsplashPhoto {
  id: string;
  description: string | null;
  urls: {
    full: string;
    regular: string;
    small: string;
  };
}

export interface UnsplashResponse {
  results: UnsplashPhoto[];
  total: number;
  total_pages: number;
}
