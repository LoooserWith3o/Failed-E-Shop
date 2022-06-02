import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import workout3 from '../public/img/workout3.jpeg';
import Layout from './components.js/Layout';

const headerStyles = css`
  padding: 8px;
  background: aqua;
  border-radius: 0px;
  display: flex;
  justify-content: space-between;
`;
const navBar = css`
  margin-right: 0;
  padding: 20px 25px;
  border-bottom: 4px solid #fff;
  display: inline-block;
  text-align: left;
  height: unset !important;

  > div > a {
    margin-right: 30px;
  }
`;

export default function Home() {
  return (
    <Layout>
      <main>
        <div>
          <Head>
            <title>Dreambody for U</title>
            <meta name="Description" content="Page by me" />
            <link rel="icon" href="/favicon.icon" />
          </Head>
          <header css={headerStyles}>
            <div>
              <h1>Heavy Heaven!</h1>
              <h2>Get the Gym you deserve!</h2>
            </div>

            <nav
              id="soomagicmenu-main"
              className="soomagicmenu hide-below-1024"
              css={navBar}
            >
              <ul>
                <li>
                  <Link href="Bodybuilding">Bodybuilding</Link>
                </li>
                <li>
                  <Link href="Crossfit">Crossfit</Link>
                </li>
                <li>
                  <Link href="Powerlifting">Powelifting</Link>
                </li>
                <li>
                  <Link href="Strongman">Strongman</Link>
                </li>
                <li>
                  <Link href="Other">Other</Link>
                </li>
              </ul>
            </nav>
          </header>
          <Image src={workout3} alt="workout3" />
        </div>
      </main>
    </Layout>
  );
}
