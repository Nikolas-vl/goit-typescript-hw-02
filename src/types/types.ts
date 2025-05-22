export type Image = {
  id: string;
  urls: {
    small: string;
    full: string;
    regular: string;
  };
  alt_description: string | null;
  likes: number;
  user: {
    name: string;
  };
};
