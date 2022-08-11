import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { CheckInput } from '../../components';

describe('Components', () => {
  let container: Element | null = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    if (container) {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    }
  });

  describe('<CheckInput />', () => {
    let radioInput: HTMLInputElement | null | undefined;
    let label: HTMLLabelElement | null | undefined;

    const onChange = jest.fn;

    beforeEach(() => {
      act(() => {
        render(
          CheckInput({
            className: 'test',
            name: 'test',
            options: ['test1', 'test2'],
            handleChange: onChange,
            type: 'radio'
          }),
          container,
        );
      });

      radioInput = container?.querySelector('input');
      label = container?.querySelector('label');
    });

    afterEach(() => radioInput = null);

    it('should render a radio input', () => {
      expect(radioInput).toBeTruthy();
    });

    it('should render the radio input props correctly', () => {
      expect(radioInput?.getAttribute('class')).toBe('test');
      expect(radioInput?.getAttribute('name')).toBe('test');
      expect(radioInput?.value).toBe('test1');
      expect(label?.textContent).toBe('test1');
    });
  });
});