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
let PreLoaderService = class PreLoaderService {
    constructor(pubsub) {
        this.pubsub = pubsub;
        this.WAITTIME = 5000;
    }
    start() {
        this.doEmit(true);
    }
    end() {
        this.recordTime(false);
        setTimeout(() => {
            this.doEmit(false);
        }, this.minus <= this.WAITTIME ? this.WAITTIME - this.minus : 0);
    }
    setMinTime(time) {
        this.WAITTIME = time;
    }
    doEmit(value) {
        clearInterval(this.waiteInter);
        this.waiteInter = setInterval(() => {
            if (this.pubsub.loader_toggle.observers.length > 0) {
                if (value)
                    this.recordTime(value);
                this.pubsub.loader_toggle.emit(value);
                clearInterval(this.waiteInter);
            }
        }, 5);
    }
    recordTime(key) {
        if (key) {
            this.startTime = new Date();
        }
        else {
            if (!this.startTime)
                this.startTime = new Date();
            let endTime = new Date();
            this.minus = endTime.getTime() - this.startTime.getTime();
        }
    }
};
PreLoaderService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [loader_pubsub_1.PreLoaderPubsubService])
], PreLoaderService);
exports.PreLoaderService = PreLoaderService;
//# sourceMappingURL=loader.service.js.map