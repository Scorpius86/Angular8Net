import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './services/data.service';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once-guard';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ModalComponent } from './modal/modal.component';
import { RouterModule } from '@angular/router';
import { ModalModule } from './modal/modal.module';


@NgModule({
  imports: [CommonModule, RouterModule, HttpClientModule,  ModalModule],
  exports: [RouterModule, HttpClientModule, ModalModule],
  declarations: [],
  providers: [
    DataService,
    { provide: 'Window', useFactory: () => window },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard{
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
