import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';

const headerStyles = css`
  padding: 30px 30px;
  background-color: aqua;
  border: 200px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  font-style: none;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dreambody for U</title>
        <meta name="Description" content="Page by me" />
        <link rel="icon" href="/favicon.icon" />
      </Head>

      <header css={headerStyles}>
        <h1>Powerlifting</h1>
        <Link href="/Weights">Weights</Link>
        <Link href="/Train/promise">Barbells</Link>
        <Link href="/references">Racks</Link>
        <Link href="/services">Equipment</Link>
      </header>
    </div>
  );
}
