
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
      const postFiles = await fs.readdir(PATH_POSTS,{encoding:"utf-8"});
      const posts = postFiles.map(async (postFileName)=>{
        const filePath = path.join(PATH_POSTS,postFileName);
        const postFile = await fs.readFile(filePath,{encoding:"utf-8"});
        console.log('lendo posts ==>>',postFile);
      });

      return [];
    },
  };
}
