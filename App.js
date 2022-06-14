import { Provider } from "react-redux";

import Main from "./src/components/Main";

import { store } from "./src/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
