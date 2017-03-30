import { Component, OnInit,Input } from '@angular/core';
import { PreLoaderPubsubService } from "./loader.pubsub";
import { PreLoaderService } from "./loader.service";


@Component({
    selector: 'pre-loader',
    template: `
        <div class="preloader" [class.preloader-hidden-add-active]="loadDone" [style.display]="preloaderStatus" [style.background]="background">
            <div class="preloader-progress">
                <div class="preloader-progress-bar">
                    <h1 [style.font-size]="fontsize" [style.color]="fontcolor" [style.font-weight]="fontweight">{{showText}}</h1>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['./loader.css']
})
export class LoaderComponent {
    @Input() mintime:number;
    @Input() text:string;
    @Input() fontsize:string;
    @Input() background:string;
    @Input() fontcolor:string;
    @Input() fontweight:number;
    showText:string = "Loading ...";
    loadDone: boolean = true;
    preloaderStatus: string = "none";

    constructor(private pubsub: PreLoaderPubsubService,private loaderService:PreLoaderService) {
        pubsub.loader_toggle.subscribe((value:boolean) => {
            if (value) {
                this.start();
            } else {
                this.end();
            }
        });
    }

    ngOnInit(){
        if(!!this.mintime)this.loaderService.setMinTime(this.mintime);
        this.fontsize = !!this.fontsize?this.fontsize+"px":null;
        this.background = !!this.background?this.background:null;
        this.fontcolor = !!this.fontcolor?this.fontcolor:null;
        this.showText = !!this.text?this.text:this.showText;
        this.fontweight = !!this.fontweight?this.fontweight:null;
        document.documentElement.style.overflowY = 'hidden';
    }

    start() {
        this.preloaderStatus = "block";
        this.loadDone = false;
    }

    end() {
        this.loadDone = true;
        setTimeout(() => {
            this.preloaderStatus = "none";
            document.documentElement.style.overflowY = 'auto';
        }, 200);
    }

}