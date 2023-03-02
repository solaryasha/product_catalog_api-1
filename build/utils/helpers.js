"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toSortData = void 0;
const toSortData = (dataFromJson, sortBy) => {
    if (sortBy === 'fromNewest') {
        dataFromJson = dataFromJson.sort((a, b) => b.year - a.year);
    }
    if (sortBy === 'fromOldest') {
        dataFromJson = dataFromJson.sort((a, b) => a.year - b.year);
    }
    if (sortBy === 'fromHighPrice') {
        dataFromJson = dataFromJson.sort((a, b) => b.fullPrice - a.fullPrice);
    }
    if (sortBy === 'fromLowPrice') {
        dataFromJson = dataFromJson.sort((a, b) => a.fullPrice - b.fullPrice);
    }
    return dataFromJson;
};
exports.toSortData = toSortData;
