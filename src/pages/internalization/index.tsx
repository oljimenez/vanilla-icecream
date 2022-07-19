import type { NextPage } from "next";
import useTranslation from "next-translate/useTranslation";
import setLanguage from "next-translate/setLanguage";
import { useEffect } from "react";
import { useRouter } from "next/router";
import cookie from "react-cookies";

type IndexProps = {};
const Index: NextPage<IndexProps> = () => {
  const { t, lang } = useTranslation("common");
  const { push, asPath } = useRouter();

  useEffect(() => {
    (async () => {
      const data = await fetch("http://localhost:8000/backend/producto", {
        headers: {
          Authorization: `Token 9b9076e34ac609c733af965db68cdbf29134e04b`,
        },
      }).then((res) => res.json());
      console.log(data);
    })();
  }, []);

  async function setEnLang() {
    await setLanguage("en");
    cookie.save("NEXT_LOCALE", "en", {});
  }

  async function setEsLang() {
    await setLanguage("es");
    cookie.save("NEXT_LOCALE", "es", {});
  }

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {t("example")}
      <button onClick={setEsLang}>es</button>
      <button onClick={setEnLang}>en</button>
    </div>
  );
};

export default Index;
