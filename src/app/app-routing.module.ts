import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'test'
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
