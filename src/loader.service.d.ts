import { PreLoaderPubsubService } from "./loader.pubsub";
export declare class PreLoaderService {
    private pubsub;
    private WAITTIME;
    private waiteInter;
    private startTime;
    private minus;
    constructor(pubsub: PreLoaderPubsubService);
    start(): void;
    end(): void;
    setMinTime(time: number): void;
    private doEmit(value);
    private recordTime(key);
}
