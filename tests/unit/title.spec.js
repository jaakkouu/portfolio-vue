import { shallowMount } from '@vue/test-utils'
import Title from '../../src/components/Title'

describe('Title', () => {
    it('renders title', () => {
        const wrapper = shallowMount(Title, {
            propsData: {
                title: "Very nice title here"
            }
        })
        expect(wrapper.findComponent(Title).text()).toEqual('Very nice title here')
    })
    it('renders title with correct classes when providing centerize attribute', () => {
        const wrapper = shallowMount(Title, {
            propsData: {
                title: "Also very nice title",
                centerized: true
            }
        })
        expect(wrapper.findComponent(Title).classes()).toStrictEqual(['title', 'center'])
    })
    it('renders title with correct class when not providing centerize attribute', () => {
        const wrapper = shallowMount(Title, {
            propsData: {
                title: "Also very nice title"
            }
        })
        expect(wrapper.findComponent(Title).classes()).toStrictEqual(['title'])
    })
})