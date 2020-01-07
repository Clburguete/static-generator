
import { instanceClass } from './utils';
import { Menu } from './menu';
import { MediaPlayer } from './media';

window.onload = () => {
  instanceClass('js-menu', Menu);
  instanceClass('c-featured__media', MediaPlayer);
  instanceClass('js-slider');
}

 