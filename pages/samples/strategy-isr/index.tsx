import _Page from '@/domains/samples/strategy-isr/page'
import _Layout from '@/domains/layout'

import { setHtmlHead } from '@/shared/components/HtmlHead'

const SampleISRPage: NextPageWithLayout = _Page

SampleISRPage.head = setHtmlHead({ title: 'Sample ISR' })
SampleISRPage.layout = _Layout

export default SampleISRPage
