export { getStaticPaths, getStaticProps } from '@/app/samples/strategy-isr/github-dash/[username]/server.next-exports'

import _Page from '@/app/samples/strategy-isr/github-dash/[username]/page'
import _RootLayout from '@/app/layout'
import { setHtmlHead } from '@/common/components/HtmlHead'

const GitHubDashboardPage: NextPageWithLayout = _Page
GitHubDashboardPage.head = setHtmlHead({ title: 'Dash' })
GitHubDashboardPage.layout = _RootLayout

export default GitHubDashboardPage
