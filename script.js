
/* ==========================================
   SMARTPÉDIA PREMIUM
   BASE DE DADOS COMPLETA + DESIGN CLARO MODERNO
========================================== */

const smartphoneData = {

  Samsung: {
    history: "Fundada em 1938 na Coreia do Sul por Lee Byung-chull, a Samsung começou como uma empresa de comércio de produtos locais e expandiu-se para a eletrónica no final dos anos 60. Tornou-se pioneira e líder global em inovação móvel, revolucionando a indústria com a criação da prestigiada família Galaxy e liderando o mercado de smartphones dobráveis.",
    lines: {
      "Galaxy S": [
        {
         year: "2010",
         model: "Galaxy S",
         screen: '4.0" Super AMOLED (480x800)',
         processor: "Exynos 3110 (1.0 GHz)",
         ramStorage: "512 MB / 8–16 GB",
         battery: "1.500 mAh",
         camera: "5 MP",
         image: "1001261115.jpg"
        },
        {
          year: "2011",
          model: "Galaxy S II",
          screen: '4.3" Super AMOLED Plus',
          processor: "Exynos 4210 (dual-core 1.2 GHz)",
          ramStorage: "1 GB / 16 GB",
          battery: "1.650 mAh",
          camera: "8 MP",
          image: "1001261180.jpg"
        },
        {
          year: "2012",
          model: "Galaxy S III",
          screen: '4.8" Super AMOLED (720p)',
          processor: "Exynos 4412 Quad (1.4 GHz)",
          ramStorage: "1 GB / 16–32 GB",
          battery: "2.100 mAh",
          camera: "8 MP",
          image: "1001261186.jpg"
        },
        {
          year: "2013",
          model: "Galaxy S4",
          screen: '5.0" Super AMOLED (1080p)',
          processor: "Exynos 5410 Octa / Snapdragon 600",
          ramStorage: "2 GB / 16–64 GB",
          battery: "2.600 mAh",
          camera: "13 MP",
          image: "1001261196.jpg"
        },
        {
          year: "2014",
          model: "Galaxy S5",
          screen: '5.1" Super AMOLED (1080p)',
          processor: "Snapdragon 801",
          ramStorage: "2 GB / 16–32 GB",
          battery: "2.800 mAh",
          camera: "16 MP",
          image: "1001261208.jpg"
        },
        {
          year: "2015",
          model: "Galaxy S6",
          screen: '5.1" Super AMOLED (1440p)',
          processor: "Exynos 7420 Octa",
          ramStorage: "3 GB / 32–128 GB",
          battery: "2.550 mAh",
          camera: "16 MP",
          image: "1001261219.jpg"
        },
        {
          year: "2016",
          model: "Galaxy S7",
          screen: '5.1" Super AMOLED (1440p)',
          processor: "Exynos 8890 / Snapdragon 820",
          ramStorage: "4 GB / 32–128 GB",
          battery: "3.000 mAh",
          camera: "12 MP",
          image: "1001261239.jpg"
        },
        {
          year: "2017",
          model: "Galaxy S8",
          screen: '5.8" Super AMOLED (1440p)',
          processor: "Exynos 8895 / Snapdragon 835",
          ramStorage: "4 GB / 64 GB",
          battery: "3.000 mAh",
          camera: "12 MP",
          image: "1001261247.jpg"
        },
        {
          year: "2018",
          model: "Galaxy S9",
          screen: '5.8" Super AMOLED (1440p)',
          processor: "Exynos 9810 / Snapdragon 845",
          ramStorage: "4 GB / 64–256 GB",
          battery: "3.000 mAh",
          camera: "12 MP",
          image: "1001261260.jpg"
        },
        {
          year: "2019",
          model: "Galaxy S10",
          screen: '6.1" Dynamic AMOLED (1440p)',
          processor: "Exynos 9820 / Snapdragon 855",
          ramStorage: "8 GB / 128–512 GB",
          battery: "3.400 mAh",
          camera: "12 MP tripla (12 MP + 12 MP + 16 MP)",
          image: "1001261271.jpg"
        },
        {
          year: "2020",
          model: "Galaxy S20",
          screen: '6.2" Dynamic AMOLED 2X (1440p / 120Hz em FHD+)',
          processor: "Exynos 990 / Snapdragon 865",
          ramStorage: "8–12 GB / 128 GB",
          battery: "4.000 mAh",
          camera: "12 MP tripla",
          image: "1001261363.jpg"
        },
        {
          year: "2020",
          model: "Galaxy S20 Ultra",
          screen: '6.9" Dynamic AMOLED 2X (1440p / 120Hz em FHD+)',
          processor: "Exynos 990 / Snapdragon 865",
          ramStorage: "12–16 GB / 128–512 GB",
          battery: "5.000 mAh",
          camera: "108 MP quádrupla",
          image: "1001261380.jpg"
        },
        {
          year: "2021",
          model: "Galaxy S21",
          screen: '6.2" Dynamic AMOLED 2X (1080p, 120Hz)',
          processor: "Exynos 2100 / Snapdragon 888",
          ramStorage: "8 GB / 128–256 GB",
          battery: "4.000 mAh",
          camera: "12 MP tripla",
          image: "1001261423.jpg"
        },
        {
          year: "2021",
          model: "Galaxy S21 Ultra",
          screen: '6.8" Dynamic AMOLED 2X (1440p, 120Hz)',
          processor: "Exynos 2100 / Snapdragon 888",
          ramStorage: "12–16 GB / 128–512 GB",
          battery: "5.000 mAh",
          camera: "108 MP quádrupla",
          image: "1001261463.jpg"
        },
        {
          year: "2022",
          model: "Galaxy S22",
          screen: '6.1" Dynamic AMOLED 2X (1080p, 120Hz)',
          processor: "Exynos 2200 / Snapdragon 8 Gen 1",
          ramStorage: "8 GB / 128–256 GB",
          battery: "3.700 mAh",
          camera: "50 MP tripla",
          image: "1001261473.jpg"
        },
        {
          year: "2022",
          model: "Galaxy S22 Ultra",
          screen: '6.8" Dynamic AMOLED 2X (1440p, 120Hz)',
          processor: "Exynos 2200 / Snapdragon 8 Gen 1",
          ramStorage: "8–12 GB / 128 GB–1 TB",
          battery: "5.000 mAh",
          camera: "108 MP quádrupla",
          image: "1001261494.jpg"
        },
        {
          year: "2023",
          model: "Galaxy S23",
          screen: '6.1" Dynamic AMOLED 2X (1080p, 120Hz)',
          processor: "Snapdragon 8 Gen 2 for Galaxy",
          ramStorage: "8 GB / 128–512 GB",
          battery: "3.900 mAh",
          camera: "50 MP tripla",
          image: "1001261503.jpg"
        },
        {
          year: "2023",
          model: "Galaxy S23 Ultra",
          screen: '6.8" Dynamic AMOLED 2X (1440p, 120Hz)',
          processor: "Snapdragon 8 Gen 2 for Galaxy",
          ramStorage: "8–12 GB / 256 GB–1 TB",
          battery: "5.000 mAh",
          camera: "200 MP quádrupla",
          image: "1001261519.jpg"
        },
        {
          year: "2024",
          model: "Galaxy S24",
          screen: '6.2" Dynamic AMOLED 2X (1080p, 120Hz)',
          processor: "Exynos 2400 / Snapdragon 8 Gen 3",
          ramStorage: "8 GB / 128–512 GB",
          battery: "4.000 mAh",
          camera: "50 MP tripla",
          image: "1001261532.jpg"
        },
        {
          year: "2024",
          model: "Galaxy S24 Ultra",
          screen: '6.8" Dynamic AMOLED 2X (1440p, 120Hz)',
          processor: "Snapdragon 8 Gen 3 for Galaxy",
          ramStorage: "12 GB / 256 GB–1 TB",
          battery: "5.000 mAh",
          camera: "200 MP quádrupla",
          image: "1001261605.jpg"
        },
        {
          year: "2025",
          model: "Galaxy S25",
          screen: '6.2" Dynamic AMOLED 2X (1080p, 120Hz)',
          processor: "Snapdragon 8 Elite for Galaxy",
          ramStorage: "12 GB / 128–512 GB",
          battery: "4.000 mAh",
          camera: "50 MP tripla",
          image: "1001261611.jpg"
        },
        {
          year: "2025",
          model: "Galaxy S25 Ultra",
          screen: '6.9" Dynamic AMOLED 2X (1440p, 120Hz)',
          processor: "Snapdragon 8 Elite for Galaxy",
          ramStorage: "12–16 GB / 256 GB–1 TB",
          battery: "5.000 mAh",
          camera: "200 MP quádrupla",
          image: "1001261643.jpg"
        },
        {
          year: "2026",
          model: "Galaxy S26",
          screen: '6.3" Dynamic AMOLED 2X (FHD+, 120Hz)',
          processor: "Exynos 2600 / Snapdragon 8 Elite Gen 2",
          ramStorage: "12 GB / 256–512 GB",
          battery: "4.300 mAh",
          camera: "50 MP tripla",
          image: "1001261726.jpg"
        },
        {
          year: "2026",
          model: "Galaxy S26+",
          screen: '6.7" Dynamic AMOLED 2X (QHD+, 120Hz)',
          processor: "Exynos 2600 / Snapdragon 8 Elite Gen 2",
          ramStorage: "12 GB / 256–512 GB",
          battery: "4.900 mAh",
          camera: "50 MP tripla",
          image: "1001261741.jpg"
        },
        {
  year: "2026",
  model: "Galaxy S26 Ultra",
  screen: '6.9" Dynamic AMOLED 2X (QHD+, 120Hz)',
  processor: "Snapdragon 8 Elite Gen 2 for Galaxy",
  ramStorage: "12–16 GB / 256 GB–1 TB",
  battery: "5.000 mAh",
  camera: "200 MP quádrupla",
  frontCamera: "12 MP",
  zoom: "Óptico 3x e 5x, digital até 100x",
  dimensions: "163.6 x 78.1 x 7.9 mm, 214 g",
  resistance: "IP68",
  sPen: "Sim",
  image: "1001265502.jpg"
        }
      ],
      "Galaxy M": [
        {
          year: "2019",
          model: "Galaxy M10",
          screen: '6.2" PLS LCD',
          processor: "Exynos 7870",
          ramStorage: "2–3 GB / 16–32 GB",
          battery: "3.400 mAh",
          camera: "13 MP dupla",
          image: "1001261760.jpg"
        },
        {
          year: "2019",
          model: "Galaxy M20",
          screen: '6.3" PLS LCD',
          processor: "Exynos 7904",
          ramStorage: "3–4 GB / 32–64 GB",
          battery: "5.000 mAh",
          camera: "13 MP dupla",
          image: "1001262422.jpg"
        },
        {
          year: "2019",
          model: "Galaxy M30",
          screen: '6.4" Super AMOLED',
          processor: "Exynos 7904",
          ramStorage: "4–6 GB / 64–128 GB",
          battery: "5.000 mAh",
          camera: "13 MP tripla",
          image: "1001262484.jpg"
        },
        {
          year: "2019",
          model: "Galaxy M30s",
          screen: '6.4" Super AMOLED',
          processor: "Exynos 9611",
          ramStorage: "4–6 GB / 64–128 GB",
          battery: "6.000 mAh",
          camera: "48 MP tripla",
          image: "1001262490.jpg"
        },
        {
          year: "2019",
          model: "Galaxy M40",
          screen: '6.3" PLS LCD',
          processor: "Snapdragon 675",
          ramStorage: "6 GB / 128 GB",
          battery: "3.500 mAh",
          camera: "32 MP tripla",
          image: "1001263129.jpg"
        },
        {
          year: "2020",
          model: "Galaxy M11",
          screen: '6.4" PLS LCD',
          processor: "Snapdragon 450",
          ramStorage: "3–4 GB / 32–64 GB",
          battery: "5.000 mAh",
          camera: "13 MP tripla",
          image: "1001263150.jpg"
        },
        {
          year: "2020",
          model: "Galaxy M21",
          screen: '6.4" Super AMOLED',
          processor: "Exynos 9611",
          ramStorage: "4–6 GB / 64–128 GB",
          battery: "6.000 mAh",
          camera: "48 MP tripla",
          image: "1001263198.jpg"
        },
        {
          year: "2020",
          model: "Galaxy M31",
          screen: '6.4" Super AMOLED',
          processor: "Exynos 9611",
          ramStorage: "6–8 GB / 64–128 GB",
          battery: "6.000 mAh",
          camera: "64 MP quádrupla",
          image: "1001263259.jpg"
        },
        {
          year: "2020",
          model: "Galaxy M51",
          screen: '6.7" Super AMOLED+',
          processor: "Snapdragon 730G",
          ramStorage: "6–8 GB / 128 GB",
          battery: "7.000 mAh",
          camera: "64 MP quádrupla",
          image: "1001263403.jpg"
        },
        {
          year: "2021",
          model: "Galaxy M12",
          screen: '6.5" PLS LCD 90Hz',
          processor: "Exynos 850",
          ramStorage: "3–6 GB / 32–128 GB",
          battery: "5.000 mAh",
          camera: "48 MP quádrupla",
          image: "1001263424.jpg"
        },
        {
          year: "2021",
          model: "Galaxy M22",
          screen: '6.4" Super AMOLED 90Hz',
          processor: "MediaTek Helio G80",
          ramStorage: "4–6 GB / 64–128 GB",
          battery: "5.000 mAh",
          camera: "48 MP quádrupla",
          image: "1001263442.jpg"
        },
        {
          year: "2021",
          model: "Galaxy M32",
          screen: '6.4" Super AMOLED 90Hz',
          processor: "MediaTek Helio G80",
          ramStorage: "4–8 GB / 64–128 GB",
          battery: "5.000 mAh",
          camera: "64 MP quádrupla",
          image: "1001263604.jpg"
        },
        {
          year: "2021",
          model: "Galaxy M42 5G",
          screen: '6.6" Super AMOLED',
          processor: "Snapdragon 750G",
          ramStorage: "6–8 GB / 128 GB",
          battery: "5.000 mAh",
          camera: "48 MP quádrupla",
          image: "1001264444.jpg"
        },
        {
          year: "2021",
          model: "Galaxy M52 5G",
          screen: '6.7" Super AMOLED+ 120Hz',
          processor: "Snapdragon 778G",
          ramStorage: "6–8 GB / 128 GB",
          battery: "5.000 mAh",
          camera: "64 MP tripla",
          image: "1001264479.jpg"
        },
        {
          year: "2021",
          model: "Galaxy M62",
          screen: '6.7" Super AMOLED+',
          processor: "Exynos 9825",
          ramStorage: "6–8 GB / 128–256 GB",
          battery: "7.000 mAh",
          camera: "64 MP quádrupla",
          image: "1001264498.jpg"
        },
        {
          year: "2022",
          model: "Galaxy M13",
          screen: '6.6" PLS LCD',
          processor: "Exynos 850",
          ramStorage: "4–6 GB / 64–128 GB",
          battery: "5.000 mAh",
          camera: "50 MP tripla",
          image: "1001264509.jpg"
        },
        {
          year: "2022",
          model: "Galaxy M13 5G",
          screen: '6.5" PLS LCD 90Hz',
          processor: "MediaTek Dimensity 700",
          ramStorage: "4–6 GB / 64–128 GB",
          battery: "5.000 mAh",
          camera: "50 MP tripla",
          image: "1001264851.jpg"
        },
        {
          year: "2022",
          model: "Galaxy M23 5G",
          screen: '6.6" PLS LCD 120Hz',
          processor: "Snapdragon 750G",
          ramStorage: "4–6 GB / 128 GB",
          battery: "5.000 mAh",
          camera: "50 MP tripla",
          image: "1001264857.jpg"
        },
        {
          year: "2022",
          model: "Galaxy M33 5G",
          screen: '6.6" PLS LCD 120Hz',
          processor: "Exynos 1280",
          ramStorage: "6–8 GB / 128 GB",
          battery: "6.000 mAh",
          camera: "50 MP quádrupla",
          image: "1001264899.jpg"
        },
        {
          year: "2022",
          model: "Galaxy M53 5G",
          screen: '6.7" Super AMOLED+ 120Hz',
          processor: "MediaTek Dimensity 900",
          ramStorage: "6–8 GB / 128 GB",
          battery: "5.000 mAh",
          camera: "108 MP quádrupla",
          image: "1001264952.jpg"
        },
        {
          year: "2023",
          model: "Galaxy M14 5G",
          screen: '6.6" PLS LCD 90Hz',
          processor: "Exynos 1330",
          ramStorage: "4–6 GB / 64–128 GB",
          battery: "6.000 mAh",
          camera: "50 MP tripla",
          image: "1001264970.jpg"
        },
        {
          year: "2024",
          model: "Galaxy M15 5G",
          screen: '6.5" Super AMOLED 90Hz',
          processor: "MediaTek Dimensity 6100+",
          ramStorage: "4–8 GB / 128 GB",
          battery: "6.000 mAh",
          camera: "50 MP tripla",
          image: "1001264986.jpg"
        },
        {
          year: "2024",
          model: "Galaxy M35 5G",
          screen: '6.6" Super AMOLED 120Hz',
          processor: "Exynos 1380",
          ramStorage: "6–8 GB / 128–256 GB",
          battery: "6.000 mAh",
          camera: "50 MP tripla",
          image: "1001264999.jpg"
        },
        {
          year: "2024",
          model: "Galaxy M55 5G",
          screen: '6.7" Super AMOLED+ 120Hz',
          processor: "Snapdragon 7 Gen 1",
          ramStorage: "8–12 GB / 128–256 GB",
          battery: "5.000 mAh",
          camera: "50 MP tripla",
          image: "1001265005.jpg"
        },
        {
          year: "2025",
          model: "Galaxy M16 5G",
          screen: '6.7" Super AMOLED 90Hz',
          processor: "MediaTek Dimensity 6300",
          ramStorage: "4–8 GB / 128 GB",
          battery: "5.000 mAh",
          camera: "50 MP tripla",
          image: "1001265027.jpg"
        },
        {
          year: "2025",
          model: "Galaxy M06 5G",
          screen: '6.7" PLS LCD 90Hz',
          processor: "MediaTek Dimensity 6300",
          ramStorage: "4–6 GB / 128 GB",
          battery: "5.000 mAh",
          camera: "50 MP dupla",
          image: "1001265054.jpg"
        }
      ],
      "Galaxy A": [
        {
          year: "2014",
          model: "Galaxy A3",
          screen: '4.5" Super AMOLED (540x960)',
          processor: "Snapdragon 410",
          ramStorage: "1 GB / 16 GB",
          battery: "1.900 mAh",
          camera: "8 MP",
          image: "1001260552.jpg"
        },
        {
          year: "2014",
          model: "Galaxy A5",
          screen: '5.0" Super AMOLED (720p)',
          processor: "Snapdragon 410",
          ramStorage: "1.5 GB / 16 GB",
          battery: "2.300 mAh",
          camera: "13 MP",
          image: "1001260724.jpg"
        },
        {
          year: "2015",
          model: "Galaxy A7",
          screen: '5.5" Super AMOLED (1080p)',
          processor: "Snapdragon 615 / Exynos 5430",
          ramStorage: "2 GB / 16–32 GB",
          battery: "2.600 mAh",
          camera: "13 MP",
          image: "1001260742.jpg"
        },
        {
          year: "2016",
          model: "Galaxy A5 (2016)",
          screen: '5.2" Super AMOLED (1080p)',
          processor: "Exynos 7580",
          ramStorage: "2 GB / 16 GB",
          battery: "2.900 mAh",
          camera: "13 MP",
          image: "1001260771.jpg"
        },
        {
          year: "2017",
          model: "Galaxy A5 (2017)",
          screen: '5.2" Super AMOLED (1080p)',
          processor: "Exynos 7880",
          ramStorage: "3 GB / 32 GB",
          battery: "3.000 mAh",
          camera: "16 MP",
          image: "1001260954.jpg"
        },
        {
          year: "2018",
          model: "Galaxy A8 (2018)",
          screen: '5.6" Super AMOLED (1080p)',
          processor: "Exynos 7885",
          ramStorage: "4 GB / 32–64 GB",
          battery: "3.000 mAh",
          camera: "16 MP",
          image: "1001260960.jpg"
        },
        {
          year: "2019",
          model: "Galaxy A50",
          screen: '6.4" Super AMOLED (1080p)',
          processor: "Exynos 9610",
          ramStorage: "4–6 GB / 64–128 GB",
          battery: "4.000 mAh",
          camera: "25 MP tripla",
          image: "1001260987.jpg"
        },
        {
          year: "2020",
          model: "Galaxy A51",
          screen: '6.5" Super AMOLED (1080p)',
          processor: "Exynos 9611",
          ramStorage: "4–8 GB / 64–128 GB",
          battery: "4.000 mAh",
          camera: "48 MP quádrupla",
          image: "1001260997.jpg"
        },
        {
          year: "2020",
          model: "Galaxy A12",
          screen: '6.5" PLS TFT LCD HD+',
          processor: "MediaTek Helio P35",
          ramStorage: "3–6 GB / 32–128 GB",
          battery: "5.000 mAh",
          camera: "48 MP quádrupla",
          image: "1001261009.jpg"
        },
        {
          year: "2021",
          model: "Galaxy A52 (4G)",
          screen: '6.5" Super AMOLED (1080p, 90Hz)',
          processor: "Snapdragon 720G",
          ramStorage: "4–8 GB / 128–256 GB",
          battery: "4.500 mAh",
          camera: "64 MP quádrupla",
          image: "1001261018.jpg"
        },
        {
          year: "2021",
          model: "Galaxy A52 5G",
          screen: '6.5" Super AMOLED (1080p, 120Hz)',
          processor: "Snapdragon 750G",
          ramStorage: "6–8 GB / 128–256 GB",
          battery: "4.500 mAh",
          camera: "64 MP quádrupla",
          image: "1001261026.jpg"
        },
        {
          year: "2022",
          model: "Galaxy A53",
          screen: '6.5" Super AMOLED (1080p, 120Hz)',
          processor: "Exynos 1280",
          ramStorage: "6–8 GB / 128–256 GB",
          battery: "5.000 mAh",
          camera: "64 MP quádrupla",
          image: "1001261033.jpg"
        },
        {
          year: "2023",
          model: "Galaxy A54",
          screen: '6.4" Super AMOLED (1080p, 120Hz)',
          processor: "Exynos 1380",
          ramStorage: "6–8 GB / 128–256 GB",
          battery: "5.000 mAh",
          camera: "50 MP tripla",
          image: "1001261039.jpg"
        },
        {
          year: "2023",
          model: "Galaxy A14 (4G)",
          screen: '6.6" PLS LCD FHD+',
          processor: "MediaTek Helio G80",
          ramStorage: "4–6 GB / 64–128 GB",
          battery: "5.000 mAh",
          camera: "50 MP tripla",
          image: "1001261063.jpg"
        },
        {
          year: "2023",
          model: "Galaxy A14 5G",
          screen: '6.6" PLS LCD FHD+ (90Hz)',
          processor: "MediaTek Dimensity 700",
          ramStorage: "4–6 GB / 64–128 GB",
          battery: "5.000 mAh",
          camera: "50 MP tripla",
          image: "1001261069.jpg"
        },
        {
          year: "2024",
          model: "Galaxy A55",
          screen: '6.6" Super AMOLED (1080p, 120Hz)',
          processor: "Exynos 1480",
          ramStorage: "8 GB / 128–256 GB",
          battery: "5.000 mAh",
          camera: "50 MP tripla",
          image: "1001261080.jpg"
        },
        {
          year: "2024",
          model: "Galaxy A16 (4G)",
          screen: '6.7" Super AMOLED FHD+ (90Hz)',
          processor: "MediaTek Helio G99",
          ramStorage: "4–8 GB / 128–256 GB",
          battery: "5.000 mAh",
          camera: "50 MP tripla",
          image: "1001261088.jpg"
        },
        {
          year: "2024",
          model: "Galaxy A16 5G",
          screen: '6.7" Super AMOLED FHD+',
          processor: "Exynos 1330 / Dimensity 6300",
          ramStorage: "4–8 GB / 128–256 GB",
          battery: "5.000 mAh",
          camera: "50 MP tripla",
          image: "1001261094.jpg"
        },
        {
          year: "2025",
          model: "Galaxy A56",
          screen: '6.6" Super AMOLED (1080p, 120Hz)',
          processor: "Exynos 1580",
          ramStorage: "8–12 GB / 128–256 GB",
          battery: "5.000 mAh",
          camera: "50 MP tripla",
          image: "1001261104.jpg"
        }
      ],
      "Galaxy Z": [
        {
          year: "2019",
          model: "Galaxy Fold",
          screen: '7.3" Dynamic AMOLED',
          processor: "Snapdragon 855",
          ramStorage: "12 GB / 512 GB",
          battery: "4.235 mAh",
          camera: "12 MP tripla",
          image: "1001260041.jpg"
        },
        {
          year: "2020",
          model: "Galaxy Z Flip",
          screen: '6.7" Dynamic AMOLED',
          processor: "Snapdragon 855+",
          ramStorage: "8 GB / 256 GB",
          battery: "3.300 mAh",
          camera: "12 MP dupla",
          image: "1001260050.jpg"
        },
        {
          year: "2020",
          model: "Galaxy Z Fold2",
          screen: '7.6" Dynamic AMOLED 2X (120Hz)',
          processor: "Snapdragon 865+",
          ramStorage: "12 GB / 256–512 GB",
          battery: "4.500 mAh",
          camera: "12 MP tripla",
          image: "1001260056.jpg"
        },
        {
          year: "2021",
          model: "Galaxy Z Fold3",
          screen: '7.6" Dynamic AMOLED 2X (120Hz)',
          processor: "Snapdragon 888",
          ramStorage: "12 GB / 256–512 GB",
          battery: "4.400 mAh",
          camera: "12 MP tripla",
          image: "1001260062.jpg"
        },
        {
          year: "2021",
          model: "Galaxy Z Flip3",
          screen: '6.7" Dynamic AMOLED 2X (120Hz)',
          processor: "Snapdragon 888",
          ramStorage: "8 GB / 128–256 GB",
          battery: "3.300 mAh",
          camera: "12 MP dupla",
          image: "1001260074.jpg"
        },
        {
          year: "2022",
          model: "Galaxy Z Fold4",
          screen: '7.6" Dynamic AMOLED 2X (120Hz)',
          processor: "Snapdragon 8+ Gen 1",
          ramStorage: "12 GB / 256 GB–1 TB",
          battery: "4.400 mAh",
          camera: "50 MP tripla",
          image: "1001260068.jpg"
        },
        {
          year: "2022",
          model: "Galaxy Z Flip4",
          screen: '6.7" Dynamic AMOLED 2X (120Hz)',
          processor: "Snapdragon 8+ Gen 1",
          ramStorage: "8 GB / 128–512 GB",
          battery: "3.700 mAh",
          camera: "12 MP dupla",
          image: "1001260081.jpg"
        },
        {
          year: "2023",
          model: "Galaxy Z Fold5",
          screen: '7.6" Dynamic AMOLED 2X (120Hz)',
          processor: "Snapdragon 8 Gen 2 for Galaxy",
          ramStorage: "12 GB / 256 GB–1 TB",
          battery: "4.400 mAh",
          camera: "50 MP tripla",
          image: "1001260092.jpg"
        },
        {
          year: "2023",
          model: "Galaxy Z Flip5",
          screen: '6.7" Dynamic AMOLED 2X (120Hz)',
          processor: "Snapdragon 8 Gen 2 for Galaxy",
          ramStorage: "8 GB / 256–512 GB",
          battery: "3.700 mAh",
          camera: "12 MP dupla",
          image: "1001260098.jpg"
        },
        {
          year: "2024",
          model: "Galaxy Z Fold6",
          screen: '7.6" Dynamic AMOLED 2X (1856x2160, 120Hz) + 6.3" externo',
          processor: "Snapdragon 8 Gen 3 for Galaxy",
          ramStorage: "12 GB / 256 GB–1 TB",
          battery: "4.400 mAh",
          camera: "50 MP tripla (50 MP + 10 MP tele + 12 MP ultra-wide)",
          frontCamera: "10 MP (externa) + 4 MP (sob o ecrã)",
          zoom: "Óptico 3x, digital até 30x",
          dimensions: "Dobrado: 153.5 x 68.1 x 12.1 mm / Aberto: 153.5 x 132.6 x 5.6 mm, 239 g",
          resistance: "IP48",
          sPen: "Sim (vendida separadamente)",
          os: "Android 14 (atualizável)",
          image: "1001260507.jpg"
        },
        {
          year: "2024",
          model: "Galaxy Z Flip6",
          screen: '6.7" Dynamic AMOLED 2X (120Hz)',
          processor: "Snapdragon 8 Gen 3 for Galaxy",
          ramStorage: "8–12 GB / 256–512 GB",
          battery: "4.000 mAh",
          camera: "50 MP dupla",
          image: "1001260513.jpg"
        },
        {
          year: "2025",
          model: "Galaxy Z Fold7",
          screen: '8.0" Dynamic AMOLED 2X (120Hz)',
          processor: "Snapdragon 8 Elite for Galaxy",
          ramStorage: "12–16 GB / 256 GB–1 TB",
          battery: "4.400 mAh",
          camera: "50 MP tripla",
          image: "1001260525.jpg"
        },
        {
          year: "2025",
          model: "Galaxy Z Flip7",
          screen: '6.7" Dynamic AMOLED 2X (120Hz)',
          processor: "Snapdragon 8 Elite for Galaxy",
          ramStorage: "12 GB / 256–512 GB",
          battery: "4.000 mAh",
          camera: "50 MP dupla",
          image: "1001260535.jpg"
        }
      ],
      "Galaxy Note": [
        {
          year: "2011",
          model: "Galaxy Note",
          screen: '5.3" Super AMOLED',
          processor: "Exynos 4210 / Snapdragon S3",
          ramStorage: "1 GB / 16–32 GB",
          battery: "2.500 mAh",
          camera: "8 MP",
          image: "1001259220.jpg"
        },
        {
          year: "2012",
          model: "Galaxy Note II",
          screen: '5.5" Super AMOLED',
          processor: "Exynos 4412 / Snapdragon 600",
          ramStorage: "2 GB / 16–64 GB",
          battery: "3.100 mAh",
          camera: "8 MP",
          image: "1001259241.jpg"
        },
        {
          year: "2013",
          model: "Galaxy Note 3",
          screen: '5.7" Super AMOLED (1080p)',
          processor: "Snapdragon 800 / Exynos 5 Octa",
          ramStorage: "3 GB / 32–64 GB",
          battery: "3.200 mAh",
          camera: "13 MP",
          image: "1001259263.jpg"
        },
        {
          year: "2014",
          model: "Galaxy Note 4",
          screen: '5.7" Super AMOLED (1440p)',
          processor: "Snapdragon 805 / Exynos 5 Octa",
          ramStorage: "3 GB / 32 GB",
          battery: "3.220 mAh",
          camera: "16 MP",
          image: "1001259275.jpg"
        },
        {
          year: "2015",
          model: "Galaxy Note 5",
          screen: '5.7" Super AMOLED (1440p)',
          processor: "Exynos 7 Octa",
          ramStorage: "4 GB / 32–64 GB",
          battery: "3.000 mAh",
          camera: "16 MP",
          image: "1001259284.jpg"
        },
        {
          year: "2016",
          model: "Galaxy Note 7",
          screen: '5.7" Super AMOLED (1440p)',
          processor: "Snapdragon 820 / Exynos 8890",
          ramStorage: "4 GB / 64 GB",
          battery: "3.500 mAh (original) / 3.200 mAh (FE)",
          camera: "12 MP",
          image: "1001259296.jpg"
        },
        {
          year: "2017",
          model: "Galaxy Note 8",
          screen: '6.3" Super AMOLED (1440p)',
          processor: "Snapdragon 835 / Exynos 8895",
          ramStorage: "6 GB / 64–256 GB",
          battery: "3.300 mAh",
          camera: "12 MP dupla",
          image: "1001259302.jpg"
        },
        {
          year: "2018",
          model: "Galaxy Note 9",
          screen: '6.4" Super AMOLED (1440p)',
          processor: "Snapdragon 845 / Exynos 9810",
          ramStorage: "6–8 GB / 128–512 GB",
          battery: "4.000 mAh",
          camera: "12 MP dupla",
          image: "1001259349.jpg"
        },
        {
          year: "2019",
          model: "Galaxy Note 10",
          screen: '6.3" Dynamic AMOLED (1080p)',
          processor: "Snapdragon 855 / Exynos 9825",
          ramStorage: "8 GB / 256 GB",
          battery: "3.500 mAh",
          camera: "12 MP tripla",
          image: "1001259641.jpg"
        },
        {
          year: "2020",
          model: "Galaxy Note 20",
          screen: '6.7" Super AMOLED Plus (1080p)',
          processor: "Exynos 990 / Snapdragon 865+",
          ramStorage: "8 GB / 256 GB",
          battery: "4.300 mAh",
          camera: "12 MP tripla",
          image: "1001260035.jpg"
        }
      ]
    }
  },
  
  Apple: {
    history: "Fundada em 1976 por Steve Jobs, Steve Wozniak e Ronald Wayne numa garagem, a Apple revolucionou a computação pessoal e transformou radicalmente a indústria de comunicações em 2007 com o lançamento do primeiro iPhone. Hoje, destaca-se pelo seu ecossistema integrado, inovação em hardware e design premium.",
    
    lines: {
      "iPhone": [
        {
          year: "2007",
          model: "iPhone (1ª geração)",
          screen: '3.5" LCD',
          processor: "Samsung S5L8900",
          ramStorage: "128 MB / 4–16 GB",
          battery: "1.400 mAh",
          camera: "2 MP",
          image: "1001256336.jpg"
        },
        {
          year: "2008",
          model: "iPhone 3G",
          screen: '3.5" LCD',
          processor: "Samsung S5L8900",
          ramStorage: "128 MB / 8–16 GB",
          battery: "1.150 mAh",
          camera: "2 MP",
          image: "1001256352.jpg"
        },
        {
          year: "2009",
          model: "iPhone 3GS",
          screen: '3.5" LCD',
          processor: "Samsung S5PC100",
          ramStorage: "256 MB / 8–32 GB",
          battery: "1.219 mAh",
          camera: "3.2 MP",
          image: "1001256391.jpg"
        },
        {
          year: "2010",
          model: "iPhone 4",
          screen: '3.5" Retina LCD',
          processor: "Apple A4",
          ramStorage: "512 MB / 8–32 GB",
          battery: "1.420 mAh",
          camera: "5 MP",
          image: "3106/1001256397.jpg"
        },
        {
          year: "2011",
          model: "iPhone 4s",
          screen: '3.5" Retina LCD',
          processor: "Apple A5",
          ramStorage: "512 MB / 8–64 GB",
          battery: "1.432 mAh",
          camera: "8 MP",
          image: "3107/1001256411.jpg"
        },
        {
          year: "2012",
          model: "iPhone 5",
          screen: '4.0" Retina LCD',
          processor: "Apple A6",
          ramStorage: "1 GB / 16–64 GB",
          battery: "1.440 mAh",
          camera: "8 MP",
          image: "3108/1001256502.jpg"
        },
        {
          year: "2013",
          model: "iPhone 5s",
          screen: '4.0" Retina LCD',
          processor: "Apple A7",
          ramStorage: "1 GB / 16–64 GB",
          battery: "1.560 mAh",
          camera: "8 MP",
          image: "3109/1001256521.jpg"
        },
        {
          year: "2014",
          model: "iPhone 6",
          screen: '4.7" Retina HD LCD',
          processor: "Apple A8",
          ramStorage: "1 GB / 16–128 GB",
          battery: "1.810 mAh",
          camera: "8 MP",
          image: "3110/1001256831.jpg"
        },
        {
          year: "2015",
          model: "iPhone 6s",
          screen: '4.7" Retina HD LCD',
          processor: "Apple A9",
          ramStorage: "2 GB / 16–128 GB",
          battery: "1.715 mAh",
          camera: "12 MP",
          image: "3113/1001256914.jpg"
        },
        {
          year: "2016",
          model: "iPhone 7",
          screen: '4.7" Retina HD LCD',
          processor: "Apple A10 Fusion",
          ramStorage: "2 GB / 32–256 GB",
          battery: "1.960 mAh",
          camera: "12 MP",
          image: "3114/1001256980.jpg"
        },
        {
          year: "2017",
          model: "iPhone 8",
          screen: '4.7" Retina HD LCD',
          processor: "Apple A11 Bionic",
          ramStorage: "2 GB / 64–256 GB",
          battery: "1.821 mAh",
          camera: "12 MP",
          image: "3115/1001257209.jpg"
        },
        {
          year: "2018",
          model: "iPhone XR",
          screen: '6.1" Liquid Retina LCD',
          processor: "Apple A12 Bionic",
          ramStorage: "3 GB / 64–256 GB",
          battery: "2.942 mAh",
          camera: "12 MP",
          image: "3116/1001257286.jpg"
        },
        {
          year: "2019",
          model: "iPhone 11",
          screen: '6.1" Liquid Retina HD LCD',
          processor: "Apple A13 Bionic",
          ramStorage: "4 GB / 64–256 GB",
          battery: "3.110 mAh",
          camera: "12 MP dupla",
          image: "3117/1001257478.jpg"
        },
        {
          year: "2020",
          model: "iPhone 12",
          screen: '6.1" Super Retina XDR OLED',
          processor: "Apple A14 Bionic",
          ramStorage: "4 GB / 64–256 GB",
          battery: "2.815 mAh",
          camera: "12 MP dupla",
          image: "3118/images/iphone-12.jpg"
        },
        {
          year: "2021",
          model: "iPhone 13",
          screen: '6.1" Super Retina XDR OLED',
          processor: "Apple A15 Bionic",
          ramStorage: "4 GB / 128–512 GB",
          battery: "3.240 mAh",
          camera: "12 MP dupla",
          image: "3119/1001257650.jpg"
        },
        {

          year: "2022",
          model: "iPhone 14",
          screen: '6.1" Super Retina XDR OLED',
          processor: "Apple A15 Bionic",
          ramStorage: "6 GB / 128–512 GB",
          battery: "3.279 mAh",
          camera: "12 MP dupla",
          image: "3120/1001257730.jpg"
        },
        {
  year: "2023",
  model: "iPhone 15",
  screen: '6.1" Super Retina XDR OLED',
  processor: "Apple A16 Bionic",
  ramStorage: "6 GB / 128–512 GB",
  battery: "3.349 mAh",
  camera: "48 MP + 12 MP",
  image: "3257/1001265144.jpg"
        },
        {
            
           year: "2024",
           model: "iPhone 16",
           screen: '6.1" Super Retina XDR OLED',
           processor: "Apple A18",
           ramStorage: "8 GB / 128–512 GB",
           battery: "3.561 mAh",
           camera: "48 MP + 12 MP",
           image: "1001258591/1001258463.jpg"
          
        },
        {
        
            year: "2025",
            model: "iPhone 17",
            screen: '6.3" Super Retina XDR OLED, ProMotion 120Hz',
            processor: "Apple A19",
            ramStorage: "8 GB / 256–512 GB",
            battery: "Confirmar capacidade em mAh",
            camera: "48 MP dupla",
            frontCamera: "18 MP Center Stage",
           image: "3126/1001258604.jpg"
             
        }

      ],  
      "iPhone Plus": [
        {
      
           year: "2014",
           model: "iPhone 6 Plus",
           screen: '5.5" IPS LCD (1080p)',
           processor: "Apple A8",
           ramStorage: "1 GB / 16, 64, 128 GB",
           battery: "2.915 mAh",
           camera: "8 MP",
           image: "3127/1001259068.jpg"
         
        },
        {
            year: "2015",
            model: "iPhone 6s Plus",
            screen: '5.5" IPS LCD (1080p)',
            processor: "Apple A9",
            ramStorage: "2 GB / 16, 32, 64, 128 GB",
            battery: "2.750 mAh",
            camera: "12 MP",
            image: "3128/1001259080.jpg"
        },
        {
            year: "2016",
            model: "iPhone 7 Plus",
           screen: '5.5" IPS LCD (1080p)',
           processor: "Apple A10 Fusion",
           ramStorage: "3 GB / 32, 128, 256 GB",
           battery: "2.900 mAh",
           camera: "12 MP dupla",
           image: "3129/1001259086.jpg"
        },
        {
            year: "2017",
            model: "iPhone 8 Plus",
            screen: '5.5" IPS LCD (1080p)',
            processor: "Apple A11 Bionic",
            ramStorage: "3 GB / 64, 256 GB",
            battery: "2.675 mAh",
            camera: "12 MP dupla",
            image: "3130/1001259106.jpg"
        },
        {
            year: "2022",
            model: "iPhone 14 Plus",
            screen: '6.7" OLED (2778x1284)',
            processor: "Apple A15 Bionic",
            ramStorage: "6 GB / 128, 256, 512 GB",
            battery: "4.325 mAh",
            camera: "12 MP dupla",
            image: "3131/1001259130.jpg"
        },
        {   
          year: "2023",
          model: "iPhone 15 Plus",
          screen: '6.7" OLED (2796x1290)',
          processor: "Apple A16 Bionic",
          ramStorage: "6 GB / 128, 256, 512 GB",
          battery: "4.383 mAh",
          camera: "48 MP dupla",
          image: "3132/1001259145.jpg"
        }, 
        {
          year: "2024",
          model: "iPhone 16 Plus",
          screen: '6.7" OLED (2796x1290)',
          processor: "Apple A18",
          ramStorage: "8 GB / 128, 256, 512 GB",
          battery: "4.674 mAh",
          camera: "48 MP dupla",
          image: "3133/1001259158.jpg"
        },
    
      ],
      "iPhone Pro": [
        {
          year: "2019",
          model: "iPhone 11 Pro",
          screen: '5.8" Super Retina XDR OLED',
          processor: "Apple A13 Bionic",
          ramStorage: "4 GB / 64–512 GB",
          battery: "3.046 mAh",
          camera: "12 MP tripla",
          image: "3088/1001255589.jpg"
        },
        {
          year: "2020",
          model: "iPhone 12 Pro",
          screen: '6.1" Super Retina XDR OLED',
          processor: "Apple A14 Bionic",
          ramStorage: "6 GB / 128–512 GB",
          battery: "2.815 mAh",
          camera: "12 MP tripla",
          image: "3089/1001255611.jpg"
        },
        {
          year: "2021",
          model: "iPhone 13 Pro",
          screen: '6.1" Super Retina XDR OLED, ProMotion 120Hz',
          processor: "Apple A15 Bionic",
          ramStorage: "6 GB / 128 GB–1 TB",
          battery: "3.095 mAh",
          camera: "12 MP tripla",
          image: "3090/1001255661.jpg"
        },
        {
          year: "2022",
          model: "iPhone 14 Pro",
          screen: '6.1" Super Retina XDR OLED, ProMotion 120Hz',
          processor: "Apple A16 Bionic",
          ramStorage: "6 GB / 128 GB–1 TB",
          battery: "3.200 mAh",
          camera: "48 MP tripla",
          image: "3091/1001255670.jpg"
        },
        {
          year: "2023",
          model: "iPhone 15 Pro",
          screen: '6.1" Super Retina XDR OLED, ProMotion 120Hz',
          processor: "Apple A17 Pro",
          ramStorage: "8 GB / 128 GB–1 TB",
          battery: "3.274 mAh",
          camera: "48 MP tripla",
          image: "3092/1001255687.jpg"
        },
        {
          year: "2024",
          model: "iPhone 16 Pro",
          screen: '6.3" Super Retina XDR OLED, ProMotion 120Hz',
          processor: "Apple A18 Pro",
          ramStorage: "8 GB / 128 GB–1 TB",
          battery: "3.582 mAh",
          camera: "48 MP tripla",
          image: "3134/1001259179.jpg"
        },
        {
          year: "2025",
          model: "iPhone 17 Pro",
          screen: '6.3" Super Retina XDR OLED, ProMotion 120Hz',
          processor: "Apple A19 Pro",
          ramStorage: "Confirmar RAM / armazenamento oficial",
          battery: "Confirmar capacidade em mAh",
          camera: "48 MP tripla",
          image: "3093/1001255696.jpg"
        },
        {
          year: "2026",
          model: "iPhone 18 Pro",
          screen: '6.3" Super Retina XDR OLED, 2622x1206, ProMotion 120Hz',
          processor: "Apple A20 Pro (6 núcleos CPU, 7 núcleos GPU)",
          ramStorage: "8 GB / 256 GB–2 TB",
          battery: "Até 34 horas (vídeo)",
          camera: "Tripla: 48 MP + 48 MP + 48 MP",
          frontCamera: "Não especificada",
          zoom: "Óptico 4x e 8x, digital até 40x",
          dimensions: "150.0 x 71.9 x 8.75 mm, 211 g",
          resistance: "IP68 (até 6m, 30 min)",
          image: "3094/1001255704.jpg"
        }
      ],
      "iPhone Pro Max": [
        {
          year: "2019",
          model: "iPhone 11 Pro Max",
          screen: '6.5" Super Retina XDR OLED',
          processor: "Apple A13 Bionic",
          ramStorage: "4 GB / 64–512 GB",
          battery: "3.969 mAh",
          camera: "12 MP tripla",
          image: "3095/1001255726.jpg"
        },
        {
          year: "2020",
          model: "iPhone 12 Pro Max",
          screen: '6.7" Super Retina XDR OLED',
          processor: "Apple A14 Bionic",
          ramStorage: "6 GB / 128–512 GB",
          battery: "3.687 mAh",
          camera: "12 MP tripla",
          image: "3096/1001255756.jpg"
        },
        {
          year: "2021",
          model: "iPhone 13 Pro Max",
          screen: '6.7" Super Retina XDR OLED, ProMotion 120Hz',
          processor: "Apple A15 Bionic",
          ramStorage: "6 GB / 128 GB–1 TB",
          battery: "4.352 mAh",
          camera: "12 MP tripla",
          image: "3097/1001255762.jpg"
        },
        {
          year: "2022",
          model: "iPhone 14 Pro Max",
          screen: '6.7" Super Retina XDR OLED, ProMotion 120Hz',
          processor: "Apple A16 Bionic",
          ramStorage: "6 GB / 128 GB–1 TB",
          battery: "4.323 mAh",
          camera: "48 MP tripla",
          image: "3098/1001255768.jpg"
        },
        {
          year: "2023",
          model: "iPhone 15 Pro Max",
          screen: '6.7" Super Retina XDR OLED, ProMotion 120Hz',
          processor: "Apple A17 Pro",
          ramStorage: "8 GB / 256 GB–1 TB",
          battery: "4.441 mAh",
          camera: "48 MP tripla",
          image: "3099/1001255774.jpg"
        },
        {
          year: "2024",
          model: "iPhone 16 Pro Max",
          screen: '6.9" Super Retina XDR OLED, ProMotion 120Hz',
          processor: "Apple A18 Pro",
          ramStorage: "8 GB / 256 GB–1 TB",
          battery: "4.685 mAh",
          camera: "48 MP tripla",
          image: "3100/1001256122.jpg"
        },
        {
          year: "2025",
          model: "iPhone 17 Pro Max",
          screen: '6.9" Super Retina XDR OLED, ProMotion 120Hz',
          processor: "Apple A19 Pro",
          ramStorage: "Confirmar RAM / armazenamento oficial",
          battery: "Confirmar capacidade em mAh",
          camera: "48 MP tripla",
          image: "3101/iPhone.jpg"
        },
        {
          year: "2026",
          model: "iPhone 18 Pro Max",
          screen: '6.9" Super Retina XDR OLED, 2868x1320, ProMotion 120Hz',
          processor: "Apple A20 Pro (6 núcleos CPU, 7 núcleos GPU)",
          ramStorage: "8 GB / 256 GB–2 TB",
          battery: "Até 43 horas (vídeo)",
          camera: "Tripla: 48 MP + 48 MP + 48 MP",
          frontCamera: "Não especificada",
          zoom: "Óptico 4x e 8x, digital até 40x",
          dimensions: "163.4 x 78.0 x 8.75 mm, 249 g",
          resistance: "IP68 (até 6m, 30 min)",
          image: "2623/images/iphone-vermelho.jpg"
        }
      ],
      "iPhone SE": [
        {
          year: "2016",
          model: "iPhone SE (1ª geração)",
          screen: '4.0" Retina LCD',
          processor: "Apple A9",
          ramStorage: "2 GB / 16–128 GB",
          battery: "1.624 mAh",
          camera: "12 MP",
          image: "3074/1001254585.jpg"
        },
        {
          year: "2020",
          model: "iPhone SE (2ª geração)",
          screen: '4.7" Retina HD LCD',
          processor: "Apple A13 Bionic",
          ramStorage: "3 GB / 64–256 GB",
          battery: "1.821 mAh",
          camera: "12 MP",
          image: "3083/1001255039.jpg"
        },
        {
          year: "2022",
          model: "iPhone SE (3ª geração)",
          screen: '4.7" Retina HD LCD',
          processor: "Apple A15 Bionic",
          ramStorage: "4 GB / 64–256 GB",
          battery: "2.018 mAh",
          camera: "12 MP",
          image: "3084/1001255049.jpg"
        }
      ],
      "iPhone Fold": [
        {
          year: "2026",
          model: "iPhone Fold (1ª geração)",
          screen: '7.8" Dobrável OLED interno + 5.5" externo',
          processor: "Apple A20 Pro",
          ramStorage: "12 GB / 512 GB–1 TB",
          battery: "4.500 mAh",
          camera: "Dupla: 48 MP + 48 MP",
          frontCamera: "12 MP",
          resistance: "Dobradiça de titânio / IPX8",
          image: "3086/Apple.jpg"
        }
      ]
    }
  },

  Xiaomi: {
    history: "Fundada em 2010 na China por Lei Jun, a Xiaomi rapidamente se tornou uma gigante tecnológica global graças à sua filosofia de oferecer hardware de alta qualidade a preços justos. Expandiu-se massivamente para o ecossistema inteligente e destaca-se hoje pelas suas parcerias fotográficas de topo e inovação móvel constante.",
    lines: {
      "Xiaomi Number Series": [
        { year: "2011", model: "Xiaomi Mi 1", screen: '4.0" LCD', processor: "Snapdragon S3", ramStorage: "1 GB / 4 GB", battery: "1.930 mAh", camera: "8 MP", image: "3057/1001253674.jpg" },
        { year: "2012", model: "Xiaomi Mi 2", screen: '4.3" LCD', processor: "Snapdragon S4 Pro", ramStorage: "2 GB / 16–32 GB", battery: "2.000 mAh", camera: "8 MP", image: "3058/1001253685.jpg" },
        { year: "2013", model: "Xiaomi Mi 3", screen: '5.0" LCD', processor: "Snapdragon 800", ramStorage: "2 GB / 16–64 GB", battery: "3.050 mAh", camera: "13 MP", image: "3060/images/xiaomi-mi3.jpg" },
        { year: "2014", model: "Xiaomi Mi 4", screen: '5.0" LCD', processor: "Snapdragon 801", ramStorage: "3 GB / 16–64 GB", battery: "3.080 mAh", camera: "13 MP", image: "3061/images/xiaomi-mi4.jpg" },
        { year: "2015", model: "Xiaomi Mi 5", screen: '5.15" LCD', processor: "Snapdragon 820", ramStorage: "3–4 GB / 32–128 GB", battery: "3.000 mAh", camera: "16 MP", image: "3062/1001253719.jpg" },
        { year: "2016", model: "Xiaomi Mi 5s", screen: '5.15" LCD', processor: "Snapdragon 821", ramStorage: "3–4 GB / 64–128 GB", battery: "3.200 mAh", camera: "12 MP", image: "3063/1001253729.jpg" },
        { year: "2017", model: "Xiaomi Mi 6", screen: '5.15" LCD', processor: "Snapdragon 835", ramStorage: "4–6 GB / 64–128 GB", battery: "3.350 mAh", camera: "12 MP dupla", image: "3064/1001253740.jpg" },
        { year: "2018", model: "Xiaomi Mi 8", screen: '6.21" AMOLED', processor: "Snapdragon 845", ramStorage: "6–8 GB / 64–256 GB", battery: "3.400 mAh", camera: "12 MP dupla", image: "3065/1001253746.jpg" },
        { year: "2019", model: "Xiaomi Mi 9", screen: '6.39" AMOLED', processor: "Snapdragon 855", ramStorage: "6–8 GB / 64–256 GB", battery: "3.300 mAh", camera: "48 MP tripla", image: "3066/1001253755.jpg" },
        { year: "2020", model: "Xiaomi Mi 10", screen: '6.67" AMOLED 90Hz', processor: "Snapdragon 865", ramStorage: "6–12 GB / 128–256 GB", battery: "4.780 mAh", camera: "108 MP quádrupla", image: "3067/1001253814.jpg" },
        { year: "2021", model: "Xiaomi Mi 11", screen: '6.81" AMOLED 120Hz', processor: "Snapdragon 888", ramStorage: "8–12 GB / 128–256 GB", battery: "4.600 mAh", camera: "108 MP tripla", image: "3068/Xiaomi.jpg" },
        { year: "2022", model: "Xiaomi 12", screen: '6.28" AMOLED 120Hz', processor: "Snapdragon 8 Gen 1", ramStorage: "8–12 GB / 128–256 GB", battery: "4.500 mAh", camera: "50 MP tripla", image: "3069/images/xiaomi-12-azul.jpg" },
        { year: "2023", model: "Xiaomi 13", screen: '6.36" AMOLED 120Hz', processor: "Snapdragon 8 Gen 2", ramStorage: "8–12 GB / 128–512 GB", battery: "4.500 mAh", camera: "50 MP tripla", image: "3070/images/xiaomi-13-vermelho.jpg" },
        { year: "2024", model: "Xiaomi 14", screen: '6.36" AMOLED 120Hz', processor: "Snapdragon 8 Gen 3", ramStorage: "8–16 GB / 256 GB–1 TB", battery: "4.610 mAh", camera: "50 MP tripla", image: "3071/1001254318.jpg" },
        { year: "2025", model: "Xiaomi 15", screen: '6.36" AMOLED 120Hz', processor: "Snapdragon 8 Elite", ramStorage: "12–16 GB / 256 GB–1 TB", battery: "5.400 mAh", camera: "50 MP tripla", image: "3072/1001254544.jpg" },
        { year: "2026", model: "Xiaomi 17", screen: '6.36" AMOLED 120Hz', processor: "Snapdragon 8 Elite Gen 5", ramStorage: "12–16 GB / 256 GB–1 TB", battery: "6.000 mAh", camera: "50 MP tripla", image: "3073/1001254569.jpg" },
        { year: "2026", model: "Xiaomi 17 Pro Max", screen: '6.9" LTPO AMOLED, 1.5K (2670x1200), 120Hz, 3.500 nits + 2.9" traseiro', processor: "Snapdragon 8 Elite Gen 5 (3nm)", ramStorage: "12–16 GB LPDDR5X / 512 GB–1 TB UFS 4.1", battery: "7.500 mAh (100W fio, 50W sem fio, 22.5W inverso)", camera: "Tripla 50 MP: f/1.67 (OIS) + f/2.4 ultra-wide + f/2.6 periscópio (OIS, 5x)", frontCamera: "50 MP", zoom: "Óptico 5x", dimensions: "162.9 x 77.6 x 8.0 mm, 219 g", os: "Android 16 com HyperOS 3", price: "A partir de CNY 5.999 (12/512 GB)", image: "3075/1001254776.jpg" },
        { 
          year: "2026", 
          model: "Xiaomi 18 Pro Max", 
          screen: '6.9" LTPO AMOLED, 1.5K (2624x1208), 120Hz, 4.000 nits + 2.9" AMOLED traseiro (976x596)', 
          processor: "Snapdragon 8 Elite Gen 6 Extreme Edition (2nm)", 
          ramStorage: "12–16 GB RAM / 256 GB–1 TB", 
          battery: "8.500 mAh (China) / 7.050 mAh (Europa), 100W", 
          camera: "Leica dupla: 200 MP (principal) + 200 MP (periscópio 3,2x) + 50 MP ultra-wide", 
          frontCamera: "50 MP", 
          os: "HyperOS 4 baseado em Android 17", 
          price: "A partir de 6.999 yuan (aprox. 12 GB/512 GB)",
          image: "3085/1001255270.jpg"
        }
      ],
      "Xiaomi Civi": [
        { year: "2021", model: "Xiaomi Civi", screen: '6.55" OLED, 120Hz', processor: "Snapdragon 778G", ramStorage: "8/12 GB · 128/256 GB", battery: "4.500 mAh (55W)", camera: "64 MP + 8 MP + 2 MP", frontCamera: "32 MP", image: "3076/1001254914.jpg" },
        { year: "2022", model: "Xiaomi Civi 1S", screen: '6.55" OLED, 120Hz', processor: "Snapdragon 778G+", ramStorage: "8/12 GB · 128/256 GB", battery: "4.500 mAh (55W)", camera: "64 MP + 8 MP + 2 MP", frontCamera: "32 MP", image: "3077/1001254921.jpg" },
        { year: "2022", model: "Xiaomi Civi 2", screen: '6.55" AMOLED, 120Hz', processor: "Snapdragon 7 Gen 1", ramStorage: "8/12 GB · 128/256 GB", battery: "4.500 mAh (67W)", camera: "50 MP + 20 MP + 2 MP", frontCamera: "32 MP + 32 MP", image: "3078/1001254927.jpg" },
        { year: "2023", model: "Xiaomi Civi 3", screen: '6.55" AMOLED, 120Hz', processor: "Dimensity 8200 Ultra", ramStorage: "12/16 GB · 256 GB–1 TB", battery: "4.500 mAh (67W)", camera: "50 MP + 8 MP + 2 MP", frontCamera: "32 MP + 32 MP", image: "3079/1001254933.jpg" },
        { year: "2024", model: "Xiaomi Civi 4 Pro", screen: '6.55" AMOLED, 120Hz', processor: "Snapdragon 8s Gen 3", ramStorage: "12/16 GB · 256/512 GB", battery: "4.700 mAh (67W)", camera: "50 MP + 50 MP (tele) + 12 MP", frontCamera: "32 MP + 32 MP", image: "3081/1001254940.jpg" },
        { year: "2025", model: "Xiaomi Civi 5 Pro", screen: '6.55" OLED 1.5K, 120Hz', processor: "Snapdragon 8s Gen 4", ramStorage: "12/16 GB · 256/512 GB", battery: "6.000 mAh (67W)", camera: "50 MP Leica tripla", frontCamera: "50 MP", image: "3082/1001255027.jpg" }
      ],
      "Xiaomi T Series": [
        { year: "2019", model: "Xiaomi Mi 9T", screen: '6.39" AMOLED', processor: "Snapdragon 730", ramStorage: "6 GB / 64–128 GB", battery: "4.000 mAh", camera: "48 MP tripla", image: "3051/1001253606.jpg" },
        { year: "2020", model: "Xiaomi Mi 10T Pro", screen: '6.67" LCD 144Hz', processor: "Snapdragon 865", ramStorage: "8 GB / 128–256 GB", battery: "5.000 mAh", camera: "108 MP tripla", image: "3052/1001253615.jpg" },
        { year: "2021", model: "Xiaomi 11T Pro", screen: '6.67" AMOLED 120Hz', processor: "Snapdragon 888", ramStorage: "8–12 GB / 128–256 GB", battery: "5.000 mAh", camera: "108 MP tripla", image: "3053/1001253622.jpg" },
        { year: "2022", model: "Xiaomi 12T Pro", screen: '6.67" AMOLED 120Hz', processor: "Snapdragon 8+ Gen 1", ramStorage: "8–12 GB / 128–256 GB", battery: "5.000 mAh", camera: "200 MP tripla", image: "3054/1001253637.jpg" },
        { year: "2023", model: "Xiaomi 13T Pro", screen: '6.67" AMOLED 144Hz', processor: "MediaTek Dimensity 9200+", ramStorage: "12–16 GB / 256 GB–1 TB", battery: "5.000 mAh", camera: "50 MP tripla", image: "3055/1001253643.jpg" },
        { year: "2024", model: "Xiaomi 14T Pro", screen: '6.67" AMOLED 144Hz', processor: "MediaTek Dimensity 9300+", ramStorage: "12–16 GB / 256 GB–1 TB", battery: "5.000 mAh", camera: "50 MP tripla", image: "3056/1001253655.jpg" }
      ],
      "Xiaomi Ultra": [
        { year: "2021", model: "Xiaomi Mi 11 Ultra", screen: '6.81" AMOLED 120Hz', processor: "Snapdragon 888", ramStorage: "8–12 GB / 256–512 GB", battery: "5.000 mAh", camera: "50 MP tripla", image: "3036/1001253333.jpg" },
        { year: "2022", model: "Xiaomi 12S Ultra", screen: '6.73" LTPO AMOLED 120Hz', processor: "Snapdragon 8+ Gen 1", ramStorage: "8–12 GB / 256–512 GB", battery: "4.860 mAh", camera: "50 MP tripla", image: "3037/1001253343.jpg" },
        { year: "2023", model: "Xiaomi 13 Ultra", screen: '6.73" LTPO AMOLED 120Hz', processor: "Snapdragon 8 Gen 2", ramStorage: "12–16 GB / 256 GB–1 TB", battery: "5.000 mAh", camera: "50 MP quádrupla", image: "3038/1001253350.jpg" },
        { year: "2024", model: "Xiaomi 14 Ultra", screen: '6.73" LTPO AMOLED 120Hz', processor: "Snapdragon 8 Gen 3", ramStorage: "12–16 GB / 256 GB–1 TB", battery: "5.300 mAh", camera: "50 MP quádrupla", image: "3050/1001253369.jpg" }
      ]
    }
  },

  Redmi: {
    history: "Lançada em 2013 como uma linha de smartphones acessíveis da Xiaomi, a Redmi tornou-se uma submarca independente em 2019. Reconhecida mundialmente por oferecer especificações equilibradas, baterias de longa duração e excelente relação qualidade-preço, é responsável por democratizar o acesso à tecnologia móvel para milhões de utilizadores.", 
    lines: {
      "Redmi Note": [
        { year: "2014", model: "Redmi Note", screen: '5.5" LCD', processor: "MediaTek MT6592", ramStorage: "1–2 GB / 8 GB", battery: "3.200 mAh", camera: "13 MP", image: "3019/1001252579.jpg" },
        { year: "2015", model: "Redmi Note 3", screen: '5.5" LCD', processor: "Snapdragon 650", ramStorage: "2–3 GB / 16–32 GB", battery: "4.050 mAh", camera: "16 MP", image: "3020/1001252585.jpg" },
        { year: "2016", model: "Redmi Note 4", screen: '5.5" LCD', processor: "Snapdragon 625", ramStorage: "2–4 GB / 32–64 GB", battery: "4.100 mAh", camera: "13 MP", image: "3021/1001252594.jpg" },
        { year: "2017", model: "Redmi Note 5", screen: '5.99" LCD', processor: "Snapdragon 636", ramStorage: "3–6 GB / 32–64 GB", battery: "4.000 mAh", camera: "12 MP dupla", image: "3022/1001252602.jpg" },
        { year: "2018", model: "Redmi Note 6 Pro", screen: '6.26" LCD', processor: "Snapdragon 636", ramStorage: "4–6 GB / 64 GB", battery: "4.000 mAh", camera: "12 MP dupla", image: "3023/1001252612.jpg" },
        { year: "2019", model: "Redmi Note 7", screen: '6.3" LCD', processor: "Snapdragon 660", ramStorage: "3–6 GB / 32–128 GB", battery: "4.000 mAh", camera: "48 MP dupla", image: "3024/images/redmi-note-7.jpg" },
        { year: "2019", model: "Redmi Note 8 Pro", screen: '6.53" LCD', processor: "MediaTek Helio G90T", ramStorage: "6–8 GB / 64–128 GB", battery: "4.500 mAh", camera: "64 MP quádrupla", image: "3025/images/redmi-note-8-pro.jpg" },
        { year: "2020", model: "Redmi Note 9 Pro", screen: '6.67" LCD', processor: "Snapdragon 720G", ramStorage: "6 GB / 64–128 GB", battery: "5.020 mAh", camera: "64 MP quádrupla", image: "3026/1001252687.jpg" },
        { year: "2021", model: "Redmi Note 10 Pro", screen: '6.67" AMOLED 120Hz', processor: "Snapdragon 732G", ramStorage: "6–8 GB / 64–128 GB", battery: "5.020 mAh", camera: "108 MP quádrupla", image: "3027/1001253289.jpg" },
        { year: "2022", model: "Redmi Note 11 Pro+", screen: '6.67" AMOLED 120Hz', processor: "MediaTek Dimensity 920", ramStorage: "6–8 GB / 128–256 GB", battery: "4.500 mAh", camera: "108 MP tripla", image: "3028/1001253295.jpg" },
        { year: "2023", model: "Redmi Note 12 Pro+", screen: '6.67" AMOLED 120Hz', processor: "MediaTek Dimensity 1080", ramStorage: "8–12 GB / 256 GB", battery: "5.000 mAh", camera: "200 MP tripla", image: "3029/1001253301.jpg" },
        { year: "2024", model: "Redmi Note 13 Pro+", screen: '6.67" AMOLED 120Hz', processor: "MediaTek Dimensity 7200 Ultra", ramStorage: "8–12 GB / 256–512 GB", battery: "5.000 mAh", camera: "200 MP tripla", image: "3033/1001253316.jpg" },
        { year: "2025", model: "Redmi Note 14 Pro+", screen: '6.67" AMOLED 120Hz', processor: "Snapdragon 7s Gen 3", ramStorage: "8–12 GB / 256–512 GB", battery: "6.200 mAh", camera: "200 MP tripla", image: "3034/1001253322.jpg" }
      ],
      "Redmi K": [
        { year: "2019", model: "Redmi K20 Pro", screen: '6.39" AMOLED', processor: "Snapdragon 855", ramStorage: "6–8 GB / 64–256 GB", battery: "4.000 mAh", camera: "48 MP tripla", image: "3013/1001252206.jpg" },
        { year: "2020", model: "Redmi K30 Pro", screen: '6.67" AMOLED', processor: "Snapdragon 865", ramStorage: "6–8 GB / 128–256 GB", battery: "4.700 mAh", camera: "64 MP quádrupla", image: "3014/1001252250.jpg" },
        { year: "2021", model: "Redmi K40 Pro", screen: '6.67" AMOLED 120Hz', processor: "Snapdragon 888", ramStorage: "6–12 GB / 128–256 GB", battery: "4.520 mAh", camera: "64 MP tripla", image: "3015/1001252488.jpg" },
        { year: "2022", model: "Redmi K50 Pro", screen: '6.67" AMOLED 120Hz', processor: "MediaTek Dimensity 9000", ramStorage: "8–12 GB / 128–512 GB", battery: "5.000 mAh", camera: "108 MP tripla", image: "3016/1001252494.jpg" },
        { year: "2023", model: "Redmi K60 Pro", screen: '6.67" AMOLED 120Hz', processor: "Snapdragon 8 Gen 2", ramStorage: "8–16 GB / 128–512 GB", battery: "5.000 mAh", camera: "54 MP tripla", image: "3017/1001252504.jpg" },
        { year: "2024", model: "Redmi K70 Pro", screen: '6.67" AMOLED 120Hz', processor: "Snapdragon 8 Gen 3", ramStorage: "12–24 GB / 256 GB–1 TB", battery: "5.000 mAh", camera: "50 MP tripla", image: "3018/1001252518.jpg" }
      ],
      "Redmi A": [
        { year: "2022", model: "Redmi A1", screen: '6.52" LCD', processor: "MediaTek Helio A22", ramStorage: "2–3 GB / 32 GB", battery: "5.000 mAh", camera: "8 MP dupla", image: "3010/1001251928.jpg" },
        { year: "2023", model: "Redmi A2", screen: '6.52" LCD', processor: "MediaTek Helio G36", ramStorage: "2–4 GB / 32–128 GB", battery: "5.000 mAh", camera: "8 MP dupla", image: "3011/1001252065.jpg" },
        { year: "2024", model: "Redmi A3", screen: '6.71" LCD 90Hz', processor: "MediaTek Helio G36", ramStorage: "3–6 GB / 64–128 GB", battery: "5.000 mAh", camera: "8 MP dupla", image: "3012/1001252137.jpg" }
      ]
    }
  },

  POCO: {
    history: "Lançada inicialmente em 2018 como uma submarca da Xiaomi com o aclamado POCO F1, a marca tornou-se independente em 2020. Ficou conhecida globalmente pelo conceito de 'killer de flagships', oferecendo desempenho de topo de gama a preços altamente competitivos, focando-se em entusiastas de tecnologia e videojogos móveis.",
    lines: {
      "POCO F": [
        { year: "2018", model: "POCO F1", screen: '6.18" LCD', processor: "Snapdragon 845", ramStorage: "6–8 GB / 64–256 GB", battery: "4.000 mAh", camera: "12 MP dupla", image: "2974/1001248252.jpg" },
        { year: "2020", model: "POCO F2 Pro", screen: '6.67" AMOLED', processor: "Snapdragon 865", ramStorage: "6–8 GB / 128–256 GB", battery: "4.700 mAh", camera: "64 MP quádrupla", image: "2975/1001248384.jpg" },
        { year: "2021", model: "POCO F3", screen: '6.67" AMOLED 120Hz', processor: "Snapdragon 870", ramStorage: "6–8 GB / 128–256 GB", battery: "4.520 mAh", camera: "48 MP tripla", image: "2977/1001248526.jpg" },
        { year: "2022", model: "POCO F4 GT", screen: '6.67" AMOLED 120Hz', processor: "Snapdragon 8 Gen 1", ramStorage: "8–12 GB / 128–256 GB", battery: "4.700 mAh", camera: "64 MP tripla", image: "2978/1001248657.jpg" },
        { year: "2023", model: "POCO F5 Pro", screen: '6.67" AMOLED 120Hz', processor: "Snapdragon 8+ Gen 1", ramStorage: "8–12 GB / 256–512 GB", battery: "5.160 mAh", camera: "64 MP tripla", image: "2979/1001248754.jpg" },
        { year: "2024", model: "POCO F6 Pro", screen: '6.67" AMOLED 120Hz', processor: "Snapdragon 8 Gen 2", ramStorage: "12–16 GB / 256 GB–1 TB", battery: "5.000 mAh", camera: "50 MP tripla", image: "2980/1001249177.jpg" }
      ],
      "POCO X": [
        { year: "2020", model: "POCO X2", screen: '6.67" LCD 120Hz', processor: "Snapdragon 730G", ramStorage: "6–8 GB / 64–256 GB", battery: "4.500 mAh", camera: "64 MP quádrupla", image: "2968/1001248036.jpg" },
        { year: "2020", model: "POCO X3 NFC", screen: '6.67" LCD 120Hz', processor: "Snapdragon 732G", ramStorage: "6–8 GB / 64–128 GB", battery: "5.160 mAh", camera: "64 MP quádrupla", image: "2969/1001248078.jpg" },
        { year: "2021", model: "POCO X3 Pro", screen: '6.67" LCD 120Hz', processor: "Snapdragon 860", ramStorage: "6–8 GB / 128–256 GB", battery: "5.160 mAh", camera: "48 MP quádrupla", image: "2970/1001248211.jpg" },
        { year: "2022", model: "POCO X4 Pro 5G", screen: '6.67" AMOLED 120Hz', processor: "Snapdragon 695", ramStorage: "6–8 GB / 128–256 GB", battery: "5.000 mAh", camera: "108 MP tripla", image: "2971/1001248221.jpg" },
        { year: "2023", model: "POCO X5 Pro 5G", screen: '6.67" AMOLED 120Hz', processor: "Snapdragon 778G", ramStorage: "6–8 GB / 128–256 GB", battery: "5.000 mAh", camera: "108 MP tripla", image: "2972/1001248227.jpg" },
        { year: "2024", model: "POCO X6 Pro", screen: '6.67" AMOLED 120Hz', processor: "MediaTek Dimensity 8300 Ultra", ramStorage: "8–12 GB / 256–512 GB", battery: "5.000 mAh", camera: "64 MP tripla", image: "2973/1001248242.jpg" }
      ],
      "POCO M": [
        { year: "2020", model: "POCO M3", screen: '6.53" LCD', processor: "Snapdragon 662", ramStorage: "4–6 GB / 64–128 GB", battery: "6.000 mAh", camera: "48 MP tripla", image: "2964/1001247973.jpg" },
        { year: "2021", model: "POCO M4 Pro 5G", screen: '6.6" LCD 90Hz', processor: "MediaTek Dimensity 810", ramStorage: "4–8 GB / 64–256 GB", battery: "5.000 mAh", camera: "50 MP dupla", image: "2965/1001247988.jpg" },
        { year: "2022", model: "POCO M5", screen: '6.58" LCD 90Hz', processor: "MediaTek Helio G99", ramStorage: "4–6 GB / 64–128 GB", battery: "5.000 mAh", camera: "50 MP tripla", image: "2966/1001248003.jpg" },
        { year: "2023", model: "POCO M6 Pro", screen: '6.67" AMOLED 120Hz', processor: "Snapdragon 7s Gen 2", ramStorage: "8–12 GB / 256–512 GB", battery: "5.000 mAh", camera: "64 MP tripla", image: "2967/1001248026.jpg" }
      ],
      "POCO C": [
        { year: "2022", model: "POCO C40", screen: '6.71" LCD', processor: "JLQ JR510", ramStorage: "3–4 GB / 32–64 GB", battery: "6.000 mAh", camera: "13 MP dupla", image: "2961/1001246862.jpg" },
        { year: "2023", model: "POCO C55", screen: '6.71" LCD', processor: "MediaTek Helio G85", ramStorage: "4–6 GB / 64–128 GB", battery: "5.000 mAh", camera: "50 MP dupla", image: "2962/images/poco-c55.jpg" },
        { year: "2024", model: "POCO C65", screen: '6.74" LCD 90Hz', processor: "MediaTek Helio G85", ramStorage: "6–8 GB / 128–256 GB", battery: "5.000 mAh", camera: "50 MP tripla", image: "2963/images/poco-azul.jpg" }
      ]
    }
  },

  Huawei: {
    history: "Fundada em 1987 na China por Ren Zhengfei, a Huawei cresceu para se tornar uma das maiores gigantes de telecomunicações e tecnologia do mundo. Apesar dos desafios geopolíticos recentes que a levaram a desenvolver o seu próprio sistema (HarmonyOS) e processadores Kirin (como a série Pura e Mate), continua a ser uma referência global em inovação fotográfica e hardware premium.",
    lines: {
      "Huawei P Series": [
        { year: "2012", model: "Ascend P1", screen: '4.3" Super AMOLED', processor: "TI OMAP 4460", ramStorage: "1 GB / 4 GB", battery: "1.670 mAh", camera: "8 MP", image: "2997/1001250879.jpg" },
        { year: "2013", model: "Ascend P6", screen: '4.7" LCD', processor: "HiSilicon K3V2", ramStorage: "2 GB / 8–16 GB", battery: "2.000 mAh", camera: "8 MP", image: "2998/1001250932.jpg" },
        { year: "2014", model: "Ascend P7", screen: '5.0" LCD', processor: "HiSilicon Kirin 910T", ramStorage: "2 GB / 16 GB", battery: "2.500 mAh", camera: "13 MP", image: "2999/1001251015.jpg" },
        { year: "2015", model: "P8", screen: '5.2" LCD', processor: "Kirin 930", ramStorage: "3 GB / 16–64 GB", battery: "2.680 mAh", camera: "13 MP", image: "3000/1001251144.jpg" },
        { year: "2016", model: "P9", screen: '5.2" LCD', processor: "Kirin 955", ramStorage: "3–4 GB / 32–64 GB", battery: "3.000 mAh", camera: "12 MP dupla", image: "3001/1001251228.jpg" },
        { year: "2017", model: "P10", screen: '5.1" LCD', processor: "Kirin 960", ramStorage: "4 GB / 32–64 GB", battery: "3.200 mAh", camera: "20 MP + 12 MP", image: "3002/1001251267.jpg" },
        { year: "2018", model: "P20 Pro", screen: '6.1" OLED', processor: "Kirin 970", ramStorage: "6 GB / 64–256 GB", battery: "4.000 mAh", camera: "40 MP tripla", image: "3003/huawei-smartphone.jpg" },
        { year: "2019", model: "P30 Pro", screen: '6.47" OLED', processor: "Kirin 980", ramStorage: "6–8 GB / 128–512 GB", battery: "4.200 mAh", camera: "40 MP quádrupla", image: "3004/huawei-p30.jpg" },
        { year: "2020", model: "P40 Pro", screen: '6.58" OLED 90Hz', processor: "Kirin 990 5G", ramStorage: "8 GB / 128–512 GB", battery: "4.200 mAh", camera: "50 MP quádrupla", image: "3005/1001251521.jpg" },
        { year: "2021", model: "P50 Pro", screen: '6.6" OLED 120Hz', processor: "Snapdragon 888 / Kirin 9000", ramStorage: "8–12 GB / 128–512 GB", battery: "4.360 mAh", camera: "50 MP quádrupla", image: "3007/1001251528.jpg" },
        { year: "2022", model: "P50 Pocket", screen: '6.9" OLED dobrável', processor: "Snapdragon 888", ramStorage: "8–12 GB / 256–512 GB", battery: "4.000 mAh", camera: "40 MP dupla", image: "3008/1001251538.jpg" },
        { year: "2023", model: "P60 Pro", screen: '6.67" LTPO OLED 120Hz', processor: "Snapdragon 8+ Gen 1", ramStorage: "8–12 GB / 256–512 GB", battery: "4.815 mAh", camera: "48 MP tripla", image: "3009/1001251548.jpg" }
      ],
      "Huawei Pura Series": [
        { year: "2024", model: "Pura 70 Ultra", screen: '6.8" LTPO OLED 120Hz', processor: "Kirin 9010", ramStorage: "12–16 GB / 256 GB–1 TB", battery: "5.200 mAh", camera: "50 MP tripla", image: "2981/1001249183.jpg" },
        { year: "2025", model: "Pura 80 Pro", screen: '6.8" LTPO OLED 120Hz', processor: "Kirin 9020", ramStorage: "12–16 GB / 256 GB–1 TB", battery: "5.200 mAh", camera: "50 MP tripla", image: "2982/1001249656.jpg" },
        { year: "2026", model: "Pura 90 Pro", screen: '6.8" LTPO OLED 120Hz', processor: "Kirin 9030", ramStorage: "12–16 GB / 256 GB–1 TB", battery: "5.500 mAh", camera: "50 MP tripla", image: "2983/huawei-smartphone.jpg" }
      ],
      "Huawei Mate Series": [
        { year: "2013", model: "Ascend Mate", screen: '6.1" LCD', processor: "HiSilicon K3V2", ramStorage: "1–2 GB / 8–16 GB", battery: "4.050 mAh", camera: "8 MP", image: "2984/1001249942.jpg" },
        { year: "2015", model: "Mate 8", screen: '6.0" LCD', processor: "Kirin 950", ramStorage: "3–4 GB / 32–128 GB", battery: "4.000 mAh", camera: "16 MP", image: "2989/1001249954.jpg" },
        { year: "2016", model: "Mate 9", screen: '5.9" LCD', processor: "Kirin 960", ramStorage: "4 GB / 64–128 GB", battery: "4.000 mAh", camera: "20 MP dupla", image: "2990/1001250473.jpg" },
        { year: "2017", model: "Mate 10 Pro", screen: '6.0" OLED', processor: "Kirin 970", ramStorage: "4–6 GB / 64–128 GB", battery: "4.000 mAh", camera: "20 MP dupla", image: "2991/1001250482.jpg" },
        { year: "2018", model: "Mate 20 Pro", screen: '6.39" OLED', processor: "Kirin 980", ramStorage: "6–8 GB / 128–256 GB", battery: "4.200 mAh", camera: "40 MP tripla", image: "2992/1001250488.jpg" },
        { year: "2019", model: "Mate 30 Pro", screen: '6.53" OLED', processor: "Kirin 990", ramStorage: "6–8 GB / 128–256 GB", battery: "4.500 mAh", camera: "40 MP quádrupla", image: "2993/1001250639.jpg" },
        { year: "2020", model: "Mate 40 Pro", screen: '6.76" OLED 90Hz', processor: "Kirin 9000", ramStorage: "8 GB / 128–512 GB", battery: "4.400 mAh", camera: "50 MP tripla", image: "2994/1001250651.jpg" },
        { year: "2023", model: "Mate 60 Pro", screen: '6.82" LTPO OLED 120Hz', processor: "Kirin 9000S", ramStorage: "12 GB / 256 GB–1 TB", battery: "5.000 mAh", camera: "50 MP tripla", image: "2995/1001250675.jpg" },
        { year: "2024", model: "Mate 70 Pro", screen: '6.7" LTPO OLED 120Hz', processor: "Kirin 9020", ramStorage: "12–16 GB / 256 GB–1 TB", battery: "5.200 mAh", camera: "50 MP tripla", image: "2996/huawei-mate.jpg" }
      ]
    }
  },

  HONOR: {
    history: "Fundada em 2013 originalmente como uma sub-marca da Huawei focada em smartphones de excelente relação qualidade-preço para o público jovem, a HONOR tornou-se uma empresa totalmente independente em 2020. Desde então, tem-se consolidado no mercado global de smartphones de topo (como a aclamada série Magic) combinando design inovador, tecnologia de ponta e o pleno suporte aos serviços Google.",
    lines: {
      "HONOR Number Series": [
        { year: "2013", model: "Honor 3", screen: '4.7" LCD', processor: "HiSilicon K3V2", ramStorage: "2 GB / 8 GB", battery: "2.230 mAh", camera: "13 MP", image: "2952/Huawei.jpg" },
        { year: "2014", model: "Honor 6", screen: '5.0" LCD', processor: "Kirin 920", ramStorage: "3 GB / 16–32 GB", battery: "3.100 mAh", camera: "13 MP", image: "2953/1001246742.jpg" },
        { year: "2015", model: "Honor 7", screen: '5.2" LCD', processor: "Kirin 935", ramStorage: "3 GB / 16–64 GB", battery: "3.100 mAh", camera: "20 MP", image: "2954/1001246752.jpg" },
        { year: "2016", model: "Honor 8", screen: '5.2" LCD', processor: "Kirin 950", ramStorage: "4 GB / 32–64 GB", battery: "3.000 mAh", camera: "12 MP dupla", image: "2956/1001246767.jpg" },
        { year: "2017", model: "Honor 9", screen: '5.15" LCD', processor: "Kirin 960", ramStorage: "4–6 GB / 64–128 GB", battery: "3.200 mAh", camera: "20 MP dupla", image: "2957/1001246776.jpg" },
        { year: "2018", model: "Honor 10", screen: '5.84" LCD', processor: "Kirin 970", ramStorage: "4–6 GB / 64–128 GB", battery: "3.400 mAh", camera: "16 MP dupla", image: "2958/1001246789.jpg" },
        { year: "2019", model: "Honor 20 Pro", screen: '6.26" LCD', processor: "Kirin 980", ramStorage: "8 GB / 128–256 GB", battery: "4.000 mAh", camera: "48 MP quádrupla", image: "2959/1001246810.jpg" },
        { year: "2020", model: "Honor 30 Pro+", screen: '6.57" OLED 90Hz', processor: "Kirin 990 5G", ramStorage: "8–12 GB / 128–256 GB", battery: "4.000 mAh", camera: "50 MP tripla", image: "2960/1001246825.jpg" }
      ],
      "HONOR Magic": [
        { year: "2021", model: "Honor Magic 3 Pro", screen: '6.76" OLED 120Hz', processor: "Snapdragon 888+", ramStorage: "8–12 GB / 256 GB", battery: "4.600 mAh", camera: "50 MP tripla", image: "2946/1001246336.jpg" },
        { year: "2022", model: "Honor Magic 4 Pro", screen: '6.81" LTPO OLED 120Hz', processor: "Snapdragon 8 Gen 1", ramStorage: "8–12 GB / 256–512 GB", battery: "4.600 mAh", camera: "50 MP tripla", image: "2948/1001246386.jpg" },
        { year: "2023", model: "Honor Magic 5 Pro", screen: '6.81" LTPO OLED 120Hz', processor: "Snapdragon 8 Gen 2", ramStorage: "12 GB / 256–512 GB", battery: "5.100 mAh", camera: "50 MP tripla", image: "2949/1001246398.jpg" },
        { year: "2024", model: "Honor Magic 6 Pro", screen: '6.8" LTPO OLED 120Hz', processor: "Snapdragon 8 Gen 3", ramStorage: "12–16 GB / 256 GB–1 TB", battery: "5.600 mAh", camera: "50 MP tripla", image: "2950/1001246408.jpg" },
        { year: "2025", model: "Honor Magic 7 Pro", screen: '6.8" LTPO OLED 120Hz', processor: "Snapdragon 8 Elite", ramStorage: "12–16 GB / 256 GB–1 TB", battery: "5.850 mAh", camera: "50 MP tripla", image: "2951/1001246414.jpg" },
        { year: "2026", model: "Honor Magic 8 Pro", screen: '6.8" LTPO OLED 120Hz', processor: "Snapdragon 8 Elite Gen 5", ramStorage: "12–16 GB / 256 GB–1 TB", battery: "6.000 mAh", camera: "200 MP tripla", image: "2626/images/honor-magic-8-pro.jpg" }
      ],
      "HONOR X": [
        { year: "2021", model: "Honor X10", screen: '6.63" LCD 90Hz', processor: "Kirin 820", ramStorage: "6–8 GB / 128 GB", battery: "4.300 mAh", camera: "40 MP tripla", image: "2941/1001246281.jpg" },
        { year: "2022", model: "Honor X8", screen: '6.7" LCD 90Hz', processor: "Snapdragon 680", ramStorage: "6–8 GB / 128 GB", battery: "4.000 mAh", camera: "64 MP quádrupla", image: "2942/1001246300.jpg" },
        { year: "2023", model: "Honor X9a", screen: '6.67" OLED 120Hz', processor: "Snapdragon 695", ramStorage: "6–8 GB / 128–256 GB", battery: "5.100 mAh", camera: "64 MP tripla", image: "2944/1001246306.jpg" },
        { year: "2024", model: "Honor X9b", screen: '6.78" AMOLED 120Hz', processor: "Snapdragon 6 Gen 1", ramStorage: "8–12 GB / 256 GB", battery: "5.800 mAh", camera: "108 MP tripla", image: "2945/1001246318.jpg" }
      ]
    }
  },

  OPPO: {
    history: "Fundada em 2004 na China, a OPPO começou por se destacar no mercado de leitores de áudio digital de alta qualidade antes de entrar no setor de telemóveis em 2008. Tornou-se uma das maiores fabricantes mundiais de smartphones, reconhecida pelo foco em tecnologia de carregamento ultrarrápido, inovação em câmaras (com a avançada série Find X) e um design elegante e moderno.",
    lines: {
      "OPPO Find X": [
        { year: "2018", model: "Oppo Find X", screen: '6.42" AMOLED', processor: "Snapdragon 845", ramStorage: "8 GB / 128–256 GB", battery: "3.730 mAh", camera: "16 MP dupla", image: "2933/1001246165.jpg" },
        { year: "2020", model: "Oppo Find X2 Pro", screen: '6.7" AMOLED 120Hz', processor: "Snapdragon 865", ramStorage: "12 GB / 256–512 GB", battery: "4.260 mAh", camera: "48 MP tripla", image: "2934/1001246171.jpg" },
        { year: "2021", model: "Oppo Find X3 Pro", screen: '6.7" LTPO AMOLED 120Hz', processor: "Snapdragon 888", ramStorage: "8–12 GB / 256 GB", battery: "4.500 mAh", camera: "50 MP quádrupla", image: "2935/1001246187.jpg" },
        { year: "2022", model: "Oppo Find X5 Pro", screen: '6.7" LTPO AMOLED 120Hz', processor: "Snapdragon 8 Gen 1", ramStorage: "8–12 GB / 256–512 GB", battery: "5.000 mAh", camera: "50 MP tripla", image: "2936/1001246193.jpg" },
        { year: "2023", model: "Oppo Find X6 Pro", screen: '6.82" LTPO AMOLED 120Hz', processor: "Snapdragon 8 Gen 2", ramStorage: "12–16 GB / 256 GB–1 TB", battery: "5.000 mAh", camera: "50 MP tripla", image: "2937/1001246236.jpg" },
        { year: "2024", model: "Oppo Find X7 Ultra", screen: '6.82" LTPO AMOLED 120Hz', processor: "Snapdragon 8 Gen 3", ramStorage: "12–16 GB / 256 GB–1 TB", battery: "5.000 mAh", camera: "50 MP quádrupla", image: "2938/1001246242.jpg" },
        { year: "2025", model: "Oppo Find X8 Pro", screen: '6.78" LTPO AMOLED 120Hz', processor: "MediaTek Dimensity 9400", ramStorage: "12–16 GB / 256 GB–1 TB", battery: "5.910 mAh", camera: "50 MP quádrupla", image: "2939/1001246251.jpg" },
        { year: "2026", model: "Oppo Find X9 Pro", screen: '6.78" LTPO AMOLED 120Hz', processor: "Snapdragon 8 Elite Gen 5", ramStorage: "12–16 GB / 256 GB–1 TB", battery: "6.000 mAh", camera: "50 MP tripla", image: "2940/1001246275.jpg" }
      ],
      "OPPO Reno": [
        { year: "2019", model: "Oppo Reno 10x Zoom", screen: '6.6" AMOLED', processor: "Snapdragon 855", ramStorage: "6–8 GB / 128–256 GB", battery: "4.065 mAh", camera: "48 MP tripla", image: "2929/1001245952.jpg" },
        { year: "2021", model: "Oppo Reno 6 Pro", screen: '6.55" AMOLED 90Hz', processor: "MediaTek Dimensity 1200", ramStorage: "8–12 GB / 128–256 GB", battery: "4.500 mAh", camera: "64 MP quádrupla", image: "2930/1001246052.jpg" },
        { year: "2023", model: "Oppo Reno 10 Pro+", screen: '6.74" AMOLED 120Hz', processor: "Snapdragon 8+ Gen 1", ramStorage: "12–16 GB / 256–512 GB", battery: "4.700 mAh", camera: "50 MP tripla", image: "2931/1001246104.jpg" },
        { year: "2024", model: "Oppo Reno 12 Pro", screen: '6.7" AMOLED 120Hz', processor: "MediaTek Dimensity 9200+", ramStorage: "12 GB / 256–512 GB", battery: "5.000 mAh", camera: "50 MP tripla", image: "2932/1001246157.jpg" }
      ],
      "OPPO A": [
        { year: "2020", model: "Oppo A52", screen: '6.5" LCD', processor: "Snapdragon 665", ramStorage: "4–8 GB / 64–128 GB", battery: "5.000 mAh", camera: "12 MP quádrupla", image: "2926/images/oppo-preto.jpg" },
        { year: "2022", model: "Oppo A57", screen: '6.56" LCD 90Hz', processor: "MediaTek Helio G35", ramStorage: "4–6 GB / 64–128 GB", battery: "5.000 mAh", camera: "13 MP dupla", image: "2927/1001245430.jpg" },
        { year: "2023", model: "Oppo A78", screen: '6.43" AMOLED 90Hz', processor: "Snapdragon 680", ramStorage: "8 GB / 128–256 GB", battery: "5.000 mAh", camera: "50 MP dupla", image: "2928/1001245865.jpg" }
      ]
    }
  },

  vivo: {
    history: "Fundada em 2009 na China, a vivo ganhou destaque global pelo seu forte foco em inovação de áudio de alta fidelidade e tecnologia fotográfica de vanguarda. A marca foi pioneira na introdução do leitor de impressões digitais sob o ecrã e de sistemas de estabilização gimbal em câmaras móveis, mantendo parcerias estratégicas como a Zeiss para a sua principal série X.",
    lines: {
      "vivo X Series": [
        { year: "2012", model: "vivo X1", screen: '4.7" LCD', processor: "MediaTek MT6589", ramStorage: "1 GB / 16 GB", battery: "2.000 mAh", camera: "8 MP", image: "2915/images/vivo-branco.jpg" },
        { year: "2014", model: "vivo X5 Max", screen: '5.5" Super AMOLED', processor: "Snapdragon 615", ramStorage: "2 GB / 16 GB", battery: "2.000 mAh", camera: "13 MP", image: "2916/1001244913.jpg" },
        { year: "2016", model: "vivo X7", screen: '5.2" Super AMOLED', processor: "Snapdragon 652", ramStorage: "4 GB / 64 GB", battery: "3.000 mAh", camera: "13 MP", image: "2917/1001245093.jpg" },
        { year: "2019", model: "vivo X30 Pro", screen: '6.44" Super AMOLED', processor: "Exynos 980", ramStorage: "8 GB / 128–256 GB", battery: "4.350 mAh", camera: "64 MP quádrupla", image: "2918/1001245130.jpg" },
        { year: "2020", model: "vivo X50 Pro", screen: '6.56" AMOLED 90Hz', processor: "Snapdragon 765G", ramStorage: "8–12 GB / 128–256 GB", battery: "4.315 mAh", camera: "48 MP quádrupla", image: "2919/1001245136.jpg" },
        { year: "2021", model: "vivo X60 Pro+", screen: '6.56" AMOLED 120Hz', processor: "Snapdragon 888", ramStorage: "8–12 GB / 128–256 GB", battery: "4.200 mAh", camera: "50 MP quádrupla", image: "2920/1001245145.jpg" },
        { year: "2022", model: "vivo X80 Pro", screen: '6.78" LTPO AMOLED 120Hz', processor: "Snapdragon 8 Gen 1", ramStorage: "8–12 GB / 256–512 GB", battery: "4.700 mAh", camera: "50 MP quádrupla", image: "2921/1001245160.jpg" },
        { year: "2023", model: "vivo X90 Pro+", screen: '6.78" LTPO AMOLED 120Hz', processor: "Snapdragon 8 Gen 2", ramStorage: "12–16 GB / 256–512 GB", battery: "4.700 mAh", camera: "50 MP quádrupla", image: "2922/1001245222.jpg" },
        { year: "2024", model: "vivo X100 Pro", screen: '6.78" LTPO AMOLED 120Hz', processor: "MediaTek Dimensity 9300", ramStorage: "12–16 GB / 256 GB–1 TB", battery: "5.400 mAh", camera: "50 MP tripla", image: "2923/1001245231.jpg" },
        { year: "2025", model: "vivo X200 Pro", screen: '6.78" LTPO AMOLED 120Hz', processor: "MediaTek Dimensity 9400", ramStorage: "12–16 GB / 256 GB–1 TB", battery: "6.000 mAh", camera: "50 MP tripla", image: "2924/1001245239.jpg" },
        { year: "2026", model: "vivo X300 Pro", screen: '6.78" LTPO AMOLED 120Hz', processor: "MediaTek Dimensity 9500", ramStorage: "12–16 GB / 256 GB–1 TB", battery: "6.200 mAh", camera: "200 MP tripla", image: "2925/images/vivo-x-zeiss.jpg" }
      ],
      "vivo NEX Series": [
        { year: "2018", model: "vivo NEX", screen: '6.59" Super AMOLED', processor: "Snapdragon 845", ramStorage: "8 GB / 128–256 GB", battery: "4.000 mAh", camera: "12 MP dupla", image: "2911/images/vivo-nex.jpg" }
      ],
      "vivo V Series": [
        { year: "2019", model: "vivo V15 Pro", screen: '6.39" Super AMOLED', processor: "Snapdragon 675", ramStorage: "6–8 GB / 128 GB", battery: "3.700 mAh", camera: "48 MP tripla", image: "2912/1001244804.jpg" },
        { year: "2021", model: "vivo V21 5G", screen: '6.44" AMOLED 90Hz', processor: "MediaTek Dimensity 800U", ramStorage: "8 GB / 128–256 GB", battery: "4.000 mAh", camera: "64 MP tripla", image: "2913/images/vivo-roxo.jpg" },
        { year: "2023", model: "vivo V29 Pro", screen: '6.78" AMOLED 120Hz', processor: "MediaTek Dimensity 8200", ramStorage: "8–12 GB / 256 GB", battery: "4.600 mAh", camera: "50 MP tripla", image: "2914/images/vivo-v29.jpg" }
      ]
    }
  },

  iQOO: {
    history: "Criada em 2019 como uma sub-marca da vivo focada em desempenho e gaming, a iQOO (que significa 'I Quest On and On') rapidamente se destacou no mercado. A marca é conhecida por equipar os seus smartphones com processadores topo de gama, taxas de atualização de ecrã muito elevadas, sistemas de arrefecimento avançados e carregamento ultrarrápido a preços competitivos.",
    lines: {
      "iQOO Number Series": [
        { year: "2019", model: "iQOO", screen: '6.41" AMOLED', processor: "Snapdragon 855", ramStorage: "6–12 GB / 128–256 GB", battery: "4.000 mAh", camera: "12 MP tripla", image: "2903/1001244613.jpg" },
        { year: "2020", model: "iQOO 3", screen: '6.44" AMOLED', processor: "Snapdragon 865", ramStorage: "8–12 GB / 128–256 GB", battery: "4.400 mAh", camera: "48 MP quádrupla", image: "2904/1001244748.jpg" },
        { year: "2021", model: "iQOO 7", screen: '6.62" AMOLED 120Hz', processor: "Snapdragon 888", ramStorage: "8–12 GB / 128–256 GB", battery: "4.000 mAh", camera: "48 MP tripla", image: "2905/1001244761.jpg" },
        { year: "2022", model: "iQOO 9 Pro", screen: '6.78" LTPO AMOLED 120Hz', processor: "Snapdragon 8 Gen 1", ramStorage: "8–12 GB / 256–512 GB", battery: "4.700 mAh", camera: "50 MP tripla", image: "2907/1001244773.jpg" },
        { year: "2023", model: "iQOO 11 Pro", screen: '6.78" LTPO AMOLED 144Hz', processor: "Snapdragon 8 Gen 2", ramStorage: "8–16 GB / 256–512 GB", battery: "4.700 mAh", camera: "50 MP tripla", image: "2908/1001244779.jpg" },
        { year: "2024", model: "iQOO 12 Pro", screen: '6.78" LTPO AMOLED 144Hz', processor: "Snapdragon 8 Gen 3", ramStorage: "12–16 GB / 256 GB–1 TB", battery: "5.100 mAh", camera: "50 MP tripla", image: "2909/1001244785.jpg" },
        { year: "2025", model: "iQOO 13", screen: '6.82" LTPO AMOLED 144Hz', processor: "Snapdragon 8 Elite", ramStorage: "12–16 GB / 256 GB–1 TB", battery: "6.150 mAh", camera: "50 MP tripla", image: "2910/images/iqoo-13.jpg" }
      ],
      "iQOO Neo": [
        { year: "2020", model: "iQOO Neo 3", screen: '6.57" LCD 144Hz', processor: "Snapdragon 865", ramStorage: "6–12 GB / 128–256 GB", battery: "4.500 mAh", camera: "48 MP tripla", image: "2898/1001244167.jpg" },
        { year: "2021", model: "iQOO Neo 5", screen: '6.62" AMOLED 120Hz', processor: "Snapdragon 870", ramStorage: "8–12 GB / 128–256 GB", battery: "4.400 mAh", camera: "48 MP tripla", image: "2899/1001244181.jpg" },
        { year: "2022", model: "iQOO Neo 6", screen: '6.62" AMOLED 120Hz', processor: "Snapdragon 8 Gen 1", ramStorage: "8–12 GB / 128–256 GB", battery: "4.700 mAh", camera: "64 MP tripla", image: "2900/1001244588.jpg" },
        { year: "2023", model: "iQOO Neo 8 Pro", screen: '6.78" AMOLED 144Hz', processor: "MediaTek Dimensity 9200+", ramStorage: "12–16 GB / 256–512 GB", battery: "5.000 mAh", camera: "50 MP tripla", image: "2901/1001244598.jpg" },
        { year: "2024", model: "iQOO Neo 9 Pro", screen: '6.78" LTPO AMOLED 144Hz', processor: "MediaTek Dimensity 9300", ramStorage: "12–16 GB / 256 GB–1 TB", battery: "5.160 mAh", camera: "50 MP dupla", image: "2902/1001244607.jpg" }
      ],
      "iQOO Z": [
        { year: "2021", model: "iQOO Z3", screen: '6.58" LCD 120Hz', processor: "Snapdragon 768G", ramStorage: "6–8 GB / 128–256 GB", battery: "4.400 mAh", camera: "64 MP tripla", image: "2895/images/iqoo-z3.jpg" },
        { year: "2022", model: "iQOO Z6", screen: '6.64" LCD 120Hz', processor: "Snapdragon 778G+", ramStorage: "8–12 GB / 128–256 GB", battery: "4.500 mAh", camera: "64 MP tripla", image: "2896/1001244114.jpg" },
        { year: "2023", model: "iQOO Z7 Pro", screen: '6.78" AMOLED 120Hz', processor: "MediaTek Dimensity 7200", ramStorage: "8–12 GB / 128–256 GB", battery: "4.600 mAh", camera: "64 MP dupla", image: "2897/1001244144.jpg" }
      ]
    }
  },

  OnePlus: {
    history: "Fundada em 2013 por Pete Lau e Carl Pei com o lema 'Never Settle', a OnePlus revolucionou o mercado com o conceito de 'flagship killer', oferecendo especificações de topo a preços muito acessíveis. Ao longo dos anos, evoluiu para uma marca de topo global, destacando-se pela fluidez do seu software OxygenOS, parcerias fotográficas com a Hasselblad e ecrãs de excelente qualidade.",
    lines: {
      "OnePlus Number Series": [
        { year: "2014", model: "OnePlus One", screen: '5.5" LCD', processor: "Snapdragon 801", ramStorage: "3 GB / 16–64 GB", battery: "3.100 mAh", camera: "13 MP", image: "2847/1001241215.jpg" },
        { year: "2015", model: "OnePlus 2", screen: '5.5" LCD', processor: "Snapdragon 810", ramStorage: "3–4 GB / 16–64 GB", battery: "3.300 mAh", camera: "13 MP", image: "2848/1001241937.jpg" },
        { year: "2016", model: "OnePlus 3", screen: '5.5" AMOLED', processor: "Snapdragon 820", ramStorage: "6 GB / 64 GB", battery: "3.000 mAh", camera: "16 MP", image: "2849/1001241953.jpg" },
        { year: "2017", model: "OnePlus 5", screen: '5.5" AMOLED', processor: "Snapdragon 835", ramStorage: "6–8 GB / 64–128 GB", battery: "3.300 mAh", camera: "16 MP dupla", image: "2850/1001242009.jpg" },
        { year: "2018", model: "OnePlus 6", screen: '6.28" AMOLED', processor: "Snapdragon 845", ramStorage: "6–8 GB / 64–256 GB", battery: "3.300 mAh", camera: "16 MP dupla", image: "2851/images/oneplus-6.jpg" },
        { year: "2019", model: "OnePlus 7 Pro", screen: '6.67" AMOLED 90Hz', processor: "Snapdragon 855", ramStorage: "6–12 GB / 128–256 GB", battery: "4.000 mAh", camera: "48 MP tripla", image: "2852/images/oneplus-7-pro.jpg" },
        { year: "2020", model: "OnePlus 8 Pro", screen: '6.78" AMOLED 120Hz', processor: "Snapdragon 865", ramStorage: "8–12 GB / 128–256 GB", battery: "4.510 mAh", camera: "48 MP quádrupla", image: "2854/images/oneplus-8-pro.jpg" },
        { year: "2021", model: "OnePlus 9 Pro", screen: '6.7" LTPO AMOLED 120Hz', processor: "Snapdragon 888", ramStorage: "8–12 GB / 128–256 GB", battery: "4.500 mAh", camera: "48 MP quádrupla", image: "2855/1001242096.jpg" },
        { year: "2022", model: "OnePlus 10 Pro", screen: '6.7" LTPO AMOLED 120Hz', processor: "Snapdragon 8 Gen 1", ramStorage: "8–12 GB / 128–256 GB", battery: "5.000 mAh", camera: "48 MP tripla", image: "2857/1001242118.jpg" },
        { year: "2023", model: "OnePlus 11", screen: '6.7" LTPO AMOLED 120Hz', processor: "Snapdragon 8 Gen 2", ramStorage: "8–16 GB / 128–512 GB", battery: "5.000 mAh", camera: "50 MP tripla", image: "2858/1001242126.jpg" },
        { year: "2024", model: "OnePlus 12", screen: '6.82" LTPO AMOLED 120Hz', processor: "Snapdragon 8 Gen 3", ramStorage: "12–16 GB / 256–512 GB", battery: "5.400 mAh", camera: "50 MP tripla", image: "2859/1001242132.jpg" },
        { year: "2025", model: "OnePlus 13", screen: '6.82" LTPO AMOLED 120Hz', processor: "Snapdragon 8 Elite", ramStorage: "12–24 GB / 256 GB–1 TB", battery: "6.000 mAh", camera: "50 MP tripla", image: "2860/1001242163.jpg" },
        { year: "2026", model: "OnePlus 15", screen: '6.82" LTPO AMOLED 165Hz', processor: "Snapdragon 8 Elite Gen 5", ramStorage: "12–16 GB / 256 GB–1 TB", battery: "7.300 mAh", camera: "50 MP tripla", image: "2861/1001242185.jpg" }
      ],
      "OnePlus Nord": [
        { year: "2020", model: "OnePlus Nord", screen: '6.44" AMOLED 90Hz', processor: "Snapdragon 765G", ramStorage: "6–12 GB / 64–256 GB", battery: "4.115 mAh", camera: "48 MP quádrupla", image: "2843/images/oneplus-nord.jpg" },
        { year: "2021", model: "OnePlus Nord 2", screen: '6.43" AMOLED 90Hz', processor: "MediaTek Dimensity 1200", ramStorage: "6–12 GB / 128–256 GB", battery: "4.500 mAh", camera: "50 MP tripla", image: "2844/images/oneplus-nord-2.jpg" },
        { year: "2022", model: "OnePlus Nord 3", screen: '6.74" AMOLED 120Hz', processor: "MediaTek Dimensity 9000", ramStorage: "8–16 GB / 128–256 GB", battery: "5.000 mAh", camera: "50 MP tripla", image: "2845/images/oneplus-nord-preto.jpg" },
        { year: "2024", model: "OnePlus Nord 4", screen: '6.74" AMOLED 120Hz', processor: "Snapdragon 7+ Gen 3", ramStorage: "8–16 GB / 128–512 GB", battery: "5.500 mAh", camera: "50 MP dupla", image: "2846/images/oneplus-cinza.jpg" }
      ]
    }
  },

  realme: {
    history: "Fundada em 2018 por Sky Li após se separar da OPPO, a realme rapidamente se tornou uma das marcas de smartphones com o crescimento mais rápido do mundo. Focada no público jovem, a marca destaca-se por oferecer designs arrojados, carregamento ultrarrápido e especificações avançadas a preços muito competitivos.",
    lines: {
      "realme GT": [
        { year: "2021", model: "Realme GT", screen: '6.43" Super AMOLED 120Hz', processor: "Snapdragon 888", ramStorage: "8–12 GB / 128–256 GB", battery: "4.500 mAh", camera: "64 MP tripla", image: "2880/1001243623.jpg" },
        { year: "2021", model: "Realme GT Neo 2", screen: '6.62" AMOLED 120Hz', processor: "Snapdragon 870", ramStorage: "8–12 GB / 128–256 GB", battery: "5.000 mAh", camera: "64 MP tripla", image: "2881/1001243643.jpg" },
        { year: "2022", model: "Realme GT 2 Pro", screen: '6.7" LTPO AMOLED 120Hz', processor: "Snapdragon 8 Gen 1", ramStorage: "8–12 GB / 128–512 GB", battery: "5.000 mAh", camera: "50 MP tripla", image: "2882/1001243652.jpg" },
        { year: "2023", model: "Realme GT 3", screen: '6.74" AMOLED 144Hz', processor: "Snapdragon 8+ Gen 1", ramStorage: "8–16 GB / 128–512 GB", battery: "4.600 mAh", camera: "50 MP tripla", image: "2883/1001243661.jpg" },
        { year: "2024", model: "Realme GT 6", screen: '6.78" LTPO AMOLED 120Hz', processor: "Snapdragon 8s Gen 3", ramStorage: "8–16 GB / 256–512 GB", battery: "5.500 mAh", camera: "50 MP dupla", image: "2884/1001243675.jpg" },
        { year: "2024", model: "Realme GT 7 Pro", screen: '6.78" LTPO AMOLED 120Hz', processor: "Snapdragon 8 Elite", ramStorage: "12–16 GB / 256 GB–1 TB", battery: "5.800 mAh", camera: "50 MP tripla", image: "2885/1001243704.jpg" },
        { year: "2025", model: "Realme GT 8 Pro", screen: '6.78" LTPO AMOLED 144Hz', processor: "Snapdragon 8 Elite Gen 5", ramStorage: "12–16 GB / 256 GB–1 TB", battery: "7.000 mAh", camera: "200 MP tripla", image: "2886/1001243715.jpg" }
      ],
      "realme Number Series": [
        { year: "2018", model: "Realme 1", screen: '6.0" IPS LCD', processor: "MediaTek Helio P60", ramStorage: "3–6 GB / 32–128 GB", battery: "3.410 mAh", camera: "13 MP", image: "2887/1001243730.jpg" },
        { year: "2019", model: "Realme 3", screen: '6.2" IPS LCD', processor: "MediaTek Helio P70", ramStorage: "3–4 GB / 32–64 GB", battery: "4.230 mAh", camera: "13 MP dupla", image: "2888/1001243739.jpg" },
        { year: "2020", model: "Realme 6 Pro", screen: '6.6" IPS LCD 90Hz', processor: "Snapdragon 720G", ramStorage: "6–8 GB / 64–128 GB", battery: "4.300 mAh", camera: "64 MP quádrupla", image: "2889/1001243877.jpg" },
        { year: "2021", model: "Realme 8 Pro", screen: '6.4" Super AMOLED', processor: "Snapdragon 720G", ramStorage: "6–8 GB / 128 GB", battery: "4.500 mAh", camera: "108 MP quádrupla", image: "2890/1001243911.jpg" },
        { year: "2022", model: "Realme 9 Pro+", screen: '6.4" Super AMOLED 90Hz', processor: "MediaTek Dimensity 920", ramStorage: "6–8 GB / 128–256 GB", battery: "4.500 mAh", camera: "50 MP tripla", image: "2891/1001243918.jpg" },
        { year: "2023", model: "Realme 11 Pro+", screen: '6.7" AMOLED 120Hz', processor: "MediaTek Dimensity 7050", ramStorage: "8–12 GB / 256–512 GB", battery: "5.000 mAh", camera: "200 MP tripla", image: "2892/1001243926.jpg" },
        { year: "2024", model: "Realme 12 Pro+", screen: '6.7" AMOLED 120Hz', processor: "Snapdragon 7s Gen 2", ramStorage: "8–12 GB / 256–512 GB", battery: "5.000 mAh", camera: "50 MP tripla", image: "2893/1001243940.jpg" },
        { year: "2025", model: "Realme 14 Pro+", screen: '6.83" AMOLED 120Hz', processor: "Snapdragon 7s Gen 3", ramStorage: "8–12 GB / 256–512 GB", battery: "6.000 mAh", camera: "50 MP tripla", image: "2894/1001243982.jpg" }
      ],
      "realme C": [
        { year: "2020", model: "Realme C11", screen: '6.5" LCD', processor: "MediaTek Helio G35", ramStorage: "2–3 GB / 32 GB", battery: "5.000 mAh", camera: "13 MP dupla", image: "2865/1001242254.jpg" },
        { year: "2021", model: "Realme C25", screen: '6.5" LCD', processor: "MediaTek Helio G70", ramStorage: "4 GB / 64–128 GB", battery: "6.000 mAh", camera: "48 MP tripla", image: "2866/1001242331.jpg" },
        { year: "2022", model: "Realme C35", screen: '6.6" LCD', processor: "Unisoc T616", ramStorage: "4–6 GB / 64–128 GB", battery: "5.000 mAh", camera: "50 MP tripla", image: "2867/1001242564.jpg" },
        { year: "2023", model: "Realme C55", screen: '6.72" LCD 90Hz', processor: "MediaTek Helio G88", ramStorage: "6–8 GB / 128–256 GB", battery: "5.000 mAh", camera: "64 MP dupla", image: "2868/1001242578.jpg" },
        { year: "2024", model: "Realme C67", screen: '6.72" LCD 90Hz', processor: "Snapdragon 685", ramStorage: "6–8 GB / 128–256 GB", battery: "5.000 mAh", camera: "108 MP dupla", image: "2869/1001242697.jpg" }
      ],
      "realme Narzo": [
        { year: "2021", model: "Realme Narzo 30 Pro", screen: '6.5" LCD 120Hz', processor: "MediaTek Dimensity 800U", ramStorage: "6–8 GB / 64–128 GB", battery: "5.000 mAh", camera: "48 MP tripla", image: "2862/1001242219.jpg" },
        { year: "2022", model: "Realme Narzo 50 Pro", screen: '6.4" AMOLED 90Hz', processor: "MediaTek Dimensity 920", ramStorage: "6–8 GB / 128 GB", battery: "5.000 mAh", camera: "48 MP tripla", image: "2863/1001242225.jpg" },
        { year: "2023", model: "Realme Narzo 60 Pro", screen: '6.7" AMOLED 120Hz', processor: "MediaTek Dimensity 7050", ramStorage: "8–12 GB / 128–256 GB", battery: "5.000 mAh", camera: "100 MP dupla", image: "2864/1001242237.jpg" }
      ]
    }
  },

  Motorola: {
    history: "Com uma história lendária que remonta à invenção do próprio telemóvel e ao icónico DynaTAC em 1973, a Motorola moldou a indústria de telecomunicações. Passou por várias eras e donos, revolucionou o mercado com a família Moto G e continua a inovar com os dobráveis da linha Razr.",
    lines: {
      "Motorola Edge": [
        { year: "2020", model: "Motorola Edge+", screen: '6.7" OLED 90Hz', processor: "Snapdragon 865", ramStorage: "12 GB / 256 GB", battery: "5.000 mAh", camera: "108 MP tripla", image: "2818/1001235569.jpg" },
        { year: "2021", model: "Motorola Edge 20 Pro", screen: '6.7" OLED 144Hz', processor: "Snapdragon 870", ramStorage: "12 GB / 256 GB", battery: "4.500 mAh", camera: "108 MP tripla", image: "2819/1001235586.jpg" },
        { year: "2023", model: "Motorola Edge 40 Pro", screen: '6.67" OLED 165Hz', processor: "Snapdragon 8 Gen 2", ramStorage: "12 GB / 256–512 GB", battery: "4.600 mAh", camera: "50 MP tripla", image: "2820/1001236047.jpg" },
        { year: "2024", model: "Motorola Edge 50 Ultra", screen: '6.7" OLED 144Hz', processor: "Snapdragon 8s Gen 3", ramStorage: "12 GB / 512 GB", battery: "4.500 mAh", camera: "50 MP tripla", image: "2821/1001236053.jpg" }
      ],
      "moto g": [
        { year: "2013", model: "Moto G (1ª gen.)", screen: '4.5" LCD', processor: "Snapdragon 400", ramStorage: "1 GB / 8–16 GB", battery: "2.070 mAh", camera: "5 MP", image: "2814/images/motorola-moto-g.jpg" },
        { year: "2018", model: "Moto G6 Plus", screen: '5.9" IPS LCD', processor: "Snapdragon 630", ramStorage: "4–6 GB / 64–128 GB", battery: "3.200 mAh", camera: "12 MP dupla", image: "2815/images/motorola-moto-g-preto.jpg?v=1" },
        { year: "2022", model: "Moto G82", screen: '6.6" AMOLED 120Hz', processor: "Snapdragon 695", ramStorage: "6–8 GB / 128 GB", battery: "5.000 mAh", camera: "50 MP tripla", image: "2816/1001235331.jpg" },
        { year: "2024", model: "Moto G84", screen: '6.5" P-OLED 120Hz', processor: "Snapdragon 695", ramStorage: "8–12 GB / 256 GB", battery: "5.000 mAh", camera: "50 MP dupla", image: "2817/1001235339.jpg" }
      ],
      "moto e": [
        { year: "2020", model: "Moto E7 Plus", screen: '6.5" LCD', processor: "Snapdragon 460", ramStorage: "4 GB / 64 GB", battery: "5.000 mAh", camera: "48 MP dupla", image: "2807/images/motorola-azul.jpg" },
        { year: "2023", model: "Moto E13", screen: '6.5" LCD', processor: "Unisoc T606", ramStorage: "2–4 GB / 64–128 GB", battery: "5.000 mAh", camera: "13 MP", image: "2808/images/motorola-moto-e13.jpg" }
      ],
      "Motorola Razr": [
        { year: "2019", model: "Motorola Razr (2019)", screen: '6.2" P-OLED dobrável', processor: "Snapdragon 710", ramStorage: "6 GB / 128 GB", battery: "2.510 mAh", camera: "16 MP", image: "2810/images/motorola-razr.jpg" },
        { year: "2022", model: "Motorola Razr 2022", screen: '6.7" P-OLED dobrável', processor: "Snapdragon 8+ Gen 1", ramStorage: "8–12 GB / 128–512 GB", battery: "3.500 mAh", camera: "50 MP dupla", image: "2811/images/motorola-razr-novo.jpg" },
        { year: "2025", model: "Motorola Razr 60 Ultra", screen: '6.9" LTPO AMOLED dobrável', processor: "Snapdragon 8 Elite", ramStorage: "12–16 GB / 256–512 GB", battery: "4.000 mAh", camera: "50 MP dupla", image: "2812/images/Motorola_Razr_60_Ultra.jpg" }
      ]
    }
  },

  Google: {
    history: "A divisão de hardware da Google começou com a linha Nexus e evoluiu em 2016 para a marca Pixel. Os smartphones Pixel destacam-se por oferecer a experiência pura do sistema Android, atualizações rápidas e por liderarem a indústria em termos de fotografia computacional e inteligência artificial avançada.",
    lines: {
      "Pixel": [
        { year: "2016", model: "Pixel", screen: '5.0" AMOLED', processor: "Snapdragon 821", ramStorage: "4 GB / 32–128 GB", battery: "2.770 mAh", camera: "12.3 MP", image: "2831/1001237081.jpg" },
        { year: "2017", model: "Pixel 2", screen: '5.0" AMOLED', processor: "Snapdragon 835", ramStorage: "4 GB / 64–128 GB", battery: "2.700 mAh", camera: "12.2 MP", image: "2829/1001236343.jpg" },
        { year: "2018", model: "Pixel 3", screen: '5.5" OLED', processor: "Snapdragon 845", ramStorage: "4 GB / 64–128 GB", battery: "2.915 mAh", camera: "12.2 MP", image: "2828/1001236336.jpg" },
        { year: "2019", model: "Pixel 4", screen: '5.7" OLED 90Hz', processor: "Snapdragon 855", ramStorage: "6 GB / 64–128 GB", battery: "2.800 mAh", camera: "12.2 MP dupla", image: "2832/1001237262.jpg" },
        { year: "2020", model: "Pixel 5", screen: '6.0" OLED 90Hz', processor: "Snapdragon 765G", ramStorage: "8 GB / 128 GB", battery: "4.080 mAh", camera: "12.2 MP dupla", image: "2833/images/google-pixel-5.jpg" },
        { year: "2021", model: "Pixel 6", screen: '6.4" OLED 90Hz', processor: "Google Tensor", ramStorage: "8 GB / 128–256 GB", battery: "4.614 mAh", camera: "50 MP dupla", image: "2834/images/google-pixel-6.jpg" },
        { year: "2022", model: "Pixel 7", screen: '6.3" OLED 90Hz', processor: "Google Tensor G2", ramStorage: "8 GB / 128–256 GB", battery: "4.355 mAh", camera: "50 MP dupla", image: "2835/images/google-pixel-7.jpg" },
        { year: "2023", model: "Pixel 8", screen: '6.2" OLED 120Hz', processor: "Google Tensor G3", ramStorage: "8 GB / 128–256 GB", battery: "4.575 mAh", camera: "50 MP dupla", image: "2836/1001237608.jpg" },
        { year: "2024", model: "Pixel 9", screen: '6.3" OLED 120Hz', processor: "Google Tensor G4", ramStorage: "12 GB / 128–256 GB", battery: "4.700 mAh", camera: "50 MP dupla", image: "2837/1001237620.jpg" },
        { year: "2025", model: "Pixel 10", screen: '6.3" OLED 120Hz', processor: "Google Tensor G5", ramStorage: "12 GB / 128–256 GB", battery: "4.800 mAh", camera: "50 MP tripla", image: "2838/1001239285.jpg" },
        { year: "2026", model: "Pixel 10a", screen: '6.1" OLED 120Hz', processor: "Google Tensor G5", ramStorage: "8 GB / 128–256 GB", battery: "4.500 mAh", camera: "48 MP dupla", image: "2624/images/google-pixel-10a.jpg" }
      ],
      "Pixel Pro": [
        { year: "2021", model: "Pixel 6 Pro", screen: '6.7" LTPO OLED 120Hz', processor: "Google Tensor", ramStorage: "12 GB / 128–512 GB", battery: "5.003 mAh", camera: "50 MP tripla", image: "2823/1001236090.jpg" },
        { year: "2022", model: "Pixel 7 Pro", screen: '6.7" LTPO OLED 120Hz', processor: "Google Tensor G2", ramStorage: "12 GB / 128–512 GB", battery: "5.000 mAh", camera: "50 MP tripla", image: "2824/1001236096.jpg" },
        { year: "2023", model: "Pixel 8 Pro", screen: '6.7" LTPO OLED 120Hz', processor: "Google Tensor G3", ramStorage: "12 GB / 128 GB–1 TB", battery: "5.050 mAh", camera: "50 MP tripla", image: "2825/1001236224.jpg" },
        { year: "2024", model: "Pixel 9 Pro", screen: '6.3" LTPO OLED 120Hz', processor: "Google Tensor G4", ramStorage: "16 GB / 128 GB–1 TB", battery: "4.700 mAh", camera: "50 MP tripla", image: "2826/1001236248.jpg" },
        { year: "2024", model: "Pixel 9 Pro XL", screen: '6.8" LTPO OLED 120Hz', processor: "Google Tensor G4", ramStorage: "16 GB / 128 GB–1 TB", battery: "5.060 mAh", camera: "50 MP tripla", image: "2827/1001236327.jpg" }
      ],
      "Pixel A": [
        { year: "2019", model: "Pixel 3a", screen: '5.6" OLED', processor: "Snapdragon 670", ramStorage: "4 GB / 64 GB", battery: "3.000 mAh", camera: "12.2 MP", image: "2830/1001236930.jpg" },
        { year: "2020", model: "Pixel 4a", screen: '5.8" OLED', processor: "Snapdragon 730G", ramStorage: "6 GB / 128 GB", battery: "3.140 mAh", camera: "12.2 MP", image: "2839/1001239798.jpg" },
        { year: "2022", model: "Pixel 6a", screen: '6.1" OLED 60Hz', processor: "Google Tensor", ramStorage: "6 GB / 128 GB", battery: "4.410 mAh", camera: "12.2 MP dupla", image: "2840/1001239811.jpg" },
        { year: "2023", model: "Pixel 7a", screen: '6.1" OLED 90Hz', processor: "Google Tensor G2", ramStorage: "8 GB / 128 GB", battery: "4.385 mAh", camera: "64 MP dupla", image: "2841/1001239823.jpg" },
        { year: "2024", model: "Pixel 8a", screen: '6.1" OLED 120Hz', processor: "Google Tensor G3", ramStorage: "8 GB / 128–256 GB", battery: "4.492 mAh", camera: "64 MP dupla", image: "2842/1001239829.jpg" }
      ],
      "Pixel Fold": [
        { year: "2023", model: "Pixel Fold", screen: '7.6" OLED dobrável 120Hz', processor: "Google Tensor G2", ramStorage: "12 GB / 256–512 GB", battery: "4.821 mAh", camera: "48 MP tripla", image: "2822/1001236071.jpg" }
      ]
    }
  },

  Sony: {
    history: "Pioneira na eletrónica de consumo desde a sua fundação em 1946 no Japão, a Sony marcou a história dos telemóveis com a lendária parceria Sony Ericsson e, mais tarde, com a sua própria linha Xperia. A marca destaca-se na indústria por integrar tecnologias ecrã e áudio das suas divisões Bravia e Walkman, além de liderar a produção de sensores fotográficos de nível profissional para smartphones.",
    lines: {
      "Xperia 1": [
        { year: "2019", model: "Xperia 1", screen: '6.5" OLED 4K 120Hz', processor: "Snapdragon 855", ramStorage: "6 GB / 64–128 GB", battery: "3.330 mAh", camera: "12 MP tripla", image: "2799/1001234470.jpg" },
        { year: "2020", model: "Xperia 1 II", screen: '6.5" OLED 4K 90Hz', processor: "Snapdragon 865", ramStorage: "8 GB / 256 GB", battery: "4.000 mAh", camera: "12 MP tripla", image: "2800/1001234476.jpg" },
        { year: "2021", model: "Xperia 1 III", screen: '6.5" OLED 4K 120Hz', processor: "Snapdragon 888", ramStorage: "12 GB / 256–512 GB", battery: "4.500 mAh", camera: "12 MP tripla", image: "2801/1001234498.jpg" },
        { year: "2022", model: "Xperia 1 IV", screen: '6.5" OLED 4K 120Hz', processor: "Snapdragon 8 Gen 1", ramStorage: "12 GB / 256–512 GB", battery: "5.000 mAh", camera: "12 MP tripla", image: "2802/1001234509.jpg" },
        { year: "2023", model: "Xperia 1 V", screen: '6.5" OLED 4K 120Hz', processor: "Snapdragon 8 Gen 2", ramStorage: "12 GB / 256–512 GB", battery: "5.000 mAh", camera: "52 MP tripla", image: "2803/1001234524.jpg" },
        { year: "2024", model: "Xperia 1 VI", screen: '6.5" OLED 4K 120Hz', processor: "Snapdragon 8 Gen 3", ramStorage: "12–16 GB / 256–512 GB", battery: "5.000 mAh", camera: "52 MP tripla", image: "2804/1001234605.jpg" },
        { year: "2025", model: "Xperia 1 VII", screen: '6.5" OLED 4K 120Hz', processor: "Snapdragon 8 Elite", ramStorage: "12–16 GB / 256–512 GB", battery: "5.200 mAh", camera: "52 MP tripla", image: "2805/images/sony-xperia-1-vii.jpg" },
        { year: "2026", model: "Xperia 1 VIII (prev.)", screen: '6.5" OLED 4K 120Hz', processor: "Snapdragon 8 Elite Gen 5", ramStorage: "12–16 GB / 256 GB–1 TB", battery: "5.200 mAh", camera: "200 MP tripla", image: "2806/images/sony-xperia-preto.jpg" }
      ],
      "Xperia 5": [
        { year: "2019", model: "Xperia 5", screen: '6.1" OLED', processor: "Snapdragon 855", ramStorage: "6 GB / 64–128 GB", battery: "3.140 mAh", camera: "12 MP tripla", image: "2780/1001233805.jpg" },
        { year: "2021", model: "Xperia 5 III", screen: '6.1" OLED 120Hz', processor: "Snapdragon 888", ramStorage: "8 GB / 128–256 GB", battery: "4.500 mAh", camera: "12 MP tripla", image: "2781/1001233821.jpg" },
        { year: "2023", model: "Xperia 5 V", screen: '6.1" OLED 120Hz', processor: "Snapdragon 8 Gen 2", ramStorage: "8 GB / 128–256 GB", battery: "5.000 mAh", camera: "52 MP dupla", image: "2782/1001233830.jpg" }
      ],
      "Xperia 10": [
        { year: "2019", model: "Xperia 10", screen: '6.0" IPS LCD', processor: "Snapdragon 630", ramStorage: "3–4 GB / 64 GB", battery: "2.870 mAh", camera: "13 MP dupla", image: "2783/1001233836.jpg" },
        { year: "2022", model: "Xperia 10 IV", screen: '6.0" OLED', processor: "Snapdragon 695", ramStorage: "6 GB / 128 GB", battery: "5.000 mAh", camera: "12 MP tripla", image: "2784/1001233842.jpg" },
        { year: "2024", model: "Xperia 10 VI", screen: '6.1" OLED', processor: "Snapdragon 6 Gen 1", ramStorage: "8 GB / 128 GB", battery: "5.000 mAh", camera: "48 MP dupla", image: "2785/1001233856.jpg" }
      ]
    }
  },

  ASUS: {
    history: "Fundada em 1989 em Taiwan, a ASUS construiu uma reputação global de excelência em hardware para PC e placas-mãe. No mercado de smartphones, a marca destacou-se pela inovação com a potente e aclamada linha ROG Phone focada em gaming de alto desempenho, além de oferecer a série Zenfone, conhecida pelo seu formato compacto e especificações topo de gama.",
    lines: {
      "Zenfone": [
        { year: "2014", model: "Zenfone 5", screen: '5.0" IPS LCD', processor: "Intel Atom Z2560", ramStorage: "1–2 GB / 8–16 GB", battery: "2.110 mAh", camera: "8 MP", image: "2765/images/asus-zenfone.jpg" },
        { year: "2015", model: "Zenfone 2", screen: '5.5" IPS LCD', processor: "Intel Atom Z3580", ramStorage: "2–4 GB / 16–64 GB", battery: "3.000 mAh", camera: "13 MP", image: "2766/images/asus-zenfone-2.jpg" },
        { year: "2016", model: "Zenfone 3", screen: '5.5" IPS LCD', processor: "Snapdragon 625", ramStorage: "3–4 GB / 32–64 GB", battery: "3.000 mAh", camera: "16 MP", image: "2767/images/asus-zenfone-3.jpg" },
        { year: "2021", model: "Zenfone 8", screen: '5.9" AMOLED 120Hz', processor: "Snapdragon 888", ramStorage: "8–16 GB / 128–256 GB", battery: "4.000 mAh", camera: "64 MP dupla", image: "2768/images/asus-zenfone-8.jpg" },
        { year: "2023", model: "Zenfone 10", screen: '5.9" AMOLED 144Hz', processor: "Snapdragon 8 Gen 2", ramStorage: "8–16 GB / 128–512 GB", battery: "4.300 mAh", camera: "50 MP dupla", image: "2770/images/asus-zenfone-10.jpg" },
        { year: "2024", model: "Zenfone 11 Ultra", screen: '6.78" AMOLED 144Hz', processor: "Snapdragon 8 Gen 3", ramStorage: "12–16 GB / 256–512 GB", battery: "5.500 mAh", camera: "50 MP tripla", image: "2771/images/asus-zenfone.jpg" }
      ],
            "ROG Phone": [
        { year: "2018", model: "ROG Phone", screen: '6.0" AMOLED 90Hz', processor: "Snapdragon 845", ramStorage: "8 GB / 128–512 GB", battery: "4.000 mAh", camera: "12 MP dupla", image: "2772/images/asus-rog-phone.jpg" },
        { year: "2019", model: "ROG Phone II", screen: '6.59" AMOLED 120Hz', processor: "Snapdragon 855+", ramStorage: "8–12 GB / 128–512 GB", battery: "6.000 mAh", camera: "48 MP dupla", image: "2773/images/ASUS_ROG_Phone.jpg" },
        { year: "2020", model: "ROG Phone 3", screen: '6.59" AMOLED 144Hz', processor: "Snapdragon 865+", ramStorage: "8–16 GB / 128–512 GB", battery: "6.000 mAh", camera: "64 MP tripla", image: "2774/images/ASUS_ROG_Phone_2.jpg" },
        { year: "2021", model: "ROG Phone 5", screen: '6.78" AMOLED 144Hz', processor: "Snapdragon 888", ramStorage: "8–18 GB / 128–512 GB", battery: "6.000 mAh", camera: "64 MP tripla", image: "2775/images/ASUS_ROG_Phone_3.jpg" },
        { year: "2022", model: "ROG Phone 6 Pro", screen: '6.78" AMOLED 165Hz', processor: "Snapdragon 8+ Gen 1", ramStorage: "16–18 GB / 512 GB", battery: "6.000 mAh", camera: "50 MP tripla", image: "2776/1001233394.jpg" },
        { year: "2023", model: "ROG Phone 7 Ultimate", screen: '6.78" AMOLED 165Hz', processor: "Snapdragon 8 Gen 2", ramStorage: "16 GB / 512 GB", battery: "6.000 mAh", camera: "50 MP tripla", image: "2777/1001233663.jpg" },
        { year: "2024", model: "ROG Phone 8 Pro", screen: '6.78" AMOLED 165Hz', processor: "Snapdragon 8 Gen 3", ramStorage: "16–24 GB / 512 GB–1 TB", battery: "5.500 mAh", camera: "50 MP tripla", image: "2778/1001233702.jpg" },
        { year: "2025", model: "ROG Phone 9 Pro", screen: '6.78" AMOLED 165Hz', processor: "Snapdragon 8 Elite", ramStorage: "16–24 GB / 512 GB–1 TB", battery: "5.800 mAh", camera: "50 MP tripla", image: "2779/1001233710.jpg" }
      ]
    }
  },

  Nothing: {
    history: "Fundada em 2020 em Londres por Carl Pei (co-fundador da OnePlus), a Nothing nasceu com o objetivo de devolver o entusiasmo à tecnologia de consumo. A marca destacou-se rapidamente pelo seu design arrojado e transparente, a inovadora interface de luzes Glyph e um sistema operativo (Nothing OS) focado na fluidez e simplicidade.",
    lines: {
      "Nothing Phone": [
        { year: "2022", model: "Nothing Phone (1)", screen: '6.55" OLED 120Hz', processor: "Snapdragon 778G+", ramStorage: "8–12 GB / 128–256 GB", battery: "4.500 mAh", camera: "50 MP dupla", image: "2636/imagens/nothing-phone-white.jpg" },
        { year: "2023", model: "Nothing Phone (2)", screen: '6.7" LTPO OLED 120Hz', processor: "Snapdragon 8+ Gen 1", ramStorage: "8–12 GB / 128–512 GB", battery: "4.700 mAh", camera: "50 MP dupla", image: "2634/imagens/nothing-phone-2.jpg" },
        { year: "2024", model: "Nothing Phone (2a)", screen: '6.7" AMOLED 120Hz', processor: "MediaTek Dimensity 7200 Pro", ramStorage: "8–12 GB / 128–256 GB", battery: "5.000 mAh", camera: "50 MP dupla", image: "2633/imagens/nothing-phone-dark.jpg" },
        { year: "2024", model: "Nothing Phone (2a) Plus", screen: '6.7" AMOLED 120Hz', processor: "MediaTek Dimensity 7350 Pro", ramStorage: "8–12 GB / 256 GB", battery: "5.000 mAh", camera: "50 MP dupla", image: "2631/imagens/nothing-phone.jpg" },
        { year: "2025", model: "Nothing Phone (3)", screen: '6.67" AMOLED 120Hz', processor: "Snapdragon 8s Gen 4", ramStorage: "12–16 GB / 256–512 GB", battery: "5.000 mAh", camera: "50 MP tripla", image: "2630/images/nothing-phone-branco.jpg" },
        { year: "2025", model: "Nothing Phone (3a)", screen: '6.77" AMOLED 120Hz', processor: "Snapdragon 7s Gen 3", ramStorage: "8–12 GB / 128–256 GB", battery: "5.000 mAh", camera: "50 MP tripla", image: "2629/images/nothing-phone.jpg" },
        { year: "2026", model: "Nothing Phone (4a) Pro", screen: '6.83" AMOLED 120Hz', processor: "Snapdragon 7s Gen 4", ramStorage: "12 GB / 256 GB", battery: "5.080 mAh", camera: "50 MP dupla", image: "2625/images/telemovel-conceito.jpg" }
      ]
    }
  },

  Nokia: {
    history: "Fundada em 1865 na Finlândia como uma fábrica de papel, a Nokia evoluiu para se tornar a gigante absoluta das telecomunicações e a líder incontestada do mercado móvel durante mais de uma década. Famosa por telemóveis lendários e indestrutíveis como o 3310, a marca foi reinventada no mercado moderno de smartphones sob a alçada da HMD Global, focando-se em durabilidade, sustentabilidade e Android puro.",
    lines: {
      "Nokia Lumia": [
        { year: "2011", model: "Nokia Lumia 800", screen: '3.7" AMOLED', processor: "Snapdragon S2", ramStorage: "512 MB / 16 GB", battery: "1.450 mAh", camera: "8 MP", image: "2759/images/nokia-smartphone-3.jpg" },
        { year: "2012", model: "Nokia Lumia 920", screen: '4.5" IPS LCD', processor: "Snapdragon S4", ramStorage: "1 GB / 32 GB", battery: "2.000 mAh", camera: "8.7 MP", image: "2760/1001232662.jpg" },
        { year: "2013", model: "Nokia Lumia 1020", screen: '4.5" AMOLED', processor: "Snapdragon S4", ramStorage: "2 GB / 32 GB", battery: "2.000 mAh", camera: "41 MP", image: "2761/1001232680.jpg" },
        { year: "2014", model: "Nokia Lumia 930", screen: '5.0" AMOLED', processor: "Snapdragon 800", ramStorage: "2 GB / 32 GB", battery: "2.420 mAh", camera: "20 MP", image: "2763/1001232690.jpg" },
        { year: "2015", model: "Nokia Lumia 950", screen: '5.2" AMOLED', processor: "Snapdragon 808", ramStorage: "3 GB / 32 GB", battery: "3.000 mAh", camera: "20 MP", image: "2764/1001232699.jpg" }
      ],
      "Nokia Number Series": [
        { year: "2016", model: "Nokia 6 (HMD)", screen: '5.5" IPS LCD', processor: "Snapdragon 430", ramStorage: "3–4 GB / 32–64 GB", battery: "3.000 mAh", camera: "16 MP", image: "2755/images/nokia-smartphone.jpg" },
        { year: "2017", model: "Nokia 8", screen: '5.3" IPS LCD', processor: "Snapdragon 835", ramStorage: "4–6 GB / 64–128 GB", battery: "3.090 mAh", camera: "13 MP dupla", image: "2756/images/nokia-smartphone-2.jpg" },
        { year: "2018", model: "Nokia 7 Plus", screen: '6.0" IPS LCD', processor: "Snapdragon 660", ramStorage: "4–6 GB / 64 GB", battery: "3.800 mAh", camera: "12 MP dupla", image: "2757/images/nokia-smartphone.jpg" },
        { year: "2019", model: "Nokia 9 PureView", screen: '5.99" P-OLED', processor: "Snapdragon 845", ramStorage: "6 GB / 128 GB", battery: "3.320 mAh", camera: "5x 12 MP", image: "2758/images/nokia-smartphone-2.jpg" }
      ],
      "Nokia X Series": [
        { year: "2021", model: "Nokia X20", screen: '6.67" IPS LCD', processor: "Snapdragon 480", ramStorage: "6–8 GB / 128 GB", battery: "4.470 mAh", camera: "64 MP quádrupla", image: "2753/1001231561.jpg" },
        { year: "2022", model: "Nokia X30", screen: '6.43" AMOLED', processor: "Snapdragon 695", ramStorage: "6–8 GB / 128–256 GB", battery: "4.200 mAh", camera: "50 MP dupla", image: "2754/1001231647.jpg" }
      ]
    }
  },

  HMD: {
    history: "Fundada em 2016 na Finlândia, a HMD (Human Mobile Devices) iniciou o seu percurso como a casa exclusiva dos telemóveis e smartphones com a marca Nokia. Recentemente, a empresa expandiu a sua estratégia para lançar dispositivos com a sua própria marca independente, focando-se em sustentabilidade, reparabilidade em casa (em parceria com a iFixit) e desintoxicação digital.",
    lines: {
      "HMD Skyline": [
        { year: "2023", model: "HMD Skyline", screen: '6.55" P-OLED 144Hz', processor: "Snapdragon 7s Gen 2", ramStorage: "8–12 GB / 128–256 GB", battery: "4.600 mAh", camera: "108 MP tripla", image: "2663/images/hmd-smartphone.jpg" }
      ],
      "HMD Crest": [
        { year: "2024", model: "HMD Crest Max", screen: '6.67" AMOLED 120Hz', processor: "Unisoc T760", ramStorage: "6–8 GB / 128–256 GB", battery: "5.000 mAh", camera: "64 MP tripla", image: "2664/images/hmd-smartphone.jpg" }
      ],
      "HMD Vibe": [
        { year: "2025", model: "HMD Vibe 2 5G", screen: '6.52" IPS LCD 90Hz', processor: "Unisoc T765", ramStorage: "4 GB / 128 GB", battery: "5.000 mAh", camera: "50 MP dupla", image: "2665/images/hmd-smartphone-2.jpg" }
      ]
    }
  },

  TECNO: {
    history: "Fundada em 2006 e pertencente ao grupo Transsion Holdings, a TECNO emergiu como uma força dominante nos mercados emergentes, como África e o Sul da Ásia. A marca ganhou notoriedade global ao focar-se no desenvolvimento de tecnologias fotográficas adaptadas a diferentes tons de pele, expansão da série Camon e no lançamento de dobráveis e conceitos inovadores a preços muito acessíveis.",
    lines: {
      "TECNO Phantom": [
        { year: "2013", model: "TECNO Phantom A", screen: '5.0" LCD', processor: "MediaTek MT6589", ramStorage: "1 GB / 4 GB", battery: "2.100 mAh", camera: "8 MP", image: "2741/images/tecno-branco.jpg" }
      ],
      "TECNO Camon": [
        { year: "2015", model: "TECNO Camon C8", screen: '5.5" LCD', processor: "MediaTek MT6753", ramStorage: "2 GB / 16 GB", battery: "3.000 mAh", camera: "13 MP", image: "2742/images/tecno-camon.jpg" },
        { year: "2017", model: "TECNO Camon CX", screen: '5.5" LCD', processor: "MediaTek Helio P10", ramStorage: "3 GB / 32 GB", battery: "3.200 mAh", camera: "16 MP", image: "2743/images/tecno-cinza.jpg" },
        { year: "2018", model: "TECNO Camon 11", screen: '6.2" LCD', processor: "MediaTek Helio P22", ramStorage: "4–6 GB / 64 GB", battery: "3.750 mAh", camera: "13 MP dupla", image: "2744/images/tecno-camon-vermelho.jpg" },
        { year: "2019", model: "TECNO Camon 12 Pro", screen: '6.4" AMOLED', processor: "MediaTek Helio P22", ramStorage: "6 GB / 64 GB", battery: "3.500 mAh", camera: "16 MP tripla", image: "2745/images/tecno-camon-roxo.jpg" },
        { year: "2020", model: "TECNO Camon 16 Premier", screen: '6.9" LCD 90Hz', processor: "MediaTek Helio G90T", ramStorage: "8 GB / 128 GB", battery: "4.500 mAh", camera: "64 MP quádrupla", image: "2746/images/tecno-camon-prata.jpg" },
        { year: "2021", model: "TECNO Camon 17 Pro", screen: '6.8" LCD 90Hz', processor: "MediaTek Helio G95", ramStorage: "8 GB / 128–256 GB", battery: "5.000 mAh", camera: "64 MP quádrupla", image: "2747/images/tecno-camon.jpg" },
        { year: "2022", model: "TECNO Camon 19 Pro", screen: '6.8" LCD 120Hz', processor: "MediaTek Helio G96", ramStorage: "8 GB / 128–256 GB", battery: "5.000 mAh", camera: "64 MP tripla" },
        { year: "2023", model: "TECNO Camon 20 Pro", screen: '6.67" AMOLED 120Hz', processor: "MediaTek Dimensity 8050", ramStorage: "8–12 GB / 256 GB", battery: "5.000 mAh", camera: "64 MP tripla", image: "2748/images/tecno-camon-20.jpg" },
        { year: "2024", model: "TECNO Camon 30 Pro", screen: '6.78" AMOLED 120Hz', processor: "MediaTek Dimensity 8200", ramStorage: "8–12 GB / 256–512 GB", battery: "5.000 mAh", camera: "50 MP tripla", image: "2749/images/tecno-camon-premium.jpg" },
        { year: "2025", model: "TECNO Camon 40 Pro", screen: '6.78" AMOLED 120Hz', processor: "MediaTek Dimensity 8300", ramStorage: "8–12 GB / 256–512 GB", battery: "5.200 mAh", camera: "50 MP tripla", image: "2751/images/tecno-camon-blue.jpg" },
        { year: "2026", model: "TECNO Camon 50 Pro", screen: '6.78" AMOLED 120Hz', processor: "MediaTek Dimensity 8400", ramStorage: "8–12 GB / 256 GB", battery: "6.500 mAh", camera: "50 MP tripla", image: "2752/images/tecno-camon.jpg" }
      ]
    }
  },

  Infinix: {
    history: "Fundada em 2013 e pertencente ao grupo Transsion Holdings, a Infinix focou-se no público jovem de mercados emergentes ao oferecer smartphones com design arrojado, grandes ecrãs e elevado desempenho para gaming e multimédia. Destaca-se por democratizar especificações avançadas e carregamento ultrarrápido a preços bastante competitivos.",
    lines: {
      "Infinix Zero": [
        { year: "2013", model: "Infinix Zero", screen: '5.0" LCD', processor: "MediaTek MT6582", ramStorage: "1 GB / 8 GB", battery: "2.000 mAh", camera: "8 MP", image: "2729/images/infinix-note-30-5g.jpg" },
        { year: "2017", model: "Infinix Zero 5", screen: '5.98" LCD', processor: "MediaTek Helio P25", ramStorage: "6 GB / 64 GB", battery: "4.350 mAh", camera: "12 MP dupla", image: "2730/1001228377.jpg" },
        { year: "2020", model: "Infinix Zero 8", screen: '6.85" LCD 90Hz', processor: "MediaTek Helio G90T", ramStorage: "8 GB / 128 GB", battery: "4.500 mAh", camera: "64 MP quádrupla", image: "2731/1001228642.jpg" }
      ],
      "Infinix Hot": [
        { year: "2015", model: "Infinix Hot 2", screen: '5.0" LCD', processor: "MediaTek MT6580", ramStorage: "1–2 GB / 16 GB", battery: "2.200 mAh", camera: "8 MP", image: "2727/images/infinix-hot.jpg" },
        { year: "2019", model: "Infinix Hot 8", screen: '6.52" LCD', processor: "MediaTek Helio P22", ramStorage: "2–4 GB / 32–64 GB", battery: "5.000 mAh", camera: "13 MP tripla", image: "2728/images/infinix-hot-2.jpg" }
      ],
      "Infinix Note": [
        { year: "2016", model: "Infinix Note 3", screen: '5.98" LCD', processor: "MediaTek Helio X10", ramStorage: "2–3 GB / 16–32 GB", battery: "4.500 mAh", camera: "13 MP", image: "2732/1001228663.jpg" },
        { year: "2018", model: "Infinix Note 5", screen: '5.99" LCD', processor: "MediaTek Helio P23", ramStorage: "3–4 GB / 32–64 GB", battery: "4.500 mAh", camera: "12 MP", image: "2733/1001228744.jpg" },
        { year: "2021", model: "Infinix Note 10 Pro", screen: '6.95" LCD 90Hz', processor: "MediaTek Helio G95", ramStorage: "6–8 GB / 128–256 GB", battery: "5.000 mAh", camera: "64 MP quádrupla", image: "2735/images/infinix-preto.jpg" },
        { year: "2022", model: "Infinix Note 12 Pro", screen: '6.7" AMOLED', processor: "MediaTek Helio G99", ramStorage: "8 GB / 128–256 GB", battery: "5.000 mAh", camera: "108 MP tripla", image: "2736/images/infinix-azul.jpg" },
        { year: "2023", model: "Infinix Note 30 Pro", screen: '6.67" AMOLED 120Hz', processor: "MediaTek Helio G99", ramStorage: "8–12 GB / 128–256 GB", battery: "5.000 mAh", camera: "108 MP tripla", image: "2737/images/infinix-dourado.jpg" },
        { year: "2024", model: "Infinix Note 40 Pro", screen: '6.78" AMOLED 120Hz', processor: "MediaTek Dimensity 7020", ramStorage: "8–12 GB / 256 GB", battery: "5.000 mAh", camera: "108 MP tripla", image: "2738/images/infinix-5g.jpg" },
        { year: "2025", model: "Infinix Note 50 Pro", screen: '6.78" AMOLED 144Hz', processor: "MediaTek Dimensity 8350", ramStorage: "12 GB / 256 GB", battery: "5.200 mAh", camera: "50 MP tripla", image: "2739/images/infinix-bronze.jpg" },
        { year: "2026", model: "Infinix Note 60 Ultra", screen: '6.78" AMOLED 144Hz', processor: "MediaTek Dimensity 8400", ramStorage: "12 GB / 256 GB", battery: "6.000 mAh", camera: "50 MP tripla", image: "2740/images/infinix-pininfarina.jpg" }
      ]
    }
  },

  itel: {
    history: "Fundada em 2007 e também pertencente ao grupo Transsion Holdings, a itel foca-se em disponibilizar tecnologia essencial e fiável para mercados em desenvolvimento. A marca é reconhecida por liderar o segmento de entrada de gama, oferecendo telemóveis e smartphones práticos, com grande autonomia de bateria e preços extremamente acessíveis.",
    lines: {
      "itel P Series": [
        { year: "2018", model: "itel P32", screen: '5.5" LCD', processor: "MediaTek MT6580", ramStorage: "1–2 GB / 8–16 GB", battery: "4.000 mAh", camera: "5 MP dupla", image: "2725/images/itel-smartphone.jpg" },
        { year: "2020", model: "itel P36", screen: '6.09" LCD', processor: "Unisoc SC9863A", ramStorage: "2 GB / 32 GB", battery: "5.000 mAh", camera: "8 MP dupla", image: "2726/images/itel-smartphone-2.jpg" }
      ],
      "itel A Series": [
        { year: "2019", model: "itel A46", screen: '5.45" LCD', processor: "Unisoc SC9863A", ramStorage: "2 GB / 32 GB", battery: "4.000 mAh", camera: "8 MP dupla", image: "2722/images/1001227786.jpg" },
        { year: "2022", model: "itel A27", screen: '5.45" LCD', processor: "Unisoc SC9832E", ramStorage: "2 GB / 32 GB", battery: "4.000 mAh", camera: "5 MP", image: "2723/images/1001227805.jpg" },
        { year: "2024", model: "itel A50", screen: '6.6" LCD', processor: "Unisoc T603", ramStorage: "3–4 GB / 64–128 GB", battery: "5.000 mAh", camera: "8 MP dupla", image: "2724/images/1001228020.jpg" }
      ],
      "itel S Series": [
        { year: "2023", model: "itel S23", screen: '6.6" AMOLED 90Hz', processor: "Unisoc T606", ramStorage: "4–8 GB / 128 GB", battery: "5.000 mAh", camera: "50 MP", image: "2720/images/1001227779.jpg" }
      ]
    }
  },

  ZTE: {
    history: "Fundada em 1985 na China, a ZTE é uma das maiores empresas de equipamentos de telecomunicações do mundo. No mercado de smartphones, a marca destacou-se pela inovação tecnológica, sendo pioneira no lançamento de dispositivos com câmara sob o ecrã (série Axon) e no desenvolvimento de smartphones de topo voltados para gaming com a sua aclamada linha RedMagic.",
    lines: {
      "Blade": [
        { year: "2010", model: "ZTE Blade", screen: '3.5" LCD', processor: "Snapdragon S1", ramStorage: "512 MB / 512 MB", battery: "1.250 mAh", camera: "3.2 MP", image: "2660/1001224862.png" }
      ],
      "Axon": [
        { year: "2016", model: "ZTE Axon 7", screen: '5.5" AMOLED 1440p', processor: "Snapdragon 820", ramStorage: "4–6 GB / 64–128 GB", battery: "3.250 mAh", camera: "20 MP", image: "2661/images/zte-axon.jpg" },
        { year: "2023", model: "ZTE Axon 50 Ultra", screen: '6.67" AMOLED 144Hz', processor: "Snapdragon 8+ Gen 1", ramStorage: "12 GB / 256–512 GB", battery: "5.000 mAh", camera: "64 MP tripla", image: "2662/images/zte-axon-5g.jpg" }
      ]
    }
  },

  nubia: {
    history: "Criada em 2012 como uma sub-marca de topo da ZTE e tornando-se uma empresa independente em 2015, a Nubia destacou-se no mercado pelo foco em fotografia profissional e design sem margens. A marca ganhou grande notoriedade internacional através da sua submarca RedMagic, totalmente dedicada a smartphones de gaming com arrefecimento ativo e desempenho extremo.",
    lines: {
      "Z Series": [
        { year: "2014", model: "ZTE Nubia Z7", screen: '5.5" LCD 1440p', processor: "Snapdragon 801", ramStorage: "3 GB / 32 GB", battery: "3.000 mAh", camera: "13 MP", image: "2658/images/zte-smartphone.jpg" },
        { year: "2024", model: "nubia Z60 Ultra", screen: '6.8" AMOLED 120Hz', processor: "Snapdragon 8 Gen 3", ramStorage: "12–16 GB / 256 GB–1 TB", battery: "6.000 mAh", camera: "50 MP tripla", image: "2657/images/nubia-smartphone.jpg" }
      ],
      "Flip Series": [
        { year: "2024", model: "nubia Flip 5G", screen: '6.9" OLED dobrável', processor: "Snapdragon 7 Gen 1", ramStorage: "8–12 GB / 256–512 GB", battery: "4.310 mAh", camera: "50 MP dupla", image: "2659/images/smartphone.jpg" }
      ]
    }
  },

  REDMAGIC: {
    history: "Lançada em 2018 como a divisão focada em gaming da Nubia (e associada à ZTE), a RedMagic nasceu com o objetivo claro de ultrapassar os limites do desempenho móvel. A marca tornou-se uma referência global para jogadores ao introduzir ventoinhas de arrefecimento físico integradas nos smartphones, gatilhos tácteis dedicados, ecrãs com elevadas taxas de atualização e um design futurista inconfundível.",
    lines: {
        "RedMagic Series": [
        { year: "2018", model: "nubia RedMagic", screen: '6.0" LCD 1080p', processor: "Snapdragon 835", ramStorage: "6–8 GB / 64–128 GB", battery: "3.800 mAh", camera: "24 MP", image: "2648/imagens/redmagic-mars.jpg" },
        { year: "2019", model: "nubia RedMagic 3", screen: '6.65" AMOLED 90Hz', processor: "Snapdragon 855", ramStorage: "6–12 GB / 64–256 GB", battery: "5.000 mAh", camera: "48 MP", image: "2647/imagens/redmagic-gaming-2.jpg" },
        { year: "2020", model: "nubia RedMagic 5G", screen: '6.65" AMOLED 144Hz', processor: "Snapdragon 865", ramStorage: "8–16 GB / 128–256 GB", battery: "4.500 mAh", camera: "64 MP tripla", image: "2641/imagens/redmagic-5g.jpg" },
        { year: "2021", model: "nubia RedMagic 6 Pro", screen: '6.8" AMOLED 165Hz', processor: "Snapdragon 888", ramStorage: "12–18 GB / 128–512 GB", battery: "5.050 mAh", camera: "64 MP tripla", image: "2640/imagens/redmagic-rgb.jpg" },
        { year: "2022", model: "nubia RedMagic 7 Pro", screen: '6.8" AMOLED 165Hz', processor: "Snapdragon 8 Gen 1", ramStorage: "8–18 GB / 128 GB–1 TB", battery: "5.000 mAh", camera: "64 MP tripla", image: "2639/imagens/redmagic-gaming.jpg" },
        { year: "2023", model: "nubia RedMagic 8 Pro", screen: '6.8" AMOLED 120Hz', processor: "Snapdragon 8 Gen 2", ramStorage: "8–16 GB / 128–512 GB", battery: "6.000 mAh", camera: "50 MP tripla", image: "2638/imagens/redmagic-silver.jpg" },
        { year: "2024", model: "nubia RedMagic 9 Pro", screen: '6.8" AMOLED 120Hz', processor: "Snapdragon 8 Gen 3", ramStorage: "8–16 GB / 256 GB–1 TB", battery: "6.500 mAh", camera: "50 MP tripla", image: "2637/imagens/redmagic.jpg" },
        { year: "2025", model: "nubia RedMagic 10 Pro", screen: '6.85" AMOLED 144Hz', processor: "Snapdragon 8 Elite", ramStorage: "12–24 GB / 256 GB–1 TB", battery: "7.050 mAh", camera: "50 MP tripla", image: "2628/images/redmagic-concept.jpg" },
        { year: "2026", model: "nubia RedMagic 11S Pro", screen: '6.85" AMOLED 144Hz', processor: "Snapdragon 8 Elite Gen 5", ramStorage: "12–24 GB / 256 GB–1 TB", battery: "8.000 mAh", camera: "50 MP tripla", image: "2627/images/redmagic.jpg" }
      ]
    }
  },

  TCL: {
    history: "Fundada em 1981 na China como TTK e mais tarde renomeada para TCL (The Creative Life), a empresa tornou-se uma gigante global no setor dos eletrodomésticos e televisores. No mercado móvel, após anos a fabricar e gerir dispositivos sob licença da BlackBerry e Alcatel, a marca lançou a sua própria linha de smartphones, destacando-se pela tecnologia de ecrã avançada NXTPAPER e excelente relação qualidade-preço.", 
    lines: {
      "TCL Series": [
        { year: "2019", model: "TCL Plex", screen: '6.53" LCD', processor: "Snapdragon 675", ramStorage: "6 GB / 128 GB", battery: "3.820 mAh", camera: "48 MP tripla", image: "2713/images/tcl-iridescente.jpg" },
        { year: "2020", model: "TCL 10 Pro", screen: '6.47" AMOLED', processor: "Snapdragon 675", ramStorage: "6 GB / 128 GB", battery: "4.500 mAh", camera: "64 MP quádrupla", image: "2714/images/tcl-cinza.jpg" },
        { year: "2021", model: "TCL 20 Pro 5G", screen: '6.67" AMOLED', processor: "Snapdragon 750G", ramStorage: "6–8 GB / 256 GB", battery: "4.500 mAh", camera: "48 MP quádrupla", image: "2715/images/tcl-smartphone.jpg" },
        { year: "2022", model: "TCL 30 5G", screen: '6.7" AMOLED', processor: "MediaTek Dimensity 700", ramStorage: "4–6 GB / 64–128 GB", battery: "5.000 mAh", camera: "50 MP tripla", image: "2716/images/TCL_Smartphone_01.jpg" },
        { year: "2023", model: "TCL 40 XL", screen: '6.75" LCD 90Hz', processor: "MediaTek Helio G37", ramStorage: "4 GB / 128 GB", battery: "5.000 mAh", camera: "50 MP tripla", image: "2717/images/TCL_Smartphone_02.jpg" },
        { year: "2024", model: "TCL 50 XL 5G", screen: '6.78" LCD 120Hz', processor: "MediaTek Dimensity 6100+", ramStorage: "6 GB / 128 GB", battery: "5.010 mAh", camera: "50 MP tripla", image: "2718/images/TCL_Smartphone_03.jpg" },
        { year: "2025", model: "TCL 60 XE 5G", screen: '6.78" LCD 120Hz', processor: "MediaTek Dimensity 6300", ramStorage: "8 GB / 256 GB", battery: "5.200 mAh", camera: "50 MP tripla", image: "2719/images/TCL_Smartphone_04.jpg" }
      ],
      "TCL NXTPAPER": [
        { year: "2024", model: "TCL 50 Pro NXTPAPER", screen: '6.8" NXTPAPER', processor: "MediaTek Dimensity 7050", ramStorage: "8 GB / 256–512 GB", battery: "5.010 mAh", camera: "108 MP tripla", image: "2712/images/tcl-nxtpaper.jpg" }
      ]
    }
  },

  Lenovo: {
    history: "Fundada em 1984 em Pequim, a Lenovo é uma das maiores empresas de tecnologia do mundo e líder no mercado global de PCs. No setor móvel, expandiu significativamente a sua presença com a aquisição da Motorola à Google em 2014, mantendo a sua própria linha de dispositivos focada em inovação, produtividade e smartphones de topo para gaming sob a chancela Legion.",
    lines: {
      "Lenovo Legion": [
        { year: "2020", model: "Lenovo Legion Duel", screen: '6.65" AMOLED 144Hz', processor: "Snapdragon 865+", ramStorage: "12–16 GB / 256–512 GB", battery: "5.000 mAh", camera: "64 MP dupla", image: "2676/images/lenovo-legion-azul.jpg" },
        { year: "2021", model: "Lenovo Legion Duel 2", screen: '6.92" AMOLED 144Hz', processor: "Snapdragon 888", ramStorage: "12–16 GB / 256–512 GB", battery: "5.500 mAh", camera: "64 MP dupla", image: "2674/images/lenovo-legion.jpg" },
        { year: "2022", model: "Lenovo Legion Y70", screen: '6.67" AMOLED 144Hz', processor: "Snapdragon 8+ Gen 1", ramStorage: "8–12 GB / 128–256 GB", battery: "5.100 mAh", camera: "50 MP tripla", image: "2678/images/lenovo-legion-preto.jpg" },
        { year: "2024", model: "Lenovo Legion Y70 (2024)", screen: '6.8" AMOLED 165Hz', processor: "Snapdragon 8 Gen 3", ramStorage: "12–16 GB / 256–512 GB", battery: "5.500 mAh", camera: "50 MP tripla", image: "2680/images/lenovo-legion-tablet.jpg" }
      ],
      "Lenovo K": [
        { year: "2012", model: "Lenovo K800", screen: '4.5" LCD', processor: "Intel Atom", ramStorage: "1 GB / 16 GB", battery: "1.900 mAh", camera: "8 MP", image: "2672/images/lenovo-smartphone.png" }
      ],
      "Lenovo ThinkPhone": [
        { year: "2023", model: "Lenovo ThinkPhone", screen: '6.6" P-OLED 144Hz', processor: "Snapdragon 8+ Gen 1", ramStorage: "8–12 GB / 256–512 GB", battery: "5.000 mAh", camera: "50 MP dupla", image: "2671/images/smartphone.jpg" }
      ]
    }
  },

  Meizu: {
    history: "Fundada em 2003 por Jack Wong como fabricante de leitores de MP3/MP4, a Meizu transitou para o mercado de smartphones em 2008, tornando-se uma das pioneiras da telefonia inteligente na China. A marca destacou-se ao longo dos anos pela sua interface Flyme OS, pelo design cuidado com botões capacitivos inovadores (como o mBack) e pela integração de componentes de alta fidelidade de áudio.",
    lines: {
      "Meizu Number Series": [
        { year: "2019", model: "Meizu 16s", screen: '6.2" AMOLED', processor: "Snapdragon 855", ramStorage: "6–8 GB / 128–256 GB", battery: "3.600 mAh", camera: "48 MP dupla", image: "2706/images/meizu-16s.jpg" },
        { year: "2020", model: "Meizu 17", screen: '6.6" AMOLED 120Hz', processor: "Snapdragon 865", ramStorage: "8–12 GB / 128–256 GB", battery: "4.500 mAh", camera: "64 MP quádrupla", image: "2707/images/meizu-verde.jpg" },
        { year: "2021", model: "Meizu 18 Pro", screen: '6.7" AMOLED 120Hz', processor: "Snapdragon 888", ramStorage: "8–12 GB / 128–256 GB", battery: "4.500 mAh", camera: "50 MP tripla", image: "2708/images/meizu-pro-branco.jpg" },
        { year: "2022", model: "Meizu 19", screen: '6.7" AMOLED 120Hz', processor: "Snapdragon 8 Gen 1", ramStorage: "8–12 GB / 128–256 GB", battery: "4.700 mAh", camera: "50 MP tripla", image: "2709/images/meizu-smartphone.jpg" },
        { year: "2023", model: "Meizu 20", screen: '6.55" AMOLED 120Hz', processor: "Snapdragon 8 Gen 2", ramStorage: "12 GB / 128–512 GB", battery: "4.700 mAh", camera: "50 MP tripla", image: "2710/images/meizu-dourado.jpg" },
        { year: "2024", model: "Meizu 21", screen: '6.55" AMOLED 120Hz', processor: "Snapdragon 8 Gen 3", ramStorage: "12 GB / 256–512 GB", battery: "4.800 mAh", camera: "50 MP tripla", image: "2711/images/smartphone-lilas.jpg" }
      ],
      "Meizu Pro": [
        { year: "2015", model: "Meizu Pro 5", screen: '5.7" AMOLED', processor: "Exynos 7420", ramStorage: "3–4 GB / 32–64 GB", battery: "3.050 mAh", camera: "21 MP", image: "2703/images/meizu-pro5.jpg" },
        { year: "2016", model: "Meizu Pro 6", screen: '5.2" AMOLED', processor: "MediaTek Helio X25", ramStorage: "4 GB / 32–64 GB", battery: "2.560 mAh", camera: "21 MP", image: "2704/images/meizu-cinza.jpg" },
        { year: "2017", model: "Meizu Pro 7 Plus", screen: '5.7" AMOLED', processor: "MediaTek Helio X30", ramStorage: "6 GB / 64–128 GB", battery: "3.500 mAh", camera: "12 MP dupla", image: "2705/images/meizu-pro7.jpg" }
      ],
      "Meizu Note": [
        { year: "2025", model: "Meizu Note 22 Pro", screen: '6.78" AMOLED 120Hz', processor: "Snapdragon 7+ Gen 3", ramStorage: "8–12 GB / 256–512 GB", battery: "6.200 mAh", camera: "50 MP tripla", image: "2701/images/meizu-smartphone.jpg" },
        { year: "2026", model: "Meizu Note 16 (prev.)", screen: '6.78" AMOLED 120Hz', processor: "Snapdragon 6 Gen 1", ramStorage: "8–12 GB / 128–256 GB", battery: "5.000 mAh", camera: "50 MP dupla", image: "2702/images/meizu-preto.jpg" }
      ]
    }
  },

  Sharp: {
    history: "Fundada em 1912 no Japão, a Sharp é uma lendária empresa de eletrónica de consumo, famosa pelas suas inovações em tecnologias de visualização. No mercado móvel, a marca destacou-se por ser pioneira no lançamento do primeiro telemóvel com câmara integrada (o J-SH04, no ano 2000) e, mais recentemente, pela linha AQUOS, reconhecida pelos ecrãs de topo com tecnologias como OLED e taxas de atualização ultra-elevadas.",
    lines: {
      "AQUOS R": [
        { year: "2017", model: "Sharp Aquos R", screen: '5.3" LCD 1440p', processor: "Snapdragon 835", ramStorage: "4 GB / 64 GB", battery: "3.160 mAh", camera: "22.6 MP", image: "2656/images/sharp-aquos.jpg" },
        { year: "2019", model: "Sharp Aquos R3", screen: '6.2" LCD 120Hz', processor: "Snapdragon 855", ramStorage: "6 GB / 128 GB", battery: "3.200 mAh", camera: "12 MP dupla", image: "2655/images/sharp-aquos.jpg" },
        { year: "2021", model: "Sharp Aquos R6", screen: '6.6" OLED 120Hz', processor: "Snapdragon 888", ramStorage: "12 GB / 128 GB", battery: "5.000 mAh", camera: "20 MP dupla", image: "2654/images/sharp-aquos.jpg" },
        { year: "2022", model: "Sharp Aquos R7", screen: '6.6" OLED 120Hz', processor: "Snapdragon 8 Gen 1", ramStorage: "12 GB / 256 GB", battery: "5.000 mAh", camera: "47 MP dupla", image: "2653/images/aquos-blue.png" },
        { year: "2023", model: "Sharp Aquos R8 Pro", screen: '6.6" OLED 120Hz', processor: "Snapdragon 8 Gen 2", ramStorage: "12 GB / 256 GB", battery: "5.000 mAh", camera: "47 MP dupla", image: "2652/images/aquos-leitz-black.png" },
        { year: "2024", model: "Sharp Aquos R9 Pro", screen: '6.6" OLED 120Hz', processor: "Snapdragon 8s Gen 3", ramStorage: "12 GB / 256–512 GB", battery: "5.000 mAh", camera: "50 MP tripla", image: "2651/images/sharp-aquos-black.png" },
        { year: "2025", model: "Sharp Aquos R10", screen: '6.6" OLED 120Hz', processor: "Snapdragon 8 Gen 3", ramStorage: "12 GB / 256–512 GB", battery: "5.000 mAh", camera: "50 MP tripla", image: "2650/images/sharp-aquos.png" },
        { year: "2026", model: "Sharp Aquos R11", screen: '6.6" OLED 120Hz', processor: "Snapdragon 8s Gen 4", ramStorage: "12 GB / 256–512 GB", battery: "5.000 mAh", camera: "50 MP tripla", image: "2649/imagens/sharp-aquos.jpg" }
      ]
    }
  },

  BlackBerry: {
    history: "Fundada em 1984 no Canadá como Research In Motion (RIM), a BlackBerry revolucionou a comunicação móvel e o segmento corporativo no início dos anos 2000. Famosa pelos seus teclados QWERTY físicos, segurança avançada de dados e o lendário serviço BlackBerry Messenger (BBM), a marca definiu o conceito de smartphone empresarial antes de transitar a sua licença e ecossistema para outras fabricantes e focar-se em cibersegurança.",
    lines: {
      "BlackBerry KEY": [
        { year: "2017", model: "BlackBerry KEYone", screen: '4.5" LCD', processor: "Snapdragon 625", ramStorage: "3–4 GB / 32–64 GB", battery: "3.505 mAh", camera: "12 MP", image: "2669/images/blackberry-smartphone.jpg" },
        { year: "2018", model: "BlackBerry KEY2", screen: '4.5" LCD', processor: "Snapdragon 660", ramStorage: "6 GB / 64–128 GB", battery: "3.500 mAh", camera: "12 MP dupla", image: "2670/images/blackberry-smartphone.jpg" }
      ],
      "BlackBerry Bold": [
        { year: "2011", model: "BlackBerry Bold 9900", screen: '2.8" LCD', processor: "Snapdragon S2", ramStorage: "768 MB / 8 GB", battery: "1.230 mAh", camera: "5 MP", image: "2666/images/blackberry.jpg" }
      ],
      "BlackBerry Passport": [
        { year: "2014", model: "BlackBerry Passport", screen: '4.5" LCD', processor: "Snapdragon 801", ramStorage: "3 GB / 32 GB", battery: "3.450 mAh", camera: "13 MP", image: "2668/1001225530.jpg" }
      ],
      "BlackBerry Priv": [
        { year: "2015", model: "BlackBerry Priv", screen: '5.4" AMOLED', processor: "Snapdragon 808", ramStorage: "3 GB / 32 GB", battery: "3.410 mAh", camera: "18 MP", image: "2667/images/blackberry-passport.jpg" }
      ]
    }
  },

  LG: {
    history: "Fundada em 1958 na Coreia do Sul como GoldStar, a LG foi durante décadas uma das maiores inovadoras do mercado móvel global. A marca destacou-se por introduzir o primeiro telemóvel com ecrã tátil capacitivo (LG Prada), ecrãs curvos (série G Flex), módulos expansíveis (LG G5) e formatos arrojados de duplo ecrã como o LG Wing, antes de encerrar formalmente a sua divisão de smartphones em 2021.",
    lines: {
      "LG G": [
        { year: "2013", model: "LG G2", screen: '5.2" LCD 1080p', processor: "Snapdragon 800", ramStorage: "2 GB / 16–32 GB", battery: "3.000 mAh", camera: "13 MP", image: "2694/1001226307.jpg" },
        { year: "2014", model: "LG G3", screen: '5.5" LCD 1440p', processor: "Snapdragon 801", ramStorage: "2–3 GB / 16–32 GB", battery: "3.000 mAh", camera: "13 MP", image: "2695/1001226316.jpg" },
        { year: "2015", model: "LG G4", screen: '5.5" LCD 1440p', processor: "Snapdragon 808", ramStorage: "3 GB / 32 GB", battery: "3.000 mAh", camera: "16 MP", image: "2696/1001226327.jpg" },
        { year: "2016", model: "LG G5", screen: '5.3" LCD 1440p', processor: "Snapdragon 820", ramStorage: "4 GB / 32 GB", battery: "2.800 mAh", camera: "16 MP dupla", image: "2697/1001226335.jpg" },
        { year: "2017", model: "LG G6", screen: '5.7" LCD 1440p', processor: "Snapdragon 821", ramStorage: "4 GB / 32–128 GB", battery: "3.300 mAh", camera: "13 MP dupla", image: "2698/1001226341.jpg" },
        { year: "2018", model: "LG G7 ThinQ", screen: '6.1" LCD 1440p', processor: "Snapdragon 845", ramStorage: "4–6 GB / 64–128 GB", battery: "3.000 mAh", camera: "16 MP dupla", image: "2699/images/lg-g7-thinq.jpg" },
        { year: "2019", model: "LG G8 ThinQ", screen: '6.1" OLED 1440p', processor: "Snapdragon 855", ramStorage: "6 GB / 128 GB", battery: "3.500 mAh", camera: "12 MP tripla", image: "2700/images/lg-smartphone.jpg" }
      ],
      "LG V": [
        { year: "2021", model: "LG V60 ThinQ", screen: '6.8" P-OLED 1080p', processor: "Snapdragon 865", ramStorage: "8 GB / 128–256 GB", battery: "5.000 mAh", camera: "64 MP tripla", image: "2691/images/lg-v60-thinq.jpg" }
      ],
      "LG Velvet": [
        { year: "2020", model: "LG Velvet", screen: '6.8" P-OLED 1080p', processor: "Snapdragon 765G", ramStorage: "6–8 GB / 128 GB", battery: "4.300 mAh", camera: "48 MP tripla", image: "2693/images/lg-smartphone.jpg" }
      ],
      "LG Wing": [
        { year: "2020", model: "LG Wing", screen: '6.8" P-OLED rotativo', processor: "Snapdragon 765G", ramStorage: "8 GB / 128–256 GB", battery: "4.000 mAh", camera: "64 MP tripla", image: "2692/images/lg-wing.jpg" }
      ]
    }
  }

};


/* ==========================================
   LÓGICA DE RENDERIZAÇÃO — DESIGN CLARO MODERNO
========================================== */

const content = document.getElementById("content");

function getTotalBrands() { return Object.keys(smartphoneData).length; }
function getTotalLines() {
    let total = 0;
    Object.values(smartphoneData).forEach(brand => { total += Object.keys(brand.lines).length; });
    return total;
}
function getTotalPhones() {
    let total = 0;
    Object.values(smartphoneData).forEach(brand => {
        Object.values(brand.lines).forEach(models => { total += models.length; });
    });
    return total;
}

const phoneColors = ["purple", "gray", "green", "blue", "purple", "gray", "green", "blue"];

function findLineForModel(brandName, modelName) {
    const brand = smartphoneData[brandName];
    if (!brand) return "";
    for (const lineName of Object.keys(brand.lines)) {
        if (brand.lines[lineName].some(m => m.model === modelName)) {
            return lineName;
        }
    }
    return Object.keys(brand.lines)[0] || "";
}

function getPhonesByYear(yearTarget = "2026") {
    let phones = [];
    Object.entries(smartphoneData).forEach(([brand, brandData]) => {
        Object.entries(brandData.lines).forEach(([line, models]) => {
            models.forEach(m => {
                if (m.year === yearTarget) {
                    phones.push({ brand, line, ...m });
                }
            });
        });
    });
    return phones;
}

let currentFeaturedIndex = 0;

function renderFeaturedCard(index) {
    const all2026 = getPhonesByYear("2026");
    
    return `
        <div class="featured-grid" style="grid-template-columns: 1fr; max-width: 800px; margin: 0 auto;">
            <div class="featured-info" style="text-align: center;">
                <p class="brand-label">SmartPédia</p>
                <h2>Mundo dos smartphones</h2>
                
                <div class="featured-teaser" style="margin: 16px 0; padding: 18px; background: rgba(37, 99, 235, 0.05); border-left: 4px solid var(--primary-color, #2563eb); border-radius: 6px; text-align: left;">
                    <p style="font-size: 1rem; line-height: 1.6; color: var(--navy, #1e293b); margin: 0 0 10px 0;">
                        O futuro da tecnologia móvel está oficialmente entre nós. Este ano traz uma revolução sem precedentes em inteligência artificial, fotografia computacional e autonomia de bateria.
                    </p>
                    <p style="font-size: 1rem; font-weight: 600; color: var(--primary-color, #2563eb); margin: 0;">
                        Preparado para descobrir os smartphones que estão a mudar as regras do jogo?
                    </p>
                </div>

                <div style="display: flex; gap: 10px; margin-top: 20px; justify-content: center; flex-wrap: wrap;">
                    <button class="btn-primary" style="background: #10b981;" onclick="showAll2026Phones()">Ver todos os modelos de 2026 (${all2026.length}) <i class="fas fa-list"></i></button>
                </div>
            </div>
        </div>
    `;
}


function changeFeaturedPhone(index) {
    const container = document.getElementById("featured-card-container");
    if (container) {
        container.innerHTML = renderFeaturedCard(index);
    }
}

function showAll2026Phones() {
    const phones2026 = getPhonesByYear("2026");
    content.innerHTML = `
        <section class="page-section">
            <button class="back-button" onclick="showHome()"><i class="fas fa-arrow-left"></i> Voltar ao início</button>
            <p class="eyebrow">LANÇAMENTOS DE 2026</p>
            <h1>Smartphones de 2026</h1>
            <p>Todos os ${phones2026.length} modelos e flagships lançados em 2026.</p>
            <div class="phone-grid">
                ${phones2026.map(item => `
                    <div class="phone-card" onclick="openPhone('${item.brand}', '${item.line}', '${item.model}')">
                        <div class="phone-visual">
                            ${item.image ? `<img src="${item.image}" alt="${item.model}" style="max-height:100%; max-width:100%; object-fit:contain;">` : `<div class="mock-phone"></div>`}
                        </div>
                        <div class="phone-card-info">
                            <small>${item.brand} • ${item.year}</small>
                            <h2>${item.model}</h2>
                            <p style="font-size: 0.8rem; color: var(--navy); margin-top: 4px;">⚙️ ${item.processor}</p>
                        </div>
                    </div>
                `).join("")}
            </div>
        </section>
    `;
    window.scrollTo(0, 0);
}

function showHome() {
    const featuredCards = [
        { brand: "Apple", model: "iPhone 18 Pro Max", color: "gray" },
        { brand: "Samsung", model: "Galaxy S26 Ultra", color: "purple" },
        { brand: "Google", model: "Pixel 10a", color: "blue" },
        { brand: "Nothing", model: "Nothing Phone (4a) Pro", color: "orange" },
        { brand: "HONOR", model: "Honor Magic 8 Pro", color: "green" }
    ];

    content.innerHTML = `
        <section class="hero">
            <div class="hero-container">
                <div class="hero-content">
                    <p class="eyebrow">A ENCICLOPÉDIA MUNDIAL DOS SMARTPHONES</p>
                    <h1>Descobre o mundo<br>dos <span class="gradient-text">smartphones</span></h1>
                    <p class="hero-description">A SmartPédia é a enciclopédia completa de smartphones de todas as marcas e modelos. Explora, compara e encontra o smartphone ideal para ti.</p>
                    <div class="hero-search">
                        <i class="fas fa-search"></i>
                        <input type="text" placeholder="Pesquisar marca, linha ou modelo...">
                        <button aria-label="Pesquisar"><i class="fas fa-search"></i></button>
                    </div>
                </div>
                <div class="hero-visual">
                    <div class="hero-glow"></div>
                    <img src="2608/imagens/hero-smartphones.jpg" alt="Galaxy S26 Ultra e iPhone 18 Pro Max" class="hero-image">
                    <p class="hero-note">Tecnologia<br>que aproxima<br>você do futuro.</p>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="section-container">
                <div class="section-header">
                    <h2>Smartphones em destaque</h2>
                    <a href="#" class="see-all" onclick="showAllPhones(); return false;">Ver todos <i class="fas fa-arrow-right"></i></a>
                </div>
                <div class="phone-cards">
                    ${featuredCards.map(card => `
                        <div class="phone-card-item" onclick="openPhone('${card.brand}', '${findLineForModel(card.brand, card.model)}', '${card.model}')">
                            <div class="phone-card-visual"><div class="mini-phone ${card.color}"></div></div>
                            <div class="phone-card-info"><div><small>${card.brand}</small><strong>${card.model}</strong></div><span class="phone-card-arrow"><i class="fas fa-arrow-right"></i></span></div>
                        </div>
                    `).join("")}
                </div>
            </div>
        </section>

        <section class="section featured-section">
            <div class="section-container" id="featured-card-container">
                ${renderFeaturedCard(0)}
            </div>
        </section>

        <section class="section">
            <div class="section-container">
                <div class="section-header">
                    <div><h2>Marcas populares</h2><p class="section-subtitle">Explora os melhores smartphones das marcas mais confiáveis do mercado.</p></div>
                    <a href="#" class="see-all" onclick="showBrands(); return false;">Ver todas as marcas <i class="fas fa-arrow-right"></i></a>
                </div>
                <div class="brands-row">
                    ${Object.keys(smartphoneData).slice(0, 10).map(brand => `<div class="brand-item" onclick="showBrand('${brand}')"><span>${brand}</span></div>`).join("")}
                </div>
            </div>
        </section>

        <section class="cta-section">
            <div class="cta-container">
                <div class="cta-content">
                    <p class="eyebrow-dark">EXPLORA TODAS AS CATEGORIAS</p>
                    <h2>Encontra o smartphone perfeito para as tuas necessidades</h2>
                    <p>Navega por todas as categorias, compara modelos e descobre o smartphone ideal para ti.</p>
                    <button class="btn-dark" onclick="showAllPhones()">Explorar todas as categorias <i class="fas fa-arrow-right"></i></button>
                </div>
                <div class="cta-visual"><div class="cta-phone cta-phone-1"></div><div class="cta-phone cta-phone-2"></div><div class="cta-phone cta-phone-3"></div></div>
                <ul class="cta-links">
                    <li onclick="showCategory('top')"><i class="far fa-star"></i> Top de vendas <i class="fas fa-chevron-right"></i></li>
                    <li onclick="showCategory('camera')"><i class="fas fa-camera"></i> Melhores câmaras <i class="fas fa-chevron-right"></i></li>
                    <li onclick="showCategory('battery')"><i class="fas fa-battery-full"></i> Maior bateria <i class="fas fa-chevron-right"></i></li>
                    <li onclick="showCategory('performance')"><i class="fas fa-gauge-high"></i> Melhor desempenho <i class="fas fa-chevron-right"></i></li>
                    <li onclick="showCategory('cheap')"><i class="fas fa-euro-sign"></i> Mais baratos <i class="fas fa-chevron-right"></i></li>
                </ul>
            </div>
        </section>
    `;
    window.scrollTo(0, 0);
}

function showBrands() {
    const brands = Object.keys(smartphoneData);
    content.innerHTML = `
        <section class="page-section">
            <button class="back-button" onclick="showHome()"><i class="fas fa-arrow-left"></i> Voltar ao início</button>
            <p class="eyebrow">CATÁLOGO MUNDIAL</p>
            <h1>Marcas de smartphones</h1>
            <p>Explora as ${brands.length} principais marcas e os seus modelos.</p>
            <div class="brand-grid large-grid">
                ${brands.map(brand => `<button class="brand-card" onclick="showBrand('${brand}')"><div class="brand-symbol">${brand.substring(0, 2).toUpperCase()}</div><strong>${brand}</strong><small>${Object.keys(smartphoneData[brand].lines).length} linhas</small></button>`).join("")}
            </div>
        </section>
    `;
    window.scrollTo(0, 0);
}
function showBrand(brandName) {
    const brandData = smartphoneData[brandName];
    if (!brandData) return;
    const lines = Object.keys(brandData.lines);
    content.innerHTML = `
        <section class="page-section">
            <button class="back-button" onclick="showBrands()"><i class="fas fa-arrow-left"></i> Voltar para marcas</button>
            <p class="eyebrow">MARCA</p>
            <h1>${brandName}</h1>
            
            <!-- Aqui está a nova linha que vai buscar a história -->
            ${brandData.history ? `<p style="margin-bottom: 30px; line-height: 1.6; color: var(--text-muted); max-width: 800px; text-align: justify;">${brandData.history}</p>` : `<p>Escolhe uma linha para ver os modelos disponíveis.</p>`}
            
            <div class="brand-grid large-grid">
                ${lines.map(line => `<button class="brand-card" onclick="showLine('${brandName}', '${line}')"><div class="brand-symbol"><i class="fas fa-mobile-screen-button"></i></div><strong>${line}</strong><small>${brandData.lines[line].length} modelos</small></button>`).join("")}
            </div>
        </section>
    `;
    window.scrollTo(0, 0);
}

function showLine(brandName, lineName) {
    const models = smartphoneData[brandName].lines[lineName];
    if (!models) return;
    content.innerHTML = `
        <section class="page-section">
            <button class="back-button" onclick="showBrand('${brandName}')"><i class="fas fa-arrow-left"></i> Voltar para ${brandName}</button>
            <p class="eyebrow">${brandName} / ${lineName}</p>
            <h1>Modelos ${lineName}</h1>
            <p>${models.length} modelos encontrados nesta linha.</p>
            <div class="table-wrapper">
                <table class="models-table">
                    <thead><tr><th>Ano</th><th>Modelo</th><th>Ecrã</th><th>Processador</th><th>RAM / Armazenamento</th><th>Bateria</th></tr></thead>
                    <tbody>
                        ${models.map(m => `<tr onclick="openPhone('${brandName}', '${lineName}', '${m.model}')"><td>${m.year}</td><td><strong>${m.model}</strong></td><td>${m.screen}</td><td>${m.processor}</td><td>${m.ramStorage}</td><td>${m.battery}</td></tr>`).join("")}
                    </tbody>
                </table>
            </div>
        </section>
    `;
    window.scrollTo(0, 0);
}

function openPhone(brandName, lineName, modelName) {
    const models = smartphoneData[brandName].lines[lineName];
    const phone = models.find(m => m.model === modelName);
    if (!phone) return;
    content.innerHTML = `
        <section class="page-section">
            <button class="back-button" onclick="showLine('${brandName}', '${lineName}')"><i class="fas fa-arrow-left"></i> Voltar para ${lineName}</button>
            <p class="eyebrow">${brandName} / ${lineName}</p>
            <h1>${phone.model}</h1>
            <p>Lançado em ${phone.year}</p>
            <div class="phone-detail">
                <div class="detail-visual">
                    ${phone.image ? `<img src="${phone.image}" alt="${phone.model}" class="detail-image">` : `<div class="detail-phone"></div>`}
                </div>
                <div>
                    <h2 style="color:var(--navy); font-size:1.3rem; margin-bottom:16px;">Especificações Técnicas</h2>
                    <div class="spec-list">
                        <div><small>Ecrã</small><strong>${phone.screen}</strong></div>
                        <div><small>Processador</small><strong>${phone.processor}</strong></div>
                        <div><small>RAM / Armazenamento</small><strong>${phone.ramStorage}</strong></div>
                        <div><small>Bateria</small><strong>${phone.battery}</strong></div>
                        <div><small>Câmara Principal</small><strong>${phone.camera}</strong></div>
                        ${phone.frontCamera ? `<div><small>Câmara Frontal</small><strong>${phone.frontCamera}</strong></div>` : ""}
                        ${phone.zoom ? `<div><small>Zoom</small><strong>${phone.zoom}</strong></div>` : ""}
                        ${phone.dimensions ? `<div><small>Dimensões e Peso</small><strong>${phone.dimensions}</strong></div>` : ""}
                        ${phone.resistance ? `<div><small>Resistência</small><strong>${phone.resistance}</strong></div>` : ""}
                        ${phone.sPen ? `<div><small>S Pen</small><strong>${phone.sPen}</strong></div>` : ""}
                        ${phone.os ? `<div><small>Sistema Operativo</small><strong>${phone.os}</strong></div>` : ""}
                        ${phone.price ? `<div><small>Preço</small><strong>${phone.price}</strong></div>` : ""}
                    </div>
                </div>
            </div>
        </section>
    `;
    window.scrollTo(0, 0);
}

function showAllPhones() {
    let all = [];
    Object.entries(smartphoneData).forEach(([brand, brandData]) => {
        Object.entries(brandData.lines).forEach(([line, models]) => {
            models.forEach(phone => all.push({ brand, line, phone }));
        });
    });
    content.innerHTML = `
        <section class="page-section">
            <button class="back-button" onclick="showHome()"><i class="fas fa-arrow-left"></i> Voltar ao início</button>
            <p class="eyebrow">CATÁLOGO COMPLETO</p>
            <h1>Todos os smartphones</h1>
            <p>${all.length} modelos disponíveis na base de dados. A mostrar os primeiros 60.</p>
            <div class="phone-grid">
                ${all.slice(0, 60).map(item => `<div class="phone-card" onclick="openPhone('${item.brand}', '${item.line}', '${item.phone.model}')"><div class="phone-visual"><div class="mock-phone"></div></div><div class="phone-card-info"><small>${item.brand} • ${item.phone.year}</small><h2>${item.phone.model}</h2><p>${item.line}</p></div></div>`).join("")}
            </div>
        </section>
    `;
    window.scrollTo(0, 0);
}

function showCategory(categoryType) {
    let allPhones = [];
    
    Object.entries(smartphoneData).forEach(([brand, brandData]) => {
        Object.entries(brandData.lines).forEach(([line, models]) => {
            models.forEach(phone => allPhones.push({ brand, line, phone }));
        });
    });

    let filteredPhones = [];
    let title = "";
    let description = "";

    switch (categoryType) {
        case 'camera':
            title = "Melhores Câmaras";
            description = "Smartphones com os sensores de câmara mais avançados e megapíxeis elevados.";
            filteredPhones = allPhones.filter(item => 
                item.phone.camera.includes("200 MP") || 
                item.phone.camera.includes("108 MP") || 
                item.phone.camera.includes("50 MP") || 
                item.phone.camera.toLowerCase().includes("leica")
            );
            break;

        case 'battery':
            title = "Maior Bateria";
            description = "Smartphones com capacidade de bateria igual ou superior a 5.000 mAh, ordenados da maior para a menor capacidade.";
            
            filteredPhones = allPhones
                .map(item => {
                    const matches = item.phone.battery.match(/\d[\d.]*/g);
                    let maxCapacity = 0;
                    if (matches) {
                        const capacities = matches.map(m => parseInt(m.replace('.', '')));
                        maxCapacity = Math.max(...capacities);
                    }
                    return { ...item, maxBatteryCapacity: maxCapacity };
                })
                .filter(item => item.maxBatteryCapacity >= 5000);

            filteredPhones.sort((a, b) => b.maxBatteryCapacity - a.maxBatteryCapacity);
            break;

        case 'performance':
            title = "Melhor Desempenho";
            description = "Smartphones equipados rigorosamente com os processadores topo de gama de alto rendimento.";
            
            filteredPhones = allPhones.filter(item => {
                const proc = item.phone.processor.toLowerCase();
                return (
                    proc.includes("snapdragon 8 gen") ||
                    proc.includes("snapdragon 8 elite") ||
                    proc.includes("snapdragon 8s gen") ||
                    proc.includes("snapdragon 8+ gen") ||
                    proc.includes("apple a17 pro") ||
                    proc.includes("apple a18") ||
                    proc.includes("apple a20 pro") ||
                    proc.includes("dimensity 9") ||
                    proc.includes("dimensity 8") ||
                    proc.includes("kirin 90") ||
                    proc.includes("tensor g")
                );
            });
            break;

        case 'cheap':
            title = "Modelos Acessíveis / Mais Baratos";
            description = "Smartphones das linhas de entrada e intermédias de várias marcas.";
            filteredPhones = allPhones.filter(item => 
                item.line.includes("Galaxy A") || 
                item.line.includes("Redmi A") || 
                item.line.includes("POCO C") || 
                item.line.includes("moto e") || 
                item.line.includes("Pixel A") ||
                item.line.includes("itel")
            );
            break;

        case 'top':
        default:
            title = "Top de Vendas";
            description = "Os modelos flagship mais procurados de diversas marcas.";
            filteredPhones = allPhones.filter(item => 
                item.phone.model.includes("Ultra") || 
                item.phone.model.includes("Pro Max") || 
                item.phone.model.includes("Pro")
            );
            break;
    }

    content.innerHTML = `
        <section class="page-section">
            <button class="back-button" onclick="showHome()"><i class="fas fa-arrow-left"></i> Voltar ao início</button>
            <p class="eyebrow">CATEGORIA</p>
            <h1>${title}</h1>
            <p>${description} (${filteredPhones.length} modelos encontrados)</p>
            <div class="phone-grid">
                ${filteredPhones.slice(0, 60).map(item => `
                    <div class="phone-card" onclick="openPhone('${item.brand}', '${item.line}', '${item.phone.model}')">
                        <div class="phone-visual"><div class="mock-phone"></div></div>
                        <div class="phone-card-info">
                            <small>${item.brand} • ${item.phone.year}</small>
                            <h2>${item.phone.model}</h2>
                            <p style="font-size: 0.8rem; color: var(--navy); margin-top: 4px;">⚙️ ${item.phone.processor}</p>
                        </div>
                    </div>
                `).join("")}
            </div>
        </section>
    `;
    window.scrollTo(0, 0);
}

document.addEventListener("input", (e) => {
    if (!e.target.matches(".hero-search input")) return;
    
    const query = e.target.value.toLowerCase().trim();
    
    if (!query) {
        showHome();
        return;
    }

    const searchWords = query.split(/\s+/);
    let results = [];

    Object.entries(smartphoneData).forEach(([brand, brandData]) => {
        Object.entries(brandData.lines).forEach(([line, models]) => {
            models.forEach(phone => {
                const fullText = `${brand} ${line} ${phone.model} ${phone.year} ${phone.processor}`.toLowerCase();
                const matchesAllWords = searchWords.every(word => fullText.includes(word));
                if (matchesAllWords) {
                    results.push({ brand, line, phone });
                }
            });
        });
    });

    const section = document.querySelector(".phone-cards");
    const titleElem = document.querySelector(".section-header h2");

    if (section) {
        if (results.length === 0) {
            if (titleElem) titleElem.textContent = "Resultados da Pesquisa (0)";
            
            section.innerHTML = `
                <div class="empty-card" style="grid-column: 1 / -1; padding: 40px; text-align: center;">
                    <i class="fas fa-search" style="font-size: 2.5rem; color: var(--text-light); margin-bottom: 12px; display: block;"></i>
                    <p style="color: var(--text-muted); font-size: 1rem;">
                        Nenhum resultado encontrado para "<strong>${query}</strong>".
                    </p>
                </div>
            `;
            return;
        }

        if (titleElem) {
            titleElem.textContent = `Resultados da Pesquisa (${results.length})`;
        }

        section.innerHTML = results.slice(0, 12).map((item, i) => `
            <div class="phone-card-item" onclick="openPhone('${item.brand}', '${item.line}', '${item.phone.model}')">
                <div class="phone-card-visual">
                    <div class="mini-phone ${phoneColors[i % phoneColors.length]}"></div>
                </div>
                <div class="phone-card-info">
                    <div>
                        <small>${item.brand} • ${item.phone.year}</small>
                        <strong>${item.phone.model}</strong>
                    </div>
                    <span class="phone-card-arrow">
                        <i class="fas fa-arrow-right"></i>
                    </span>
                </div>
            </div>
        `).join("");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    showHome();
    console.log(`📱 SmartPédia iniciada! ${getTotalBrands()} marcas, ${getTotalLines()} linhas, ${getTotalPhones()} modelos.`);
});
