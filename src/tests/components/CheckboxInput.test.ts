import { render, unmountComponentAtNode } from 'react-dom';
import { act, Simulate } from 'react-dom/test-utils';
import { CheckboxInput } from '../../components';

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

  describe('<CheckboxInput />', () => {
    let checkboxInput: HTMLInputElement | null | undefined;
    let label: HTMLLabelElement | null | undefined;

    const onClick = jest.fn();

    beforeEach(() => {
      act(() => {
        render(
          CheckboxInput({
            className: 'test',
            name: 'test',
            options: ['test1'],
            handleClick: onClick,
            type: 'checkbox',
            value: false
          }),
          container,
        );
      });

      checkboxInput = container?.querySelector('input');
      label = container?.querySelector('label');
    });

    afterEach(() => checkboxInput = null);

    it('should render a radio input', () => {
      expect(checkboxInput).toBeTruthy();
    });

    it('should render the radio input props correctly', () => {
      expect(checkboxInput?.getAttribute('class')).toBe('test');
      expect(checkboxInput?.getAttribute('name')).toBe('test');
      expect(checkboxInput?.value).toBe('test1');
      expect(label?.textContent).toBe('test1');
    });
    
    it('should respond to a click correctly', () => {
      act(() => {
        Simulate.click(checkboxInput as HTMLInputElement);
        Simulate.click(checkboxInput as HTMLInputElement);
      });
      expect(onClick).toHaveBeenCalledTimes(2);
    });
  });
});
