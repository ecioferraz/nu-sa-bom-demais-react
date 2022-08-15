import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Loading } from '../../components';

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

  describe('<Loading />', () => {
    let loading: HTMLElement | null | undefined;

    beforeEach(() => {
      act(() => {
        render(
          Loading(),
          container,
        );
      });

      loading = container?.querySelector('span');
    });

    afterEach(() => loading = null);

    it('should render a span element', () => {
      expect(loading).toBeTruthy();
    });

    it('should render the text input props correctly', () => {
      expect(loading?.textContent).toBe('Carregando...');
    });
  });
});
