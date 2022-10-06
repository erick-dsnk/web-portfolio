import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App";

class Document extends React.Component {
  componentDidMount(): void {
    document.title = "ERIC";
  }

  render(): React.ReactNode {
    return <App />;
  }
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<Document />);
