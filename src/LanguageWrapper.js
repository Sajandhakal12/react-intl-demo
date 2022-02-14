import { IntlProvider } from "react-intl";
import Nepali from "./lang/np.json";
import English from "./lang/en-US.json";

const LanguageWrapper = ({ local, children }) => {
  const messages = local === "np" ? Nepali : English;
  return (
    <IntlProvider locale={local} messages={messages}>
      {children}
    </IntlProvider>
  );
};

export default LanguageWrapper;
