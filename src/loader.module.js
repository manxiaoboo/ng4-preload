"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const loader_component_1 = require("./loader.component");
const loader_pubsub_1 = require("./loader.pubsub");
const loader_service_1 = require("./loader.service");
let PreLoaderModule = class PreLoaderModule {
};
PreLoaderModule = __decorate([
    core_1.NgModule({
        declarations: [loader_component_1.LoaderComponent],
        imports: [],
        providers: [
            loader_pubsub_1.PreLoaderPubsubService,
            loader_service_1.PreLoaderService
        ],
        exports: [loader_component_1.LoaderComponent]
    })
], PreLoaderModule);
exports.PreLoaderModule = PreLoaderModule;
//# sourceMappingURL=loader.module.js.map