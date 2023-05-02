import type {
  DetailedHTMLProps,
  HTMLAttributes,
  PropsWithChildren as OriginalPropsWithChildren,
  ReactNode as OriginalReactNode,
} from 'react'
import type { NextPage as OriginalNextPage } from 'next'
import type { AppProps as OriginalAppProps } from 'next/app'

declare global {
  // NEXT
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type NextPageWithLayout<PROPS = any> = OriginalNextPage<PROPS> & {
    layout?: OriginalNextPage
    head?: JSX.Element
  }
  type AppPropsWithLayout = OriginalAppProps & {
    Component: NextPage
  }

  // REACT
  type PropsWithChildren = OriginalPropsWithChildren
  type ReactNode = OriginalReactNode

  // MISC
  type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  type LinkProps = Parameters<typeof Link>[0]
}

export {}
