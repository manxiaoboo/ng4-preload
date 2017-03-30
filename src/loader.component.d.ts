import { PreLoaderPubsubService } from "./loader.pubsub";
import { PreLoaderService } from "./loader.service";
export declare class LoaderComponent {
    private pubsub;
    private loaderService;
    mintime: number;
    text: string;
    fontsize: string;
    background: string;
    fontcolor: string;
    fontweight: number;
    showText: string;
    loadDone: boolean;
    preloaderStatus: string;
    constructor(pubsub: PreLoaderPubsubService, loaderService: PreLoaderService);
    ngOnInit(): void;
    start(): void;
    end(): void;
}
