import { shallowMount } from "@vue/test-utils";
import BaseInput from "@/components/BaseInput.vue";
const mask = jest.fn();
describe("Card", () => {
  const propsData = {
    placeholder: "Mot de passe temporaire",
    label: "Mot de passe temporaire",
  };

  let wrapper;
  beforeEach(
    () =>
      (wrapper = shallowMount(BaseInput, { propsData, directives: { mask } }))
  );
  describe("BaseInput", () => {
    test("Check Render BaseInput", () => {
      const label = wrapper.find("label");
      const input = wrapper.find("input");
      // expect(wrapper.props().title).toBe('Mise à jour du lien du tutoriel Myinwi')
      expect(label.text()).toContain("Mot de passe temporaire");
      expect(input.attributes().placeholder).toBe("Mot de passe temporaire");
      expect(mask).toHaveBeenCalled();
    });
  });
});
