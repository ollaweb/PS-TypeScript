import axios from 'axios';

enum Gender {
    Male = 'male',
    Female = 'female'
}

enum BloodGroup {
    APositive = 'A+',
    ANegative = "A-",
    BPositive = 'B+',
    BNegative = 'B-',
    OPositive = 'O+',
    ONegative = 'O-',
    ABPositive = 'AB+',
    ABNegative = 'AB-'
}

enum EyeColor {
    Green = 'Green',
    Brown = 'Brown',
    Gray = 'Gray',
    Amber = 'Amber',
    Blue = 'Blue',
    Hazel = 'Hazel'
}

enum HairColor {
    Straight = 'Straight',
    Wavy = 'Wavy',
    Curly = 'Curly',
    Coily = 'Coily'
}

interface User {
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: Gender,
    email: string,
    phone: string,
    username: string,
    password: string,
    birthDate: string,
    image: string,
    bloodGroup: BloodGroup,
    height: number,
    weight: number,
    eyeColor: EyeColor,
    hair: {
        color: string,
        type: HairColor,
    },
    domain: string,
    ip: string,
    address: {
        address: string,
        city: string,
        coordinates: {
            lat: number,
            lng: number
        },
        postalCode: string,
        state: string
    },
    macAddress: string,
    university: string,
    bank: {
        cardExpire: string,
        cardNumber: string,
        cardType: string,
        currency: string,
        iban: string
    },
    company: {
        address: {
            address: string,
            city: string,
            coordinates: {
                lat: number,
                lng: number
            },
            postalCode: string,
            state: string
        },
        department: string,
        name: string,
        title: string
    },
    ein: string,
    ssn: string,
    userAgent: string
}

async function getUsers() {
    try {
        await axios.get('https://dummyjson.com/users')
        .then((res)=> console.log(res.data));
    } catch(error) {
        if(error instanceof Error) {
            throw new Error(error.message)
        }
    }
}

getUsers();