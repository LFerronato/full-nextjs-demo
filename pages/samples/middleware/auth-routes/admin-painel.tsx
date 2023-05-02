import _Page from '@/app/samples/middleware/auth-routes/admin-painel/page'
import _RootLayout from '@/app/layout'

import { setHtmlHead } from '@/common/components/HtmlHead'

const SampleImagePage: NextPageWithLayout = _Page

SampleImagePage.head = setHtmlHead({ title: 'Middleware' })
SampleImagePage.layout = _RootLayout

export default SampleImagePage
