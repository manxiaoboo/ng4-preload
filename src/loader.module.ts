import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { LoaderComponent } from "./loader.component";
import { PreLoaderPubsubService } from './loader.pubsub';
import { PreLoaderService } from './loader.service';



@NgModule({
    declarations: [LoaderComponent],
    imports: [],
    providers:[
        PreLoaderPubsubService,
        PreLoaderService
    ],
    exports: [LoaderComponent]
})

export class PreLoaderModule { }
