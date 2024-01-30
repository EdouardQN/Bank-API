//COMPONENTS
import chat from '../designs/img/icon-chat.png'
import money from '../designs/img/icon-money.png'
import security from '../designs/img/icon-money.png'

export const featureData = [
  {
    name: "Chat",
    src : chat,
    alt: "Chat Icon",     
    title: "You are our #1 priority",
    paragraph: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  },
  {
    name: "Money",
    src: money,
    alt: "Money Icon",
    title:"More savings means higher rates",
    paragraph: "The more you save with us, the higher your interest rate will be!",
  },
  {
    name: "Security",
    src: security,
    alt: "Security Icon",
    title:"Security you can trust",
    paragraph: "We use top of the line encryption to make sure your data and money is always safe.!",
  },
];

//DATABASE 
export const dataForm = [
  {
    firstName: `Tony`,
    lastName: `Stark`,
    email: `tony@stark.com`,
    password: `password123`
  
  },
  {
    firstName: `Steve`,
    lastName: `Rogers`,
    email: `steve@rogers.com`,
    password: `password456`
  
  },
]

export const mockDataAccounts = [
  {
    name: "Argent Bank Checking (x8349)",
    amount : "2,082.79",
    description: "Available Balance",
  },
  {
    name:"Argent Bank Savings (x6712)",
    amount:"10,928.42",
    description:"Available Balance",
  },
  {
    name:"Argent Bank Credit Card (x8349)", 
    amount:"184.30",
    description:"Current Balance",
  },
]