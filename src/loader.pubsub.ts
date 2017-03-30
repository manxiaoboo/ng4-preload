import {Component,Injectable,EventEmitter} from '@angular/core';

@Injectable()
export class PreLoaderPubsubService {
    //控制loader的打开与关闭
    loader_toggle:EventEmitter<Boolean> = new EventEmitter();
}
