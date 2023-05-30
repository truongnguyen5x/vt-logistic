//TODO remove
export type IPost = {
  img: string;
  category: IPostCategory;
  title: string;
  created_at: number;
  description: string;
  slug: string;
  content: string;
  readed: number;
  relatedPost: IPost[];
  banner: string;
};

export type IPostCategory =
  | "recruitment"
  | "market_news"
  | "specialized_news"
  | "internal_news";
