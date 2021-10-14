import { mount } from "@vue/test-utils";
import Header from "@/components/Header.vue";


describe('Header', () =>{

    test('test length data',() =>{
        const wrapper = mount(Header,{
            stubs: {
                NuxtLink: true,
            }
        });
        expect(Object.entries(wrapper.vm.$data.labels).length).toBeGreaterThan(0);
    })

})