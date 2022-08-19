import { handleAuth } from "@supabase/auth-helpers-nextjs";

export default handleAuth({
  logout: { returnTo: "/" },
  cookieOptions: { lifetime: 7 * 24 * 60 * 60 },
});
