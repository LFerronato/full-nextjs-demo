import { HtmlHead } from '../components/HtmlHead'

export const useConfigNextApp = ({ Component }: Pick<AppPropsWithLayout, 'Component'>) => {
  // Use the layout defined at the pages/* level, if available
  const Layout = !Component.layout
    ? ({ children }: PropsWithChildren) => <>{children} </>
    : Component.layout

  const head = !Component.head
    ? <HtmlHead />
    : Component.head

  return {
    Layout,
    head,
  }
}
