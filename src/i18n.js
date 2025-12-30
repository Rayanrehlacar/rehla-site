import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const savedLanguage = localStorage.getItem("i18nextLng") || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        //Header 
        header: {
          home: "Home",
          services: "Services",
          prebooking: "Prebooking Trips",
          tourism: "Tourism Tours",
          sendParcel: "Send Parcels",
          news: "News",
          aboutus: "About Us",
          contactus: "Contact Us",
          languageSwitch: "عربي",
          editProfile: "Edit Profile", // Added
          myTrips: "My Trips", // Added
          myReservation: "My Reservation", // Added
          myWallet: "My Wallet", // Added
          mySendParcel: "My Send Parcels", // Added
          myRates: "My Rates", // Added
          myPreferences: "My Preferences", // Added
          verification: "Verification", // Added
          notification: "Notification", // Added
          registerAsTraveler: "Register as a Traveler", // Added
          logout: "Logout", // Added
          Login: "Login",
        },

        //Loginpage
        userLogin: {
          Heading: "Login to you account",
          phonenumber: "Phone Number*",
          passWord: "Password*",
          remeber: "Remember me",
          forget: "Forgot password?",
          loginNow: "Login Now",
          DontHave: "Don't have an account?",
          CreateNew: "Create New Account",
        },
        //Registration
        Registration: {
          createNew: "Create New Account",
          FullName: "Full Name*",
          PhoneNumber: "Phone Number*",
          Email: "Email*",
          Password: "Password*",
          DateofBirth: "Date of Birth*",
          Gender: "Gender*",
          RegisterNow: "Register Now",
          Already: "Already have an account?",
          LoginNow: "Login Now",
        },

        /////login dropdown
        dropdown: {
          //editpro
          fullname: "Full Name*",
          phone: "Phone Number*",
          email: "Email*",
          dob: "Date of Birth*",
          Gender: "Gender*",
          editprobutton: "Edit profile",

          //mytrip
          Gotrip: "Go Trip",

          //myWallet
          Walletbalance: "Wallet balance",
          Wallethistory: "Wallet history",
          Addbalance: "Add balance",
          Withdrawbalance: "Withdraw a balance",

          //myrates
          totalReview: "Total rates",
          Review: "reviews",

          //mypreffrence
          smoking: "Smoking",
          airCondistioning: "Air Conditioning",
          Music: "Music",
          chating: "Chating",
          carCharger: "Car Charger",
          suitcase: "Suitcase",
          wifi: "Wifi",
          displayScreen: "Display Screen",

          //varification
          phoneNumber: "Phone Number",
          Emailaddress: "Email-address",
          IDcard: "ID card",
        },

        //Home Page
        heroSection: {
          heroTitle:
            "Rehla App is The Best App For Booking Ride And Sharing Trips",
          heroDescription:
            "Rehla is a ride sharing and a ride hailing service that links between passengers and vehicle owners heading to the same destination.",

          AboutReh: "About Rehla",
          Rehla: "Rehla",
          RehlaIntro: "introducing video promotion",
          RehDes:
            "Rehla application .... the pleasure of traveling between cities at the lowest cost and more safety Rehlacar offers a unique travel experience between cities at the lowest cost and the most enjoyable and safe ways. Rehla application licensed by the Public Transport Authority and compatible with all safety and security requirements in Saudi Arabia, and is based on the principle of sharing travel costs between passengers and vehicles owners .",

          startTrip: "Start Your ride Now",
          offerUp: "Offer up to 30% for each ride",

          Signup: "Sign up ",
          addingcar: "in Rehla and adding car",
          Trainingvideo:
            "Training video explaining how to create an account in Rehla, fill in the registration data, and view the login method if you already have an account in Rehla. How to register your car information to be reviewed and registered in Rehla application as a captain, as you can know your balance through the wallet.Watch",

          Create: "Create and ordering a trip",
          explanation:
            "explanation of how to use Rehla app How to create a ride-sharing trip by the captain and search for them by the passenger, and the possibility of requesting a prior reservation for the ride-sharing trip, How to request a ride-hailing trip inside the city and how to receive the request by Rehla captains.",

          join: "Join tourism experts as a",
          Traveler: "Traveler",
          Rehla: "Rehla",

          firstStep: "First Step",
          secondStep: "Second Step",
          thirdStep: "Third Step",

          first:
            "Please Click on the Join Now and fill in your data as a tourist traveler",
          second: "Fill out your tourism information form",
          third: "After reviewing our data, you will be able to create tours",

          book: "Book your prebooking",
          trip: "trip now",
          login:
            "Login with your account for Rehla or create an account for the first time through our website or App",
          goto: "Go to Prebooking Trips",
          select:
            "Select your destination and departure date and book now and wait for your offer to be accepted by one of our captains",

          Featuredcoures: "Featured coures",
          Charge: "Charge Cards Now",
          price: "Price",
          Chargewallet: "Charge wallet",

          screenShot: "screenshots",
          screenshotDesc:"Explore Rehla's user-friendly interface and discover how easy it is to book rides, manage trips, and travel smarter.",

          clentSay: "What clients are saying",
        },
        rehlaServiceSection: {
          rehlaServiceTitle: "Rehla",
          rehlaSer: "Services",
          rehlaServiceDescriptions:
            "Fully layered dolor sit amet, nobis id expedita dolores officiis laboriosam",
          serviceTitle1: "Ride Hailing",
          serviceDescription1:
            "Passengers can request a ride with a nearby driver to reach their destination quickly and safely within the city.",
          serviceTitle2: "Prebooking trips",
          serviceDescription2:
            "Plan ahead by booking trips in advance. Choose your destination and travel date, then wait for a captain to accept your request.",
          serviceTitle3: "Tourism Tours",
          serviceDescription3:
            "Tourism experts can create customized tours for tourist destinations. Travelers can browse tours by region and book unique travel experiences.",
          serviceTitle4: "Sending Parcels",
          serviceDescription4:
            "Send parcels between cities easily. Post your delivery request and wait for a Rehla captain to accept and deliver your package securely.",
        },

        //Pre-BookingTrips page
        preBookingtrips: {
          startPlace: "Start Place",
          arrivalPlace: "Arrival Place",
          startDate: "Start Date",
          startTime: "Start Time",
          paymentType: "Payment Type",
          SelectCarcategory: "Select Car Category",
          EmployeeName: "Name of Employee",
          PassengerName:  "Passenger Name",
          PassengerPhone:  "Passenger Phone",
          BagCount:  "Number of Bags",
          PassengerCount:  "Number of Passengers",
          coupon: "Coupon",
          Description: "Notes",
          preBookingNow: "Prebooking Now",
        },

        //BookTour page
        bookTour: {
          startFrom: "Start Place",
          startDate: "Start Date",
          paymentType: "Payment Type",
        },

        //TourismTour Page
        tourismTour: {
          tourismTitle: "Tourism Tours",
          tourismTitleErr: "Tourism Tours Currently Unavailable",
          tourismTitleErr2: "We are currently working on developing and enhancing our Tourism Tours service to deliver a high-quality experience.",
          tourismTitleErr3: "The service will be available soon. Stay tuned for updates.",
          rehlaTourism: "Rehla",
        },

        sendParcel: {
            SourceCity: "Sender location",
            DestinationCity: "Receiver location",
            SenderPhone: "Sender phone",
            SenderName: "Sender name",
            SenderId: "Sender ID",
            ReceiverPhone: "Receiver phone",
            ReceiverName: "Receiver name",
            ReceiverId: "Receiver ID",
            Notes: "Notes",
            sendParcelNow: "Send Parcel",
        },

        //AboutUs Page
        AboutUspage: {
          stayTuned: "Stay tuned for new newsThey are coming with offer",
          featureIntegration: "Feature Integration",
          multipleDiscussions: "Multiple Discussions",
          GetStarted: "Get Started",

          OurRehla1: "Our",
          OurRehla2: "Rehla",
          OurRehla3: "Team",

          Gallery: "Gallery",

          SeeAll: "See All",
          Branding: "Branding",
          Designing: "Designing",
          Photography: "Photography",
          Development: "Development",

          availablDevices: "Rehla is available for all devices",
          avaiDes:
            "Enjoy smart, affordable, and safe travel across cities",
        },

        //ContactUsPage
        contactUspage: {
          nameplaceholder: "Enter Your Name",
          emailplaceholder: "Enter Your Email Address",
          messageplaceholder: "Write Your Message",
          submit: "Send Message",
        },

        //Footer page
        footer: {
          description1: "Rehla is a ride sharing and a ride hailing ",
          description2: "service that links between passengers",
          description3: "and vehicle owners heading to",
          description4: "the same destination",
          sitemap: "Site map",
          usefulLinks: "Useful links",
          contactInfo: "Contact Info",
          address1: "Itqan Square, Madinah Road- P.O 23215",
          address2: "Kingdom of Saudi Arabia",
          phone: "920011455",
          email: "care@rehlacar.com",
          home: "Home",
          services: "Services",
          prebooking: "Prebooking Trips",
          tourism: "Tourism Tours",
          sendParcel: "Send Parcels",
          news: "News",
          terms: "Terms of Use",
          privacy: "Privacy Policy",
          faq: "Frequently Asked",
          copyright: "All Rights Reserved",
        },
      },
    },

    ///////////////urdu translations
    ur: {
      translation: {
        header: {
          home: "الرئيسية",
          services: "خدمات",
          prebooking: "الحجز المسبق",
          tourism: "جولات سياحية",
          sendParcel: "إرسال الطرود",
          news: "أخبار",
          aboutus: "من نحن؟",
          contactus: "اتصل بنا",
          languageSwitch: "عربي",
          editProfile: "تحرير الملف الشخصي", // Added
          myTrips: "رحلاتي", // Added
          myReservation: "حجزي", // Added
          myWallet: "محفظتي", // Added
          mySendParcel: "الطرود المرسلة", // Added
          myRates: "أسعاري", // Added
          myPreferences: "تفضيلاتي", // Added
          verification: "تَحَقّق", // Added
          notification: "إشعار", // Added
          registerAsTraveler: "سجل كمسافر", // Added
          logout: "تسجيل الخروج",
          Login: "تسجيل الدخول",
        },

        //Loginpage
        userLogin: {
          Heading: "تسجيل الدخول إلى حسابك",
          phonenumber: "رقم التليفون",
          passWord: "كلمة المرور",
          remeber: "تذكرنى",
          forget: "هل نسيت كلمة السر؟",
          loginNow: "تسجيل الدخول الآن",
          DontHave: "ليس لديك حساب؟",
          CreateNew: "إنشاء حساب جديد",
        },

        //Registration
        Registration: {
          createNew: "إنشاء حساب جديد",
          FullName: "الاسم الكامل",
          PhoneNumber: "رقم التليفون",
          Email: "بريد إلكتروني",
          Password: "كلمة المرور",
          DateofBirth: "تاريخ الميلاد",
          Gender: "جنس",
          RegisterNow: "سجل الآن",
          Already: "هل لديك حساب بالفعل؟",
          LoginNow: "تسجيل الدخول الآن",
        },

        /////login dropdown
        dropdown: {
          //editpro
          fullname: "الاسم الكامل*",
          phone: "رقم التليفون*",
          email: "بريد إلكتروني*",
          dob: "تاريخ الميلاد*",
          Gender: "جنس*",
          editprobutton: "تحرير الملف الشخصي",

          //myTrip
          Gotrip: "اذهب للرحلة",

          //myWallet
          Walletbalance: "رصيد المحفظة",
          Wallethistory: "تاريخ المحفظة",
          Addbalance: "إضافة الرصيد",
          Withdrawbalance: "سحب الرصيد",

          //myrates
          totalReview: "إجمالي الأسعار",
          Review: "المراجعات",

          //mypreffrence
          smoking: "تدخين",
          airCondistioning: "تكييف الهواء",
          Music: "موسيقى",
          chating: "الدردشة",
          carCharger: "شاحن سيارة",
          suitcase: "حقيبة",
          wifi: "واي فاي",
          displayScreen: "شاشة العرض",

          //varification
          phoneNumber: "رقم التليفون",
          Emailaddress: "عنوان البريد الإلكتروني",
          IDcard: "بطاقة الهوية",
        },

        //home
        heroSection: {
          heroTitle: "تطبيق رحلة أفضل تطبيق لحجز الرحلات ومشاركة الرحلات",
          heroDescription:
            "رحلة هي خدمة مشاركة الرحلات وخدمة نقل الركاب التي تربط بين الركاب وأصحاب المركبات المتجهين إلى نفس الوجهة",

          AboutReh: "حول رحلة",
          Rehla: "رحلة",
          RehlaIntro: "تعريف",
          RehDes:
            "تطبيق رحلة .... متعة السفر بين المدن بأقل تكلفة وأمان أكثر يقدم موقع رحلة تجربة سفر فريدة بين المدن بأقل تكلفة وبأكثر الطرق متعة وأمان. تطبيق رحلة مرخص من هيئة النقل العام ومتوافق مع كافة متطلبات السلامة والأمن في المملكة العربية السعودية، ويقوم على مبدأ تقاسم تكاليف السفر بين الركاب وأصحاب المركبات.",
          startTrip: "ابدأ رحلتك الآن",
          offerUp: "عرض يصل إلى 30% لكل رحلة",

          Signup: "اشتراك",
          addingcar: "في رحلة وإضافة سيارة",
          Trainingvideo:
            "فيديو تدريبي يشرح كيفية إنشاء حساب في رحلة، وتعبئة بيانات التسجيل، وعرض طريقة تسجيل الدخول إذا كان لديك حساب في رحلة بالفعل. كيفية تسجيل معلومات سيارتك لمراجعتها وتسجيلها في تطبيق رحلة ككابتن، كما يمكنك معرفة رصيدك من خلال المحفظة.شاهد",

          Create: "إنشاء وطلب رحلة",
          explanation:
            "شرح كيفية استخدام تطبيق رحلة، كيفية إنشاء رحلة مشاركة من قبل الكابتن والبحث عنها من قبل الراكب، وإمكانية طلب حجز مسبق لرحلة المشاركة، كيفية طلب رحلة مشاركة من الداخل المدينة وكيفية استقبال الطلب من قبل رحلة الكباتن.",

          join: "انضم إلى خبراء السياحة ك",
          Traveler: "مسافر",
          Rehla: " رحلة ", //////////////////pen

          firstStep: "الخطوة الأولى",
          secondStep: "الخطوة الثانية",
          thirdStep: "الخطوة الثالثة",

          first: "من فضلك اضغط على انضم الآن واملأ بياناتك كسائح",
          second: "املأ نموذج المعلومات السياحية الخاص بك",
          third: "بعد مراجعة بياناتنا، ستتمكن من إنشاء جولات",

          book: "احجز حجزك المسبق في",
          trip: "رحلة الآن",
          login:
            "قم بتسجيل الدخول بحسابك الخاص برحلة أو قم بإنشاء حساب لأول مرة عبر موقعنا أو تطبيقنا",
          goto: "اذهب إلى الحجز المسبق للرحلات",
          select:
            "حدد وجهتك وتاريخ المغادرة واحجز الآن وانتظر حتى يتم قبول عرضك من قبل أحد الكباتن لدينا",

          Featuredcoures: "شحن المحفظة",
          Charge: "اشحن محفظتك عن طريق بطاقات رحلة الآن",
          price: "سعر",
          Chargewallet: "شحن المحفظة",

          screenShot: "لقطات الشاشة لتطبيق",
          screenshotDesc:"استكشف واجهة رحلة سهلة الاستخدام وتعرّف على مدى سهولة حجز الرحلات، إدارة المشاوير، والسفر بذكاء أكثر.",

          clentSay: "ما يقوله العملاء",
        },
        rehlaServiceSection: {
          rehlaServiceTitle: "رحلة",
          rehlaSer: "خدمات",
          rehlaServiceDescriptions:
            "آلام الجلوس ذات الطبقات الكاملة، nobis id expedita dolores officiis Laboriosam",
          serviceTitle1: "التنقل داخل المدينة",
          serviceDescription1:
            "يمكن للركّاب طلب مشوار مع أقرب كابتن للوصول إلى وجهتهم داخل المدينة بسرعة وسهولة وبأعلى معايير السلامة.",
          serviceTitle2: "رحلات الحجز المسبق",
          serviceDescription2:
            "خطّط رحلتك مسبقًا عبر حجز المشوار قبل موعده. اختر وجهتك وتاريخ السفر وانتظر قبول الطلب من أحد كباتن رحلة.",
          serviceTitle3: "جولات سياحية",
          serviceDescription3:
            "يتيح تطبيق رحلة للخبراء السياحيين إنشاء جولات مخصّصة للمدن والمناطق السياحية، مع إمكانية استعراض الجولات حسب المنطقة وحجز تجارب سفر مميّزة.",
          serviceTitle4: "إرسال الطرود",
          serviceDescription4:
            "أرسل الطرود بين المدن بكل سهولة. قدّم طلب التوصيل وانتظر قبول المهمة من أحد كباتن رحلة لتصل شحنتك بأمان.",

          AboutReh: "ریحلا کے بارے میں",
          Rehla: "ریحلہ",
          RehlaIntro: "ویڈیو پروموشن کا تعارف",
          RehDes:
            "ریہلا ایپلی کیشن .... شہروں کے درمیان سب سے کم قیمت پر سفر کرنے کی خوشی اور زیادہ حفاظت Rehlacar سب سے کم قیمت پر شہروں کے درمیان سفر کا ایک انوکھا تجربہ پیش کرتا ہے اور انتہائی پرلطف اور محفوظ طریقے۔ Rehla ایپلیکیشن پبلک ٹرانسپورٹ اتھارٹی کی طرف سے لائسنس یافتہ ہے اور سعودی عرب میں تمام حفاظتی اور حفاظتی تقاضوں سے ہم آہنگ ہے، اور مسافروں اور گاڑیوں کے مالکان کے درمیان سفری اخراجات بانٹنے کے اصول پر مبنی ہے۔",
        },

        //Pre-BookingTrips page
        preBookingtrips: {
          startPlace: "مكان البدء",
          arrivalPlace: "مكان الوصول",
          startDate: "تاريخ البدء",
          startTime: "وقت البدء",
          paymentType: "نوع الدفع",
          SelectCarcategory: "اختر فئة السيارة",
          EmployeeName: "اسم الموظف",
          PassengerName:  "اسم الراكب",
          PassengerPhone:  "هاتف الركاب",
          BagCount:  "عدد الحقائب",
          PassengerCount:  "عدد الركاب",
          coupon: "قسيمة",
          Description: "ملحوظات",
          preBookingNow: "الحجز المسبق الآن",
        },

        sendParcel: {
          SourceCity: "بھیجنے والے کا مقام",
          DestinationCity: "وصول کنندہ کا مقام",
          SenderPhone: "بھیجنے والا فون",
          SenderName: "بھیجنے والے کا نام",
          SenderId: "بھیجنے والے کی شناخت",
          ReceiverPhone: "وصول کنندہ فون",
          ReceiverName: "Receiver name",
          ReceiverId: "وصول کنندہ کا نام",
          Notes: "نوٹس",
          preBookingNow: "الحجز المسبق الآن",
      },

       //bookTour page
       bookTour: {
        startFrom: "مكان البدء",
        startDate: "تاريخ البدء",
        paymentType: "نوع الدفع",
      },

        //TourismTour Page
        tourismTour: {
          tourismTitle: "الجولات السياحية",
          tourismTitleErr: "الجولات السياحية غير متوفرة حاليًا",
          tourismTitleErr2: "نحن نعمل حالياً على تطوير وتحسين خدمة الجولات السياحية لتقديم تجربة مميزة تلبي تطلعاتكم.",
          tourismTitleErr3: "سيتم إتاحة الخدمة قريباً، تابعونا لمعرفة آخر التحديثات.",
          rehlaTourism: "رحلة",
        },

        //AboutUs Page
        AboutUspage: {
          stayTuned: "ترقبوا الأخبار الجديدة إنهم يأتون مع العرض",
          featureIntegration: "تكامل الميزات",
          multipleDiscussions: "مناقشات متعددة",
          GetStarted: "ابدأ",

          OurRehla1: "ملكنا",
          OurRehla2: "رحلة",
          OurRehla3: "فريق",

          Gallery: "معرض",

          SeeAll: "رؤية الكل",
          Branding: "العلامة التجارية",
          Designing: "تصميم",
          Photography: "التصوير الفوتوغرافي",
          Development: "تطوير",

          availablDevices: "رحلة متاحة لجميع الأجهزة",
          avaiDes:
            "استمتع بسفر ذكي، اقتصادي، وآمن بين المدن",
        },

        //ContactUsPage
        contactUspage: {
          nameplaceholder: "أدخل اسمك",
          emailplaceholder: "أدخل عنوان بريدك الإلكتروني",
          messageplaceholder: "اكتب رسالتك",
          submit: "أرسل رسالة",
        },

        //Footer page
        footer: {
          description1: " عبارة عن مشاركة في الرحلات ومشاركة الرحلات",
          description2: "الخدمة التي تربط بين الركاب",
          description3: "وأصحاب المركبات المتوجهين إلى",
          description4: "نفس الوجهة",

          sitemap: "خريطة الموقع",
          usefulLinks: "روابط مفيدة",
          contactInfo: "معلومات الاتصال",
          address1:"ميدان الإتقان، طريق المدينة المنورة - ص.ب. 23215 ",
          address2:"المملكة العربية السعودية",
          phone: "920011455",
          email: "care@rehlacar.com",
          home: "الرئيسية",
          services: "خدمات",
          prebooking: "رحلات الحجز المسبق",
          tourism: "جولات سياحية",
          news: "أخبار",
          terms: "شروط الاستخدام",
          privacy: "سياسة الخصوصية",
          faq: "سؤال متكرر",
          copyright: "رحلة جميع الحقوق محفوظة",
        },
      },
    },
  },
  lng: savedLanguage, // Use the saved language from localStorage
  fallbackLng: "en", // Fallback to English if language not found

  interpolation: {
    escapeValue: false, // React already escapes content
  },
});

// Listen for language changes and store them in localStorage
i18n.on("languageChanged", (lng) => {
  localStorage.setItem("i18nextLng", lng);
});

export default i18n;
