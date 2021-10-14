import { mount } from "@vue/test-utils";
import PAGE_CONFIG_SESSION from "@/pages/configuration-session/index.vue";


describe('Page session', () =>{

    test('test length data',() =>{
        const wrapper = mount(PAGE_CONFIG_SESSION,{
            stubs: {
                NuxtLink: true,
                Card:true,
                BaseSelect:true
            }
        });
        expect(wrapper.vm.$data.items.length).toEqual(0);
    })

})