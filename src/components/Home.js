import { NoSsr } from '@material-ui/core';
import SsrOnly from './SsrOnly';
import Link from 'next/link';

function Home() {
  return (
    <div>
      <SsrOnly>
        <h1>you should not see this</h1>
      </SsrOnly>
      <NoSsr>
        <h1>you should see this</h1>
      </NoSsr>

      <Link href={'/quiz/foo'}>
        <a>click me then go back</a>
      </Link>
    </div>
  );
}

export default Home;
