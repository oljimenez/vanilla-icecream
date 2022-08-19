import React from "react";
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

  const onSendMessageEnter = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.code === "Enter") {
      await supabaseClient.from<Message>("messages").insert({ text: text });
      onClearText();
    }
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
          messages.map((message) => (
            <p style={{ marginBlock: "0px" }} key={message.id}>
              {message.text}
            </p>
          ))}
      </Flex>
      <input
        value={text}
        onChange={onTextChange}
        onKeyDown={onSendMessageEnter}
      />
      <button onClick={onSendMessage}>Send Message</button>
      <button onClick={onClearMessages}>Clear Messages</button>
    </Flex>
  );
};

export default Index;
