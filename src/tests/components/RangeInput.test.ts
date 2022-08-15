import { render, unmountComponentAtNode } from 'react-dom';
import { act, Simulate } from 'react-dom/test-utils';
import { RangeInput } from '../../components';

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

  describe('<RangeInput />', () => {
    let rangeInput: HTMLInputElement | null | undefined;

    const onChange = jest.fn();

    beforeEach(() => {
      act(() => {
        render(
          RangeInput({
            value: 500,
            handleChange: onChange,
          }),
          container,
        );
      });

      rangeInput = container?.querySelector('input');
    });

    afterEach(() => rangeInput = null);

    it('should render a range input', () => {
      expect(rangeInput).toBeTruthy();
    });

    it('should render the range input props correctly', () => {
      expect(rangeInput?.getAttribute('class')).toBe('range-input');
      expect(rangeInput?.value).toBe('500');
      expect(rangeInput?.getAttribute('type')).toBe('range');
      expect(rangeInput?.getAttribute('max')).toBe('1000');
      expect(rangeInput?.getAttribute('step')).toBe('50');
    });

    it('should render the range input label correctly', () => {
      const label = container?.querySelector('label');
      expect(label?.textContent).toBe('$ 0$ 500.00');
    });

    it('should respond to change correctly', () => {
      act(() => {
        Simulate.change(rangeInput as HTMLInputElement);
        Simulate.change(rangeInput as HTMLInputElement);
      });
      expect(onChange).toHaveBeenCalledTimes(2);
    });
  });
});
