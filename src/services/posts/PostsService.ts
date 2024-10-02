
import path from "path";
import fs from "fs/promises";

export interface Post{
  date : string;
  slug: string // ID do post / titlulo resumido
  title: string;
  url: string;
  excerpt: string;
  tags: string[];
}


export default function PostsService() {
  return {
    async getAll(): Promise<Post[]> {
      const PATH_POSTS= path.resolve(".","_data","posts");
      console.log('lendo posts ==>>',PATH_POSTS)
      return [];
    },
  };
}
