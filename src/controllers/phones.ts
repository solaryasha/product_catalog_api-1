import { Request, Response} from 'express';
import fs from 'fs';
import path from 'path';
import {Phone} from '../server';
import { toSortData, phoneQuantity } from '../utils/helpers';

const absolutePath = path.join(__dirname, '../data/phones.json');

export const getPhones = async (req: Request, res: Response) => {
  fs.readFile(absolutePath, (error, data) => {
    if (error) {
      console.log(error);

      return;
    }

    let dataFromJson: Phone[] = JSON.parse(data.toString());

    const {sortBy, filterBy } = req.query;

    console.log(sortBy);

    if (sortBy) {
      dataFromJson = toSortData(dataFromJson, sortBy);
    }

    if (filterBy) {
      dataFromJson = phoneQuantity(dataFromJson, filterBy);
    }

    res.send(dataFromJson);
  });
};

export const getOne = (req: Request, res: Response) => {
  const {phoneId} = req.params;

  fs.readFile(absolutePath, (error, data) => {
    if (error) {
      console.log(error);

      return;
    }

    const dataFromJson: Phone[] = JSON.parse(data.toString());

    const foundPhone = dataFromJson.find((phone) => +phone.id === +phoneId);

    if (!foundPhone) {
      res.sendStatus(404);
    }

    res.send(foundPhone);
  });
};

export const phoneController = {
  getPhones,
  getOne,
};
