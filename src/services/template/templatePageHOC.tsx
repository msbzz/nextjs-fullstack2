import Head from "next/head";
import type {TemplateConfig} from "./whitTemplateConfig" ;
interface templatePageHOCProps {
  title?: string;
}

export default function templatePageHOC(
  Componet:(props:any)=> JSX.Element,
  templatePageHOCProps: templatePageHOCProps = {}
) {
  return function WrappedComponent(props:{templateConfig:TemplateConfig}) {
    console.log(props);
    return (
      <>
      <Head>
        <title>
          {props.templateConfig.site.title}
        </title>
      </Head>
      <Componet {...props}/>
      </>
    )


  };
}
