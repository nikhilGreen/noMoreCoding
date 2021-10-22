

import { Provider } from "react-redux";
import store from "../redux/store";
import { persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { createWrapper } from "next-redux-wrapper";



function MyApp({ Component, pageProps }) {
  return <>
    <Provider store={store} session={pageProps.session} >
      <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
      </PersistGate>
    </Provider>
  </>
}

const makestore = () => store;
const wrapper = createWrapper(makestore);
export default wrapper.withRedux(MyApp);

