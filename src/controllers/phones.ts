import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import {Phone} from '../server';
import { toSortData, phoneQuantity } from '../utils/helpers';

const absolutePath = path.join(__dirname, '../data/phones.json');

export const getPhones = async (req: Request, res: Response) => {
  fs.readFile(absolutePath, (error, data) => {
    if (error) {
      res.send(error);
    }

    let dataFromJson: Phone[] = JSON.parse(data.toString());

    const sortBy = req.query.sortBy as string || 'fromNewest';

    if (sortBy) {
      dataFromJson = toSortData(dataFromJson, sortBy);
    }

    const page = parseInt(req.query.page as string || '1');

    const limit = parseInt(req.query.limit as string || '12');

    const startIndex = (page - 1) * limit;

    const endIndex = page * limit;

    const totalItems = dataFromJson.length;

    const totalPages = Math.ceil(totalItems / limit);

    const prevPage = {
      page: page - 1,
      limit: limit,
    };

    const nextPage = {
      page: page + 1,
      limit: limit,
    };

    const result = {
      pages: totalPages,
      prev: prevPage,
      next: nextPage,
      result: dataFromJson.slice(startIndex, endIndex),
    };

    res.send(result);
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
