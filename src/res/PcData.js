import Images from '../assets/images/images';

export const Computers = [
  {
    brand: 'HP',
    cpu: 'Intel i5',
    ram: '8GB',
    gpu: 'Intel HD Graphics 620',
    storage: 'SSD',
    price: 2999,
    img: Images.hp(),
  },

  {
    brand: 'Dell',
    cpu: 'AMD Rayzen 7 1800X',
    ram: '16GB',
    gpu: 'Nvidia GeForce RTX 4080',
    storage: 'HDD',
    price: 5999,
    img: Images.dell(),
  },

  {
    brand: 'Lenovo',
    cpu: 'Intel i7',
    ram: '4GB',
    gpu: 'AMD Radeon RX 7000',
    storage: 'SSD',
    price: 2500,
    img: Images.lenovo(),
  },

  {
    brand: 'Acer',
    cpu: 'Intel i9',
    ram: '32GB',
    gpu: 'EVGA GeForce GTX 1080 Ti',
    storage: 'SSD',
    price: 6799,
    img: Images.acer(),
  },

  {
    brand: 'Asus',
    cpu: 'i3',
    ram: '2GB',
    gpu: 'Intel 740',
    storage: 'HDD',
    price: 300,
    img: Images.asus(),
  },
];
