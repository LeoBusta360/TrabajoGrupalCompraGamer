const productos = [
    {
        "Nombre":"Notebook Gamer Acer Nitro V 15.6 FHD i9-12900H RTX4060 16GB DDR5 512GB SSD NVMe FREEDOS",
        "Imagen": "https://i.postimg.cc/nLPPFFB1/notebook1.jpg",
        "Precio":"$1.950.000",
        "Categoria":"Notebook"
    },
    {
        "Nombre":"Notebook Gamer MSI Cyborg A13VE-218US FHD 15.6 i7-13620H RTX4050 16GB 512GB SSD NVMe W11",
        "Imagen":"https://i.postimg.cc/qR6ZgPGH/notebook2.jpg",
        "Precio":"$ 1.729.000",
        "Categoria":"Notebook"
    },
    {
        "Nombre":"Notebook Lenovo IdeaPad 3 15ALC6 FHD 15.6 Ryzen 3 5300U 8GB 256GB SSD NVMe Freedos Blue",
        "Imagen":"https://i.postimg.cc/BZDV3G6x/notebook3.jpg",
        "Precio":"$ 589.000",
        "Categoria":"Notebook"
    },
    {
        "Nombre":"KIT AMD RYZEN 3 3200G + Radeon Vega 8 + Mother Asrock B450M-HDV",
        "Imagen":"https://i.postimg.cc/hGp2CS2B/kitact1.jpg",
        "Precio":"$ 160.830",
        "Categoria":"KitActualizacion"
    },
    {
        "Nombre":"KIT AMD RYZEN 5 3600 + Mother Asrock B450M-HDV",
        "Imagen":"https://i.postimg.cc/KzjJwdWg/kitact2.jpg",
        "Precio":"$ 205.830",
        "Categoria":"KitActualizacion"
    },
    {
        "Nombre":"Kit Mother ASUS H510M-K + Procesador Intel Core i5 10400F 4.3GHz Turbo (Sin Video Integrado)",
        "Imagen":"https://i.postimg.cc/tJVDCFpq/kitact3.jpg",
        "Precio":"$ 226.850",
        "Categoria":"KitActualizacion"
    },
    {
        "Nombre":"Procesador AMD RYZEN 5 3600 4.2GHz Turbo AM4 Wraith Stealth Cooler",
        "Imagen":"https://i.postimg.cc/KYw0X9hq/proamd1.jpg",
        "Precio":"$ 130.000",
        "Categoria":"ProcesadoresAMD"
    },
    {
        "Nombre":"Procesador AMD RYZEN 3 3200G 4.0GHz Turbo + Radeon Vega 8 AM4 Wraith Stealth Cooler",
        "Imagen":"https://i.postimg.cc/ydRv7FVV/proamd2.jpg",
        "Precio":"$ 85.000",
        "Categoria":"ProcesadoresAMD"
    },
    {
        "Nombre":"Procesador AMD Athlon 3000G 3.5GHz + Radeon Vega 3 AM4",
        "Imagen":"https://i.postimg.cc/Xq0xqpJ9/proamd3.jpg",
        "Precio":"$ 59.500",
        "Categoria":"ProcesadoresAMD"
    },
    {
        "Nombre":"Procesador Intel Pentium G4560 (Chipset H110/B150/B250/H170/Z170) LGA1151 KABY LAKE OEM",
        "Imagen":"https://i.postimg.cc/L5BD12Yw/prointel1.jpg",
        "Precio":"$ 25.000",
        "Categoria":"ProcesadoresIntel"
    },
    {
        "Nombre":"Procesador Intel Celeron G4900 3.10GHz Socket 1151 OEM Coffe Lake",
        "Imagen":"https://i.postimg.cc/2j42JFcG/prointel2.jpg",
        "Precio":"$ 43.150",
        "Categoria":"ProcesadoresIntel"
    },
    {
        "Nombre":"Procesador Intel Pentium Gold G5400 3.7GHz Socket 1151 OEM Sin Cooler Coffe Lake",
        "Imagen":"https://i.postimg.cc/sDswRQbr/prointel3.jpg",
        "Precio":"$ 70.000",
        "Categoria":"ProcesadoresIntel"
    },
    {
        "Nombre":"Mother Asrock B450M-HDV 4.0 AM4 HDMI M.2",
        "Imagen":"https://i.postimg.cc/43LrYbkV/mothamd1.jpg",
        "Precio":"$ 75.830",
        "Categoria":"MotherAMD"
    },
    {
        "Nombre":"Mother Asrock A520M-HDV AM4",
        "Imagen":"https://i.postimg.cc/C1R9kBSt/mothamd2.jpg",
        "Precio":"$ 76.090",
        "Categoria":"MotherAMD"
    },
    {
        "Nombre":"Mother ASUS PRIME A520M-K DDR4 AM4",
        "Imagen":"https://i.postimg.cc/SsH3rSKK/mothamd3.jpg",
        "Precio":"$ 83.060",
        "Categoria":"MotherAMD"
    },
    {
        "Nombre":"Mother Asrock Z390 Phantom Gaming 4S Wi-Fi BULK Pack S1151",
        "Imagen":"https://i.postimg.cc/cCYjkpKB/mothint1.jpg",
        "Precio":"$ 74.900",
        "Categoria":"MotherIntel"
    },
    {
        "Nombre":"Mother Asrock H510M-HDV/M.2 SE S1200",
        "Imagen":"https://i.postimg.cc/L4Zrs1yg/mothint2.jpg",
        "Precio":"$ 75.700",
        "Categoria":"MotherIntel"
    },
    {
        "Nombre":"Mother Asrock H610M-HVS S1700",
        "Imagen":"https://i.postimg.cc/Yq6Z6wBp/mothint3.jpg",
        "Precio":"$ 75.800",
        "Categoria":"MotherIntel"
    },
    {
        "Nombre":"Placa de Video ASUS GeForce GT 730 2GB GDDR5",
        "Imagen":"https://i.postimg.cc/8ktrj7jD/videog1.jpg",
        "Precio":"$ 79.320",
        "Categoria":"VideoGeForce"
    },
    {
        "Nombre":"Placa de Video ASUS GeForce GT 1030 2GB DDR5 CSM",
        "Imagen":"https://i.postimg.cc/wTMRJ9mN/videog2.jpg",
        "Precio":"$ 99.550",
        "Categoria":"VideoGeForce"
    },
    {
        "Nombre":"Placa de Video ASUS GeForce GT 1030 2GB GDDR5 Phoenix OC",
        "Imagen":"https://i.postimg.cc/J4FD5SN2/videog3.jpg",
        "Precio":"$ 119.900",
        "Categoria":"VideoGeForce"
    },  
    {
        "Nombre":"Placa de Video XFX Radeon RX 6650 XT 8GB GDDR6 Speedster SWFT 210",
        "Imagen":"https://i.postimg.cc/1tKV0tBG/videoamd1.jpg",
        "Precio":"$ 334.950",
        "Categoria":"VideoAMD"
    },
    {
        "Nombre":"Placa de Video XFX Radeon RX 580 8GB GDDR5 GTS 2048SP",
        "Imagen":"https://i.postimg.cc/VvLrK8Z3/videoamd2.jpg",
        "Precio":"$ 164.980",
        "Categoria":"VideoAMD"
    },
    {
        "Nombre":"Placa de Video Asrock Radeon RX 550 2GB GDDR5 Phantom Gaming",
        "Imagen":"https://i.postimg.cc/3NSy6cPW/videoamd3.jpg",
        "Precio":"$ 81.550",
        "Categoria":"VideoAMD"
    },
    {
        "Nombre":"Memoria Team DDR5 32GB (2x16GB) 6400MHz T-Force Delta RGB Black CL40 Intel XMP 3.0",
        "Imagen":"https://i.postimg.cc/bNgLYYj2/ram1.jpg",
        "Precio":"$ 164.170",
        "Categoria":"Ram"
    },
    {
        "Nombre":"Memoria Patriot Viper DDR4 16GB 3200MHz Steel",
        "Imagen":"https://i.postimg.cc/W148dR2Y/ram2.jpg",
        "Precio":"$ 47.460",
        "Categoria":"Ram"
    },
    {
        "Nombre":"Memoria Adata DDR4 8GB 3200MHz Premier",
        "Imagen":"https://i.postimg.cc/MprDRsH6/ram3.jpg",
        "Precio":"$ 22.550",
        "Categoria":"Ram"
    },
    {
        "Nombre":"Memoria Patriot Viper DDR4 8GB 3200MHz Steel SODIMM Notebook",
        "Imagen":"https://i.postimg.cc/jjwhhznz/ramn1.jpg",
        "Precio":"$ 21.850",
        "Categoria":"RamNotebook"
    },
    {
        "Nombre":"Memoria Kingston DDR4 8GB 3200MHz Sodimm Tipo Notebook*",
        "Imagen":"https://i.postimg.cc/vmJt2c5C/ramn2.jpg",
        "Precio":"$ 28.850",
        "Categoria":"RamNotebook"
    },
    {
        "Nombre":"Memoria Patriot Viper DDR4 16GB 3200MHz Steel SODIMM Notebook",
        "Imagen":"./assets/img-productos/basededatos/ramn3.jpg",
        "Precio":"$ 43.900",
        "Categoria":"RamNotebook"
    },
    {
        "Nombre":"Disco Rigido Seagate 1TB SkyHawk 256MB 5.4K RPM",
        "Imagen":"https://i.postimg.cc/6Q0mDV5F/hdd1.jpg",
        "Precio":"$ 56.660",
        "Categoria":"HDD"
    },
    {
        "Nombre":"Disco Rigido Seagate 2TB SkyHawk 256MB 5.4K RPM",
        "Imagen":"https://i.postimg.cc/pTL6x9mr/hdd2.jpg",
        "Precio":"$ 74.960",
        "Categoria":"HDD"
    },
    {
        "Nombre":"Disco Solido SSD Team 256GB CX2 520MB/s",
        "Imagen":"https://i.postimg.cc/SsLCZVSz/ssd1.jpg",
        "Precio":"$ 22.310",
        "Categoria":"SSD"
    },
    {
        "Nombre":"Disco Solido SSD HIKSEMI Wave 240GB 530MB/s",
        "Imagen":"https://i.postimg.cc/PJtZ0ZJV/ssd2.jpg",
        "Precio":"$ 22.750",
        "Categoria":"SSD"
    },
    {
        "Nombre":"Memoria Micro SDXC Team High Endurance 64GB UHS-I U3 100mb/s",
        "Imagen":"https://i.postimg.cc/bwL55HvW/msd1.jpg",
        "Precio":"$ 9.800",
        "Categoria":"MicroSD"
    },
    {
        "Nombre":"Memoria Micro SDXC Team PRO+ 128GB UHS-I U3 160MB/s",
        "Imagen":"https://i.postimg.cc/DzZN3JJZ/msd2.jpg",
        "Precio":"$ 14.000",
        "Categoria":"MicroSD"
    },
    {
        "Nombre":"Cooler Fan ID-Cooling NO-8025-SD 80mm",
        "Imagen":"https://i.postimg.cc/WbxLn7hn/cooler1.jpg",
        "Precio":"$ 3.000",
        "Categoria":"CoolerFan"
    },
    {
        "Nombre":"Cooler Fan Falcom AS-02 ARGB 120mm",
        "Imagen":"https://i.postimg.cc/zXyYKQXv/cooler2.jpg",
        "Precio":"$ 6.950",
        "Categoria":"CoolerFan"
    },
    {
        "Nombre":"Cooler CPU DeepCool AK620 DIGITAL Display",
        "Imagen":"https://i.postimg.cc/P5ZGF8Dk/coolerc1.jpg",
        "Precio":"$ 134.760",
        "Categoria":"CoolerCPU"
    },
    {
        "Nombre":"Cooler CPU Antec Symphony 240 ARGB Water Cooler",
        "Imagen":"https://i.postimg.cc/Bv0WWQ5P/coolerc2.jpg",
        "Precio":"$ 143.370",
        "Categoria":"CoolerCPU"
    },
    {
        "Nombre":"Pasta Termica Corsair XTM50 de alto rendimiento",
        "Imagen":"https://i.postimg.cc/JhGpdfvH/pasta1.jpg",
        "Precio":"$ 17.240",
        "Categoria":"PastaT"
    },
    {
        "Nombre":"Pasta Termica ID-Cooling ID-TG05",
        "Imagen":"https://i.postimg.cc/Mpss56P8/pasta2.jpg",
        "Precio":"$ 1.820",
        "Categoria":"PastaT"
    },
    {
        "Nombre":"Gabinete Kit Performance L903 Fuente 500W + Teclado y Mouse de Regalo",
        "Imagen":"https://i.postimg.cc/28bgVB2B/gabi1.jpg",
        "Precio":"$ 38.630",
        "Categoria":"Gabinete"
    },
    {
        "Nombre":"Gabinete Kit Performance 6801 Fuente 600W + Teclado y Mouse de Regalo",
        "Imagen":"https://i.postimg.cc/hPk6xP5Z/gabi2.jpg",
        "Precio":"$ 41.950",
        "Categoria":"Gabinete"
    },
    {
        "Nombre":"Gabinete DeepCool MATREXX 30 Vidrio Templado",
        "Imagen":"https://i.postimg.cc/8CDYKXDh/gabi3.jpg",
        "Precio":"$ 42.200",
        "Categoria":"Gabinete"
    },
    {
        "Nombre":"Soporte con Cable Riser Antec p/GPU PCI-E 4.0 Black 190mm Largo",
        "Imagen":"https://i.postimg.cc/2jbfBJ56/mod1.jpg",
        "Precio":"$ 106.930",
        "Categoria":"Modding"
    },
    {
        "Nombre":"Adaptador Fuente ATX p/ Gabinete Cooler Master NR200P Black",
        "Imagen":"https://i.postimg.cc/9X6HPp4B/mod2.jpg",
        "Precio":"$ 15.400",
        "Categoria":"Modding"
    },
    {
        "Nombre":"Adaptador Fuente ATX p/ Gabinete Cooler Master NR200P White",
        "Imagen":"https://i.postimg.cc/dtGP5yrc/mod3.jpg",
        "Precio":"$ 15.400",
        "Categoria":"Modding"
    },
    {
        "Nombre":"Fuente Antec 550W 80 Plus Bronze CSK550",
        "Imagen":"https://i.postimg.cc/PJN9bLH9/fuente1.jpg",
        "Precio":"$ 89.550",
        "Categoria":"Fuente"
    },
    {
        "Nombre":"Fuente Corsair 550W 80 Plus Bronze CV550",
        "Imagen":"https://i.postimg.cc/Rh88gMVF/fuente2.jpg",
        "Precio":"$ 75.500",
        "Categoria":"Fuente"
    },
    {
        "Nombre":"Fuente Gigabyte 550W 80 Plus Bronze P550B",
        "Imagen":"https://i.postimg.cc/3rbP8ZCT/fuente3.jpg",
        "Precio":"$ 160.700",
        "Categoria":"Fuente"
    },
    {
        "Nombre":"Monitor LG 20 20MK400H-B TN VGA HDMI",
        "Imagen":"https://i.postimg.cc/DwFVHwPJ/mon1.jpg",
        "Precio":"$ 114.900",
        "Categoria":"Monitor"
    },
    {
        "Nombre":"Monitor LG 22'' 22MP410-B Full HD 75Hz VA FreeSync HDMI",
        "Imagen":"https://i.postimg.cc/y8PqHCLf/mon2.jpg",
        "Precio":"$ 129.000",
        "Categoria":"Monitor"
    },
    {
        "Nombre":"Monitor LG 26 26WQ500-B UltraWide 21:9 Full HD 75Hz IPS",
        "Imagen":"https://i.postimg.cc/43ND42MX/mon3.jpg",
        "Precio":"$ 239.000",
        "Categoria":"Monitor"
    },
    {
        "Nombre":"Auriculares JBL Quantum 910 Wireless 2.4Ghz Bluetooth 5.2 USB-C RGB 40Hs PC/PS4/PS5/XBOX",
        "Imagen":"https://i.postimg.cc/XJx6kSCG/auri1.jpg",
        "Precio":"$ 419.990",
        "Categoria":"Auriculares"
    },
    {
        "Nombre":"Auriculares Redragon Scylla H901 PC | PS4 | Switch | XBOX",
        "Imagen":"https://i.postimg.cc/yNmHWS6T/auri2.jpg",
        "Precio":"$ 26.990",
        "Categoria":"Auriculares"
    },
    {
        "Nombre":"Teclado Gaming Retroiluminado Wesdar MK4",
        "Imagen":"https://i.postimg.cc/wxVDLW4C/tecla1.jpg",
        "Precio":"$ 8.040",
        "Categoria":"Teclado"
    },
    {
        "Nombre":"Teclado Gaming Retroiluminado Wesdar MK10",
        "Imagen":"https://i.postimg.cc/MKpVDyhv/tecla2.jpg",
        "Precio":"$ 10.910",
        "Categoria":"Teclado"
    },
    {
        "Nombre":"Mouse Logitech M90 Black",
        "Imagen":"https://i.postimg.cc/hPWNQtwy/mouse1.jpg",
        "Precio":"$ 5.320",
        "Categoria":"Mouse"
    },
    {
        "Nombre":"Mouse Wesdar Cerberus x4 Black Rainbow 2400DPI",
        "Imagen":"https://i.postimg.cc/0y93ZH97/mouse2.jpg",
        "Precio":"$ 5.320",
        "Categoria":"Mouse"
    },
    {
        "Nombre":"Webcam Redragon GW600 Fobos HD 720p USB",
        "Imagen":"https://i.postimg.cc/dVT7Hnnt/web1.jpg",
        "Precio":"$ 31.990",
        "Categoria":"Webcam"
    },
    {
        "Nombre":"WebCam Logitech C270 HD 720p USB",
        "Imagen":"https://i.postimg.cc/wB81SJb5/web2.jpg",
        "Precio":"$ 39.100",
        "Categoria":"Webcam"
    },
    {
        "Nombre":"Joystick Redragon Saturn G807 PC USB",
        "Imagen":"https://i.postimg.cc/YCNnWNgj/joy1.jpg",
        "Precio":"$ 20.730",
        "Categoria":"Joystick"
    },
    {
        "Nombre":"Joystick Logitech F310 Gamepad",
        "Imagen":"https://i.postimg.cc/fbwHj3jC/joy2.jpg",
        "Precio":"$ 27.290",
        "Categoria":"Joystick"
    },
    {
        "Nombre":"Mouse Pad Redragon Flick M P030 320x2700mm*",
        "Imagen":"https://i.postimg.cc/9FhNFNRs/pad1.jpg",
        "Precio":"$ 6.960",
        "Categoria":"Mousepads"
    },
    {
        "Nombre":"Almohadilla Redragon P035 Meteor S",
        "Imagen":"https://i.postimg.cc/hv9y1VwC/pad2.jpg",
        "Precio":"$ 10.180",
        "Categoria":"Mousepads"
    },
    {
        "Nombre":"Parlante Thonet & Vander Speaker Sound Bar Holm Bluetooth PC Smart TV 32W",
        "Imagen":"https://i.postimg.cc/WbwYD60z/par1.jpg",
        "Precio":"$ 122.990",
        "Categoria":"Parlantes"
    },
    {
        "Nombre":"Parlante Thonet & Vander Speaker Sound Bar Balken TWS Bluetooth PC Smart TV 42W",
        "Imagen":"https://i.postimg.cc/P5f31pM4/par2.jpg",
        "Precio":"$ 151.990",
        "Categoria":"Parlantes"
    },
    {
        "Nombre":"Combo Teclado y Mouse Wesdar Black MK5 BL",
        "Imagen":"https://i.postimg.cc/KjHXCPQm/combo1.jpg",
        "Precio":"$ 6.670",
        "Categoria":"Combo"
    },
    {
        "Nombre":"Combo Wesdar 4 en 1 Teclado, Mouse, Auricular, Mouse pad KM6 Black",
        "Imagen":"https://i.postimg.cc/bYCjGPP4/combo2.jpg",
        "Precio":"$ 11.900",
        "Categoria":"Combo"
    },
    {
        "Nombre":"Microfono Logitech Blue Snowball Ice Black USB",
        "Imagen":"https://i.postimg.cc/ydGvHLqp/micro1.jpg",
        "Precio":"$ 57.990",
        "Categoria":"Microfono"
    },
    {
        "Nombre":"Microfono Logitech Blue Snowball ICE White USB",
        "Imagen":"https://i.postimg.cc/t7Qk174h/micro2.jpg",
        "Precio":"$ 57.990",
        "Categoria":"Microfono"
    },
    {
        "Nombre":"Silla Gamer Corsair T3 Rush Fabric Carbon (Peso MAX. 120kg)",
        "Imagen":"https://i.postimg.cc/DzXqGnR6/silla1.jpg",
        "Precio":"$ 450.900",
        "Categoria":"SillaG"
    },
    {
        "Nombre":"Silla Gamer Cougar Armor ELITE Black (Peso MAX. 120kg)",
        "Imagen":"https://i.postimg.cc/k4PWFLmm/silla2.jpg",
        "Precio":"$ 231.760",
        "Categoria":"SillaG"
    },
    {
        "Nombre":"Robot Robosen Transformers G1 Bumblebee",
        "Imagen":"https://i.postimg.cc/c1MBT1C5/robo1.jpg",
        "Precio":"$ 658.780",
        "Categoria":"Robot"
    },
    {
        "Nombre":"Robot Robosen Transformers Optimus Prime Elite",
        "Imagen":"https://i.postimg.cc/c4xMzq81/robo2.jpg",
        "Precio":"$ 1.135.820",
        "Categoria":"Robot"
    },
    {
        "Nombre":"Adaptador de Red Mercusys MW300UH White USB 300Mbps",
        "Imagen":"https://i.postimg.cc/tTFtKp5J/ri1.jpg",
        "Precio":"$ 11.300",
        "Categoria":"PlacaRI"
    },
    {
        "Nombre":"Adaptador de Red Tp-Link TL-WN821N USB 300Mbps",
        "Imagen":"https://i.postimg.cc/x8YyYhxR/ri2.jpg",
        "Precio":"$ 11.450",
        "Categoria":"PlacaRI"
    },
    {
        "Nombre":"Adaptador de Red Tp-Link TL-WN822N Hi Power USB 300Mbps",
        "Imagen":"https://i.postimg.cc/3NBjw1zH/ri3.jpg",
        "Precio":"$ 13.400",
        "Categoria":"PlacaRI"
    },
    {
        "Nombre":"Router WIFI Mercusys MW302R 300Mbps 2 Antenas",
        "Imagen":"https://i.postimg.cc/Hs64DSQw/rou1.jpg",
        "Precio":"$ 15.100",
        "Categoria":"Router"
    },
    {
        "Nombre":"Router WIFI Tp-Link TL-WR820N 300Mbps",
        "Imagen":"https://i.postimg.cc/jSC6szXG/rou2.jpg",
        "Precio":"$ 18.400",
        "Categoria":"Router"
    },
    {
        "Nombre":"Router Wifi Tp-Link TL-WR850N WISP Agile 300Mbps White",
        "Imagen":"https://i.postimg.cc/mgqYhtph/rou3.jpg",
        "Precio":"$ 22.050",
        "Categoria":"Router"
    },
    {
        "Nombre":"Estabilizador Desktop TCA-1200N LYONN AV",
        "Imagen":"https://i.postimg.cc/8CB2TQwK/esta1.jpg",
        "Precio":"$ 36.690",
        "Categoria":"Estabilizador"
    },
    {
        "Nombre":"Estabilizador Desktop TCA-2000N LYONN AVR",
        "Imagen":"https://i.postimg.cc/8CB2TQwK/esta1.jpg",
        "Precio":"$ 49.990",
        "Categoria":"Estabilizador"
    },
    {
        "Nombre":"UPS con Estabilizador Lyonn Ctb 2000ap 2000va Display Lcd",
        "Imagen":"https://i.postimg.cc/SsgHz6Bc/esta3.jpg",
        "Precio":"$ 283.990",
        "Categoria":"Estabilizador"
    },
    {
        "Nombre":"UPS Lyonn Desire 500V 500va LED*",
        "Imagen":"https://i.postimg.cc/dV7dMJQF/ups1.jpg",
        "Precio":"$ 74.990",
        "Categoria":"UPS"
    },
    {
        "Nombre":"UPS Lyonn Desire 500V 500va LCD",
        "Imagen":"https://i.postimg.cc/PqYwxK8F/ups2.jpg",
        "Precio":"$ 83.990",
        "Categoria":"UPS"
    },
    {
        "Nombre":"UPS Lyonn CTB-800V 800AP LED",
        "Imagen":"https://i.postimg.cc/tTbVVP3R/ups3.jpg",
        "Precio":"$ 91.990",
        "Categoria":"UPS"
    },
    {
        "Nombre":"Cable de poder para fuente de PC de 3 patas 0,75mm 1,5mts Interlock Iram",
        "Imagen":"https://i.postimg.cc/NFMqNJ6N/cab1.jpg",
        "Precio":"$ 3.080",
        "Categoria":"Cables"
    },
    {
        "Nombre":"Celular Xiaomi 12X 5G Dual Sim 8GB RAM + 128GB Gris",
        "Imagen":"https://i.postimg.cc/XJn057p6/cel1.jpg",
        "Precio":"$ 779.990",
        "Categoria":"Celular"
    },
    {
        "Nombre":"Funda Celular Samsung Flip Wallet A3 2016 Black",
        "Imagen":"https://i.postimg.cc/9f52WB2M/ac1.jpg",
        "Precio":"$ 18.530",
        "Categoria":"Funda"
    },
    {
        "Nombre":"Impresora Laser Brother HL1212W Mono B&N WiFi",
        "Imagen":"https://i.postimg.cc/76tQLxzV/imp1.jpg",
        "Precio":"$ 199.000",
        "Categoria":"Impresora"
    },
    {
        "Nombre":"Impresora Multifuncion Brother DCP-T420W Sistema Continuo Color WiFi InkTank",
        "Imagen":"https://i.postimg.cc/brGVDKHj/imp2.jpg",
        "Precio":"$ 369.000",
        "Categoria":"Impresora"
    },
    {
        "Nombre":"Impresora HP LaserJet M111a",
        "Imagen":"https://i.postimg.cc/wMSfh00R/imp3.jpg",
        "Precio":"$ 163.800",
        "Categoria":"Impresora"
    },
    {
        "Nombre":"Botella Tinta Brother BT5001C Cyan Original Sistema Continuo p/ T220/T420W/T720DW",
        "Imagen":"https://i.postimg.cc/fWFrnRDW/ins1.jpg",
        "Precio":"$ 8.450",
        "Categoria":"Insumos"
    },
    {
        "Nombre":"Botella Tinta Brother BT5001M Magenta Original Sistema Continuo p/ T220/T420W/T720DW",
        "Imagen":"https://i.postimg.cc/9F7NWHQd/ins2.jpg",
        "Precio":"$ 8.450",
        "Categoria":"Insumos"
    },
    {
        "Nombre":"Toner Brother TN1060 Original Negro p/ Laser HL1200/1212W/1617NW",
        "Imagen":"https://i.postimg.cc/htRZvZXH/ins3.jpg",
        "Precio":"$ 39.050",
        "Categoria":"Insumos"
    },
    {
        "Nombre":"Smart TV LG 43 Ultra HD 4K HDR 10 Pro AI ThinQ 43UR8750PSA",
        "Imagen":"https://i.postimg.cc/GhgYS4Cz/tele1.jpg",
        "Precio":"$ 499.000",
        "Categoria":"Televisores"
    },
    {
        "Nombre":"Smart TV LG 50 Ultra HD AI ThinQ 50UR8750PSA",
        "Imagen":"https://i.postimg.cc/GhgYS4Cz/tele1.jpg",
        "Precio":"$ 629.000",
        "Categoria":"Televisores"
    },
    {
        "Nombre":"Smart TV LG NanoCell 65 Ultra HD AI ThinQ 65NANO80SQA",
        "Imagen":"https://i.postimg.cc/W1QZTxtk/tele3.jpg",
        "Precio":"$ 990.000",
        "Categoria":"Televisores"
    },



]
