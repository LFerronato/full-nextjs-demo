import _Page from '@/app/samples/next-image/page'
import _RootLayout from '@/app/layout'

import { setHtmlHead } from '@/common/components/HtmlHead'

const SampleImagePage: NextPageWithLayout = _Page
SampleImagePage.head = setHtmlHead({ title: 'Sample Image' })
SampleImagePage.layout = _RootLayout

export default SampleImagePage
