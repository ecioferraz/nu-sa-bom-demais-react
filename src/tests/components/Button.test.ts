import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Button } from '../../components';

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

  describe('<Button />', () => {
    let button: HTMLButtonElement | null | undefined;

    const onClick = jest.fn();

    beforeEach(async () => {
      act(() => render(
        Button({
          name: 'test',
          handleClick: onClick,
          className: 'test',
        }),
        container
      ));
      button = container?.querySelector('button');
    });
  
    afterEach(() => button = null);
  
    it('should render button\'s properties correctly', () => {
      expect(button?.getAttribute('type')).toBe('button');
      expect(button?.getAttribute('name')).toBe('test');
      expect(button?.getAttribute('class')).toBe('test');
    });

    it('should render button\'s inner text correctly', () => {
      expect(button?.textContent).toBe('test');
    });

    it('should not render a disabled and clickable button', () => {
      expect(button).not.toBeDisabled();

      act(() => button?.click());

      expect(onClick).toHaveBeenCalled();
    });

    it('should render a disabled and unclickable button', () => {
      expect(button).not.toBeDisabled();
      button && (button.disabled = true);
      expect(button).toBeDisabled();

      act(() => button?.click());

      expect(onClick).not.toHaveBeenCalled();
    });
  });
});
