import './globals.css'

import { hkCompaktFont, monumentExtendedBlackFont } from './fonts'
import GradientBorder from '@components/GradientBorder'
import Header from '@components/Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${hkCompaktFont.variable} ${monumentExtendedBlackFont.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="font-hkcompakt bg-white dark:bg-gray-900">
        <GradientBorder />
        <Header />
        {children}
      </body>
    </html>
  )
}
