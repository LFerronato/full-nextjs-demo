import _Page from '@/domains/samples/next-image/page'
import _Layout from '@/domains/layout'

import { setHtmlHead } from '@/shared/components/HtmlHead'

const SampleImagePage: NextPageWithLayout = _Page

SampleImagePage.head = setHtmlHead({ title: 'Sample Image' })
SampleImagePage.layout = _Layout

export default SampleImagePage
