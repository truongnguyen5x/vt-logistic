export type IPost = {
  img: string;
  type: string;
  title: string;
  created_at: number;
  description: string;
  slug: string;
};

// TODO: combine with IPost
export type IDetailPost = {
  slug: string;
  type: string;
  banner: string;
  created_at: string;
  title: string;
  content: string;
  readed: number;
  relatedPost: IPost[];
};
