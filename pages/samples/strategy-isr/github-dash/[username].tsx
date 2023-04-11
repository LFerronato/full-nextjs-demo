import _Page from '@/domains/samples/strategy-isr/github-dash/[username]/page'
import _Layout from '@/domains/layout'

import { setHtmlHead } from '@/shared/components/HtmlHead'

const GitHubDashboardPage: NextPageWithLayout = _Page

GitHubDashboardPage.head = setHtmlHead({ title: 'Dash' })
GitHubDashboardPage.layout = _Layout

export default GitHubDashboardPage
