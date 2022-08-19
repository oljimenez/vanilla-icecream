import type { AppProps } from "next/app";
import "theme/global.css";

import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { UserProvider } from "@supabase/auth-helpers-react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider supabaseClient={supabaseClient} autoRefreshToken>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
