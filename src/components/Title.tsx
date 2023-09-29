import Head from 'next/head'

interface TitleProps {
  suffix?: string
  children: string
}

export default function Title({ suffix, children }: TitleProps): JSX.Element {
  const title = children + (suffix != null ? ` - ${suffix}` : '')

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
    </Head>
  )
}
