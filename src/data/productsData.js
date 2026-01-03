import img1 from "../assets/products/p1.png";
import img2 from "../assets/products/p2.webp";
import img3 from "../assets/products/p3.webp";
import img4 from "../assets/products/p4.webp";
import img5 from "../assets/products/p5.webp";
import img6 from "../assets/products/p6.webp";
import img7 from "../assets/products/p7.webp";
import img8 from "../assets/products/p8.webp";

const products = [
  {
    id: 1,
    name: "ELECTROCRAZE 20D-BD Dual Channel 20A Brushed Motor Controller",
    price: "₹3249.00",
    image: img1,
    category:'diy_kits',
    description:
      "Dual channel brushed motor controller designed for robotics and automation applications.",
    specs: [
      "Input Voltage: 11–17V (3S–4S)",
      "Continuous Current: 20A per channel",
      "Peak Current: 45A",
      "Brake: Yes",
      "Signal Loss Protection: Yes",
    ],
  },
  {
    id: 2,
    name: "ELECTROCRAZE 60S-BD Single Channel 60A Brushed Motor Controller",
    price: "₹3449.00",
    image: img2,
    category:'diy_kits',
    description:
      "The Electrocraze 60S - your ultimate brushed motor controller. With an input voltage range of 7-24V (2S-6S) and a continuous output current of 60 Amps (peak up to 100 Amps), it's the powerhouse your project needs.",
    specs: [
      "Input Voltage Range: 7-24V (2S- 6S)",
      "Output Current (Continuous): 60 Amp",
      "Output Current (Peak): upto 100 Amp",
      "BEC: N.A.",
      "Weight: 50 gram(excluding wires)",
      "Input: Standard servo signal 1100-1900us",
      "Dimensions: 62 x 40 x 16 mm (excluding wires)",
    ],
  },
  {
    id: 3,
    name: "ELECTROCRAZE 70S-BL AM32 70A BLDC Controller",
    price: "₹4599.00",
    image: img3,
    category:'diy_kits',
    description:
      "The Electrocraze 70S-BL ESC features a cutting-edge STM32 32-bit high-performance processor specifically designed for motors, integrated with a 3-in-1 driver for ultra-fast response and an exceptionally smooth flight experience.",
    specs: [
      "Current Rating: 70A",
      "Maximum current (5 seconds): 110A",
      "Input Voltage: 2-8S Lipo",
      "LiPo Processor: STM32G071",
      "Firmware: AM32",
      "Active current limiting: Enabled",
      "BEC: NA",
      "Drive Signal Support: Dshot150-1200/MultiShot/OneShot/PWM",
      "Size: 55 x 20 x 15 (All dimensions are in mm)",
      "Weight: 23g",
      "Wire Specifications: 100mm 16AWG (power) + 170mm 16AWG (motor), 200mm 26AWG wire with connector (signal)",
      "Comes with heatsink",
      "Pre-flashed with settings tuned for beetleweight weapons",
    ],
  },
  {
    id: 4,
    name: "ELECTROCRAZE 100S-BL AM32 100A BLDC Controller",
    price: "₹6599.00",
    image: img4,
    category:'diy_kits',
    description:
      "The Electrocraze 100S-BL motor controller is the ideal match for your BBOX VENUS 4245 800KV & BBOX SATURN 4068 Brushless Motor! It’s ready out-of-the-box to maximize the performance of your Electrocraze system or any similarly sized brushless motor. ",
    specs: [
      "Current Rating (with adequate cooling): 100A",
      "Input Voltage: 3S-8S (7.4V to 29.6V)",
      "BEC: 7.4V",
      "Weight: 53g (including wires)",
      "Dimensions (WHL): 80 X 25 X 20 (All dimensions are in mm)",
      "Wire Specifications: 100mm 8AWG (power) + 170mm 14AWG (motor), 200mm 26AWG wire with connector (signal)",
    ],
  },
  {
    id: 5,
    name: "Flipsky 75100 Pro V2.0 VESC Controller",
    price: "₹13499.00",
    image: img5,
    category:'diy_kits',
    description:
      "The Flipsky 75100 Pro V2.0, a cutting-edge speed controller designed to elevate your electric skateboarding, scooter, or ebike experience. Engineered with precision and innovation, furthermore, this controller boasts a plethora of features to enhance performance and versatility.",
    specs: [
      "Firmware: 6.02 (firmware update supported)",
      "Voltage: 14-84V (4-20S)",
      "Current: 100A Continuous",
      "BEC: 5V@1.5A",
      "ERPM: 150000",
      "Programmable: Yes",
      "Regenerative Capacity: Yes",
      "Control Interface Ports: USB, CAN, UART",
      "Supported Sensors: ABI, HALL, AS5047, AS5048A",
      "Input Set Support: PPM, ADC, NRF, UART",
      "Size: L103mm*W58mm*H27.7mm",
      "Wire Size: 10AWG (75100 Pro)",
      "In-built Bluetooth: It comes with inbuilt Bluetooth module",
      "Supports BLDC square wave mode control and FOC sine wave mode",
    ],
  },
  {
    id: 6,
    name: "HobbyKing Red Brick 200A ESC",
    price: "₹5799.00",
    image: img6,
    category:'diy_kits',
    description:
      "The HobbyKing Red Brick 200A ESC V2, a high-performance electronic speed controller designed to elevate your RC experience. Firstly, with a maximum current handling capacity of 200A, this ESC ensures smooth and efficient power delivery to your model.",
    specs: [
      "Max Amps: 200A",
      "BEC: 5V / 5A UBEC",
      "Cells: 2~6S",
      "Lipoly: 7.4~22.2V",
      "Lipoly Size: 65x40x26mm",
      "Weight: 128g",
    ],
  },
  {
    id: 7,
    name: "MS02 DC Power Switch",
    price: "₹15299.00",
    image: img7,
    category:'cad',
    description:
      "The MS02 DC Power Switch, a compact yet robust solution engineered for precise power control in a variety of applications.",
    specs: [
      "Dimensions: Compact at 1.13″ X 1.63″ X 2.25″",
      "Construction: Durable Delrin construction",
      "Spring Loaded: Spring-loaded in the closed position",
      "Contacts: Silver alloy contacts for reliability",
      "Mounting: Easy mounting process",
      "Actuation: Requires a 5/32″ Hex wrench (not included), with 4 turns counterclockwise to turn ON",
      "Weight (Gm): 140",
      "Current Ratings: 175A continuous, 500A for 3 minutes, 1000A for 25 seconds",
    ],
  },
  {
    id: 8,
    name: "ELECTROCRAZE 35S-BL AM32 35A BLDC Controller",
    price: "₹2499.00",
    image: img8,
    category:'diy_kits',
    description:
      "The ODESC V4.2 (56V) Single-Drive High-Current High-Precision Brushless Servo Motor Controller is a cutting-edge solution designed for controlling Brushless DC (BLDC) motors with precision and efficiency.",
    specs: [
      "Hardware Version: ODESC V4.2",
      "Drive motor: Brushless DC motor (BLDC)",
      "Braking method: Power resistors, battery recycling",
      "Microprocessor: STM32F405RGT6",
      "Maximum current: 120A",
      "Continuous current: 70A",
      "Working voltage: 8-56V",
    ],
  },
];

export default products;
