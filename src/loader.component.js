"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const loader_pubsub_1 = require("./loader.pubsub");
const loader_service_1 = require("./loader.service");
let LoaderComponent = class LoaderComponent {
    constructor(pubsub, loaderService) {
        this.pubsub = pubsub;
        this.loaderService = loaderService;
        this.showText = "Loading ...";
        this.loadDone = true;
        this.preloaderStatus = "none";
        pubsub.loader_toggle.subscribe((value) => {
            if (value) {
                this.start();
            }
            else {
                this.end();
            }
        });
    }
    ngOnInit() {
        if (!!this.mintime)
            this.loaderService.setMinTime(this.mintime);
        this.fontsize = !!this.fontsize ? this.fontsize + "px" : null;
        this.background = !!this.background ? this.background : null;
        this.fontcolor = !!this.fontcolor ? this.fontcolor : null;
        this.showText = !!this.text ? this.text : this.showText;
        this.fontweight = !!this.fontweight ? this.fontweight : null;
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
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], LoaderComponent.prototype, "mintime", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], LoaderComponent.prototype, "text", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], LoaderComponent.prototype, "fontsize", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], LoaderComponent.prototype, "background", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], LoaderComponent.prototype, "fontcolor", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], LoaderComponent.prototype, "fontweight", void 0);
LoaderComponent = __decorate([
    core_1.Component({
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
    }),
    __metadata("design:paramtypes", [loader_pubsub_1.PreLoaderPubsubService, loader_service_1.PreLoaderService])
], LoaderComponent);
exports.LoaderComponent = LoaderComponent;
//# sourceMappingURL=loader.component.js.map