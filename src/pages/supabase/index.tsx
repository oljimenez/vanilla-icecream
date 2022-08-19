import type { NextPage } from "next";
import { Flex } from "components/flex";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { Message } from "types/Message";
import { useText } from "hooks/supabase/useText";
import { useMessages } from "hooks/supabase/useMessages";

const Index: NextPage = () => {
  const { text, onTextChange, onClearText } = useText();
  const { messages, fetchMessages } = useMessages();

  const onSendMessage = async () => {
    await supabaseClient.from<Message>("messages").insert({ text: text });
    onClearText();
  };

  const onClearMessages = async () => {
    if (messages) {
      for (const message of messages) {
        await supabaseClient
          .from<Message>("messages")
          .delete()
          .eq("id", message.id);
      }
    }
    await fetchMessages();
  };

  return (
    <Flex itemSize={"full"} placeItems={"center"} gap={"lg"}>
      <Flex flexDirection={"column"}>
        {messages &&
          messages.map((message) => <p key={message.id}>{message.text}</p>)}
      </Flex>
      <input value={text} onChange={onTextChange} />
      <button onClick={onSendMessage}>Send Message</button>
      <button onClick={onClearMessages}>Clear Messages</button>
    </Flex>
  );
};

export default Index;
