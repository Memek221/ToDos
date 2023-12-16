import { createContext, useContext } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

const Context = createContext({ supabase });

export default function SupabaseContext({ children }) {
  return <Context.Provider value={supabase}>{children}</Context.Provider>;
}

export function useSupabase() {
  return useContext(Context);
}