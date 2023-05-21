import '../styles/styles.scss';
import { createScreenLight } from './screenLight';
import { createInfoPanel } from './infoPanel';
import { createField } from './field';
import { makeGameAction } from './gameAction';
import { addFlags } from './addFlags';

//

createScreenLight();
createInfoPanel();
createField(10, 10);
makeGameAction();
addFlags();
