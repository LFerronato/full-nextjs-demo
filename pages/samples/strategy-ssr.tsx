import _Page from '@/domains/samples/strategy-ssr/page'
import _Layout from '@/domains/samples/strategy-ssr/layout'

import { setHtmlHead } from '@/shared/components/HtmlHead'

const SampleSSRPage: NextPageWithLayout = _Page

SampleSSRPage.head = setHtmlHead({ title: 'Sample SSR' })
SampleSSRPage.layout = _Layout

export default SampleSSRPage
