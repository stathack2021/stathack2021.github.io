import Head from 'next/head'
import useLocale from "../hooks/useLocale"
import { Header } from '../modules/header'
import { About } from '../modules/about'
import { Value } from '../modules/value'
import { Service } from '../modules/service'
import { News } from '../modules/news'
import { Member } from '../modules/member'
import { Company } from '../modules/company'
import { Contact } from '../modules/contact'
import { Footer } from '../modules/footer'

export const Home = (): JSX.Element => {
  const locale = "ja";
  const t = useLocale(locale);

  return (
    <div className="bg-black">
      <Head>
        <title>{ t.title }</title>
        <link rel="icon" href="/favicon.svg" />
        <link href='https://fonts.googleapis.com/css?family=Josefin+Sans' rel='stylesheet'></link>
        <script src="https://sdk.form.run/js/v2/formrun.js"></script>
      </Head>

      <Header locale={ locale }/>
      <About locale={ locale }/>
      <Service locale={ locale }/>
      <Value locale={ locale }/>
      <News locale={ locale }/>
      <Member locale={ locale }/>
      <Contact locale={ locale }/>
      <Company locale={ locale }/>
      <Footer locale={ locale }/>

    </div>
  )
}

export default Home
