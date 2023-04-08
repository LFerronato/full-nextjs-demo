import type { PropsWithChildren as OriginalPropsWithChildren } from 'react'
import type { NextPage as OriginalNextPage } from "next";
import type { AppProps as OriginalAppProps } from "next/app";

declare global {

  type NextPageWithLayout = OriginalNextPage & {
    layout?: OriginalNextPage
    head?: any
  }

  type AppPropsWithLayout = OriginalAppProps & {
    Component: NextPage
  }

  type PropsWithChildren = OriginalPropsWithChildren
}

export {};
