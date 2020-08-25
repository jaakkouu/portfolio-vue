import { shallowMount } from '@vue/test-utils'
import Title from '../../src/components/Title'

describe('Title', () => {
    it('renders title', () => {
        const wrapper = shallowMount(Title, {
            propsData: {
                title: "Very nice title here"
            }
        })
        expect(wrapper.find('h2').text()).toEqual('Very nice title here')
    })
    it('renders title with correct classes when providing centerize attribute', () => {
        const wrapper = shallowMount(Title, {
            propsData: {
                title: "Also very nice title",
                centerized: true
            }
        })
        expect(wrapper.find('h2').classes()).toStrictEqual(['title', 'center'])
    })
    it('renders title with correct class when not providing centerize attribute', () => {
        const wrapper = shallowMount(Title, {
            propsData: {
                title: "Also very nice title"
            }
        })
        expect(wrapper.find('h2').classes()).toStrictEqual(['title'])
    })
})