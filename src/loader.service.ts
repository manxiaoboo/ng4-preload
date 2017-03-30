import { Injectable } from '@angular/core';
import { PreLoaderPubsubService } from "./loader.pubsub";

@Injectable()
export class PreLoaderService {
    private WAITTIME: number = 5000;
    private waiteInter:number;
    private startTime:Date;
    private minus:number;

    constructor(private pubsub: PreLoaderPubsubService) { }

    start() {
        this.doEmit(true);
    }

    end() {
        this.recordTime(false);
        setTimeout(() => {
            this.doEmit(false);
        }, this.minus <= this.WAITTIME ? this.WAITTIME - this.minus : 0);
    }

    setMinTime(time:number) {
        this.WAITTIME = time;
    }

    private doEmit(value:boolean) {
        clearInterval(this.waiteInter);
        this.waiteInter = setInterval(() => {
            if (this.pubsub.loader_toggle.observers.length > 0) {
                if (value) this.recordTime(value);
                this.pubsub.loader_toggle.emit(value);
                clearInterval(this.waiteInter);
            }
        }, 5);
    }

    private recordTime(key:boolean) {
        if (key) {
            this.startTime = new Date();
        } else {
            if (!this.startTime) this.startTime = new Date();
            let endTime = new Date();
            this.minus = endTime.getTime() - this.startTime.getTime();
        }
    }

}