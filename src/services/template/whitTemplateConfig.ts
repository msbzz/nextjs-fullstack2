import readYamlFile from "read-yaml-file/index";
import path from "path";

interface TemplateConfig{
  site?: {
    title?: string;
    description: string;
  }
  personal?: {
    name?: string;
    avatar?: string;
    socialNetworks?:{
      youtube?: string;
      github?: string;
      twitter?: string;
      linkedin?: string;
    }
  }
}

export async function whitTemplateConfig(props={}){
    //console.log(path.resolve(".","template-yaml"))
    const PATH_TEMPLATE_CONFIG = path.resolve(".","template-config.yml")
    const templateConfig = await readYamlFile<TemplateConfig>(PATH_TEMPLATE_CONFIG);

  return {
    templateConfig,
    ...props,
  }
}
