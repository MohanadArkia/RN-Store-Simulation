const Images = {
  hp: () => require('./computers/hp.png'),
  dell: () => require('./computers/dell.jpg'),
  lenovo: () => require('./computers/lenovo.jpg'),
  acer: () => require('./computers/acer.jpeg'),
  asus: () => require('./computers/asus.png'),

  xbox: () => require('./consoles/xbox/xbox.png'),
  xbox360: () => require('./consoles/xbox/xbox360.png'),
  xboxOne: () => require('./consoles/xbox/xboxOne.png'),
  xboxOneS: () => require('./consoles/xbox/xboxOneS.jpg'),
  xboxOneX: () => require('./consoles/xbox/xboxOneX.jpg'),
  xboxSeriesS: () => require('./consoles/xbox/xboxSeriesS.jpg'),
  xboxSeriesX: () => require('./consoles/xbox/xboxSeriesX.jpg'),

  playstationOne: () => require('./consoles/playstation/ps1.jpg'),
  playstationTwo: () => require('./consoles/playstation/ps2.jpg'),
  playstationThree: () => require('./consoles/playstation/ps3.png'),
  playstationFour: () => require('./consoles/playstation/ps4.jpg'),
  playstationFive: () => require('./consoles/playstation/ps5.png'),

  iPhone4: () => require('./mobiles/iphone/iphone4.jpg'),
  iPhone5: () => require('./mobiles/iphone/iphone5.png'),
  iPhone6: () => require('./mobiles/iphone/iphone6.jpeg'),
  iPhone7: () => require('./mobiles/iphone/iphone7.png'),

  shoppingCart: () => require('./icons/shopping_cart.jpg'),
  trashIcon: () => require('./icons/trash_icon.png'),
};

export default Images;
