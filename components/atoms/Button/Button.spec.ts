import { mount, Wrapper } from '@vue/test-utils'
import Button from '@/components/atoms/Button/Button.vue'

describe('Button', () => {
  // @ts-ignore
  let wrapper : Wrapper<Button>

  beforeAll(() => {
    wrapper = mount(Button, {
      propsData: {
        text: 'Foo',
        type: 'submit'
      }
    })
  })

  test('should be is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('Should have self component class name', () => {
    expect(wrapper.classes()).toContain('button')
  })

  test('should render the text', () => {
    expect(wrapper.find('button').text()).toBe('Foo')
  })

  test('should set type', () => {
    expect(wrapper.attributes('type')).toBe('submit')
  })

  test('should emit an event on click', async () => {
    await wrapper.trigger('click')

    expect(wrapper.emitted('click')).toHaveLength(1)
  })
})
