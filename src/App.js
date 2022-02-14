import { useState } from "react";
import { FormattedMessage, FormattedNumber } from "react-intl";
import LanguageWrapper from "./LanguageWrapper";

function App() {
  const [local, setLocal] = useState(navigator.language);
  return (
    <LanguageWrapper local={local}>
      <select value={local} onChange={(e) => setLocal(e.target.value)}>
        <option value="en-US">English(us)</option>
        <option value="np">Nepali</option>
        <option value="en-IN">Indian English</option>
        <option value="zh-Hans-CN-u-nu-hanidec">Chinese</option>
      </select>
      <div
        style={{
          display: "flex",
          alignItem: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <h1>
            <FormattedMessage
              id="global.welcomeMessage"
              defaultMessage="Unknown"
              values={{ name: local === "np" ? "Sajan Dhakal" : "Sajan" }}
            />
          </h1>
          <div
            style={{
              border: "4px solid black",
              width: "100%",
              minWidth: "600px",
              height: "500px",
              borderRadius: ".8rem",
              textAlign: "center",
            }}
          >
            <h2>
              <FormattedMessage id="user.heading" defaultMessage="Your info" />
            </h2>
            <div
              style={{
                display: "flex",
                alignItem: "center",
                justifyContent: "start",
              }}
            >
              <h3>
                <FormattedMessage id="user.height" defaultMessage="Your info" />
                :
              </h3>
              <h4>
                <FormattedNumber
                  value={19}
                  style="unit"
                  unit="liter"
                  // unitDisplay="long"
                />
              </h4>
            </div>

            <div
              style={{
                display: "flex",
                alignItem: "center",
                justifyContent: "start",
              }}
            >
              <h3>
                <FormattedMessage id="user.money" defaultMessage="Your info" />:
              </h3>
              <h4>
                <FormattedNumber
                  value={19000000}
                  // style={"currency"}
                  // currency={"zh-Hans-CN-u-nu-hanidec"}
                  // JPY EUR INR
                  maximumSignificantDigits={2}
                  // local={"zh-Hans-CN-u-nu-hanidec"}
                />
              </h4>
            </div>
          </div>
        </div>
      </div>
    </LanguageWrapper>
  );
}

export default App;
