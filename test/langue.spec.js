import { mount } from "@vue/test-utils";
import PAGE_LANGUE from "@/pages/langue/index.vue";


describe('Page session', () =>{

    test('test length data',() =>{
        const wrapper = mount(PAGE_LANGUE,{
            stubs: {
                Card:true,
            },

        });
        const languages =[
            {
              id: 1,
              active_lang: true,
              creation_date: null,
              description:
                "Veuillez choisir votre langue préférée pour pouvoir continuer",
              label: "Français",
              language_id: "lang_fr",
              language_tag: "fr",
              title: "Langue préférée",
              modification_date: null,
            },
              {
              id: 2,
              active_lang: true,
              creation_date: null,
              description: "الرجاء اختيار لغتك المفضلة لتتمكن من المتابعة",
              label: "Arabe",
              language_id: "lang_ar",
              language_tag: "ar",
              title: "اللغة المفضلة",
              modification_date: null,
            },
          ]
        expect(wrapper.vm.$data.checked_1).toBe(false);
        expect(wrapper.vm.$data.checked_2).toBe(false);
        expect(wrapper.vm.$data.languages.length).toEqual(2);
        wrapper.vm.ActiveLang()
    })

})