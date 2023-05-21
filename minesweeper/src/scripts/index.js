import '../styles/styles.scss';
import { createScreenLight } from './screenLight';
import { createInfoPanel } from './infoPanel';
import { createField } from './field';
import { makeGameAction } from './gameAction';
//

createScreenLight();
createInfoPanel();
createField(10, 10);
makeGameAction();
// nextGameAction();
