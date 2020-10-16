import { shallowMount } from '@vue/test-utils'
import Timeline from '../../src/components/Timeline'

describe('Timeline', () => {
  it('renders start and end month', () => {
    const wrapper = shallowMount(Timeline, {
      propsData: {
        started: 'Elokuu 2020',
        ended: 'Joulukuu 2020'
      }
    })
    expect(wrapper.find('p').text()).toEqual('Elokuu 2020 - Joulukuu 2020')
  })
  it('renders start and end month when end month is not provided', () => {
    const wrapper = shallowMount(Timeline, {
      propsData: {
        started: 'Elokuu 2020',
        ended: ''
      }
    })
    expect(wrapper.find('p').text()).toEqual('Elokuu 2020')
  })
})
