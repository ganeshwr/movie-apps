import { Provider } from "react-redux";
import { fireEvent, render, waitFor } from "@testing-library/react-native";

import Main from "../components/Main";

import { store } from "../store/store";

test("should render not found text if no movie title match search query", async () => {
  const { getByTestId, queryByTestId } = render(
    <Provider store={store}>
      <Main />
    </Provider>
  );

  const search = getByTestId("search");
  fireEvent.changeText(search, "somerandomtextimpossibletobemovietitle");

  await waitFor(() => expect(queryByTestId("not-found")).toBeTruthy());
});
