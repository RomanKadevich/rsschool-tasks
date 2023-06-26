import { Navigation } from '../common/templates/navigation';
import { NavigationHeader } from '../common/components/nav_header';


export class Navigation1 extends Navigation{

  private navigatonHeader: NavigationHeader;

  constructor(id:string) {
    super(id);
    this.navigatonHeader = new NavigationHeader()
  }


  render() {
    this.container.append(this.navigatonHeader.renderNavButtons());
    this.container.className = 'navigation col s4 sidenav-fixed';
    return this.container;
  }
}