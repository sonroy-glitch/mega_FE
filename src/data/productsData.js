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
    name: "4×4 WD Arduino-Based Sand Rover Kit (Bluetooth Controlled | DIY Robotics Kit)",
    price: "₹2259.00",
    image: img1,
    category: "diy_kits",
    description:
      "The 4×4 WD Arduino-Based Sand Rover Kit is a hands-on DIY robotics kit designed for students, hobbyists, and tech enthusiasts. Built for rough and sandy terrains, this kit helps users understand motor control, wireless communication, and embedded systems.",
    specs: [
      "Drive System: 4×4 Wheel Drive",
      "Controller: Arduino Uno",
      "Motor Driver: Dual L298N motor drivers",
      "Control Mode: Bluetooth-based wireless control",
      "Motors: 4 × DC geared motors",
      "Power Supply: Rechargeable battery with holder",
      "Chassis Type: Rugged rover chassis for sand",
      "Wheels: Large grip wheels",
      "Assembly Type: DIY (Do-It-Yourself)",
      "Programming Platform: Arduino IDE",
      "Skill Level: Beginner to Intermediate",
    ],
  },

  {
    id: 2,
    name: "2×2 WD Arduino-Based Sand Rover Kit (Bluetooth Controlled | DIY Robotics Kit)",
    price: "₹1919.00",
    image: img2,
    category: "diy_kits",
    description:
      "The 2×2 WD Arduino-Based Sand Rover Kit is a compact and cost-effective DIY robotics kit designed for beginners. It features a stable 2-wheel drive system with dummy shaft support for smooth movement on sandy surfaces.",
    specs: [
      "Drive System: 2×2 Wheel Drive with dummy shaft support",
      "Controller: Arduino Uno",
      "Motor Driver: L298N motor driver",
      "Control Mode: Bluetooth-based wireless control",
      "Motors: 2 × DC geared motors",
      "Power Supply: Rechargeable battery with holder",
      "Chassis Type: Lightweight sand rover chassis",
      "Wheels: 4 × high-grip wheels",
      "Stability Support: 2 × dummy shafts",
      "Assembly Type: DIY (Do-It-Yourself)",
      "Programming Platform: Arduino IDE",
      "Skill Level: Beginner",
    ],
  },

  {
    id: 3,
    name: "4×4 WD Advanced High-Torque Sand Rover Kit (ESC Powered | Li-Po Based Platform)",
    price: "₹5258.00",
    image: img3,
    category: "diy_kits",
    description:
      "The 4×4 WD Advanced High-Torque Sand Rover Kit is a professional-grade robotics platform using ESCs and a Li-Po battery for superior current handling, smooth control, and high torque on rough terrain.",
    specs: [
      "Drive System: 4×4 Wheel Drive",
      "Motor Control: Dual Electronic Speed Controllers (ESC)",
      "Motors: 4 × high-torque DC motors",
      "Power Supply: High-capacity Li-Po battery",
      "Wiring: High-current silicone wires",
      "Connectors: JST connectors & XT60 power connector",
      "Chassis Type: Heavy-duty rover chassis",
      "Wheels: 4 × rugged high-grip wheels",
      "Terrain Capability: Sand, gravel, uneven surfaces",
      "Assembly Type: DIY (Do-It-Yourself)",
      "Skill Level: Intermediate to Advanced",
    ],
  },

  {
    id: 4,
    name: "2×2 WD Advanced High-Power Sand Rover Kit (ESC Powered | Li-Po Based Platform)",
    price: "₹3979.00",
    image: img4,
    category: "diy_kits",
    description:
      "The 2×2 WD Advanced High-Power Sand Rover Kit is a compact ESC-powered rover designed for users who want high efficiency and smooth motor control without the complexity of a full 4×4 drivetrain.",
    specs: [
      "Drive System: 2×2 Wheel Drive with dummy shaft support",
      "Motor Control: Electronic Speed Controller (ESC)",
      "Motors: 2 × high-torque DC motors",
      "Power Supply: High-capacity Li-Po battery",
      "Wiring: High-current silicone wires",
      "Connectors: JST connectors & XT60 power connector",
      "Chassis Type: Lightweight rigid rover chassis",
      "Wheels: 4 × high-grip wheels",
      "Terrain Capability: Sand, gravel, uneven surfaces",
      "Assembly Type: DIY (Do-It-Yourself)",
      "Skill Level: Intermediate",
    ],
  },

  {
    id: 5,
    name: "FlySky FS-i6 2.4G 6CH PPM RC Transmitter With FS-iA6B Receiver",
    price: "₹4499.00",
    image: img5,
    category: "electronics",
    description:
      "The FlySky FS-i6 is an entry-level 6-channel 2.4GHz RC transmitter with telemetry support. It comes with the FS-iA6B receiver, offering excellent range, dual antenna reliability, and compatibility with multiple RC platforms.",
    specs: [
      "Channels: 6",
      "Frequency: 2.4GHz (AFHDS 2A)",
      "Output Signal: PPM",
      "Model Memory: 20 models",
      "Display: Backlit LCD with telemetry",
      "Stick Mode: Mode 2 (4 modes supported)",
      "Receiver: FS-iA6B (dual antenna)",
      "Receiver Range: >500m",
      "Receiver Input Voltage: 4.0–8.4V",
      "Supported Models: Airplane, Glider, Helicopter",
      "Weight: ~400g",
    ],
  },
];

export default products;
