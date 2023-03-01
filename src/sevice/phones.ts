import { Phone } from '../server';
import fs from 'fs';
import path from 'path';

// const getPhones = async () => {
//   const absolutePath = path.join(__dirname, '../data/phones.json');

//   console.log(absolutePath);

//   let phones = [];
  
//   await fs.readFileSync(absolutePath, (error, data) => {
//     if (error) {
//       console.log(error);
  
//       return;
//     }
//     const dataFromJson: Phone[] = JSON.parse(data.toString());

//     phones = dataFromJson;

//     return data;
//   });

//   return phones;
// };

export const phoneService = {
  getPhones
};