"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.phoneController = exports.getOne = exports.getPhones = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const helpers_1 = require("../utils/helpers");
const absolutePath = path_1.default.join(__dirname, '../data/phones.json');
const getPhones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    fs_1.default.readFile(absolutePath, (error, data) => {
        if (error) {
            res.send(error);
        }
        let dataFromJson = JSON.parse(data.toString());
        const sortBy = req.query.sortBy || 'fromNewest';
        if (sortBy) {
            dataFromJson = (0, helpers_1.toSortData)(dataFromJson, sortBy);
        }
        const page = parseInt(req.query.page || '1');
        const limit = parseInt(req.query.limit || '12');
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
});
exports.getPhones = getPhones;
const getOne = (req, res) => {
    const { phoneId } = req.params;
    fs_1.default.readFile(absolutePath, (error, data) => {
        if (error) {
            console.log(error);
            return;
        }
        const dataFromJson = JSON.parse(data.toString());
        const foundPhone = dataFromJson.find((phone) => +phone.id === +phoneId);
        if (!foundPhone) {
            res.sendStatus(404);
        }
        res.send(foundPhone);
    });
};
exports.getOne = getOne;
exports.phoneController = {
    getPhones: exports.getPhones,
    getOne: exports.getOne,
};
