import { mount } from "@vue/test-utils";
import BaseSelect from "@/components/BaseSelect.vue";
describe("Card", () => {
  const propsData = {
    label: "Numéro de la ligne inwi",
  };

  let wrapper;
  beforeEach(() => (wrapper = mount(BaseSelect, { propsData })));
  describe("BaseSelect", () => {
    test("Check Render BaseSelect", async () => {
      expect(wrapper.find("option:checked").element.value).toBe("1");
    });
  });
});
