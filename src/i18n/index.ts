import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        philosophy: "Philosophy",
        catalogue: "Catalogue",
        locations: "Locations",
        contact: "Contact",
        where: "Where are we"
      },
      home: {
        hero: {
          badge: "New Batch: Estate Reserve 2026",
          title: "The Science of Senses",
          subtitle1: "Micro-lots roasted for the obsessively curious.",
          subtitle2: "Crafted in our laboratory, delivered to your ritual.",
          cta_explore: "Explore Beans",
          cta_guide: "Brew Guide"
        },
        philosophy: {
          title: "Ethical by Design.",
          subtitle: "We don't just buy coffee; we invest in soil. Every bean in your cup represents a direct partnership with 12 micro-lot farms across the coffee belt.",
          quote: "The roastery is where science meets soul.",
          scan_scale: "Scan Scale"
        },
        traceability: {
          badge: "Traceability",
          title: "A Global Blueprint.",
          description: "Our supply chain is a live map of excellence. From the volcanic soils of Huila to the ancient forests of Yirgacheffe, we track every coordinate of your cup's evolution.",
          items: {
            partnership: "Direct Partnership",
            integrity: "Biological Integrity",
            transit: "Carbon-Neutral Transit"
          }
        },
        collection: {
          badge: "The Collection",
          title: "Exceptional Roasts.",
          cta_catalogue: "Full Catalogue",
          series: "SERIES",
          cta_explore_detail: "Explore Detail"
        },
        ritual: {
          bg_text: "Precision",
          badge: "The Ritual",
          title: "Sensory Calibration.",
          description: "Brewing is the final step in a journey that span continents. We provide the tools and metrics you need to calibrate your extraction for the perfect morning.",
          temp: "Temp Control",
          dose: "Dose Weight"
        },
        journal: {
          title: "The Roastery Journal.",
          subtitle: "Notes on harvest, chemistry, and high-altitude living.",
          posts: [
            { title: "The Maillard Phase", date: "April 12, 2026", excerpt: "Understanding the precise moment sugar becomes complexity. A study on the amino acid chain reaction in the Kenyan SL28 variety." },
            { title: "Yirgacheffe Winter", date: "Jan 03, 2026", excerpt: "An account of the frost patterns in the Gedeo zone and their impact on the density of the 2026 harvest." }
          ],
          cta_read: "Read Story"
        },
        bridge: {
          badge: "The Stillness",
          quote: "In the laboratory of the quiet morning, every pour is a temporary masterpiece."
        },
        reserve: {
          title: "The Roast Reserve.",
          subtitle: "Secure early access to our most exclusive micro-lots. Limited to 500 members globally.",
          placeholder: "Enter your email"
        }
      },
      philosophy_page: {
        badge: "Our Philosophy",
        title: "Ethical by Design",
        subtitle: "We don't just buy coffee; we invest in soil. Every bean in your cup represents a direct partnership with 12 micro-lot farms across the coffee belt.",
        chapter1: "Chapter 01",
        terroir: {
          title: "The Sanctity of Terroir.",
          subtitle: "We believe that 80% of a coffee's flavor profile is determined before it reaches our roastery. Elevation, soil chemistry, and the careful hands of the pickers are the true architects of taste.",
          quote: "We don't create flavors. We unveil the secrets already hidden within the cellulose structure of each seed."
        },
        science: {
          badge: "The Science",
          title: "Laboratory Precision.",
          subtitle: "Our roasts are calculated using thermodynamic modeling and real-time gas chromatography. We track rate-of-rise (RoR) within 0.1 degree increments to hit the perfect Maillard reaction window.",
          items: {
            control: {
              title: "Control",
              desc: "Atmospheric consistency in our roastery ensures that seasonal humidity never compromises the profile."
            },
            analysis: {
              title: "Analysis",
              desc: "Every batch is color-analyzed and cupped against our master scale before release."
            },
            extraction: {
              title: "Extraction",
              desc: "We provide molecular water profiles for each origin to unlock its full potential."
            }
          }
        },
        human_link: {
          badge: "Chapter 02",
          title: "The Direct Human Link.",
          subtitle: "We circumvent the commodity market. By dealing directly with estates, we pay 300% above Fair Trade minimums. This isn't charity—it's an investment in a future where high-altitude farming is sustainable for the generations to come.",
          cta: "View Our Farmers"
        },
        cupping: {
          title: "The Cupping Table.",
          subtitle: "Every morning at 07:00, our Q-Grader team evaluates the previous day's roasts. It is the most sacred hour in the roastery. We look for clarity, vibrance, and the \"pulse\" of the bean."
        },
        pulse: {
          badge: "The Pulse",
          title: "More than the Cup.",
          items: {
            intent: {
              title: "Atmospheric Intent",
              desc: "Our bars are designed to be sensory laboratories. From the acoustics to the tactile feel of the stone counters, every detail is engineered to amplify the experience of the brew."
            },
            community: {
              title: "Community Exchange",
              desc: "Origin is a hub for the curious. We host weekly brewing workshops, cupping sessions for the public, and guest roaster residencies from across the globe."
            }
          }
        },
        manifesto: {
          title: "Coffee for the Obsessively Curious.",
          subtitle: "Join the movement for higher standards in every cup."
        }
      },
      catalogue: {
        badge: "The Collection",
        title: "Exceptional Roasts",
        subtitle: "A curated series of micro-lots, each calibrated for distinct sensory profiles.",
        filter_all: "All Units",
        filter_rarity: "Rarity",
        filter_origin: "Origin",
        search_placeholder: "SEARCH ORIGIN OR VARIETY",
        matrix_label: "Sensory Matrix",
        intensity_label: "Structural Intensity",
        explore_cta: "Explore Process",
        calibration_complete: "Calibration Complete",
        filters: {
          all: "All",
          standard: "Standard",
          high: "High",
          limited: "Limited",
          exclusive: "Exclusive"
        },
        labels: {
          origin: "Origin",
          elevation: "Elevation"
        }
      },
      product: {
        back_cta: "Back to Catalogue",
        lab_spec: "Laboratory Spec",
        series: "Series",
        arrival: "Arrival",
        process: "Process",
        roast_level: "Roast Level",
        acidity: "Acidity",
        altitude: "Altitude",
        flavor_matrix: "Flavor Matrix",
        calibration_verified: "Calibration Verified",
        calibration_text: "This profile represents our most recent scientific analysis of the lot's chemical composition and sensory potential.",
        tech_specs: {
          thermal: {
            title: "Thermal Calibration",
            desc: "We calibrate our Loring S35 roaster specifically for each lot's density and moisture content, ensuring a development time ratio that preserves enzymatic sweetness."
          },
          ethics: {
            title: "Sustainable Ethics",
            desc: "Above-market premiums paid directly to smallholder cooperatives. We prioritize supply chains with transparent ESG metrics and low-water processing methods."
          },
          freshness: {
            title: "Freshness Guarantee",
            desc: "Nitrogen-flushed packaging with one-way degassing valves. Roasted on demand in London and shipped within 48 hours for peak aromatics."
          }
        },
        data: {
          yirgacheffe: {
            name: "Ethiopia Yirgacheffe",
            region: "Gedeo Zone, Ethiopia",
            process: "Washed",
            profile: "Citrus • Floral • Jasmine",
            description: "A classic representation of the Gedeo zone, offering a refined tea-like body with distinct bergamot and jasmine notes.",
            longDescription: "Sourced from smallholder farmers in the Yirgacheffe region, this coffee undergoes a meticulous washing process that highlights its delicate acidity. The Gedeo zone is renowned for its high altitude and ideal climate, producing beans with exceptional floral clarity and a light, tea-like mouthfeel. This batch has been roasted with precision to preserve the subtle bergamot top notes.",
            roastLevel: "Light",
            acidity: "Bright",
            harvest: "Nov - Jan 2025"
          },
          huila: {
            name: "Colombia Huila",
            region: "Huila Department, Colombia",
            process: "Honey Process",
            profile: "Chocolate • Nutty • Caramel",
            description: "Grown in the volcanic soils of the Central Cordillera, this honey-processed lot balances deep sweetness with a clean acidity.",
            longDescription: "The Huila department is famous for its nutrient-rich volcanic soil. This honey-processed lot retains some of the fruit mucilage during drying, resulting in an enhanced sweetness and a creamy body. It's a versatile bean that excels in both filter and espresso, showcasing a spectrum of rich caramel and dark chocolate nuances.",
            roastLevel: "Medium",
            acidity: "Smooth",
            harvest: "Sept - Dec 2025"
          },
          kenya: {
            name: "Kenya AA Plus",
            region: "Nyeri County, Kenya",
            process: "Double Washed",
            profile: "Berries • Winey • Bright",
            description: "Sourced from the slopes of Mt. Kenya, this AA grade lot delivers characteristic complexity and potent blackcurrant notes.",
            longDescription: "Double washing is a traditional Kenyan technique that involves extra fermentation stages to create extreme clarity of flavor. This AA+ grade lot from Nyeri represents the pinnacle of acidity and complexity, offering a wine-like structure with bright, punchy blackcurrant and red berry flavors.",
            roastLevel: "Light-Medium",
            acidity: "High/Winey",
            harvest: "Jan - Mar 2026"
          },
          estate: {
            name: "Estate Reserve 2026",
            region: "Tarrazú, Costa Rica",
            process: "Anaerobic Ferment",
            profile: "Cinnamon • Red Fruit • Spicy",
            description: "Our experimental laboratory batch. 72-hour controlled fermentation creates a revolutionary profile of spiced cherry and warmth.",
            longDescription: "Tarrazú at 2000m provides the extreme stress needed for dense, flavorful cherries. For this Estate Reserve, we employed a 72-hour anaerobic fermentation in pressurized tanks. This method accentuates lactic acids and creates a unique 'spiced' profile that is rarely found in traditional methods. It is a bold, experimental cup designed for the truly curious.",
            roastLevel: "Medium-Dark",
            acidity: "Complex",
            harvest: "Feb 2026"
          },
          sumatra: {
            name: "Sumatra Mandheling",
            region: "Lake Toba, Indonesia",
            process: "Giling Basah",
            profile: "Earthy • Woody • Spices",
            description: "A full-bodied experience from northern Sumatra. The unique wet-hulling process produces dark, earthy, and complex forest floor notes.",
            longDescription: "Mandheling coffee is grown in the sub-tropical forests of Lake Toba. The Giling Basah (wet-hulling) process is unique to Indonesia, giving the beans a distinctive bluish color and a flavor profile that is wonderfully low in acidity. Expect heavy, syrupy body with profound notes of cedar, damp earth, and dark chocolate.",
            roastLevel: "Dark",
            acidity: "Low",
            harvest: "Oct - Dec 2025"
          },
          guatemala: {
            name: "Guatemala Huehuetenango",
            region: "Western Highlands, Guatemala",
            process: "Washed",
            profile: "Apple • Caramel • Smooth",
            description: "Crisp and clean from one of Central America's highest growing regions. Notes of green apple and panela sweetness.",
            longDescription: "Huehuetenango is one of the few non-volcanic coffee regions in Guatemala, relying instead on its unique hot winds from Mexico to protect it from frost. This produces a very clean, crisp bean with a medium body. Our roast highlights its natural malic acidity, resulting in a cup that is remarkably smooth with persistent caramel sweetness.",
            roastLevel: "Medium",
            acidity: "Crisp",
            harvest: "Jan - Apr 2025"
          }
        }
      },
      locations: {
        badge: "Laboratory Sites",
        title: "Global Coordinates.",
        subtitle: "Our facilities are strategically positioned at pivotal points of trade and culture, serving as both production centers and sensory archives.",
        flagship: {
          log: "System Log",
          node_id: "NODE_01 // LND_FLAGSHIP",
          badge: "Flagship Hub",
          coordinates_label: "PRIMARY_COORD",
          equipment_label: "LAB_HARDWARE",
          coordinates: "Coordinates",
          equipment: "Equipment",
          cta: "Book a Cupping Session"
        },
        booking: {
          success_title: "Request Logged",
          success_desc: "Your sensory calibration slot is being verified. Check your terminal for confirmation.",
          badge: "Calibration Request",
          title_part1: "Cupping",
          title_part2: "Session.",
          date_label: "Desired Date",
          attendees_label: "Attendees",
          tier_label: "Experience Tier",
          tier_sensory: "Sensory (Entry)",
          tier_technical: "Technical (Advanced)",
          submit: "Submit Calibration Request"
        },
        network: {
           badge: "Global Presence",
           title: "The Network.",
           status: "GRID_STATUS: ACTIVE",
           description: "Strategic outposts allowing us to maintain biological integrity and rapid response logistics."
        },
        values: {
          quote: "Spatial design is a component of flavor. Every coordinate reflects the same precision as our thermal roasting profiles.",
          verifying: "GEOSPATIAL_SYNC_V1.4",
          renewable: "Renewable Energy",
          precision: "Lab Precision"
        },
        data: {
          london: {
            role: "Headquarters & Primary Roastery",
            description: "Our flagship facility. A 4,000 sq ft laboratory housing our custom Loring S35 roaster and our sensory training center."
          },
          berlin: {
            role: "European Research Hub",
            node_id: "NODE_02 // BRLN_RES",
            description: "Dedicated to anaerobic fermentation research and EU supply chain logistics. A brutalist space designed for focus."
          },
          tokyo: {
            role: "Sensory Atelier",
            node_id: "NODE_03 // TOKY_ATL",
            description: "Our Pacific-Rim gateway. This atelier focuses on precision brewing methods and traditional Japanese craftsmanship."
          }
        },
        cities: {
          london: "London",
          berlin: "Berlin",
          tokyo: "Tokyo"
        },
        equipment: {
          london: "Loring S35 • Marzocco KB90",
          berlin: "Loring S35 • Modbar",
          tokyo: "Loring S35 • Hario Craft"
        }
      },
      contact: {
        title: "Get in Touch",
        subtitle: "Connect with our sensory architects, laboratory technicians, or sustainability leads.",
        badge: "Transmission Channel",
        success_title: "Message Logged",
        success_desc: "Signal received. Our technicians will process your request and respond within the next operational cycle.",
        form: {
          label_name: "Signature (Name)",
          placeholder_name: "OPERATOR NAME",
          label_email: "Coordinate (Email)",
          placeholder_email: "EMAIL@DOMAIN.COM",
          label_subject: "Subject Matter",
          label_message: "Transmission Content",
          placeholder_message: "ENTER MESSAGE...",
          submit: "Post Transmission",
          submitting: "Processing Signal...",
          subjects: {
            general: "General Inquiry",
            wholesale: "Wholesale Protocol",
            calibration: "Calibration Support",
            sustainability: "Sustainability Data"
          }
        },
        sidebar: {
          labels: {
            dispatch: "Laboratory Dispatch",
            signal: "Direct Signal",
            hub: "Central Hub",
            social: "Social Frequencies"
          },
          subs: {
            response: "Average response: < 2 hours",
            hours: "Weekdays 09:00 — 17:00 GMT",
            center: "Calibration & Training Center"
          },
          security: {
            badge: "Encrypted Link",
            text: "All transmissions through this terminal are logged in our central roastery ledger. We maintain strict adherence to data sovereignty and sensory integrity."
          }
        }
      },
      footer: {
        description: "Precision roasters for the artisanal community. All beans are responsibly sourced and roasted in London.",
        privacy: "Privacy",
        sustainability: "Sustainability",
        terms: "Terms",
        rights: "All rights reserved."
      }
    }
  },
  tr: {
    translation: {
      nav: {
        philosophy: "Felsefe",
        catalogue: "Katalog",
        locations: "Konumlar",
        contact: "İletişim",
        where: "Neredeyiz"
      },
      home: {
        hero: {
          badge: "Yeni Parti: Estate Reserve 2026",
          title: "Duyuların Bilimi",
          subtitle1: "Takıntılı derecede meraklılar için kavrulmuş mikro lotlar.",
          subtitle2: "Laboratuvarımızda tasarlandı, ritüelinize teslim edildi.",
          cta_explore: "Çekirdekleri Keşfet",
          cta_guide: "Demleme Rehberi"
        },
        philosophy: {
          title: "Tasarım Gereği Etik.",
          subtitle: "Sadece kahve almıyoruz; toprağa yatırım yapıyoruz. Fincanınızdaki her çekirdek, kahve kuşağı boyunca 12 mikro lot çiftliğiyle doğrudan ortaklığı temsil ediyor.",
          quote: "Kavurma evi, bilimin ruhla buluştuğu yerdir.",
          scan_scale: "Tarama Ölçeği"
        },
        traceability: {
          badge: "İzlenebilirlik",
          title: "Küresel Bir Plan.",
          description: "Tedarik zincirimiz mükemmelliğin canlı bir haritasıdır. Huila'nın volkanik topraklarından Yirgacheffe'in antik ormanlarına kadar, fincanınızın evriminin her koordinatını takip ediyoruz.",
          items: {
            partnership: "Doğrudan Ortaklık",
            integrity: "Biyolojik Bütünlük",
            transit: "Karbon-Nötr Taşıma"
          }
        },
        collection: {
          badge: "Koleksiyon",
          title: "Sıradışı Kavrumlar.",
          cta_catalogue: "Tüm Katalog",
          series: "SERİSİ",
          cta_explore_detail: "Detayları Keşfet"
        },
        ritual: {
          bg_text: "Hassasiyet",
          badge: "Ritüel",
          title: "Duyusal Kalibrasyon.",
          description: "Demleme, kıtaları aşan bir yolculuğun son adımıdır. Mükemmel bir sabah için ekstraksiyonunuzu kalibre etmeniz için gereken araçları ve ölçümleri sağlıyoruz.",
          temp: "Sıcaklık Kontrolü",
          dose: "Doz Ağırlığı"
        },
        journal: {
          title: "Kavurma Evi Günlüğü.",
          subtitle: "Hasat, kimya ve yüksek irtifa yaşamı üzerine notlar.",
          posts: [
            { title: "Maillard Aşaması", date: "12 Nisan 2026", excerpt: "Şekerin karmaşıklığa dönüştüğü anı anlamak. Kenya SL28 varyetesindeki amino asit zincir reaksiyonu üzerine bir çalışma." },
            { title: "Yirgacheffe Kışı", date: "03 Ocak 2026", excerpt: "Gedeo bölgesindeki don desenleri ve 2026 hasadının yoğunluğu üzerindeki etkileri." }
          ],
          cta_read: "Hikayeyi Oku"
        },
        bridge: {
          badge: "Sessizlik",
          quote: "Sessiz sabahın laboratuvarında, her döküş geçici bir şaheserdir."
        },
        reserve: {
          title: "Kavrum Rezervi.",
          subtitle: "En özel mikro lotlarımıza erken erişim sağlayın. Küresel olarak 500 üyeyle sınırlıdır.",
          placeholder: "E-postanızı girin"
        }
      },
      philosophy_page: {
        badge: "Felsefemiz",
        title: "Tasarım Gereği Etik",
        subtitle: "Sadece kahve almıyoruz; toprağa yatırım yapıyoruz. Fincanınızdaki her çekirdek, kahve kuşağı boyunca 12 mikro lot çiftliğiyle doğrudan ortaklığı temsil ediyor.",
        chapter1: "Bölüm 01",
        terroir: {
          title: "Teruarın Kutsallığı.",
          subtitle: "Bir kahvenin lezzet profilinin %80'inin kavurma evimize ulaşmadan önce belirlendiğine inanıyoruz. Rakım, toprak kimyası ve toplayıcıların dikkatli elleri lezzetin gerçek mimarlarıdır.",
          quote: "Lezzet yaratmıyoruz. Her çekirdeğin selüloz yapısında halihazırda gizli olan sırları açığa çıkarıyoruz."
        },
        science: {
          badge: "Bilim",
          title: "Laboratuvar Hassasiyeti.",
          subtitle: "Kavurmalarımız, termodinamik modelleme ve gerçek zamanlı gaz kromatografisi kullanılarak hesaplanır. Mükemmel Maillard reaksiyonu penceresini yakalamak için yükselme hızını (RoR) 0.1 derecelik artışlarla takip ediyoruz.",
          items: {
            control: {
              title: "Kontrol",
              desc: "Kavurma evimizdeki atmosferik tutarlılık, mevsimsel nemin profili asla tehlikeye atmamasını sağlar."
            },
            analysis: {
              title: "Analiz",
              desc: "Her parti, piyasaya sürülmeden önce renk analizinden geçirilir ve ana ölçeğimize göre tadılır."
            },
            extraction: {
              title: "Ekstraksiyon",
              desc: "Tam potansiyelini ortaya çıkarmak için her köken için moleküler su profilleri sağlıyoruz."
            }
          }
        },
        human_link: {
          badge: "Bölüm 02",
          title: "Doğrudan İnsan Bağı.",
          subtitle: "Emtia piyasasını devre dışı bırakıyoruz. Doğrudan mülklerle anlaşarak Adil Ticaret minimumlarının %300 üzerinde ödeme yapıyoruz. Bu hayırseverlik değil; yüksek irtifa çiftçiliğinin gelecek nesiller için sürdürülebilir olduğu bir geleceğe yatırımdır.",
          cta: "Çiftçilerimizi Görüntüle"
        },
        cupping: {
          title: "Tadım Masası.",
          subtitle: "Her sabah saat 07:00'de Q-Grader ekibimiz önceki günün kavurmalarını değerlendirir. Kavurma evindeki en kutsal saattir. Çekirdeğin netliğini, canlılığını ve \"nabzını\" arıyoruz."
        },
        pulse: {
          badge: "Nabız",
          title: "Fincandan Fazlası.",
          items: {
            intent: {
              title: "Atmosferik Niyet",
              desc: "Barlarımız duyusal laboratuvarlar olacak şekilde tasarlanmıştır. Akustikten taş tezgahların dokunsal hissine kadar, her detay demleme deneyimini güçlendirmek için tasarlanmıştır."
            },
            community: {
              title: "Topluluk Paylaşımı",
              desc: "Origin, meraklılar için bir merkezdir. Haftalık demleme atölyeleri, halka açık tadım seansları ve dünyanın dört bir yanından konuk kavurucu programlarına ev sahipliği yapıyoruz."
            }
          }
        },
        manifesto: {
          title: "Kusursuzca Meraklılar için Kahve.",
          subtitle: "Her fincanda daha yüksek standartlar için harekete katılın."
        }
      },
      catalogue: {
        badge: "Koleksiyon",
        title: "Sıradışı Kavrumlar",
        subtitle: "Her biri farklı duyusal profiller için kalibre edilmiş, özenle seçilmiş bir mikro lot serisi.",
        filter_all: "Tüm Birimler",
        filter_rarity: "Nadirlik",
        filter_origin: "Köken",
        search_placeholder: "KÖKEN VEYA VARYETE ARA",
        matrix_label: "Duyusal Matris",
        intensity_label: "Yapısal Yoğunluk",
        explore_cta: "Süreci Keşfet",
        calibration_complete: "Kalibrasyon Tamamlandı",
        filters: {
          all: "Tümü",
          standard: "Standart",
          high: "Yüksek",
          limited: "Sınırlı",
          exclusive: "Özel"
        },
        labels: {
          origin: "Köken",
          elevation: "Rakım"
        }
      },
      product: {
        back_cta: "Kataloğa Dön",
        lab_spec: "Laboratuvar Spesifikasyonu",
        series: "Seri",
        arrival: "Varış",
        process: "İşlem",
        roast_level: "Kavurma Seviyesi",
        acidity: "Asidite",
        altitude: "Rakım",
        flavor_matrix: "Lezzet Matrisi",
        calibration_verified: "Kalibrasyon Doğrulandı",
        calibration_text: "Bu profil, lotun kimyasal bileşimi ve duyusal potansiyeline ilişkin en son bilimsel analizimizi temsil eder.",
        tech_specs: {
          thermal: {
            title: "Termal Kalibrasyon",
            desc: "Loring S35 kavurucumuzu her lotun yoğunluğuna ve nem içeriğine göre özel olarak kalibre ederek, enzimatik tatlılığı koruyan bir gelişim süresi oranı sağlıyoruz."
          },
          ethics: {
            title: "Sürdürülebilir Etik",
            desc: "Küçük ölçekli çiftçi kooperatiflerine doğrudan ödenen piyasa üstü primler. Şeffaf ESG metriklerine ve düşük su tüketimli işleme yöntemlerine sahip tedarik zincirlerine öncelik veriyoruz."
          },
          freshness: {
            title: "Tazelik Garantisi",
            desc: "Tek yönlü gaz alma valflerine sahip azotla yıkanmış ambalajlar. Londra'da talep üzerine kavrulur ve en yüksek aroma için 48 saat içinde gönderilir."
          }
        },
        data: {
          yirgacheffe: {
            name: "Etiyopya Yirgacheffe",
            region: "Gedeo Bölgesi, Etiyopya",
            process: "Yıkanmış",
            profile: "Narenciye • Çiçeksi • Yasemin",
            description: "Belirgin bergamot ve yasemin notalarıyla rafine, çay benzeri bir gövde sunan Gedeo bölgesinin klasik bir temsili.",
            longDescription: "Yirgacheffe bölgesindeki küçük ölçekli çiftçilerden temin edilen bu kahve, hassas asiditesini vurgulayan titiz bir yıkama sürecinden geçer. Gedeo bölgesi, yüksek rakımı ve ideal iklimi ile tanınır; olağanüstü çiçeksi netliğe ve hafif, çay benzeri bir ağız hissine sahip çekirdekler üretir. Bu parti, ince bergamot üst notalarını korumak için hassasiyetle kavrulmuştur.",
            roastLevel: "Açık",
            acidity: "Parlak",
            harvest: "Kas - Oca 2025"
          },
          huila: {
            name: "Kolombiya Huila",
            region: "Huila Departmanı, Kolombiya",
            process: "Honey İşlem",
            profile: "Çikolata • Fındıksı • Karamel",
            description: "Merkez Sıradağlar'ın volkanik topraklarında yetişen bu honey işlem görmüş lot, derin tatlılığı temiz bir asidite ile dengeler.",
            longDescription: "Huila departmanı, besin açısından zengin volkanik toprağıyla ünlüdür. Bu honey işlem görmüş lot, kurutma sırasında meyve müsilajının bir kısmını koruyarak gelişmiş bir tatlılık ve kremsi bir gövde sağlar. Hem filtre hem de espresso için mükemmel olan, zengin karamel ve bitter çikolata nüanslarını sergileyen çok yönlü bir çekirdektir.",
            roastLevel: "Orta",
            acidity: "Pürüzsüz",
            harvest: "Eyl - Ara 2025"
          },
          kenya: {
            name: "Kenya AA Plus",
            region: "Nyeri Bölgesi, Kenya",
            process: "Çift Yıkanmış",
            profile: "Orman Meyveleri • Şarapsı • Parlak",
            description: "Kenya Dağı'nın eteklerinden temin edilen bu AA sınıfı lot, karakteristik karmaşıklık ve güçlü kuşüzümü notaları sunar.",
            longDescription: "Çift yıkama, lezzetin aşırı netliğini oluşturmak için ekstra fermantasyon aşamalarını içeren geleneksel bir Kenya tekniğidir. Nyeri'den gelen bu AA+ sınıfı lot, parlak, vurucu kuşüzümü ve kırmızı meyve tatlarıyla şarapsı bir yapı sunarak asidite ve karmaşıklığın zirvesini temsil eder.",
            roastLevel: "Açık-Orta",
            acidity: "Yüksek/Şarapsı",
            harvest: "Oca - Mar 2026"
          },
          estate: {
            name: "Estate Reserve 2026",
            region: "Tarrazú, Kosta Rika",
            process: "Anaerobik Fermantasyon",
            profile: "Tarçın • Kırmızı Meyve • Baharatlı",
            description: "Deneysel laboratuvar partimiz. 72 saatlik kontrollü fermantasyon, baharatlı kiraz ve sıcaklıktan oluşan devrim niteliğinde bir profil oluşturur.",
            longDescription: "2000 m yükseklikteki Tarrazú, yoğun ve lezzetli kirazlar için gereken aşırı stresi sağlar. Bu Estate Reserve için basınçlı tanklarda 72 saatlik anaerobik fermantasyon uyguladık. Bu yöntem laktik asitleri vurgular ve geleneksel yöntemlerde nadiren bulunan benzersiz bir 'baharatlı' profil oluşturur. Gerçekten meraklılar için tasarlanmış cesur, deneysel bir fincandır.",
            roastLevel: "Orta-Koyu",
            acidity: "Karmaşık",
            harvest: "Şub 2026"
          },
          sumatra: {
            name: "Sumatra Mandheling",
            region: "Toba Gölü, Endonezya",
            process: "Giling Basah",
            profile: "Topraksı • Odunsu • Baharatlar",
            description: "Kuzey Sumatra'dan tam gövdeli bir deneyim. Benzersiz ıslak soyma işlemi koyu, topraksı ve karmaşık orman tabanı notaları üretir.",
            longDescription: "Mandheling kahvesi Toba Gölü'nün subtropikal ormanlarında yetişir. Giling Basah (ıslak soyma) işlemi Endonezya'ya özgüdür ve çekirdeklere kendine özgü mavimsi bir renk ve asiditesi harika bir şekilde düşük bir lezzet profili verir. Sedir, nemli toprak ve bitter çikolatanın derin notalarıyla ağır, şurupsu bir gövde bekleyin.",
            roastLevel: "Koyu",
            acidity: "Düşük",
            harvest: "Eki - Ara 2025"
          },
          guatemala: {
            name: "Guatemala Huehuetenango",
            region: "Batı Yaylaları, Guatemala",
            process: "Yıkanmış",
            profile: "Elma • Karamel • Pürüzsüz",
            description: "Orta Amerika'nın en yüksek ekim bölgelerinden birinden gevrek ve temiz. Yeşil elma ve panela tatlılığı notaları.",
            longDescription: "Huehuetenango, Guatemala'daki volkanik olmayan birkaç kahve bölgesinden biridir ve donmaya karşı korunmak için Meksika'dan gelen benzersiz sıcak rüzgarlarına güvenir. Bu, orta gövdeli, çok temiz ve gevrek bir çekirdek üretir. Kavurmamız, doğal malik asiditesini vurgulayarak, kalıcı karamel tatlılığı ile son derece pürüzsüz bir fincan sağlar.",
            roastLevel: "Orta",
            acidity: "Gevrek",
            harvest: "Oca - Nis 2025"
          }
        }
      },
      locations: {
        badge: "Laboratuvar Sahaları",
        title: "Küresel Koordinatlar.",
        subtitle: "Tesislerimiz, hem üretim merkezleri hem de duyusal arşivler olarak hizmet veren, ticaret ve kültürün kilit noktalarında stratejik olarak konumlandırılmıştır.",
        flagship: {
          log: "Sistem Günlüğü",
          node_id: "DÜĞÜM_01 // LND_AMİRAL",
          badge: "Amiral Gemisi Merkezi",
          coordinates_label: "BİRİNCİL_KOORD",
          equipment_label: "LAB_DONANIMI",
          coordinates: "Koordinatlar",
          equipment: "Ekipman",
          cta: "Tadım Seansı Ayır"
        },
        booking: {
          success_title: "İstek Kaydedildi",
          success_desc: "Duyusal kalibrasyon yuvanız doğrulanıyor. Onay için terminalinizi kontrol edin.",
          badge: "Kalibrasyon İsteği",
          title_part1: "Tadım",
          title_part2: "Seansı.",
          date_label: "İstenen Tarih",
          attendees_label: "Katılımcılar",
          tier_label: "Deneyim Kademesi",
          tier_sensory: "Duyusal (Giriş)",
          tier_technical: "Teknik (İleri Seviye)",
          submit: "Kalibrasyon İsteğini Gönder"
        },
        network: {
           badge: "Küresel Varlık",
           title: "Ağ.",
           status: "AĞ_DURUMU: AKTİF",
           description: "Biyolojik bütünlüğü korumamıza ve hızlı yanıt lojistiği sağlamamıza olanak tanıyan stratejik ileri karakollar."
        },
        values: {
          quote: "Mekansal tasarım lezzetin bir bileşenidir. Her koordinat, termal kavurma profillerimizle aynı hassasiyeti yansıtır.",
          verifying: "COĞRAFİ_SENK_V1.4",
          renewable: "Yenilenebilir Enerji",
          precision: "Laboratuvar Hassasiyeti"
        },
        data: {
          london: {
            role: "Genel Merkez ve Ana Kavurma Evi",
            description: "Amiral gemisi tesisimiz. Özel Loring S35 kavurucumuza ve duyusal eğitim merkezimize ev sahipliği yapan 4.000 metrekarelik bir laboratuvar."
          },
          berlin: {
            role: "Avrupa Araştırma Merkezi",
            node_id: "DÜĞÜM_02 // BRLN_ARŞ",
            description: "Anaerobik fermantasyon araştırmalarına ve AB tedarik zinciri lojistiğine adanmıştır. Odaklanma için tasarlanmış brütalist bir alan."
          },
          tokyo: {
            role: "Duyusal Atölye",
            node_id: "DÜĞÜM_03 // TOKY_ATL",
            description: "Pasifik Kıyısı kapımız. Bu atölye, hassas demleme yöntemlerine ve geleneksel Japon ustalığına odaklanmaktadır."
          }
        },
        cities: {
          london: "Londra",
          berlin: "Berlin",
          tokyo: "Tokyo"
        },
        equipment: {
          london: "Loring S35 • Marzocco KB90",
          berlin: "Loring S35 • Modbar",
          tokyo: "Loring S35 • Hario Craft"
        }
      },
      contact: {
        title: "İletişime Geçin",
        subtitle: "Duyusal mimarlarımızla, laboratuvar teknisyenlerimizle veya sürdürülebilirlik liderlerimizle bağlantı kurun.",
        badge: "İletişim Kanalı",
        success_title: "Mesaj Kaydedildi",
        success_desc: "Sinyal alındı. Teknisyenlerimiz isteğinizi işleyecek ve bir sonraki operasyonel döngüde yanıt verecektir.",
        form: {
          label_name: "İmza (Ad)",
          placeholder_name: "OPERATÖR ADI",
          label_email: "Koordinat (E-posta)",
          placeholder_email: "EPposta@ALANADI.COM",
          label_subject: "Konu",
          label_message: "İletim İçeriği",
          placeholder_message: "MESAJ GİRİN...",
          submit: "İletimi Gönder",
          submitting: "Sinyal İşleniyor...",
          subjects: {
            general: "Genel Sorgu",
            wholesale: "Toptan Satış Protokolü",
            calibration: "Kalibrasyon Desteği",
            sustainability: "Sürdürülebilirlik Verileri"
          }
        },
        sidebar: {
          labels: {
            dispatch: "Laboratuvar Sevkiyatı",
            signal: "Doğrudan Sinyal",
            hub: "Merkezi Bağlantı Noktası",
            social: "Sosyal Frekanslar"
          },
          subs: {
            response: "Ortalama yanıt: < 2 saat",
            hours: "Hafta içi 09:00 — 17:00 GMT",
            center: "Kalibrasyon ve Eğitim Merkezi"
          },
          security: {
            badge: "Şifreli Bağlantı",
            text: "Bu terminal üzerinden yapılan tüm iletimler merkezi kavurma defterimize kaydedilir. Veri egemenliğine ve duyusal bütünlüğe sıkı sıkıya bağlı kalıyoruz."
          }
        }
      },
      footer: {
        description: "Zanaatkar topluluğu için hassas kavurucular. Tüm çekirdekler sorumlu bir şekilde tedarik edilir ve Londra'da kavrulur.",
        privacy: "Gizlilik",
        sustainability: "Sürdürülebilirlik",
        terms: "Şartlar",
        rights: "Tüm hakları saklıdır."
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
