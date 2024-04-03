let productos = [
    {
        Categoria: "Teclado",
        Fabricante: "Corsair",
        Modelo: "K70",
        Precio: 85000,
        Imagen: "assets/prodimg/corsair_k70.webp",
        Altimagen: "../assets/prodimg/corsair_k70.webp"
    },
    {
        Categoria: "Teclado",
        Fabricante: "Redragon",
        Modelo: "Kumara K552",
        Precio: 65000,
        Imagen: "assets/prodimg/redragon_kumarak552.webp",
        Altimagen: "../assets/prodimg/redragon_kumarak552.webp"
    },
    {
        Categoria: "Teclado",
        Fabricante: "Noga",
        Modelo: "Stormer Nkb-gk23",
        Precio: 10000,
        Imagen: "assets/prodimg/noga_stormernkb.webp",
        Altimagen: "../assets/prodimg/noga_stormernkb.webp"
    },
    {
        Categoria: "Mouse",
        Fabricante: "Corsair",
        Modelo: "M55",
        Precio: 55000,
        Imagen: "assets/prodimg/corsair_m55.webp",
        Altimagen: "../assets/prodimg/corsair_m55.webp"
    },
    {
        Categoria: "Mouse",
        Fabricante: "Redragon",
        Modelo: "Cobra M711",
        Precio: 80000,
        Imagen: "assets/prodimg/redragon_cobram711.webp",
        Altimagen: "../assets/prodimg/redragon_cobram711.webp"
    },
    {
        Categoria: "Mouse",
        Fabricante: "Logitech",
        Modelo: "Lightsync G203",
        Precio: 40000,
        Imagen: "assets/prodimg/logitech_lightsyncg203.webp",
        Altimagen: "../assets/prodimg/logitech_lightsyncg203.webp"
    },
    {
        Categoria: "Auriculares",
        Fabricante: "Corsair",
        Modelo: "VOID",
        Precio: 200000,
        Imagen: "assets/prodimg/corsair_void.webp",
        Altimagen: "../assets/prodimg/corsair_void.webp"
    },
    {
        Categoria: "Auriculares",
        Fabricante: "Redragon",
        Modelo: "Zeus H510",
        Precio: 90000,
        Imagen: "assets/prodimg/redragon_zeush510.webp",
        Altimagen: "../assets/prodimg/redragon_zeush510.webp"
    },
    {
        Categoria: "Auriculares",
        Fabricante: "Redragon",
        Modelo: "Hylas H260",
        Precio: 45000,
        Imagen: "assets/prodimg/redragon_hylash260.webp",
        Altimagen: "../assets/prodimg/redragon_hylash260.webp"
    },
    {
        Categoria: "Monitor",
        Fabricante: "Samsung",
        Modelo: '27" 75Hz',
        Precio: 400000,
        Imagen: "assets/prodimg/samsung_monitor.webp",
        Altimagen: "../assets/prodimg/samsung_monitor.webp"
    },
    {
        Categoria: "Monitor",
        Fabricante: "HP",
        Modelo: '27" 165Hz',
        Precio: 370000,
        Imagen: "assets/prodimg/hp_monitor.webp",
        Altimagen: "../assets/prodimg/hp_monitor.webp"
    },
    {
        Categoria: "Monitor",
        Fabricante: "Philips",
        Modelo: '19" 60Hz',
        Precio: 120000,
        Imagen: "assets/prodimg/philips_monitor.webp",
        Altimagen: "../assets/prodimg/philips_monitor.webp"
    },
    {
        Categoria: "Memoria RAM",
        Fabricante: "Corsair",
        Modelo: "32GB 3600MHz",
        Precio: 180000,
        Imagen: "assets/prodimg/corsair_ram.webp",
        Altimagen: "../assets/prodimg/corsair_ram.webp"
    },
    {
        Categoria: "Memoria RAM",
        Fabricante: "Kingston",
        Modelo: "16GB 3200MHz",
        Precio: 90000,
        Imagen: "assets/prodimg/kingston_ram.webp",
        Altimagen: "../assets/prodimg/kingston_ram.webp"
    },
    {
        Categoria: "Memoria RAM",
        Fabricante: "Hikvision",
        Modelo: "32GB 3200MHz",
        Precio: 200000,
        Imagen: "assets/prodimg/hikvision_ram.webp",
        Altimagen: "../assets/prodimg/hikvision_ram.webp"
    },
    {
        Tipo: "Almacenamiento",
        Categoria: "Disco Duro",
        Fabricante: "Western Digital",
        Modelo: "1TB",
        Precio: 70000,
        Imagen: "assets/prodimg/wd_hdd1tb.webp",
        Altimagen: "../assets/prodimg/wd_hdd1tb.webp"
    },
    {
        Tipo: "Almacenamiento",
        Categoria: "Disco Solido",
        Fabricante: "Kingston",
        Modelo: "1TB",
        Precio: 110000,
        Imagen: "assets/prodimg/kingston_ssd1tb.webp",
        Altimagen: "../assets/prodimg/kingston_ssd1tb.webp"
    },
    {
        Tipo: "Almacenamiento",
        Categoria: "Disco Solido M.2",
        Fabricante: "Kingston",
        Modelo: "M.2 1TB",
        Precio: 85000,
        Imagen: "assets/prodimg/kingston_ssdm21tb.webp",
        Altimagen: "../assets/prodimg/kingston_ssdm21tb.webp"
    },
    {
        Categoria: "Placa de Video",
        Fabricante: "Nvidia Asus",
        Modelo: "GTX 1650 4GB",
        Precio: 300000,
        Imagen: "assets/prodimg/nvidiaasus_gtx1650.webp",
        Altimagen: "../assets/prodimg/nvidiaasus_gtx1650.webp"
    },
    {
        Categoria: "Placa de Video",
        Fabricante: "Nvidia MSI",
        Modelo: "RTX 2060 Super 8GB",
        Precio: 475000,
        Imagen: "assets/prodimg/nvidiamsi_rtx2060s.webp",
        Altimagen: "../assets/prodimg/nvidiamsi_rtx2060s.webp"
    },
    {
        Categoria: "Placa de Video",
        Fabricante: "Nvidia Zotac",
        Modelo: "RTX 3060 12GB",
        Precio: 700000,
        Imagen: "assets/prodimg/nvidiazotac_rtx3060.webp",
        Altimagen: "../assets/prodimg/nvidiazotac_rtx3060.webp"
    },
    {
        Categoria: "Motherboard",
        Fabricante: "Asus Rog",
        Modelo: "B550-F AMD",
        Precio: 325000,
        Imagen: "assets/prodimg/asusrog_b550f.webp",
        Altimagen: "../assets/prodimg/asusrog_b550f.webp"
    },
    {
        Categoria: "Motherboard",
        Fabricante: "Asus Rog",
        Modelo: "B650a AMD",
        Precio: 550000,
        Imagen: "assets/prodimg/asusrog_b650a.webp",
        Altimagen: "../assets/prodimg/asusrog_b650a.webp"
    },
    {
        Categoria: "Motherboard",
        Fabricante: "Asus Rog",
        Modelo: "Z790-f Intel",
        Precio: 800000,
        Imagen: "assets/prodimg/asusrog_z790f.webp",
        Altimagen: "../assets/prodimg/asusrog_z790f.webp"
    },
    {
        Categoria: "Procesador",
        Fabricante: "Intel",
        Modelo: "Core i5-10400 10th GEN 6 Nucleos 4.3GHz",
        Precio: 180000,
        Imagen: "assets/prodimg/intel_i5.webp",
        Altimagen: "../assets/prodimg/intel_i5.webp"
    },
    {
        Categoria: "Procesador",
        Fabricante: "Intel",
        Modelo: "Core i3-10100F 10th GEN 4 Nucleos 4.3GHz",
        Precio: 115000,
        Imagen: "assets/prodimg/intel_i3.webp",
        Altimagen: "../assets/prodimg/intel_i3.webp"
    },
    {
        Categoria: "Procesador",
        Fabricante: "Intel",
        Modelo: "Core i7-10700 10th GEN 8 Nucleos 4.8GHz",
        Precio: 370000,
        Imagen: "assets/prodimg/intel_i7.webp",
        Altimagen: "../assets/prodimg/intel_i7.webp"
    },
]