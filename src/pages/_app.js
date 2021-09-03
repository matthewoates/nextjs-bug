import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <div className='app-content'>
      <Head/>

      <main>
        <Component {...pageProps}/>
      </main>
    </div>
  );
}

export default App;
