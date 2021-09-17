import "tailwindcss/tailwind.css";
import "../styles/global.css";
import { Provider as AuthProvider } from "next-auth/client";
import { store } from "../app/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider session={pageProps.session}>
      <Provider store={store}>
        <Component {...pageProps} />;
      </Provider>
    </AuthProvider>
  );
}

export default MyApp;
