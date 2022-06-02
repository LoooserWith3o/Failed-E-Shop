import { css } from '@emotion/react';
import Head from 'next/head';

const headerStyles = css`
  padding: 10px;
  background-color: aqua;
  border: 20px;
  border-radius: 15px;
  display: flex;
`;

export default function About() {
  return (
    <div>
      <Head>
        <title>About me</title>
        <meta name="Description" content="Page by me" />
        <link rel="icon" href="/favicon.icon" />
      </Head>

      <header css={headerStyles}>
        <h1>Weights</h1>
      </header>
    </div>
  );
}
