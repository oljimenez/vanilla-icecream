import type { AppProps } from "next/app";
import { RTCProvider } from "context/RTCContext";
import "theme/App.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RTCProvider>
      <Component {...pageProps} />
    </RTCProvider>
  );
}

export default MyApp;
