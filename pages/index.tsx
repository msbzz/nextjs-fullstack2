import PostsService from '@src/services/posts/PostsService';
import { whitTemplateConfig } from '@src/services/template/whitTemplateConfig'

export {default} from '@src/screens/HomeScreen/HomeScreen'

export async function getStaticProps(){

  const posts = await PostsService().getAll();
  console.log('meus posts ==>>',posts);
  return{
    props: await whitTemplateConfig({
      posts,
      exemplo:"teste",
    })
  }
}

