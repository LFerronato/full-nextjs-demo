import _Page from '@/app/samples/strategy-ssr/page'
import _RootLayout from '@/app/samples/strategy-ssr/layout'

import { setHtmlHead } from '@/common/components/HtmlHead'

const SampleSSRPage: NextPageWithLayout = _Page
SampleSSRPage.head = setHtmlHead({ title: 'Sample SSR' })
SampleSSRPage.layout = _RootLayout

export default SampleSSRPage
