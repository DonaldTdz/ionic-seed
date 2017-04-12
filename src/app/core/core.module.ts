import { NgModule } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClient } from './services/httpclient';
import { Logger } from './services/logger';
import { LoadingService } from './services/loading.service';
import { MessageBox } from './services/messagebox';
import { GlobalState } from './services/global.state';
import { PlatformService } from './services/platform.service';
import './rxjs-operators';


@NgModule({
    imports: [
        IonicStorageModule.forRoot({ name: '_xg', driverOrder: ['sqlite', 'localstorage', 'websql', 'indexeddb'] })
    ],
    exports: [],
    declarations: [],
    providers: [
        Logger,
        LoadingService,
        HttpClient,
        MessageBox,
        GlobalState,
        PlatformService
    ]
})
export class CoreModule { }
