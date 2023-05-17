import '../styles/styles.scss';
import { createScreenLight } from './screenLight';
import { createInfoPanel } from './infoPanel';
import { createField } from './field';
// import { isNeigborWithMine } from './isNeigborWithMine';
createScreenLight();
createInfoPanel();
createField(10, 10);
