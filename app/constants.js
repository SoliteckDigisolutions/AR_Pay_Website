import { FaBolt, FaChartLine, FaCheckCircle, FaExchangeAlt, FaFire, FaMapMarkerAlt, FaMoneyBillWave, FaServer, FaShieldAlt, FaUsers } from "react-icons/fa";

export const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  // { name: "Gallery", id: "gallery" },
  { name: "Privacy Policy", id: "privacypolicy" },
  { name: "Term & Condition", id: "terms-condition" },
  { name: "Contact", id: "contact" },
];


export const testimonials = [
  {
    name: "Sara Saroj",
    role: "Homemaker",
    text: "With AR Pay, I started earning from my phone by helping my neighbours with mobile and DTH recharges. It's simple, reliable, and now I feel independent and proud.",
  },
  {
    name: "Suresh Sharma",
    role: "Shop Owner",
    text: "AR Pay’s support team is outstanding. They respond quickly and explain everything clearly. Managing digital payments has never been this smooth.",
  },
  {
    name: "Rajesh Singh",
    role: "Retail Store Owner",
    text: "My business has grown significantly with AR Pay. I can manage multiple operators and bill payments from one dashboard, saving time and keeping customers happy.",
  },
  {
    name: "Ramesh Gupta",
    role: "Village Entrepreneur",
    text: "Through AR Pay utility bill payments, people in my village can pay their bills easily while I earn a fair commission. It's a true win-win.",
  },
  {
    name: "Jagat Pal",
    role: "Mobile Shop Owner",
    text: "Using AR Pay for daily recharges and transactions has boosted my business. Everything is transparent, fast, and secure.",
  },
];



export const statsData = [
  {
    id: 1,
    value: "209878+",
    label: "Happy Clients",
    icon: <FaUsers />,
  },
  {
    id: 2,
    value: "5698+",
    label: "Locations",
    icon: <FaMapMarkerAlt />,
  },
  {
    id: 3,
    value: "100098+",
    label: "Daily Transactions",
    icon: <FaExchangeAlt />,
  },
  {
    id: 4,
    value: "12%+",
    label: "Business Growth",
    icon: <FaChartLine />,
  },
];



export const messages = [
  "Empowering digital payments across local businesses",
  "Building trust with every transaction",
  "Smart, secure and seamless service - the AR Pay promise",
  "Digital transformation made simple for everyone",
  "Innovation meets reliability at AR Pay"
]


export const billServices = [
  {
    id: 1,
    title: "Utility Bill Payments",
    icon: FaMoneyBillWave,
  },
  {
    id: 2,
    title: "Gas Bill",
    icon: FaFire,
  },
  {
    id: 3,
    title: "Electricity Bill",
    icon: FaBolt,
  },
]


export const servicesData = [
  {
    id: 1,
    title: "Quality Guaranteed",
    description:
      "AR Pay in-house technical team ensures uninterrupted service delivery - so you never have to worry again.",
    icon: <FaCheckCircle size={28} />,
  },
  {
    id: 2,
    title: "Fastest Servers",
    description:
      "Powered by cutting-edge cloud technology, AR Pay runs on some of the fastest servers worldwide for unmatched performance.",
    icon: <FaServer size={28} />,
  },
  {
    id: 3,
    title: "Safety Guaranteed",
    description:
      "Your payments are 100% safe with us. AR Pay follows strict security and accounting compliance to protect every transaction.",
    icon: <FaShieldAlt size={28} />,
  },
];