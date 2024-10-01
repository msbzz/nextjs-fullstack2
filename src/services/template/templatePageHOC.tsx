import Head from "next/head";
import type { TemplateConfig } from "./whitTemplateConfig";
import { TemplateConfigProvider } from "./templateConfigContext";
interface templatePageHOCProps {
  title?: string;
}

export default function templatePageHOC(
  Componet: (props: any) => JSX.Element,
  templatePageHOCProps: templatePageHOCProps = {}
) {
  return function WrappedComponent(props: { templateConfig: TemplateConfig }) {
    console.log(props);
    return (
      <>
        <Head>
          <title>
            {templatePageHOCProps?.title
              ? `${templatePageHOCProps?.title} | ${props.templateConfig.site.title}`
              : props.templateConfig.site.title}
          </title>
        </Head>
        <TemplateConfigProvider value={props.templateConfig}>
        <Componet {...props} />
        </TemplateConfigProvider>

      </>
    );
  };
}
