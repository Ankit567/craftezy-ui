import { useRef } from "react";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";

import "../styles/globals.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageLoader from "../components/PageLoader/PageLoader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import { SettingsProvider } from "../contexts/settings.context";
import { useSettingsQuery } from "../utils/rest/settings/settings.query";
import { store } from "../store";

export const AppSettings = (props) => {
  const { data, isLoading: loading, error } = useSettingsQuery();
  if (loading) return <PageLoader />;
  if (error) return <ErrorMessage message={error.message} />;
  return <SettingsProvider initialValue={data?.settings?.options} {...props} />;
};

function MyApp({ Component, pageProps }) {
  const queryClientRef = useRef();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Provider store={store}>
        <AppSettings>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </AppSettings>
      </Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
