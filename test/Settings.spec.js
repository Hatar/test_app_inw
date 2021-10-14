import { mount } from "@vue/test-utils";
import Settings from "@/pages/settings/index.vue";


describe('Page settings', () =>{

    test('test length data',() =>{
        const wrapper = mount(Settings,{
            stubs: {
                NuxtLink: true,
                BaseInputPhone:true,
                BaseInput:true,
                Card:true
            }
        });
        expect(wrapper.vm.$data.password).toEqual("");
        expect(wrapper.vm.$data.phone).toEqual("");
    })

})