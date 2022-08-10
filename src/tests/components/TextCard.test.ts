import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { TextCard } from '../../components';

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

  describe('<TextCard />', () => {
    let textCard: HTMLParagraphElement | null | undefined;

    beforeEach(async () => {
      act(() => render(
        TextCard({
          text: 'test',
        }),
        container
      ));
      textCard = container?.querySelector('p');
    });

    afterEach(() => textCard = null);

    it('should render a div', () => {
      expect(textCard).toBeTruthy();
    });

    it('should render a paragraph element inside of the div', () => {
      expect(textCard?.tagName).toBe('P');
      expect(textCard?.textContent).toBe('test');
    });
  });
});
