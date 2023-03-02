import {Phone} from '../server';

export const toSortData = (dataFromJson: Phone[], sortBy: string | unknown) => {
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
