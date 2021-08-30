import { mount, Wrapper } from '@vue/test-utils'
import Container from '@/components/bosons/Container/Container.vue'

describe('Container', () => {
  // @ts-ignore
  let wrapper : Wrapper<Container>

  beforeAll(() => {
    wrapper = mount(Container, {
      slots: {
        default: '<i/>'
      }
    })
  })

  test('should render the slot content', () => {
    expect(wrapper.find('i').exists()).toBe(true)
  })
})
