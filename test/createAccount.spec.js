import { mount } from "@vue/test-utils";
import PAGE_CREATE_ACCOUNT_INWI from "@/pages/creation-comptes-inwi/index.vue";


describe('Page Create Account', () =>{

    test('test length data',() =>{
        const wrapper = mount(PAGE_CREATE_ACCOUNT_INWI,{
            stubs: {
                NuxtLink: true,
                BaseInputPhone:true,
                BaseSelect:true,
                Card :true
            }
        });
        expect(wrapper.vm.$data.items.length).toEqual(0);
    })

})