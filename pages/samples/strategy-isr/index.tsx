import _Page from '@/app/samples/strategy-isr/page'
import _RootLayout from '@/app/layout'

import { setHtmlHead } from '@/common/components/HtmlHead'

const SampleISRPage: NextPageWithLayout = _Page
SampleISRPage.head = setHtmlHead({ title: 'Sample ISR' })
SampleISRPage.layout = _RootLayout

export default SampleISRPage
