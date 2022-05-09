export interface PostMeta {
  id?: string;
  date: string;
  title: string;
  excerpt: string;
  link: string;
  cover?: string;
  coverAlt?: string;
}

export interface ProjectMeta {
  project_title: string;
  cover_image?: string;
  cover_alt?: string;
  caption: string;
  order?: number;
  created_at?: string;
}
