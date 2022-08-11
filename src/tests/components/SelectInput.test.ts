import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { SelectInput } from '../../components';

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

  describe('<SelectInput />', () => {
    let selectInput: HTMLSelectElement | null | undefined;
    let label: HTMLLabelElement | null | undefined;

    const onChange = jest.fn;

    beforeEach(() => {
      act(() => {
        render(
          SelectInput({
            className: 'test',
            labelText: 'test',
            name: 'test',
            value: 'test1',
            options: ['test1', 'test2'],
            handleChange: onChange,
          }),
          container,
        );
      });

      selectInput = container?.querySelector('select');
      label = container?.querySelector('label');
    });

    afterEach(() => selectInput = null);

    it('should render a select input', () => {
      expect(selectInput).toBeTruthy();
    });

    it('should render the select input props correctly', () => {
      expect(selectInput?.getAttribute('class')).toBe('test');
      expect(selectInput?.getAttribute('name')).toBe('test');
      expect(selectInput?.value).toBe('test1');
      expect(label?.textContent).toBe('test ');
      expect(label?.getAttribute('for')).toBe('test');
    });
  });
});
