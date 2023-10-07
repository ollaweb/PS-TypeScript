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
const axios_1 = __importDefault(require("axios"));
var Gender;
(function (Gender) {
    Gender["Male"] = "male";
    Gender["Female"] = "female";
})(Gender || (Gender = {}));
var BloodGroup;
(function (BloodGroup) {
    BloodGroup["APositive"] = "A+";
    BloodGroup["ANegative"] = "A-";
    BloodGroup["BPositive"] = "B+";
    BloodGroup["BNegative"] = "B-";
    BloodGroup["OPositive"] = "O+";
    BloodGroup["ONegative"] = "O-";
    BloodGroup["ABPositive"] = "AB+";
    BloodGroup["ABNegative"] = "AB-";
})(BloodGroup || (BloodGroup = {}));
var EyeColor;
(function (EyeColor) {
    EyeColor["Green"] = "Green";
    EyeColor["Brown"] = "Brown";
    EyeColor["Gray"] = "Gray";
    EyeColor["Amber"] = "Amber";
    EyeColor["Blue"] = "Blue";
    EyeColor["Hazel"] = "Hazel";
})(EyeColor || (EyeColor = {}));
var HairColor;
(function (HairColor) {
    HairColor["Straight"] = "Straight";
    HairColor["Wavy"] = "Wavy";
    HairColor["Curly"] = "Curly";
    HairColor["Coily"] = "Coily";
})(HairColor || (HairColor = {}));
function isInstanceOfUser(data) {
    return data.birthDate !== undefined;
}
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { data } = yield axios_1.default.get('https://dummyjson.com/users');
            if (isInstanceOfUser(data.users[0])) {
                console.log(data.users);
            }
            else {
                throw new Error('There is no User');
            }
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
        }
    });
}
getUsers();
