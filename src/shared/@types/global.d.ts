import type { PropsWithChildren as OriginalPropsWithChildren } from 'react'
import type { NextPage as OriginalNextPage } from "next";
import type { AppProps as OriginalAppProps } from "next/app";

declare global {

  type NextPageWithLayout<T = object> = OriginalNextPage<T> & {
    layout?: OriginalNextPage
    head?: JSX.Element
  }

  type AppPropsWithLayout = OriginalAppProps & {
    Component: NextPage
  }

  type PropsWithChildren = OriginalPropsWithChildren
}

export {};
