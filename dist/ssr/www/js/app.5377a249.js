(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,a,o){e.exports=o("2f39")},"2f39":function(e,a,o){"use strict";o.r(a);var n=o("967e"),i=o.n(n),t=(o("a481"),o("96cf"),o("7d6e"),o("e54f"),o("985d"),o("31cd"),o("61fb"),o("0336"),o("2b0e")),r=o("1f91"),s=o("b05d"),c=o("4d5a"),d=o("e359"),l=o("7ff0"),u=o("9404"),m=o("09e3"),p=o("9989"),h=o("65c6"),g=o("6ac5"),f=o("9c40"),y=o("0016"),b=o("1c1c"),v=o("66e5"),w=o("8f8e"),T=o("4074"),F=o("0170"),k=o("429b"),I=o("7460"),S=o("7867"),C=o("f09f"),x=o("a370"),O=o("4b7e"),A=o("24e8"),R=o("2c91"),E=o("27f9"),D=o("7cbe"),P=o("0378"),L=o("54e1"),j=o("ddd8"),B=o("4983"),M=o("eb85"),W=o("9564"),V=o("c1d0"),Q=o("adad"),q=o("823b"),K=o("0d59"),N=o("880c"),z=o("32a7"),H=o("62cd"),U=o("639d"),G=o("f20b"),_=o("2a19");t["a"].use(s["a"],{config:{dark:"true"},lang:r["default"],components:{QLayout:c["a"],QHeader:d["a"],QFooter:l["a"],QDrawer:u["a"],QPageContainer:m["a"],QPage:p["a"],QToolbar:h["a"],QToolbarTitle:g["a"],QBtn:f["a"],QIcon:y["a"],QList:b["a"],QItem:v["a"],QCheckbox:w["a"],QItemSection:T["a"],QItemLabel:F["a"],QTabs:k["a"],QTab:I["a"],QRouteTab:S["a"],QCard:C["a"],QCardSection:x["a"],QCardActions:O["a"],QDialog:A["a"],QSpace:R["a"],QInput:E["a"],QPopupProxy:D["a"],QForm:P["a"],QBanner:L["a"],QSelect:j["a"],QScrollArea:B["a"],QSeparator:M["a"],QToggle:W["a"],QSlider:V["a"],QTabPanels:Q["a"],QTabPanel:q["a"],QSpinner:K["a"],QCarousel:N["a"],QCarouselControl:z["a"],QCarouselSlide:H["a"],QParallax:U["a"],QBtnDropdown:G["a"]},plugins:{Notify:_["a"]}});var J=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{attrs:{id:"q-app"}},[o("router-view")],1)},$=[],Y={name:"App",created:function(){this.$q.dark.set(!0)}},Z=Y,X=o("2877"),ee=Object(X["a"])(Z,J,$,!1,null,null,null),ae=ee.exports,oe=o("2f62"),ne={darkMode:!0,isDark:!0},ie={isDark:function(e){return e.isDark}},te={toggleDarkMode:function(e){e.isDark=!e.isDark}},re={state:ne,getters:ie,mutations:te};t["a"].use(oe["a"]);var se=function(){var e=new oe["a"].Store({modules:{ui:re}});return e},ce=o("8c4f"),de=[{path:"/",component:function(){return o.e("ab82c866").then(o.bind(null,"f241"))},children:[{path:"",component:function(){return o.e("b1fce628").then(o.bind(null,"8b24"))}},{path:"weddings",component:function(){return o.e("5fe77f82").then(o.bind(null,"ac32"))}},{path:"business",component:function(){return Promise.all([o.e("0228c972"),o.e("400389aa")]).then(o.bind(null,"7168"))}},{path:"testimonials",component:function(){return o.e("4af687d0").then(o.bind(null,"2a59"))}},{path:"map",component:function(){return o.e("07e4c960").then(o.bind(null,"4347"))}},{path:"contact",component:function(){return o.e("2fae34e5").then(o.bind(null,"c2dc"))}},{path:"all",component:function(){return Promise.all([o.e("0228c972"),o.e("a92b2ffc")]).then(o.bind(null,"2612"))}},{path:"guidelines",component:function(){return o.e("2f9950d8").then(o.bind(null,"5523"))}},{path:"fee",component:function(){return o.e("2f971fb2").then(o.bind(null,"09a3"))}},{path:"capacity",component:function(){return o.e("2f9a7d87").then(o.bind(null,"6f55"))}},{path:"oak",component:function(){return o.e("6379f302").then(o.bind(null,"1eba"))}},{path:"river",component:function(){return o.e("d2b0bf5a").then(o.bind(null,"d62f"))}},{path:"magnolia",component:function(){return o.e("52b029cc").then(o.bind(null,"a9ff"))}},{path:"kennedyb",component:function(){return o.e("331c5834").then(o.bind(null,"aedb"))}},{path:"ogeechee",component:function(){return o.e("a900c1f4").then(o.bind(null,"4156"))}},{path:"kennedya",component:function(){return o.e("30f51018").then(o.bind(null,"2d3e"))}},{path:"computer",component:function(){return o.e("2070419f").then(o.bind(null,"c3c4"))}},{path:"classroom",component:function(){return o.e("18fb348a").then(o.bind(null,"c3f9"))}},{path:"atrium",component:function(){return o.e("3abe5a31").then(o.bind(null,"a875"))}}]}];var le=de;t["a"].use(ce["a"]);var ue,me=function(){var e=new ce["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:le,mode:"history",base:"/"});return e},pe=function(e){var a="function"===typeof se?se({Vue:t["a"],ssrContext:e}):se,o="function"===typeof me?me({Vue:t["a"],ssrContext:e,store:a}):me;a.$router=o;var n={router:o,store:a,render:function(e){return e(ae)}};return s["a"].ssrUpdate({app:n,ssr:e}),{app:n,store:a,router:o}},he=o("a925"),ge={failed:"Action failed",success:"Action was successful",mainMenu:{back:"Back",navigation:"Navigation",home:"Home",business:"Business Events",weddings:"Weddings & Socials",testimonials:"Testimonials",accessibility:"Accessibility",contact:"Contact",buttonTour:"START TOUR",buttonRooms:"VIEW ALL ROOMS",equalOpp:"Ogeechee Technical College is an Equal Opportunity Institution",buttonToggle:"Light/Dark",dropDown:"All Rooms",language:"Language",english:"English",spanish:"Spanish",urdu:"Urdu",pricing:"Pricing & Capacity",map:"Campus Map",college:"College",rooms:"Rooms",pricingButton:"Pricing & Availability",pdfRentalGuidelines:"Rental Guidelines",pdfFeeSchedule:"Fee Schedule",pdfCapacityChart:"Capacity Chart",roomDetails:"Room Details",buttonVr:"Virtural Tour",theVenues:"The Venues",oakRoom:"The Oak Room",riverRoom:"The River Room",magnoliaRoom:"Magnolia Room",kennedyBoardroom:"Kennedy Boardroom",ogeecheeBoardroom:"Ogeechee Boardroom",kennedyAuditorium:"The Kennedy Auditorium",computerLabs:"Computer Labs",classrooms:"Classrooms",theAtrium:"The Atrium"},carousel:{autoPlay:"Auto-Play",venuesText:"The Venues at OTC",venuesSub:"The perfect place for your next business or social event!",oakText:"The Oak Room",oakSub:"Large windows brighten this finely appointed space.",riverText:"The River Room",riverSub:"The River Room is comfortable and functional for training seminars, conferences, and business presentations.",magnoliaText:"The Magnolia Boardroom",magnoliaSub:"Known as the most elegant boardroom in this area.",kennedybText:"Kennedy Boardroom",kennedybSub:"The Kennedy Boardroom provides the ultimate setting for your next business meeting.",ogeecheeText:"Ogeechee Boardroom",ogeecheeSub:"The Ogeechee Boardroom seats 16 around an executive-style conference table",kennedyaText:"The Kennedy Auditorium",kennedyaSub:"From training sessions to renowned speakers this newly renovated auditorium provides a brilliant venue experience.",computerText:"Computer Labs",computerSub:"Our high-tech computer labs can accommodate up to 25 people.",classroomText:"Classrooms",classroomSub:"We offer a wide-array of classrooms with seating capacity from 15 to 40 participants.",atriumText:"The Atrium",atriumSub:"The Atrium is simply gorgeous!"},home:{title:"Welcome to The Venues!",pOne:"When it comes to memorable wedding celebrations, exciting holiday parties, large regional mettings or an executive retreat, people often turn to The Venues. From computer labs to auditorium, conference room to boardrooms, we have unique spaces for all types of events.",pTwo:"The crown jewel of The Venues is a beautiful ballroom with floor to ceiling windows overlooking acres of water birch and tall Georgia pines, with stone columns and state of the art audiovisual services. Amenities the ballroom offers include a spacious front atrium and veranda, a full service prep kitchen, Wi-Fi access, two LCD projectors, a computer, podium, wireless microphone and sound system. Beautiful outdoor spaces, and warm and inviting interior spaces, all combine for one of the most striking settings in this region.",pThree:"Conveniently located just minutes from I-16 and downtown Statesboro, our spaces is the ideal location for bussiness and social gatherings of all kinds. Voted one of the best places to have an event, The Venues is easily accessible, has ample free parking, and has multiple options at affordable rates.",cardBusiness:"Business Events",textBusiness:"Known as the most elegant boardroom in this area, this professional space was designed specifically for executive meetings of up to 20 participants. Located just off the main lobby in the Natural Resources Building, the Magnolia Boardroom provides a stunning environment for your next corporate meeting. Large windows with shades span the length of the room allowing for privacy, while the natural light continues to filter through them.",cardWeddings:"Weddings and Socials",textWeddings:"Give your guests the ambiance of an outdoor event with all the amenities of a modern indoor ballroom. Large windows brighten the finely appointed space, offering a panorama of lush woods and greenery that creates a truly stunning setting. From wedding receptions and social functions to trade shows and conferences, The Oak Room, will transform your gathering and create unforgettable memories."},testimonials:{thanks:"Thank you,",testOne:"We appreciate the work you and your staff did coordinating our workshop today. The room was great and just what we asked for. We received several comments about how nice the Venue was as well as the staff. Our officials said it was one of the nicest facilities they had used for their workshops. We look forward to working with Ogeechee Tech again in the future.",testTwo:"I would like to take the time out to thank the Venues at Ogeechee Technical College for allowing us to hold our wedding there on July 6, 2019. Our wedding was a fairytale come true. We enjoyed everything about the venue and received so many compliments. I am so thankful we chose The Venues at Ogeechee Tech. Thanks again to the whole team at Ogeechee Technical College. Look forward to working with you in the future.",testThree:'We would highly recommend the "Oak Room" facility and the staff to anyone looking for an exceptional venue for an event. We had a rehearsal dinner for close to 100 people and everything discussed and planned for us was perfect.  The facility is beautiful, clean and the staff was present before, during and after our event. Thank you to Ogeechee Tech for sharing such a beautiful facility and the wonderful staff, to help us enjoy such a memorable time for our son and new daughter-n-law. ',testFour:"We highly recommend Ogeechee Tech for all your business event needs. The staff is always so helpful and accommodating. The Board Room is so great for business meetings and The Oak Room is absolutely amazing! We have hosted many events over the years with Ogeechee Tech and have never been disappointed! We would recommend this venue to anyone!",testFive:"I had my daughter’s graduation party in the Atrium and it was amazing. I loved everything about it and the staff helped me in so many ways! I have already reserved the Atrium for my next daughter’s graduation party and would recommend The Venues at Ogeechee Tech to everyone!"},cards:{labelFeeSchedule:"Fee Schedule",weekDaySchedule:"MON-THURS • 8:00 AM - 9:00 PM",weekEndSchedule:"FRI - SAT • 8:00 AM - 9:00 PM",halfDayRental:"Half Day Rental",fullDayRental:"Full Day Rental",fourHours:"up to 4 hours",eightHours:"up to 8 hours",additionalHour:"Additional Hour",labelFeeIncludes:"Fee Includes",labelEnhancedPackage:"Enhanced Package",labelCapacity:"Capacity",labelOverview:"Overview",oakText:"Give your guests the ambiance of an outdoor event with all the amenities of a modern indoor ballroom. Large windows brighten the finely appointed space, offering a panorama of lush woods and greenery that creates a truly stunning setting. From wedding receptions and social functions to trade shows and conferences, The Oak Room, will transform your gathering and create unforgettable memories.",oakEnhancedPackageOne:"• 10 continuous hours on Saturday (between 8:00am and 12:00 am)",oakEnhancedPackageTwo:"• 6 continuous hours on the prior Thursday OR Friday for setup only (between 9:00am and 6:00pm",oakEnhancedPackageThree:"• Includes Dance Floor",oakFeeIncludesOne:"• Internet/Wi-Fi",oakFeeIncludesTwo:"• Basic Sound System",oakFeeIncludesThree:"• CD/DVD Capabilities",oakFeeIncludesFour:"• Podium with Microphone",oakFeeIncludesFive:"• LCD Projector & Screen",oakFeeIncludesSix:"• Kitchen access for catering drop-off and staging",oakFeeIncludesSeven:"• Access to Atrium and Veranda for pre/post functions",oakFeeIncludesEight:"• Podium with Microphone",oakFeeIncludesNine:"• Wireless Microphone",oakCapacityStanding:"• Standing:",oakCapacitySeated:"• Seated: Up to ",riverText:"The River Room is comfortable and functional for training seminars, conferences, and business presentations allowing for numerous room configurations. The room comes with a premium audio/visual package that includes a resident computer with wireless keyboard and mouse, ceiling-mounted LCD projector, drop-down screen, and wireless internet connectivity. The River room can be divided into three sections, each serving 25 guests. Each section has its own entrance and audio/visual hook-ups. This warm and ample-sized room will undoubtedly fulfill all of your needs.",riverEnhancedPackageOne:"• 10 continuous hours on Saturday (between 8:00am and 12:00 am)",riverEnhancedPackageTwo:"• 6 continuous hours on the prior Thursday OR Friday for setup only (between 9:00am and 6:00pm",riverEnhancedPackageThree:"• Includes Dance Floor",riverFeeIncludesOne:"• Podium with Microphone",riverFeeIncludesTwo:"• Basic Sound System",riverFeeIncludesThree:"• CD/DVD Capabilities",riverFeeIncludesFour:"• LCD Projector & Screen",riverFeeIncludesFive:"• Internet/Wi-Fi",riverFeeIncludesSix:"• Computer",riverCapacityStanding:"• Standing: ",riverCapacitySeated:"• Seated: Up to ",magnoliaText:"Known as the most elegant boardroom in this area, this professional space was designed specifically for executive meetings of up to 20 participants. Located just off the main lobby in the Natural Resources Building, the Magnolia Boardroom provides a stunning environment for your next corporate meeting. Large windows with shades span the length of the room allowing for privacy, while the natural light continues to filter through them. Special features of this room include the latest in technology, an executive conference table with a walnut finish and hidden technology ports and connections, upscale ergonomic chairs, adjustable lighting, credenza with stone countertop and wood finish, resident computer with wireless keyboard and mouse, ceiling mounted projector and drop-down screen, audio conferencing, and wireless internet connectivity. Adjacent to the boardroom is a private room with a wet bar where refreshments may be served.",magnoliaFeeIncludesOne:"• Conference Table with seating for 20",magnoliaFeeIncludesTwo:"• Side seating for 4",magnoliaFeeIncludesThree:"• Computer",magnoliaFeeIncludesFour:"• LCD Projector & Screen",magnoliaFeeIncludesFive:"• Internet/Wi-Fi",magnoliaFeeIncludesSix:"• Adjoining Service Room for Catering",magnoliaFeeIncludesSeven:"• Tabletop Podium",kennedyBText:"Located in the Joseph E. Kennedy Building, the Kennedy Boardroom features a beautiful black granite-top table that accommodates 12. This round boardroom table is ideal for encouraging dialogue and each guest is seated in a high-back leather chair. The boardroom comes with a premium audio/visual package that includes a resident computer with wireless keyboard and mouse, ceiling-mounted LCD projector, drop-down screen, and wireless internet connectivity. The Kennedy Boardroom provides the ultimate setting for your next business meeting.",kennedyBFeeIncludesOne:"• Conference Table with seating for 12",kennedyBFeeIncludesTwo:"• Side seating for 6",kennedyBFeeIncludesThree:"• Computer",kennedyBFeeIncludesFour:"• LCD Projector & Screen",kennedyBFeeIncludesFive:"• Internet/Wi-Fi",kennedyBCapacityStanding:"• Standing: ",kennedyBCapacitySeated:"• Seated: Up to ",ogeecheeText:"The Ogeechee Boardroom, located in the Occupational Studies Building, seats 16 around an executive-style conference table with seating for an additional 10-15 around the perimeter of the room. Elegantly appointed, this boardroom features fine furnishings, wall-to-wall carpeting, a 65 inch projection display, wireless internet connectivity, and conference-calling capability. There is also an adjacent private room where refreshments may be served.",ogeecheeFeeIncludesOne:"• Conference Table with seating for 16",ogeecheeFeeIncludesTwo:"• Side seating for 10-15",ogeecheeFeeIncludesThree:"• Computer",ogeecheeFeeIncludesFour:"• LCD Projector & Screen",ogeecheeFeeIncludesFive:"• Internet/Wi-Fi",ogeecheeFeeIncludesSix:"• Adjoining Service Room for Catering",ogeecheeFeeIncluesSeven:"• Tabletop Podium",kennedyAuditoriumText:"From training sessions to renowned speakers, recitals to commencement ceremonies, this newly renovated auditorium provides a brilliant venue experience. Located off the main lobby of the Joseph E. Kennedy Building, the auditorium is equipped with the latest technology offerings in audio, lighting, and video production, Style and sophistication are the hallmarks of this state-of-the-art venue.",kennedyAFeeIncludesOne:"• Podium with Microphone",kennedyAFeeIncludesTwo:"• Computer",kennedyAFeeIncludesThree:"• LCD Projector & Screen",kennedyAFeeIncludesFour:"• Internet/Wi-Fi",kennedyAFeeIncludesFive:"• Basic Sound System",kennedyAFeeIncludesSix:"• CD/DVD Capabilities",kennedyAFeeIncludesSeven:"• Access to lobby for pre/post functions",kennedyACapacity:"seats",computerText:"Our high-tech computer labs are equipped with Dell Optiplex 3020 systems and can accommodate up to 25 people. Each computer features Windows 7 operating system and Microsoft Office 2016. Each lab features a dedicated teaching computer station with built-in projection capabilities, dry-erase boards, and wireless internet connectivity.",computerFeeIncludesOne:"• Instructor Computer",computerFeeIncludesTwo:"• Internet/Wi-Fi",computerFeeIncludesThree:"• LCD Projector & Screen",computerFeeIncludesFour:"• Dry Erase Board",computerFeeIncludesFive:"• Smart Podium, when available",classroomsText:"We offer a wide-array of classrooms with seating capacity from 15 to 40 participants. All of our classrooms are equipped with state-of-the-art Smart system audio/visual technology. Each room features a dedicated teaching computer station with built-in projection capabilities, dry-erase boards, and wireless internet connectivity.",classroomsFeeIncludesOne:"• Instructor Computer",classroomsFeeIncludesTwo:"• Internet/Wi-Fi",classroomsFeeIncludesThree:"• LCD Projector & Screen",classroomsFeeIncludesFour:"• Dry Erase Board",classroomsFeeIncludesFive:"• Smart Podium, when available",atriumText:"Walking into this two-story space of the Natural Resources Building, guests are greeted with floor-to-ceiling courtyard windows, stone fireplace and columns, and a grand staircase. Both day and night, the Atrium is perfect for standing-style receptions and displays, both day and night. Whether alone or combined with the Oak Room, the Atrium is simply gorgeous!",atriumFeeIncludesOne:"• Small group seating areas",atriumFeeIncludesTwo:"• Fireplace",atriumFeeIncludesThree:"• Adjoining Service Room for Catering",atriumFeeIncludesFour:"• Access to Veranda for pre/post functions"}},fe=o("c47a"),ye=o.n(fe),be={failed:"Accion: Fallida",success:"La acción fue exitosa",mainMenu:{back:"Regreso",navigation:"Navegación",home:"Retorno",business:"Eventos Empresariales",weddings:"Bodas y Eventos Sociales",testimonials:"Testimonios",accessibility:"Accesibilidad",contact:"Contacto",buttonTour:"EMPEZAR EL RECORRIDO",buttonRooms:"VER SALONES",equalOpp:"Ogeechee Technical College es una institución de igualdad de oportunidades",buttonToggle:"Claro/Oscuro",dropDown:"Todas Los Salones",language:"Language",english:"Inglés",spanish:"Español",urdu:"Urdu",pricing:"Precios & Capacidad",map:"Mapa del campus",college:"Universidad",rooms:"Salones",pricingButton:"Precios y Disponibilidad",pdfRentalGuidelines:"Pautas de Alquiler",pdfFeeSchedule:"Programa de Tarifas",pdfCapacityChart:"Gráfico de Capacidad",roomDetails:"Detalles de los salones",buttonVr:"Tour Virtual",theVenues:"Los Venues",oakRoom:"El Oak Room",riverRoom:"El River Room",magnoliaRoom:"El Magnolia Room",kennedyBoardroom:"El Kennedy Boardroom",ogeecheeBoardroom:"El Ogeechee Boardroom",kennedyAuditorium:"El Kennedy Auditorium",computerLabs:"Laboratorios de Computación",classrooms:"Aulas",theAtrium:"El Atrium"},carousel:{autoPlay:"Reproducción Automática",venuesText:"Los Venues en OTC",venuesSub:"¡El lugar perfecto para su próximo evento social o de negocios!",oakText:"El Oak Room",oakSub:"Grandes ventanales iluminan este espacio finamente decorado.",riverText:"El River Room",riverSub:"El River Room es cómodo y funcional para seminarios de capacitación, conferencias y presentaciones.",magnoliaText:"El Magnolia Boardroom",magnoliaSub:"Conocida como la sala de juntas más elegante en esta área.",kennedybText:"El Kennedy Boardroom",kennedybSub:"El Kennedy Boardroom ofrece el mejor escenario para su próxima reunión de negocios.",ogeecheeText:"El Ogeechee Boardroom",ogeecheeSub:"El Ogeechee Boardroom tiene capacidad para 16 personas alrededor de una mesa de conferencias de estilo ejecutivo.",kennedyaText:"El Kennedy Auditorium",kennedyaSub:"Desde sesiones de capacitación hasta oradores de renombre este auditorio recientemente renovado ofrece una experiencia brillante en el lugar.",computerText:"Laboratorios de Computación",computerSub:"Nuestros laboratorios de computadoras pueden acomodar hasta 25 personas.",classroomText:"Aulas",classroomSub:"Ofrecemos una amplia gama de aulas con capacidad para 15 a 40 participantes.",atriumText:"El Atrium",atriumSub:"¡El Atrium es simplemente hermoso!"},home:{title:"Bienvenido al Venues!",pOne:"Cuando se trata de celebraciones de bodas memorables, fiestas festivas emocionantes, grandes reuniones regionales o un retiro ejecutivo, las personas a menudo recurren a Los Venues. Desde laboratorios de computación hasta auditorios, salas de conferencias y salas de juntas, tenemos espacios únicos para todo tipo de eventos.",pTwo:"La joya de la corona de Los Venues es un hermoso salón de baile con ventanas del piso al techo con vista a acres de abedul acuático y altos pinos de Georgia, con columnas de piedra y servicio audiovisual de última generación. Las amenidades que ofrece el salón de baile incluyen un amplio atrio delantero y terraza, una cocina preparatoria de servicio completo, acceso a Wi-Fi, dos proyectores LCD, una computadora, podio, micrófono inalámbrico y sistema de sonido. Los hermosos espacios al aire libre y los espacios interiores cálidos y acogedores se combinan para formar uno de los escenarios más llamativos de esta región.",pThree:"Convenientemente ubicado a solo minutos de la I-16 y el centro de Statesboro, nuestros espacios son el lugar ideal para negocios y reuniones sociales de todo tipo. Elegido como uno de los mejores lugares para celebrar un evento, The Venues es fácilmente accesible, tiene un amplio estacionamiento gratuito y tiene múltiples opciones a precios asequibles.",cardBusiness:"Eventos Empresariales",textBusiness:"Conocida como la sala de juntas más elegante en esta área, este espacio profesional fue diseñado específicamente para reuniones ejecutivas de hasta 20 participantes. Ubicada justo al lado del vestíbulo principal en el Edificio de Recursos Naturales, la sala de juntas Magnolia ofrece un entorno impresionante para su próxima reunión corporativa. Las grandes ventanas con persianas se extienden a lo largo del salón permitiendo privacidad, mientras la luz natural continúa filtrándose através de ellas.",cardWeddings:"Bodas y Eventos Sociales",textWeddings:"Ofrezca a sus invitados el ambiente de un evento al aire libre con todas las comodidades de un salón interior moderno. Las grandes ventanas iluminan el espacio finamente decorado, ofreciendo un panorama de exuberantes bosques y vegetación que crea un entorno realmente impresionante. Desde bodas y eventos sociales hasta ferias y conferencias, El Oak Room transformará su reunión y creará recuerdos inolvidables."},testimonials:{thanks:"Gracias,",testOne:"Apreciamos el trabajo que usted y su personal hicieron coordinando nuestro taller hoy. El Salón era estupendo y justo lo que pedimos. Recibimos varios comentarios sobre lo agradable que era el lugar y el personal. Nuestros funcionarios dijeron que era una de las mejores instalaciones que habían usado para sus talleres. Esperamos volver a trabajar con Ogeechee Tech en el futuro.",testTwo:"Me gustaría aprovechar la oportunidad para agradecer a los Venues en Ogeechee Technical College por permitirnos celebrar nuestra boda allí el 6 de julio de 2019. Nuestra boda fue un cuento de hadas hecho realidad y no podríamos haber encontrado un lugar mejor. Disfrutamos todo sobre el lugar y recibimos muchos cumplidos. Estoy muy agradecido de haber elegido The Venues at Ogeechee Tech. Gracias de nuevo a todo el equipo de Ogeechee Technical College. Esperamos trabajar con usted en el futuro.",testThree:'Recomendamos encarecidamente la instalación "Oak Room" y el personal a cualquiera que busque un lugar excepcional para un evento. Tuvimos una cena de ensayo para cerca de 100 personas y todo lo discutido y planeado para nosotros fue perfecto. La instalación es hermosa, limpia y el personal estuvo presente antes, durante y después de nuestro evento. Gracias a Ogeechee Tech por compartir una instalación tan hermosa y el maravilloso personal, para ayudarnos a disfrutar de un momento tan memorable para nuestro hijo y nuestra nueva nuera.',testFour:"Recomendamos encarecidamente Ogeechee Tech para todas sus necesidades de eventos de negocios. El personal siempre es muy servicial y atento. The Board Room es ideal para reuniones de negocios y The Oak Room es absolutamente increíble. ¡Hemos organizado muchos eventos a lo largo de los años con Ogeechee Tech y nunca nos ha decepcionado! ¡Recomendaríamos este lugar a cualquiera!",testFive:"Tuve la fiesta de graduación de mi hija en el atrio y fue increíble. ¡Me encantó todo y el personal me ayudó de muchas maneras! Ya he reservado el Atrium para la fiesta de graduación de mi próxima hija y recomendaría The Venues at Ogeechee Tech a todos."},cards:(ue={labelFeeSchedule:"Fee Schedule",weekDaySchedule:"Lu - Ju • 8:00 AM - 9:00 PM",weekEndSchedule:"Vi - Sa • 8:00 AM - 9:00 PM",halfDayRental:"Alquiler de medio día",fullDayRental:"Alquiler de día completo",fourHours:"hasta 4 horas",eightHours:"hasta 8 horas",additionalHour:"Hora adicional"},ye()(ue,"labelFeeSchedule","Programa de tarifas"),ye()(ue,"labelFeeIncludes","Tarifa incluye"),ye()(ue,"labelEnhancedPackage","Paquete mejorado"),ye()(ue,"labelCapacity","Capacidad"),ye()(ue,"labelOverview","Visión general"),ye()(ue,"oakText","Ofrezca a sus invitados el ambiente de un evento al aire libre con todas las comodidades de un moderno salón interior. Las grandes ventanas iluminan el espacio finamente decorado, ofreciendo un panorama de exuberantes bosques y vegetación que crea un entorno realmente impresionante. Desde bodas y eventos sociales hasta ferias y conferencias, The Oak Room transformará su reunión y creará recuerdos inolvidables."),ye()(ue,"oakEnhancedPackageOne","• 10 horas contiguas los sábados (entre las 8:00 a.m. y las 12:00 a.m.)"),ye()(ue,"oakEnhancedPackageTwo","• 6 horas contiguas el jueves o viernes anterior solo para configuración (entre las 9:00 a.m. y las 6:00 p.m."),ye()(ue,"oakEnhancedPackageThree","• Incluye pista de baile"),ye()(ue,"oakFeeIncludesOne","• Internet/Wi-Fi"),ye()(ue,"oakFeeIncludesTwo","• Sistema de sonido básico"),ye()(ue,"oakFeeIncludesThree","• CD/DVD Capacidades"),ye()(ue,"oakFeeIncludesFour","• Podio con Micrófono"),ye()(ue,"oakFeeIncludesFive","• Proyector LCD y Pantalla"),ye()(ue,"oakFeeIncludesSix","• Acceso a la cocina para la entrega y puesta en escena de catering"),ye()(ue,"oakFeeIncludesSeven","• Acceso a atrio y veranda para funciones pre / post"),ye()(ue,"oakFeeIncludesEight","• Podio con Micrófono"),ye()(ue,"oakFeeIncludesNine","• Micrófono Inalámbrico"),ye()(ue,"oakCapacityStanding","• De pie: "),ye()(ue,"oakCapacitySeated","• Sentados: hasta "),ye()(ue,"riverText","El River Room es cómodo y funcional para seminarios de capacitación, conferencias y presentaciones de negocios que permiten numerosas configuraciones de sala. La sala viene con un paquete audio / visual premium que incluye una computadora residente con teclado y mouse inalámbricos, proyector LCD montado en el techo, pantalla desplegable y conectividad inalámbrica a Internet. La sala River se puede dividir en tres secciones, cada una con 25 invitados. Cada sección tiene su propia entrada y conexiones audiovisuales. Esta cálida y amplio salón sin duda satisfará todas sus necesidades."),ye()(ue,"riverFeeIncludesOne","• Podio con Micrófono"),ye()(ue,"riverFeeIncludesTwo","• Sistema de sonido básico"),ye()(ue,"riverFeeIncludesThree","• CD/DVD Capacidades"),ye()(ue,"riverFeeIncludesFour","• Proyector LCD y Pantalla"),ye()(ue,"riverFeeIncludesFive","• Internet/Wi-Fi"),ye()(ue,"riverFeeIncludesSix","• Computadora"),ye()(ue,"riverCapacityStanding","• De pie: "),ye()(ue,"riverCapacitySeated","• Sentados: hasta "),ye()(ue,"magnoliaText","Conocida como la sala de juntas más elegante en esta área, este espacio profesional fue diseñado específicamente para reuniones ejecutivas de hasta 20 participantes. Ubicada justo al lado del vestíbulo principal en el Edificio de Recursos Naturales, la sala de juntas Magnolia ofrece un entorno impresionante para su próxima reunión corporativa. Las grandes ventanas con persianas se extienden a lo largo de la habitación permitiendo privacidad, mientras la luz natural continúa filtrándose a través de ellas. Las características especiales de esta sala incluyen lo último en tecnología, una mesa de conferencias ejecutiva con acabado de nogal y puertos y conexiones de tecnología oculta, sillas ergonómicas de lujo, iluminación ajustable, credenza con encimera de piedra y acabado de madera, computadora residente con teclado y mouse inalámbricos, techo proyector montado y pantalla desplegable, audioconferencia y conectividad inalámbrica a internet. Adyacente a la sala de juntas hay una sala privada con un bar donde se pueden servir refrescos."),ye()(ue,"magnoliaFeeIncludesOne","• Mesa de conferencia con asientos para 20"),ye()(ue,"magnoliaFeeIncludesTwo","• Asientos laterales para 4"),ye()(ue,"magnoliaFeeIncludesThree","• Computadora"),ye()(ue,"magnoliaFeeIncludesFour","• Proyector LCD y Pantalla"),ye()(ue,"magnoliaFeeIncludesFive","• Internet/Wi-Fi"),ye()(ue,"magnoliaFeeIncludesSix","• Servicio contiguo Habitación para Catering"),ye()(ue,"magnoliaFeeIncludesSeven","• Podio de mesa"),ye()(ue,"magnoliaCapacityStanding","• Standing: "),ye()(ue,"magnoliaCapacitySeated","• Seated: Up to "),ye()(ue,"kennedyBText","Ubicada en el edificio Joseph E. Kennedy, la sala de juntas Kennedy cuenta con una hermosa mesa de granito negro con capacidad para 12. Esta mesa redonda para sala de juntas es ideal para alentar el diálogo y cada huésped está sentado en una silla de cuero con respaldo alto. La sala de juntas viene con un paquete audio / visual premium que incluye una computadora residente con teclado y mouse inalámbricos, proyector LCD montado en el techo, pantalla desplegable y conectividad inalámbrica a internet. El Kennedy Boardroom ofrece el mejor escenario para su próxima reunión de negocios."),ye()(ue,"kennedyBFeeIncludesOne","• Mesa de conferencia con asientos para 12"),ye()(ue,"kennedyBFeeIncludesTwo","• Asientos laterales para 6"),ye()(ue,"kennedyBFeeIncludesThree","• Computadora"),ye()(ue,"kennedyBFeeIncludesFour","• Proyector LCD y Pantalla"),ye()(ue,"kennedyBFeeIncludesFive","• Internet/Wi-Fi"),ye()(ue,"ogeecheeText","La sala de juntas Ogeechee, ubicada en el Edificio de Estudios Ocupacionales, tiene capacidad para 16 personas alrededor de una mesa de conferencias de estilo ejecutivo con capacidad para 10-15 personas adicionales alrededor del perímetro de la sala. Elegantemente decorada, esta sala de juntas cuenta con muebles finos, alfombras de pared a pared, una pantalla de proyección de 65 pulgadas, conectividad inalámbrica a Internet y capacidad de llamadas en conferencia. También hay una sala privada adyacente donde se pueden servir refrescos."),ye()(ue,"ogeecheeFeeIncludesOne","• Mesa de conferencia con asientos para 16"),ye()(ue,"ogeecheeFeeIncludesTwo","• Asientos laterales para 10-15"),ye()(ue,"ogeecheeFeeIncludesThree","• Computadora"),ye()(ue,"ogeecheeFeeIncludesFour","• Proyector LCD y Pantalla"),ye()(ue,"ogeecheeFeeIncludesFive","• Internet/Wi-Fi"),ye()(ue,"ogeecheeFeeIncludesSix","• Servicio contiguo Habitación para Catering"),ye()(ue,"ogeecheeFeeIncluesSeven","• Podio de mesa"),ye()(ue,"kennedyAuditoriumText","Desde sesiones de capacitación hasta oradores de renombre, recitales hasta ceremonias de graduación, este auditorio recientemente renovado ofrece una experiencia brillante en el lugar. Ubicado junto al vestíbulo principal del edificio Joseph E. Kennedy, el auditorio está equipado con las últimas ofertas tecnológicas en producción de audio, iluminación y video. El estilo y la sofisticación son los sellos distintivos de este lugar de vanguardia."),ye()(ue,"kennedyAFeeIncludesOne","• Podium with Microphone"),ye()(ue,"kennedyAFeeIncludesTwo","• Computadora"),ye()(ue,"kennedyAFeeIncludesThree","• Proyector LCD y Pantalla"),ye()(ue,"kennedyAFeeIncludesFour","• Internet/Wi-Fi"),ye()(ue,"kennedyAFeeIncludesFive","• Sistema de sonido básico"),ye()(ue,"kennedyAFeeIncludesSix","• CD/DVD Capacidades"),ye()(ue,"kennedyAFeeIncludesSeven","Acceso al lobby para funciones pre / post"),ye()(ue,"kennedyACapacity","seats"),ye()(ue,"computerText","Nuestros laboratorios de computadoras de alta tecnología están equipados con los sistemas Dell Optiplex 3020 y pueden acomodar hasta 25 personas. Cada computadora cuenta con el sistema operativo Windows 7 y Microsoft Office 2016. Cada laboratorio cuenta con una estación de computadora de enseñanza dedicada con capacidades de proyección incorporadas, pizarras de borrado en seco y conectividad inalámbrica a Internet."),ye()(ue,"computerFeeIncludesOne","• Instructor Computer"),ye()(ue,"computerFeeIncludesTwo","• Internet/Wi-Fi"),ye()(ue,"computerFeeIncludesThree","• Proyector LCD y Pantalla"),ye()(ue,"computerFeeIncludesFour","• Pizarra"),ye()(ue,"computerFeeIncludesFive","• Smart Podium, cuando esté disponible"),ye()(ue,"classroomsText","Ofrecemos una amplia gama de aulas con capacidad para 15 a 40 participantes. Todas nuestras aulas están equipadas con tecnología de audio / visual de sistema inteligente de última generación. Cada sala cuenta con una estación de computadora de enseñanza dedicada con capacidades de proyección incorporadas, pizarras de borrado en seco y conectividad inalámbrica a Internet."),ye()(ue,"classroomsFeeIncludesOne","• Instructor Computer"),ye()(ue,"classroomsFeeIncludesTwo","• Internet/Wi-Fi"),ye()(ue,"classroomsFeeIncludesThree","• Proyector LCD y Pantalla"),ye()(ue,"classroomsFeeIncludesFour","• Pizarra"),ye()(ue,"classroomsFeeIncludesFive","• Smart Podium, cuando esté disponible"),ye()(ue,"atriumText","Al entrar en este espacio de dos pisos del Edificio de Recursos Naturales, los huéspedes son recibidos con ventanas de patio a piso, chimenea de piedra y columnas, y una gran escalera. Tanto de día como de noche, el Atrium es perfecto para recepciones y exhibiciones de estilo, tanto de día como de noche. Ya sea solo o combinado con Oak Room, ¡El Atrium es simplemente hermoso!"),ye()(ue,"atriumFeeIncludesOne","• Zonas de descanso para grupos pequeños"),ye()(ue,"atriumFeeIncludesTwo","• Hogar"),ye()(ue,"atriumFeeIncludesThree","• Servicio contiguo Habitación para Catering"),ye()(ue,"atriumFeeIncludesFour","• Acceso a Veranda para funciones pre / post"),ue)},ve={failed:"کارروائی ناکام ہوگئی",success:"عمل کامیاب رہا",mainMenu:{navigation:"سمت شناسی",home:"گھر",business:"کاروباری واقعات",weddings:"شادیوں اور معاشروں",testimonials:"تعریف",accessibility:"رسائ",contact:"رابطہ کریں",buttonTour:"ٹور شروع کریں",buttonRooms:"تمام کمرے دیکھیں",equalOpp:"اوجیچھی ٹیکنیکل کالج ایک مساوی مواقع کا ادارہ ہے",buttonToggle:"روشنی / سیاہ",dropDown:"تمام کمرے",english:"انگریزی",spanish:"ہسپانوی",urdu:"اردو",pricing:"قیمتوں کا تعین اور اہلیت",map:"کیمپس کا نقشہ",college:"کالج"},carousel:{oakText:"اوک کمرہ",oakSub:"ایٹریئم صرف خوبصورت ہے!",atriumText:"ایٹریئم",atriumSub:"ایٹریئم صرف خوبصورت ہے!",venuesText:"او ٹی سی میں مقامات",venuesSub:"آپ کے اگلے کاروبار یا معاشرتی پروگرام کے لئے بہترین جگہ!"},home:{title:"مقامات میں خوش آمدید!",pOne:"جب بات یادگار شادی کی تقریبات ، دلچسپ تعطیلات والی پارٹیوں ، بڑی علاقائی میٹنگوں یا کسی غیر اعتکاف اعتکاف کی ہوتی ہے تو لوگ اکثر مقامات کا رخ کرتے ہیں۔ کمپیوٹر لیب سے لے کر آڈیٹوریم تک ، کانفرنس روم سے لے کر بورڈ روم تک ، ہمارے پاس ہر طرح کے واقعات کے لئے الگ جگہ ہے۔",pTwo:"وینیوز کا تاج زیور ایک خوبصورت بال روم ہے جس میں فرش تا چھت والی ونڈوز نظر آرہی ہیں جس میں پانی کی برچ اور لمبے قد جارجیا کے پائن نظر آرہے ہیں ، جس میں پتھر کے کالم اور اسٹیٹ آف دی آرٹ آڈیو ویوزئل سروس موجود ہے۔ بال روم کے پیش کردہ عناصر میں ایک وسیع فرنٹ ایٹریئم اور برآمدہ ، ایک مکمل سروس پری کچن ، وائی فائی رسائی ، دو ایل سی ڈی پروجیکٹر ، ایک کمپیوٹر ، پوڈیم ، وائرلیس مائکروفون اور ساؤنڈ سسٹم شامل ہیں۔ خوبصورت بیرونی خالی جگہیں ، اور گرم اور مدعو داخلہ خالی جگہوں کو ، اس خطے کی سب سے حیرت انگیز ترتیبات میں سے ایک کے لئے جمع کرتے ہیں۔",pThree:"آسانی سے I-16 اور شہر کے بیچ سٹیٹسورو سے محض چند منٹ کے فاصلے پر واقع ہے ، ہماری جگہیں ہر قسم کی کاروباری اور معاشرتی اجتماعات کے لئے ایک بہترین مقام ہے۔ کسی واقعہ کے ل بہترین مقامات میں سے ایک کو ووٹ دیا ، مقامات آسانی سے قابل رسائی ہیں ، کافی پارکنگ ہے ، اور سستی قیمتوں پر متعدد اختیارات ہیں۔"}},we={"en-us":ge,es:be,ur:ve};t["a"].use(he["a"]);var Te=new he["a"]({locale:"en-us",fallbackLocale:"en-us",messages:we}),Fe=function(e){var a=e.app;a.i18n=Te},ke=o("2e98"),Ie=o("c4cf"),Se=o("ba0a"),Ce=pe(),xe=Ce.app,Oe=Ce.store,Ae=Ce.router;function Re(){var e,a,o,n,r,s;return i.a.async((function(c){while(1)switch(c.prev=c.next){case 0:e=!0,a=function(a){e=!1,window.location.href=a},o=window.location.href.replace(window.location.origin,""),n=[Fe,ke["a"],Ie["a"],Se["a"]],r=0;case 5:if(!(!0===e&&r<n.length)){c.next=23;break}if("function"===typeof n[r]){c.next=8;break}return c.abrupt("continue",20);case 8:return c.prev=8,c.next=11,i.a.awrap(n[r]({app:xe,router:Ae,store:Oe,Vue:t["a"],ssrContext:null,redirect:a,urlPath:o}));case 11:c.next=20;break;case 13:if(c.prev=13,c.t0=c["catch"](8),!c.t0||!c.t0.url){c.next=18;break}return window.location.href=c.t0.url,c.abrupt("return");case 18:return console.error("[Quasar] boot error:",c.t0),c.abrupt("return");case 20:r++,c.next=5;break;case 23:if(!1!==e){c.next=25;break}return c.abrupt("return");case 25:window.__INITIAL_STATE__&&Oe.replaceState(window.__INITIAL_STATE__),s=new t["a"](xe),Ae.onReady((function(){s.$mount("#q-app")}));case 28:case"end":return c.stop()}}),null,null,[[8,13]])}Re()},"31cd":function(e,a,o){}},[[0,"runtime","vendor"]]]);