import { useEffect, useState } from "react";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { Message } from "types/Message";

export function useMessages() {
  const [messages, setMessages] = useState<Message[]>();

  const fetchMessages = async () => {
    const { data, error } = await supabaseClient
      .from<Message>("messages")
      .select();
    if (data) {
      setMessages(data);
    }
    console.log(error);
  };

  useEffect(() => {
    (async () => {
      if (!messages) {
        await fetchMessages();
      }
    })();
  }, [messages]);

  useEffect(() => {
    const subscription = supabaseClient
      .from<Message>("messages")
      .on("INSERT", async (payload) => {
        console.log(payload);
        await fetchMessages();
      })
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return { messages, fetchMessages };
}
