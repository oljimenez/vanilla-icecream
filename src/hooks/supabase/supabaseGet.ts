import { supabaseClient } from "@supabase/auth-helpers-nextjs";

async function supabaseGet<T>(table: string, column: keyof T | string | "*") {
  const { data, error } = await supabaseClient
    .from<T>(table)
    .select(column as string);

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }
  return data;
}

export { supabaseGet };
