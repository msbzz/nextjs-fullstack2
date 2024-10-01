import { whitTemplateConfig } from '@src/services/template/whitTemplateConfig'

export {default} from '@src/screens/HomeScreen/HomeScreen'

export async function getStaticProps(){

  return{
    props: await whitTemplateConfig({})
  }
}

