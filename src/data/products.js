export const allProducts = [
    {
        id: 1,
        title: "Kozan Kooperatif Süzme Çiçek Balı 850 GR",
        slugText: "kozan-koopertif-suzme-cicek-bali-850-gr",
        imageURL: "https://cdn2.a101.com.tr/dbmk89vnr/CALL/Image/get/OMt0SsvIkr_500x500.png",
        unit: "Adet",
        unitPrice: 159.50,
        category: "market",
        origin: "Türkiye",
        description: "Kozan ve çevresinin zengin florasından elde edilen, tamamen doğal ve katkısız süzme çiçek balı. Kahvaltı sofralarınızın vazgeçilmezi olacak eşsiz bir lezzet.",
        details: {
            ingredients: ["Süzme Çiçek Balı (%100)"],
            nutritionalInfo: {
                per: "100g",
                energy: "304 kcal",
                fat: "0 g",
                carbohydrates: "82 g",
                protein: "0.3 g"
            },
            storageConditions: "Oda sıcaklığında, direkt güneş ışığından koruyarak saklayınız. Zamanla kristalleşmesi doğal bir olaydır.",
        },
        stock: 120,
        rating: 4.8,
        reviewCount: 256
    },
    {
        id: 2,
        title: "Sütaş Kaymaksız Yoğurt 1500 GR",
        slugText: "sutas-kaymaksiz-yogurt-1500-gr",
        imageURL: "https://cdn2.a101.com.tr/dbmk89vnr/CALL/Image/get/eB-WmFG59O_500x500.png",
        unit: "Adet",
        unitPrice: 79.50,
        category: "market",
        origin: "Türkiye",
        description: "Sütaş'ın taze sütlerinden üretilen, hafif ve lezzetli kaymaksız yoğurt. Yemeklerinizin yanında veya sağlıklı bir ara öğün olarak tüketebilirsiniz.",
        details: {
            ingredients: ["Pastörize inek sütü", "yoğurt kültürü"],
            allergenWarning: "Laktoz içerir.",
            nutritionalInfo: {
                per: "100g",
                energy: "61 kcal",
                fat: "3 g",
                carbohydrates: "4.7 g",
                protein: "3.8 g"
            },
            storageConditions: "Buzdolabında (+4°C) saklanmalıdır. Ambalajı açıldıktan sonra 3 gün içinde tüketilmesi tavsiye edilir.",
        },
        stock: 85,
        rating: 4.7,
        reviewCount: 412
    },
    {
        id: 3,
        title: "Domestos Klozet Blok 3'lü Çam Ormanı",
        slugText: "domestos-klozet-blok-3-lu-cam-ormani",
        imageURL: "https://cdn2.a101.com.tr/dbmk89vnr/CALL/Image/get/3Hx-1q4Xd3_500x500.png",
        unit: "Adet",
        unitPrice: 79.00,
        category: "market",
        origin: "Türkiye",
        description: "Her sifonda etkili temizlik ve ferahlık sağlayan Domestos klozet blokları. Çam ormanı kokusuyla banyonuza uzun süreli ferahlık getirir ve kireç oluşumunu önler.",
        details: {
            usageSuggestion: "Plastik askıyı klozetin kenarına, suyun en çok aktığı yere asın.",
            safetyWarnings: "Cilt ile temasından kaçının. Çocukların ulaşamayacağı yerde saklayın."
        },
        stock: 250,
        rating: 4.9,
        reviewCount: 680
    },
    {
        id: 4,
        title: "Domestos Ultra Çamaşır Suyu 5 L",
        slugText: "domestos-ultra-camasir-suyu-5-lt",
        imageURL: "https://cdn2.a101.com.tr/dbmk89vnr/CALL/Image/get/KSgaB06xcD_500x500.png",
        unit: "Adet",
        unitPrice: 189.00,
        category: "market",
        origin: "Türkiye",
        description: "Yoğun kıvamlı formülü ile yüzeylerde daha uzun süre kalarak maksimum hijyen sağlayan ultra çamaşır suyu. Banyo, mutfak ve diğer tüm yüzeylerde güvenle kullanabilirsiniz.",
        details: {
            usageSuggestion: "Yüzey temizliğinde 5 litre suya 1 çay bardağı ekleyerek kullanın. Direkt uygulamalarda sulandırarak kullanınız.",
            safetyWarnings: "Göz ve cilt ile temasında bol su ile yıkayınız. Başka kimyasallarla karıştırmayınız."
        },
        stock: 90,
        rating: 4.8,
        reviewCount: 515
    },
    {
        id: 5,
        title: "Starking Elma Kg",
        slugText: "starking-elma-kg",
        imageURL: "https://cdn2.a101.com.tr/dbmk89vnr/CALL/Image/get/G8n35nxTDx_500x500.png",
        unit: "KG",
        unitPrice: 59.50,
        category: "manav",
        origin: "Türkiye (Isparta/Amasya Yöresi)",
        description: "Canlı kırmızı rengi, tatlı ve sulu yapısıyla en çok tercih edilen elma çeşitlerinden biri. Hem tek başına tüketmek hem de tatlılarınızda kullanmak için idealdir.",
        details: {
            storageConditions: "Buzdolabının sebzelik kısmında tazeliğini daha uzun süre korur."
        },
        stock: 500, // Kg olarak stok
        rating: 4.6,
        reviewCount: 189
    },
    {
        id: 6,
        title: "Limon Kg",
        slugText: "limon-kg",
        imageURL: "https://cdn2.a101.com.tr/dbmk89vnr/CALL/Image/get/wBVi1VFk1Q_500x500.png",
        unit: "KG",
        unitPrice: 69.00,
        category: "manav",
        origin: "Türkiye (Mersin/Adana Yöresi)",
        description: "Bol sulu ve ferahlatıcı kokusuyla bilinen taze limonlar. Salatalarınıza, çorbalarınıza ve içeceklerinize lezzet katmak için mükemmel bir seçim.",
        details: {
            storageConditions: "Serin ve kuru bir yerde veya buzdolabında saklanabilir."
        },
        stock: 800, // Kg olarak stok
        rating: 4.7,
        reviewCount: 302
    },
    {
        id: 7,
        title: "İthal Muz Kg",
        slugText: "ithal-muz-kg",
        imageURL: "https://cdn2.a101.com.tr/dbmk89vnr/CALL/Image/get/zXcoeSRFt-_500x500.png",
        unit: "KG",
        unitPrice: 94.50,
        category: "manav",
        origin: "Ekvador",
        description: "Yüksek potasyum ve enerji kaynağı olan lezzetli ithal muzlar. Spor öncesi veya sonrası, ya da sağlıklı bir ara öğün için harika bir alternatiftir.",
        details: {
            storageConditions: "Oda sıcaklığında saklayınız. Kararmasını yavaşlatmak için sap kısımlarını streç filmle sarabilirsiniz."
        },
        stock: 450, // Kg olarak stok
        rating: 4.5,
        reviewCount: 220
    },
    {
        id: 8,
        title: "Kokteyl Domates 500 GR",
        slugText: "kokteyl-domates-500-gr",
        imageURL: "https://cdn2.a101.com.tr/dbmk89vnr/CALL/Image/get/SyG1QypBac_500x500.png",
        unit: "Paket",
        unitPrice: 32.50,
        category: "manav",
        origin: "Türkiye (Antalya Yöresi)",
        description: "Tatlı ve aromatik lezzetiyle öne çıkan, küçük boyutlu kokteyl domatesler. Salatalarda, kanepelerde veya atıştırmalık olarak tüketmek için idealdir.",
        details: {
            storageConditions: "Buzdolabında veya serin bir yerde saklayınız."
        },
        stock: 150, // Paket olarak stok
        rating: 4.8,
        reviewCount: 155
    },
    {
        id: 9,
        title: "Kombinet Dana Kıyma 400 GR",
        slugText: "kombinet-dana-kiyma-400-gr",
        imageURL: "https://cdn2.a101.com.tr/dbmk89vnr/CALL/Image/get/gk3KZSwE6e_500x500.png",
        unit: "Paket",
        unitPrice: 199.00,
        category: "sarkuteri",
        origin: "Türkiye",
        description: "Hijyenik koşullarda, taze dana etinden çekilmiş, orta yağlı kıyma. Köfteler, dolmalar ve diğer tüm kıymalı yemekleriniz için güvenle kullanabilirsiniz.",
        details: {
            storageConditions: "Son tüketim tarihine kadar buzdolabında (0-4°C) saklayınız. Derin dondurucuda (-18°C) 6 ay muhafaza edilebilir.",
            usageSuggestion: "Pişirilerek tüketilmelidir."
        },
        stock: 60,
        rating: 4.6,
        reviewCount: 180
    },
    {
        id: 10,
        title: "Kombinet Dana Kuşbaşı 400 GR",
        slugText: "kombinet-dana-kusbasi-400-gr",
        imageURL: "https://cdn2.a101.com.tr/dbmk89vnr/CALL/Image/get/tLFJm4vWRA_500x500.png",
        unit: "Paket",
        unitPrice: 245.00,
        category: "sarkuteri",
        origin: "Türkiye",
        description: "Dananın en lezzetli kısımlarından özenle hazırlanmış, sinirleri ayıklanmış kuşbaşı et. Sulu yemekler, sote ve kebaplar için idealdir.",
        details: {
            storageConditions: "Son tüketim tarihine kadar buzdolabında (0-4°C) saklayınız. Derin dondurucuda (-18°C) 6 ay muhafaza edilebilir.",
            usageSuggestion: "Pişirilerek tüketilmelidir."
        },
        stock: 55,
        rating: 4.7,
        reviewCount: 210
    },
    {
        id: 11,
        title: "Beşler Dana Kıyma %15 Yağlı 400 GR",
        slugText: "besler-dana-kiyma-%15-yagli-400-gr",
        imageURL: "https://cdn2.a101.com.tr/dbmk89vnr/CALL/Image/get/ivt1PgCm1j_500x500.png",
        unit: "Paket",
        unitPrice: 215.00,
        category: "sarkuteri",
        origin: "Türkiye",

        description: "Beşler kalitesiyle, %15 yağ oranına sahip, lezzetli dana kıyma. Yemeklerinize tam kıvamında bir lezzet katmak için hazırlanmıştır.",
        details: {
            storageConditions: "Paket açılmadığı sürece son tüketim tarihine kadar buzdolabında (0-4°C) saklanabilir.",
            usageSuggestion: "Tüm kıymalı tariflerinizde kullanıma uygundur. Pişirilerek tüketilmelidir."
        },
        stock: 70,
        rating: 4.5,
        reviewCount: 140
    },
    {
        id: 12,
        title: "Beşler Dana Yağsız Kuşbaşı 400 GR",
        slugText: "besler-dana-yagsiz-kusbasi-400-gr",
        imageURL: "https://cdn2.a101.com.tr/dbmk89vnr/CALL/Image/get/ap0VKHY5g8_500x500.png",
        unit: "Paket",
        unitPrice: 225.00,
        category: "sarkuteri",
        origin: "Türkiye",
        description: "Dananın yağsız ve sinirsiz bölgelerinden özenle seçilmiş, yumuşak ve lezzetli kuşbaşı et. Sağlıklı ve hafif et yemekleri için mükemmel bir seçim.",
        details: {
            storageConditions: "Paket açılmadığı sürece son tüketim tarihine kadar buzdolabında (0-4°C) saklanabilir.",
            usageSuggestion: "Haşlama, sote veya fırın yemeklerinde kullanıma uygundur. Pişirilerek tüketilmelidir."
        },
        stock: 45,
        rating: 4.8,
        reviewCount: 195
    }
]