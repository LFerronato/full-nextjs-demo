export { getServerSideProps } from '@/app/samples/strategy-ssr/[name]/server.next-exports'

import _StatsOfNamePage, { type StatsOfNamePageProps } from '@/app/samples/strategy-ssr/[name]/page'
import _Layout from '@/app/samples/strategy-ssr/layout'
import { HtmlHead } from '@/common/components/HtmlHead'

const StatsOfNamePage: NextPageWithLayout<StatsOfNamePageProps> = ({ stats, name }) => {
  return (
    <>
      <HtmlHead title={name} />
      <_StatsOfNamePage stats={stats} name={name} />
    </>
  )
}

StatsOfNamePage.layout = _Layout

export default StatsOfNamePage
