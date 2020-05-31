import {Routes} from '@angular/router';
import {UserProfileComponent} from '../../pages/user-profile/user-profile.component';
import {TablesComponent} from '../../pages/tables/tables.component';
import {IconsComponent} from '../../pages/icons/icons.component';
import {MapsComponent} from '../../pages/maps/maps.component';
import {UpdateProfileComponent} from '../../pages/update-profile/update-profile.component';

export const TemplateLayoutRoutes: Routes = [
  { path: 'user-profile',   component: UserProfileComponent },
  { path: 'update-profile',   component: UpdateProfileComponent },
  { path: 'tables',         component: TablesComponent },
  { path: 'icons',          component: IconsComponent },
  { path: 'maps',           component: MapsComponent }
];
