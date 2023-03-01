import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { Phone } from '../server';

import { phoneService } from '../sevice/phones';

export const getPhones = async (req: Request, res: Response) => {
  // const phones = await phoneService.getPhones();

  const absolutePath = path.join(__dirname, '../data/phones.json');

  fs.readFile(absolutePath, (error, data) => {
    if (error) {
      console.log(error);

      return;
    }
    const dataFromJson: Phone[] = JSON.parse(data.toString());

    res.send(dataFromJson);
  });

  // res.send(phones);
};

export const phoneController = {
  getPhones
};