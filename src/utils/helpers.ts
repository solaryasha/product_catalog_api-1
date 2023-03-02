import { Phone } from '../server';

export const toSortData = (dataFromJson: Phone[], sortBy: string | unknown ) => {
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

export const phoneQuantity = (dataFromJson: Phone[], filterBy: string | unknown) => {
  if (filterBy === '16') {
    dataFromJson.length = 16;
  }

  if (filterBy === '20') {
    dataFromJson.length = 20;
  }

  if (filterBy === '24') {
    dataFromJson.length = 24;
  }

  if (filterBy === '28') {
    dataFromJson.length = 28;
  }

  return dataFromJson;
};