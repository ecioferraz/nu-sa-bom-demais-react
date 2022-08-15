import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { ImageCard } from '../../components';

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

  describe('<ImageCard />', () => {
    let imageCard: HTMLDivElement | null | undefined;
  
    beforeEach(() => {
      act(() => {
        render(
          ImageCard({
            imageURL: 'http://placeimg.com/640/480/sports',
            name: 'test',
            className: 'test'
          })
          ,
          container,
        );
      });
  
      imageCard = container?.querySelector('.image-card');
    });
  
    afterEach(() => {
      imageCard = null;
    });
  
    it('should render a image card', () => {
      expect(imageCard).toBeTruthy();
    });
  
    it('should render a div with the price and image', () => {
      const imageCardContent = imageCard?.children[0];
      expect(imageCardContent).toBeTruthy();
      expect(imageCardContent?.getAttribute('src'))
        .toBe('http://placeimg.com/640/480/sports');
    });
  });
});