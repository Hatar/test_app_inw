import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import { actions} from "../store/index";
let mockError = false;

// you always need to mock axios calls
// we don't call the real API in tests
jest.mock("axios", () => ({
  post: (_url, _body) => {
    return new Promise((resolve) => {
      if (mockError) throw Error();
      resolve("any thing you want");
    });
  },
  put: (_url, _body) => {
    return new Promise((resolve) => {
      if (mockError) throw Error("failed to call api");
      resolve("lang_fr"); // returned value from the real API
    });
  },
}));

describe("actions", () => {
  it("tests actions", async () => {
    let data = {};

    const response = await actions.updateLangue({}, data);
    expect(response).toEqual("lang_fr");
  });
});
