import { mount } from "@vue/test-utils";
import Card from "@/components/Card.vue";
import { mutations } from "../store";

const { setIsActive }  = mutations;
describe("Card", () => {
  const propsData = {
    title: "Mise à jour du lien du tutoriel Myinwi",
    icone: "require(~/assets/image/video.png)",
    action: {
      title: "Enregister",
      fn: test,
    },
  };


  const state = {isActive: true};

  let wrapper;
  beforeEach(() => (wrapper = mount(Card, { propsData,mutations })));
  describe("Title", () => {
    test("check if typeof title String", async () => {
      const h5 = wrapper.find(".header-title");
      const img = wrapper.find("img");
      const input = wrapper.find("input");
      expect(h5.text()).toContain("Mise à jour du lien du tutoriel Myinwi");
      expect(img.attributes().src).toBe("require(~/assets/image/video.png)");
      expect(input.attributes().value).toBe("Enregister");
      const payload  = true
      setIsActive(state, payload);
      expect(state.isActive).toEqual(payload)
      expect(state.isActive).toEqual(payload)
      expect(state.isActive).toEqual(payload)
      wrapper.vm.activeCreateAccount()
      wrapper.vm.activePswTemp()
    });
  });
});

