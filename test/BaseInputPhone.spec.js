import { shallowMount } from "@vue/test-utils";
import BaseInputPhone from "@/components/BaseInputPhone.vue";
const mask = jest.fn();
describe("Card", () => {
  const propsData = {
    label: "Numéro de la ligne inwi",
  };

  let wrapper;
  beforeEach(
    () =>
      (wrapper = shallowMount(BaseInputPhone, {
        propsData,
        directives: { mask },
      }))
  );
  describe("BaseInput", () => {
    test("Check Render BaseInputPhone", () => {
      const label = wrapper.find("label");
      expect(label.text()).toContain("Numéro de la ligne inwi");
      expect(mask).toHaveBeenCalled();
    });
  });
});
