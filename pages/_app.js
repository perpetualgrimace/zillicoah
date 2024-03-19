import "/styles/global.scss";
import "/components/_components.scss";

import DefaultLayout from "/components/layout/DefaultLayout";

export default function MyApp({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}
