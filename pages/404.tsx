import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/404.module.scss';

import Heading from '../components/Heading';

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Error</title>
      </Head>
      <div>
        <Heading text="404" />
        <Heading text="Something is going wrong..." tag="h2" />
      </div>
    </div>
  );
};
export default Error;
