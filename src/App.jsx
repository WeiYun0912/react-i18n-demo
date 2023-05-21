import "./App.css";
import { useTranslation, Trans } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const changeLng = (lng) => {
    i18n.changeLanguage(lng);
  };
  const messages = ["message one", "message two"];
  const count = messages.length;

  const name = "Wei";

  return (
    <>
      <button onClick={() => changeLng("en")}>EN</button>

      <button onClick={() => changeLng("zh")}>ZH</button>

      <br />

      <Trans i18nKey="userMessagesUnread" count={count}>
        Hello <strong title={t("nameTitle")}>{{ name }}</strong>, you have
        {{ count }} unread message. <a to="/msgs">Go to messages</a>.
      </Trans>
    </>
  );
}

export default App;
