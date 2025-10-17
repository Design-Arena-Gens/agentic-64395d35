import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Get Your $100 Crumbl Gift Card - Free Cookies Await!',
  description: 'Complete a quick survey and earn a $100 Crumbl Cookies gift card! Join thousands who are enjoying free cookies today.',
  keywords: 'Crumbl cookies, free gift card, $100 gift card, cookies, rewards, survey',
  openGraph: {
    title: 'Get Your $100 Crumbl Gift Card',
    description: 'Complete a quick survey and earn a $100 Crumbl Cookies gift card!',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Your $100 Crumbl Gift Card',
    description: 'Complete a quick survey and earn a $100 Crumbl Cookies gift card!',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
