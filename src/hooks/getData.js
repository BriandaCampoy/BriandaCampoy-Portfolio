export default async function getData(URL){
  // Aqui pondria el fetch a la api, si tuviera una
  // const results = await fetch(URL)
  // console.log(data);
  // const data = await results.json();
  switch(URL){
    case "projects":
    return projects;
    case "schools":
      return schools;
    case "technologies":
      return technologies;
    default:
    return "";
  }
}
const technologies= {
  "technologies":[
    {
      "id":0,
      "name":"Java",
      "img":"https://res.cloudinary.com/dtn1pnbmu/image/upload/c_scale,w_100/v1657843906/portfolio/assets/img_technologies/java_lwkifz.png"
    },
    {
      "id":1,
      "name":"Javascript",
      "img":"https://res.cloudinary.com/dtn1pnbmu/image/upload/c_scale,w_100/v1657843906/portfolio/assets/img_technologies/javascript_dsdpa8.png"
    },
    {
      "id":2,
      "name":"React",
      "img":"https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681249149/portfolio/assets/img_technologies/react_original_wordmark_logo_icon_146375_1_a4x9mx.png"
    },
    {
      "id":3,
      "name":"HTML",
      "img":"https://res.cloudinary.com/dtn1pnbmu/image/upload/v1657843906/portfolio/assets/img_technologies/html-5_xp5pvk.png"
    },
    {
      "id":4,
      "name":"Figma",
      "img":"https://res.cloudinary.com/dtn1pnbmu/image/upload/v1660251403/portfolio/assets/img_technologies/figma_1_gcah4b.png"
    },
    {
      "id":5,
      "name":"SQLServer",
      "img":"https://res.cloudinary.com/dtn1pnbmu/image/upload/v1657843906/portfolio/assets/img_technologies/sql-server_rpx8an.png"
    },
    {
      "id":6,
      "name":"NodeJS",
      "img":"https://res.cloudinary.com/dtn1pnbmu/image/upload/v1657843905/portfolio/assets/img_technologies/node-js_xg9qsv.png"
    },
    {
      "id":7,
      "name":"CSS",
      "img":"https://res.cloudinary.com/dtn1pnbmu/image/upload/v1657843906/portfolio/assets/img_technologies/css-3_utjpo9.png"
    },
    {
      "id":8,
      "name":"C#",
      "img":"https://res.cloudinary.com/dtn1pnbmu/image/upload/v1657843906/portfolio/assets/img_technologies/c-sharp_tdwhtv.png"
    },
    {
      "id":9,
      "name":"MySQL",
      "img":"https://res.cloudinary.com/dtn1pnbmu/image/upload/v1657843905/portfolio/assets/img_technologies/mysql_fyhd94.png"
    },
    {
      "id":10,
      "name":"Github",
      "img":"https://res.cloudinary.com/dtn1pnbmu/image/upload/v1657843906/portfolio/assets/img_technologies/GitHub-Mark_iufykf.png"
    },
    {
      "id":11,
      "name":"MongoDB",
      "img":"https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681249149/portfolio/assets/img_technologies/mongodb_original_wordmark_logo_icon_146425_mcmseg.png"
    },
    {
      "id":12,
      "name":"Electron",
      "img":"https://res.cloudinary.com/dtn1pnbmu/image/upload/v1660247174/portfolio/assets/img_technologies/electron_ffy3ox.png"
    },
    {
      "id":13,
      "name":"WordPress",
      "img":"https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681706054/portfolio/assets/img_technologies/wordpressIcon_dbhygm.png"
    },
    {
      "id":14,
      "name":"PHP",
      "img":"https://res.cloudinary.com/dtn1pnbmu/image/upload/v1657843905/portfolio/assets/img_technologies/php_hvr1tr.png"
    },
    {
      "id":15,
      "name":"EJS",
      "img":"https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696847/portfolio/assets/img_projects/Ejs/EjsIcon_y46fw4.png"
    }
  ]
}
const schools ={
  "schools": [
    {
      "id": 0,
      "institution": "Instituto tecnolgico de Sonora",
      "icon": "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1657844042/portfolio/assets/img_school/itson_pu3675.png",
      "aboutTheInstitution":"## Mission\n\n The Technological Institute of Sonora is a public, autonomous, and socially committed university that aims to train professionals with ethics, integrity, international competence, entrepreneurial skills, and empathy towards social reality, using innovative and inclusive educational models. The Institute transfers the benefits of science, technology, health, environmental care, culture, and sports to society; evolves and innovates in generating solutions to environmental problems, economic development, and well-being, with an efficient and transparent management model based on harmony, justice, and balance that contributes to improving the quality of life of its members and impacts the sustainable and intercultural development of the country.\n\n  ## Vision \n\n To be a university that contributes to improving human quality and national and global development, recognized internationally for the relevant contributions to science, technology, sports, art, and culture made by students, academic and administrative staff, alumni, and other external interest groups, by linking up to build opportunities in dynamic and complex contexts.",
      "webSite": "https://www.itson.mx/Paginas/index.aspx",
      "instagram": "https://www.instagram.com/itsonoficial/",
      "twitter": "https://twitter.com/itson",
      "facebook": "https://www.facebook.com/itson.mx/",
      "youtube": "https://www.youtube.com/user/ITSONOFICIAL",
      "address":"Instituto Tecnológico de Sonora 5 de Febrero 818 Sur, Col. Centro, Ciudad Obregón, Sonora, México."
    },
    {
      "id":1,
      "institution":"Colegio de bachilleres del estado de Sonora",
      "icon":"https://res.cloudinary.com/dtn1pnbmu/image/upload/v1657844042/portfolio/assets/img_school/cobach_olbh6e.png",
      "aboutTheInstitution":"",
      "webSite": "",
      "instagram": "",
      "twitter": "",
      "facebook": "",
      "youtube": "",
      "adress":""
    },
    {
      "id":2,
      "institution":"Platzi",
      "icon":"https://res.cloudinary.com/dtn1pnbmu/image/upload/v1657844042/portfolio/assets/img_school/platzi_tpbd5g.png",
      "aboutTheInstitution":"Platzi is effective online education. Technology content, up-to-date and of high quality, accessible to all.",
      "webSite": "https://platzi.com/home",
      "instagram": "https://www.instagram.com/platzi/",
      "twitter": "https://twitter.com/platzi",
      "facebook": "https://www.facebook.com/platzi",
      "youtube": "https://www.youtube.com/channel/UC55-mxUj5Nj3niXFReG44OQ",
      "adress":""
    }
  ],
  "courses": [
    {
    "id":0,
    "institution":0,
    "name":"Ingenieria en Software",
    "icon":"https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681507848/portfolio/assets/img_school/iswIcon_kuivo3.jpg",
    "aboutTheCourse": "## Program Objective\nTo train integral professionals who are committed to their work, innovative, entrepreneurial, and capable of efficiently developing competitive software in the international market, contributing to the growth and progress of society through a competency-based educational model.\n\n## Specific Competencies\n* Design software by applying appropriate methodologies, tools, and standards to the problem.\n* Build software from design specifications, using best practices to ensure product quality.\n* Manage software development projects by applying processes, models, and standards that contribute to the total quality of the product.\n\n## Generic Competencies\n* Face everyday and contingent situations based on the recognition and application of their abilities in an objective understanding of the environment to influence their personal well-being and that of their community effectively and ethically.\n* Join the development process of their community through concrete actions aimed at social transformation based on the practice of solidary attitudes and a critical and pluralistic vision of the context in which they are immersed.\n* Develop economic, social, and/or cultural initiatives by designing and implementing innovative actions and projects aimed at creating opportunities and solving problems within a company or the community.\n* Apply pertinent and current knowledge, methods, techniques, and technological resources to achieve an adequate performance in complex socio-professional contexts and promote their mobility and professional adaptation.\n\n## Professional Performance Areas\n* Design of software solutions.\n* Analysis of software requirements.\n* Construction of software applications.\n* Software testing.\n* Administration of software development projects.",
    "certifications": [
      "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1660956382/portfolio/assets/img_school/ITSON/ReconocimientoProyecto_yblkiq.png",
      "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1660956382/portfolio/assets/img_school/ITSON/ConstanciaEmprendePitch_zp29oc.png",
      "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1660956382/portfolio/assets/img_school/ITSON/constanciaProyecto_rscyqc.png",
      "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681599765/portfolio/assets/img_school/ITSON/Constancia_Brianda_Raquel_Campoy_Esquer_page-0001_do5ipq.jpg"]
  },
  {
    "id":1,
    "institution":1,
    "name":"Educacion media superior",
    "icon":"https://res.cloudinary.com/dtn1pnbmu/image/upload/v1657844042/portfolio/assets/img_school/cobach_olbh6e.png",
    "aboutTheCourse": "Educacion media superior",
    "certifications": ["", "", ""]
  },
  {
    "id":2,
    "institution":2,
    "name":"Fundamentos de Ingenieria de Software",
    "icon":"https://static.platzi.com/media/achievements/badge-ing-software-2017-18f503fd-36bd-42d8-b1a1-492865659687.png",
    "aboutTheCourse": "",
    "certifications": ["https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681599529/portfolio/assets/img_school/Platzi/diploma-ingenieria_page-0001_gjm5rz.jpg"]
  },
  {
    "id":3,
    "institution":2,
    "name":"Fundamentos de Arquitectura de Software",
    "icon":"https://static.platzi.com/media/achievements/1247-4f5b5d04-4b56-4e64-bec2-db8fe3c0aa18.png",
    "aboutTheCourse": "",
    "certifications": ["https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681713222/portfolio/assets/img_school/Platzi/diploma-arquitectura-software_page-0001_ytiqfl.jpg"]
  },
  {
    "id":"group-1",
    "group":"Frontend a profundidad con React.js",
    "icon":"https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681249149/portfolio/assets/img_technologies/react_original_wordmark_logo_icon_146375_1_a4x9mx.png",
    "courses":[
      {
        "id":4,
        "institution":2,
        "name":"Curso Practico de React.js",
        "icon":"https://static.platzi.com/media/achievements/piezas-reactjs-badge-1-52e950ac-c75c-40f5-94e0-8b6cab392ed2.png",
        "aboutTheCourse": "",
        "certifications": ["https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681599532/portfolio/assets/img_school/Platzi/diploma-react-practico_page-0001_b53dvu.jpg"]
      },
      {
        "id":5,
        "institution":2,
        "name":"Curso de Frontend Developer",
        "icon":"https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/badge-curso-frontend-developer-825407d1-49b1-4c9b-90c4-eee793720ede.png",
        "aboutTheCourse": "",
        "certifications": ["https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681599528/portfolio/assets/img_school/Platzi/diploma-frontend-developer-practico_page-0001_ab5i9f.jpg"]
      },
      {
        "id":6,
        "institution":2,
        "name":"Curso de Introduccion a React.js",
        "icon":"https://static.platzi.com/media/achievements/badge-react-2018-0a41bdc5-e874-45c9-ac67-98294c898da4.png",
        "aboutTheCourse": "",
        "certifications": ["https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681601013/portfolio/assets/img_school/Platzi/diploma-react_page-0001_xnkufe.jpg"]
      },
      {
        "id":7,
        "institution":2,
        "name":"Curso de React.js: Manejo Profesional del Estado",
        "icon":"https://static.platzi.com/media/achievements/react-a4cc5125-0dee-4ec4-a3e3-f1d799973cfd.png",
        "aboutTheCourse": "",
        "certifications": ["https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681599531/portfolio/assets/img_school/Platzi/diploma-react-estado_page-0001_kdetdp.jpg"]
      },
      {
        "id":8,
        "institution":2,
        "name":"Curso de React.js: Navegación con React Router",
        "icon":"https://static.platzi.com/media/achievements/badge-reactrouter-4271fbdd-0c60-43bd-8208-9e2232da90e6.png",
        "aboutTheCourse": "",
        "certifications": ["https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681599532/portfolio/assets/img_school/Platzi/diploma-react-router_page-0001_on6vri.jpg"]
      },
      {
        "id":9,
        "institution":2,
        "name":"Curso de React.js: Patrones de Render y Composición",
        "icon":"https://static.platzi.com/media/achievements/reactjs-patrones-render_badge-3c77e155-b04a-4c95-ac61-e2b6d2d5b92e.png",
        "aboutTheCourse": "",
        "certifications": ["https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681599533/portfolio/assets/img_school/Platzi/diploma-react-patrones-render_page-0001_kjlcpb.jpg"]
      },
      {
        "id":10,
        "institution":2,
        "name":"Curso Práctico de Frontend Developer",
        "icon":"https://static.platzi.com/media/achievements/badge-curso-practico-frontend-developer-d28c2eb0-cd3e-4951-bb96-5f1bcab2add5.png",
        "aboutTheCourse": "",
        "certifications": ["https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681599528/portfolio/assets/img_school/Platzi/diploma-frontend-developer-practico_page-0001_ab5i9f.jpg"]
      },
      {
        "id":11,
        "institution":2,
        "name":"",
        "icon":"",
        "aboutTheCourse": "",
        "certifications": [""]
      },
      {
        "id":12,
        "institution":2,
        "name":"",
        "icon":"",
        "aboutTheCourse": "",
        "certifications": [""]
      },
      {
        "id":13,
        "institution":2,
        "name":"",
        "icon":"",
        "aboutTheCourse": "",
        "certifications": [""]
      },
      {
        "id":14,
        "institution":2,
        "name":"",
        "icon":"",
        "aboutTheCourse": "",
        "certifications": [""]
      },
      {
        "id":15,
        "institution":2,
        "name":"",
        "icon":"",
        "aboutTheCourse": "",
        "certifications": [""]
      },
      {
        "id":16,
        "institution":2,
        "name":"",
        "icon":"",
        "aboutTheCourse": "",
        "certifications": [""]
      },
      {
        "id":17,
        "institution":2,
        "name":"",
        "icon":"",
        "aboutTheCourse": "",
        "certifications": [""]
      },
      {
        "id":18,
        "institution":2,
        "name":"",
        "icon":"",
        "aboutTheCourse": "",
        "certifications": [""]
      },
      {
        "id":19,
        "institution":2,
        "name":"",
        "icon":"",
        "aboutTheCourse": "",
        "certifications": [""]
      },
      {
        "id":20,
        "institution":2,
        "name":"",
        "icon":"",
        "aboutTheCourse": "",
        "certifications": [""]
      },
      {
        "id":21,
        "institution":2,
        "name":"",
        "icon":"",
        "aboutTheCourse": "",
        "certifications": [""]
      },
      {
        "id":22,
        "institution":2,
        "name":"",
        "icon":"",
        "aboutTheCourse": "",
        "certifications": [""]
      },
      {
        "id":23,
        "institution":2,
        "name":"",
        "icon":"",
        "aboutTheCourse": "",
        "certifications": [""]
      },
      {
        "id":24,
        "institution":2,
        "name":"",
        "icon":"",
        "aboutTheCourse": "",
        "certifications": [""]
      },
      {
        "id":25,
        "institution":2,
        "name":"",
        "icon":"",
        "aboutTheCourse": "",
        "certifications": [""]
      },
      {
        "id":26,
        "institution":2,
        "name":"",
        "icon":"",
        "aboutTheCourse": "",
        "certifications": [""]
      },
      {
        "id":27,
        "institution":2,
        "name":"",
        "icon":"",
        "aboutTheCourse": "",
        "certifications": [""]
      },
      {
        "id":28,
        "institution":2,
        "name":"",
        "icon":"",
        "aboutTheCourse": "",
        "certifications": [""]
      },
      {
        "id":29,
        "institution":2,
        "name":"",
        "icon":"",
        "aboutTheCourse": "",
        "certifications": [""]
      },
      {
        "id":30,
        "institution":2,
        "name":"",
        "icon":"",
        "aboutTheCourse": "",
        "certifications": [""]
      },
      {
        "id":31,
        "institution":2,
        "name":"",
        "icon":"",
        "aboutTheCourse": "",
        "certifications": [""]
      },
      {
        "id":32,
        "institution":2,
        "name":"",
        "icon":"",
        "aboutTheCourse": "",
        "certifications": [""]
      },
      {
        "id":33,
        "institution":2,
        "name":"",
        "icon":"",
        "aboutTheCourse": "",
        "certifications": [""]
      }
    ]
  },
  {
    "id":34,
    "institution":2,
    "name":"Curso de Figma",
    "icon":"https://static.platzi.com/media/achievements/badge-figma-ec1b779d-23d3-46c5-9d8b-5a9bd875c444.png",
    "aboutTheCourse": "",
    "certifications": ["https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681599528/portfolio/assets/img_school/Platzi/diploma-figma_page-0001_qqxqo0.jpg"]
  },
  {
    "id":35,
    "institution":2,
    "name":"Curso de Introducción a Java SE",
    "icon":"https://static.platzi.com/media/achievements/badge-cursobasicojavase-2c55da9d-3573-4bef-b071-60a4b13f60ae.png",
    "aboutTheCourse": "",
    "certifications": ["https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681599530/portfolio/assets/img_school/Platzi/diploma-java-basico_page-0001_woa89n.jpg"]
  },
  {
    "id":36,
    "institution":2,
    "name":"Curso de Introducción a la Terminal y Línea de Comandos",
    "icon":"https://static.platzi.com/media/achievements/badge-terminal-5c5518b5-43d0-4387-b39e-3d85db446c5f.png",
    "aboutTheCourse": "",
    "certifications": ["https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681599532/portfolio/assets/img_school/Platzi/diploma-terminal_page-0001_orvbei.jpg"]
  },
  {
    "id":37,
    "institution":2,
    "name":"Curso Profesional de Git y GitHub",
    "icon":"https://static.platzi.com/media/achievements/badge-github-0b729570-934d-47d8-ba6b-610d7f15e0ec.png",
    "aboutTheCourse": "",
    "certifications": ["https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681599529/portfolio/assets/img_school/Platzi/diploma-git-github_page-0001_syf4em.jpg"]
  },
  {
    "id":38,
    "institution":2,
    "name":"Curso Práctico de Maquetación en CSS",
    "icon":"https://static.platzi.com/media/achievements/badge-css-grid-91153317-c981-4a38-a534-b651b4395267.png",
    "aboutTheCourse": "",
    "certifications": ["https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681599531/portfolio/assets/img_school/Platzi/diploma-practico-css_page-0001_hq7u6a.jpg"]
  },
  {
    "id":39,
    "institution":2,
    "name":"Curso Práctico de JavaScript",
    "icon":"https://static.platzi.com/media/achievements/badge3-practico-javascript-d081180f-b158-446b-a34e-e658111a3680.png",
    "aboutTheCourse": "",
    "certifications": ["https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681599530/portfolio/assets/img_school/Platzi/diploma-javascript-practico_page-0001_rltwse.jpg"]
  },
  {
    "id":40,
    "institution":2,
    "name":"Curso Práctico de JavaScript",
    "icon":"https://static.platzi.com/media/achievements/practico-javascript_badge-fb533fa5-73c8-4f75-9d81-0294d9013ab5.png",
    "aboutTheCourse": "",
    "certifications": ["https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681599530/portfolio/assets/img_school/Platzi/diploma-javascript-practico_actualizado__page-0001_y14qpc.jpg"]
  },
  {
    "id":41,
    "institution":2,
    "name":"Curso Práctico de HTML y CSS",
    "icon":"https://static.platzi.com/media/achievements/badge-practico-html-css-1-106665ee-bf4f-4301-8991-1fab9e54a73e.png",
    "aboutTheCourse": "",
    "certifications": ["https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681599529/portfolio/assets/img_school/Platzi/diploma-html-practico_page-0001_huhdnl.jpg"]
  },
  {
    "id":42,
    "institution":2,
    "name":"Curso Básico de JavaScript",
    "icon":"https://static.platzi.com/media/achievements/badge-basicojs-e2ead888-428e-4f55-962c-8894aeaeacda.png",
    "aboutTheCourse": "",
    "certifications": ["https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681713519/portfolio/assets/img_school/Platzi/diploma-basico-javascript_page-0001_ouwges.jpg"]
  },
  {
    "id":43,
    "institution":2,
    "name":"Curso de Programación Funcional en JavaScript",
    "icon":"https://static.platzi.com/media/achievements/badges-programacion-funcional-js-a4a32291-e53e-4322-9e80-f5297d636ab1.png",
    "aboutTheCourse": "",
    "certifications": ["https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681599530/portfolio/assets/img_school/Platzi/diploma-javascript-practico_actualizado__page-0001_y14qpc.jpg"]
  },
  {
    "id":44,
    "institution":2,
    "name":"Curso de Programación Orientada a Objetos: POO",
    "icon":"https://static.platzi.com/media/achievements/badges-poo-513deb20-a5bd-40a7-b97a-c36dc772d512.png",
    "aboutTheCourse": "",
    "certifications": ["https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681599531/portfolio/assets/img_school/Platzi/diploma-oop_page-0001_b2zujh.jpg"]
  },
  {
    "id":45,
    "institution":2,
    "name":"Curso de Transformaciones y Transiciones en CSS",
    "icon":"https://static.platzi.com/media/achievements/badges-animacion-css-03-4f2cd60d-e10b-4ea3-b5fe-1c3bc38e6970.png",
    "aboutTheCourse": "",
    "certifications": ["https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681599533/portfolio/assets/img_school/Platzi/diploma-transformaciones-transiciones-css_page-0001_yifada.jpg"]
  },
  {
    "id":46,
    "institution":2,
    "name":"Curso de CSS Grid Básico",
    "icon":"https://static.platzi.com/media/achievements/badge-css-grid-basico-5a5b5ab7-3cbb-4c7a-a15d-9f2719b56598.png",
    "aboutTheCourse": "",
    "certifications": ["https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681599527/portfolio/assets/img_school/Platzi/diploma-css-grid_page-0001_eoc1xm.jpg"]
  },
  {
    "id":47,
    "institution":2,
    "name":"Curso de Asincronismo con JavaScript",
    "icon":"https://static.platzi.com/media/achievements/badge-asincro-js-9f17b092-47d0-4c8a-a59d-67714aa18db3.png",
    "aboutTheCourse": "",
    "certifications": ["https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681599527/portfolio/assets/img_school/Platzi/diploma-asincronismo-js_page-0001_wjmtfu.jpg"]
  },
  {
    "id":48,
    "institution":2,
    "name":"Curso de API REST con Javascript: Performance y Usabilidad",
    "icon":"https://static.platzi.com/media/achievements/curso-profesional-consumo-api-rest-javascript_badge-842a9d5d-8995-48e7-8582-73b1890.png",
    "aboutTheCourse": "",
    "certifications": ["https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681599527/portfolio/assets/img_school/Platzi/diploma-api-profesional_page-0001_ehujrt.jpg"]
  },
  {
    "id":49,
    "institution":2,
    "name":"Curso de API REST con Javascript: Fundamentos",
    "icon":"https://static.platzi.com/media/achievements/image-0ca92613-cd68-4147-993c-751978c2a554.png",
    "aboutTheCourse": "",
    "certifications": ["https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681599527/portfolio/assets/img_school/Platzi/diploma-api_page-0001_bcizvs.jpg"]
  },
  {
    "id":50,
    "institution":2,
    "name":"Curso de API REST con Javascript: Ejemplos con APIs reales",
    "icon":"https://static.platzi.com/media/achievements/image-a8f443d3-8404-4136-8440-17add0d9ee0f.png",
    "aboutTheCourse": "",
    "certifications": ["https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681599527/portfolio/assets/img_school/Platzi/diploma-api-practico_page-0001_rvstn1.jpg"]
  },
  {
    "id":51,
    "institution":2,
    "name":"Curso de Animaciones con CSS",
    "icon":"https://static.platzi.com/media/achievements/badges-animacion-css-02-740b1ebd-dbcf-4cfc-befb-5988cc6b03d0.png",
    "aboutTheCourse": "",
    "certifications": ["https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681599532/portfolio/assets/img_school/Platzi/diploma-animaciones-css_page-0001_e7jb20.jpg"]
  },
  {
    "id":52,
    "institution":2,
    "name":"Curso Básico de PHP: Instalación, Fundamentos y Operadores",
    "icon":"https://static.platzi.com/media/achievements/badge-basico-php-1226e062-0c34-40fc-b00f-1cf704d6704c.png",
    "aboutTheCourse": "",
    "certifications": ["https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681599531/portfolio/assets/img_school/Platzi/diploma-php_page-0001_jup6yt.jpg"]
  },
  {
    "id":53,
    "institution":2,
    "name":"Curso Definitivo de HTML y CSS",
    "icon":"https://static.platzi.com/media/achievements/badges-html-css-afa64acb-64a4-486d-96a5-f930fbb7ee32.png",
    "aboutTheCourse": "",
    "certifications": ["https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681599529/portfolio/assets/img_school/Platzi/diploma-html-css_page-0001_xiiysp.jpg"]
  },
  {
    "id":54,
    "institution":2,
    "name":"",
    "icon":"",
    "aboutTheCourse": "",
    "certifications": [""]
  },
  {
    "id":55,
    "institution":2,
    "name":"",
    "icon":"",
    "aboutTheCourse": "",
    "certifications": [""]
  },
  {
    "id":56,
    "institution":2,
    "name":"",
    "icon":"",
    "aboutTheCourse": "",
    "certifications": ["", "", ""]
  },
  {
    "id":57,
    "institution":2,
    "name":"",
    "icon":"",
    "aboutTheCourse": "",
    "certifications": ["", "", ""]
  },
  {
    "id":58,
    "institution":2,
    "name":"",
    "icon":"",
    "aboutTheCourse": "",
    "certifications": ["", "", ""]
  },
  {
    "id":59,
    "institution":2,
    "name":"",
    "icon":"",
    "aboutTheCourse": "",
    "certifications": ["", "", ""]
  },
  {
    "id":60,
    "institution":2,
    "name":"",
    "icon":"",
    "aboutTheCourse": "",
    "certifications": ["", "", ""]
  },
  {
    "id":61,
    "institution":2,
    "name":"",
    "icon":"",
    "aboutTheCourse": "",
    "certifications": ["", "", ""]
  },
  {
    "id":62,
    "institution":2,
    "name":"",
    "icon":"",
    "aboutTheCourse": "",
    "certifications": ["", "", ""]
  },
  {
    "id":63,
    "institution":2,
    "name":"",
    "icon":"",
    "aboutTheCourse": "",
    "certifications": ["", "", ""]
  },
  {
    "id":64,
    "institution":2,
    "name":"",
    "icon":"",
    "aboutTheCourse": "",
    "certifications": ["", "", ""]
  }
  
]

}
const projects= {
  "projects": [
    {
      "id": 0,
      "name": "TepatuuriSoft",
      "icon": "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1657834746/portfolio/assets/img_projects/TepatuuriSoft/TepatuuriSoft_hwuyib.png",
      "description": "It consists in a system developed to do administrative activities in a local business, its main function is to show a schedule of pending orders.\n### Order Calendar\nIt has a calendar showing all the pending orders every order is bound to a customer, that's because it also has a customer catalog, and the user can create new orders to an existing customer or add a new one. \nThe products of an order also are bound to a product list that can be modified for the user.\n### Providers\nThe system also has a provider catalog just to have a registration of their data.\n \n### Inventory\nSo the user can manage the products and have an inventory control, as well as add new product or discard the old ones.\n\n### Report generation\nThe system can generate some kind of reports like orders of the month, inventories status and list of products.",
      "images": [
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696878/portfolio/assets/img_projects/TepatuuriSoft/tepaturi1_jbttfg.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696878/portfolio/assets/img_projects/TepatuuriSoft/tepaturi2_l3nwhx.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696878/portfolio/assets/img_projects/TepatuuriSoft/tepaturi3_hi97zv.png"],
      "Technologies": [8, 5],
      "GithubRepository": "https://github.com/BriandaCampoy/Tepatuuri-soft",
      "FigmaDesign": "",
      "Collaborators": [""],
      "deploy": ""
    },
    {
      "id": 1,
      "name": "Sistema First Class",
      "icon": "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1657834738/portfolio/assets/img_projects/SFC/SFC_vkbfw8.png",
      "description": "Sistema First Class is a program that helps the administration of events and the creation of payment documents for an event venue.\n\n### Caracteristics\nThe system can manage a list of employees and a list of works positions, that lists are used to generate payment documents for the employees, this documents can contain  a list of the employees to be paid, and each one would have a corresponding payment get it for its work position. This payment document can be printed directly on the system. \nAnother characteristic of the system is that it can manage the events in a custom schedule. \n\n #### Installation \n Sistema First Class It is a non-installable system, which is executed after the compilation of the program itself, all this with the use of Electron as the main framework for building the project. ",
      "images": [
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1660245714/portfolio/assets/img_projects/SFC/sfc_Login_ifpvcs.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1660245713/portfolio/assets/img_projects/SFC/sfc_Menu_qjaoen.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1660245713/portfolio/assets/img_projects/SFC/sfc_createdEvent_uhxlrz.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1660245710/portfolio/assets/img_projects/SFC/sfc_FormatDoc_o2aey5.png"
      ],
      "Technologies": [1, 3, 4, 6, 7, 10, 12],
      "GithubRepository": "https://github.com/DanielHernandezTalla/FirstClassNavojoa",
      "FigmaDesign": "https://www.figma.com/file/j71EliTPFeC4vmw0jiWfMn/Dise%C3%B1o-SFC?node-id=0%3A1&t=46ZzDF4fYmu4gkiE-1",
      "Collaborators": ["", ""],
      "deploy": ""
    },
    {
      "id": 2,
      "name": "YardSale",
      "icon": "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1657834738/portfolio/assets/img_projects/YardSale/YardSale_pibfre.png",
      "description": "Is a web application make with React.js using a market fake API. \nThe API provide various products and the application show them to the user, the user can select some products and this would appear in the shopping car, the shopping car would also show the total purchase.\nThe others functions are currently just a visual.",
      "images": [
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681697799/portfolio/assets/img_projects/YardSale/yardSale3_zwoxy7.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696676/portfolio/assets/img_projects/YardSale/yardSale1_sgpeq8.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696672/portfolio/assets/img_projects/YardSale/yardSale2_dhcyiu.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681697799/portfolio/assets/img_projects/YardSale/yardSale7_pcitdk.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681697799/portfolio/assets/img_projects/YardSale/yardSale4_nrunn4.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681697799/portfolio/assets/img_projects/YardSale/yardSale6_ododnz.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681697799/portfolio/assets/img_projects/YardSale/yardSale5_rhabxs.png"],
      "Technologies": [1, 2, 3, 7],
      "GithubRepository": "https://github.com/BriandaCampoy/reactShop-YardSale",
      "FigmaDesign": "",
      "Collaborators": ["", ""],
      "deploy": "https://briandacampoy.github.io/reactShop-YardSale/#/"
    },
    {
      "id": 3,
      "name": "AgendaHorario",
      "icon": "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1657834738/portfolio/assets/img_projects/AgendaHorario/AgendaHorario_lmy5wo.png",
      "description": "It's an application idea developed to fulfill the function of and special kind of schedule made to help students to manage their time between school classes and their homework.\nIt is just a prototype make with HTML and CSS.",
      "images": [
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696828/portfolio/assets/img_projects/AgendaHorario/AH1_nwu7zk.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696828/portfolio/assets/img_projects/AgendaHorario/AH4_aohxmn.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696828/portfolio/assets/img_projects/AgendaHorario/AH3_jod07j.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696828/portfolio/assets/img_projects/AgendaHorario/AH2_rjgjrk.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696828/portfolio/assets/img_projects/AgendaHorario/AH5_rrdofy.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696828/portfolio/assets/img_projects/AgendaHorario/AH6_cghl3u.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696828/portfolio/assets/img_projects/AgendaHorario/AH7_zilxya.png"
        ],
      "Technologies": [1, 2, 3],
      "GithubRepository": "",
      "FigmaDesign": "https://www.figma.com/file/apFuV4dmZr38ZaIq2fqGne/Untitled?node-id=0-1&t=6suh4OU2lQZkAO7X-0",
      "Collaborators": ["", ""],
      "deploy": ""
    },
    {
      "id": 4,
      "name": "Leviatan",
      "icon": "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1657834738/portfolio/assets/img_projects/Leviatan/Leviatan_tsj1j2.png",
      "description": "The system is a simulation of a restaurant software where users can register new orders and then add different meals to finally settle the account.\nThe system can manage different account at the same time and order would have a waiter assigned.\nThe system also has a list of personal, where the user can manage the personal and assign roles.",
      "images": [
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696932/portfolio/assets/img_projects/Leviatan/Lev1_d5rgvs.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696932/portfolio/assets/img_projects/Leviatan/Lev12_khpj4r.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696932/portfolio/assets/img_projects/Leviatan/Lev3_b0s6ss.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696932/portfolio/assets/img_projects/Leviatan/Lev4_vwhn2k.png"
      ],
      "Technologies": [8, 5],
      "GithubRepository": "",
      "FigmaDesign": "",
      "Collaborators": ["", ""],
      "deploy": ""
    },
    {
      "id": 5,
      "name": "Patolli",
      "icon": "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1657834738/portfolio/assets/img_projects/Patolli/Patolli_aixg06.png",
      "description": "It is a virtual game based in an ancient Aztec game, it can be played by four players. \nEvery player would have some tokens to move into the board and in turn they should throw some kind of dice, the first one to take all their tokens to the exit wins. \nThis system was developed in java and the players can play through internet using sockets.",
      "images": [
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696654/portfolio/assets/img_projects/Patolli/patolli1_elsu3a.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696650/portfolio/assets/img_projects/Patolli/patolli3_fvxrzv.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696648/portfolio/assets/img_projects/Patolli/patolli2_o9ehxw.png"
      ],
      "Technologies": [0],
      "GithubRepository": "https://github.com/BriandaCampoy/tablero",
      "FigmaDesign": "",
      "Collaborators": ["", ""],
      "deploy": ""
    },
    {
      "id": 6,
      "name": "Poke-api",
      "icon": "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681348826/portfolio/assets/img_projects/Poke-api/favicon_v7lgqd.png",
      "description": "This web app shows all the Pokemon provide by pokeapi.co, it was made with react and uses react-router-dom for navigation. The users can search a pokemon by name and check some details about it.\nAnd to make the load better, it has a loading skeleton for the pokemon cards.",
      "images": [
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696774/portfolio/assets/img_projects/Poke-api/pkapi1_fvbyur.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696773/portfolio/assets/img_projects/Poke-api/pkapi2_k8lyct.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696772/portfolio/assets/img_projects/Poke-api/pkapi3_ndt1y0.png"
      ],
      "Technologies": [1, 2, 7],
      "GithubRepository": "https://github.com/BriandaCampoy/poke-api",
      "FigmaDesign": "",
      "Collaborators": ["", ""],
      "deploy": "https://briandacampoy.github.io/poke-api/"
    },
    {
      "id": 7,
      "name": "Timer",
      "icon": "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681349045/portfolio/assets/img_projects/Timer/Timer_k2ndef.svg",
      "description": "It's a simple Timer/chronometer application make with React.js the user can define a specific time to start the time, but it can be stopped and resumed.\nThe time can also be reset after it ends. \nEven once the time is over, it would keep counting time to show how much time has happened since the time is over.",
      "images": [
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696785/portfolio/assets/img_projects/Timer/timer_wqb1du.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696784/portfolio/assets/img_projects/Timer/timer2_wxgu5g.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696785/portfolio/assets/img_projects/Timer/timer3_xro5xe.png"
      ],
      "Technologies": [2],
      "GithubRepository": "https://github.com/BriandaCampoy/timer",
      "FigmaDesign": "",
      "Collaborators": ["", ""],
      "deploy": "https://timer-p4q5d3urv-briandacampoy.vercel.app/"
    },
    {
      "id": 8,
      "name": "Acti-React-App",
      "icon": "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696463/portfolio/assets/img_projects/Acti-react-app/Frame_30_zlce8k.png",
      "description": "",
      "images": [
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696404/portfolio/assets/img_projects/Acti-react-app/acti1_vzauek.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696404/portfolio/assets/img_projects/Acti-react-app/acti2_ktkdl3.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696404/portfolio/assets/img_projects/Acti-react-app/acti3_d79rdw.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696405/portfolio/assets/img_projects/Acti-react-app/acti5_ewabq4.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696405/portfolio/assets/img_projects/Acti-react-app/acti4_cldz5j.png",
        "",
        ""
    ],
      "Technologies": [1, 2, 4, 6, 7, 6, 10, 11],
      "GithubRepository": "",
      "FigmaDesign": "https://www.figma.com/file/VYWbAkGhOxVUQQqquJ3Jkv/ACTIReactApp?node-id=0%3A1&t=tBSODLGBlfLThCg0-1",
      "Collaborators": ["", ""],
      "deploy": ""
    },
    {
      "id": 9,
      "name": "WebPage Distribuidora Industrial Navojoa",
      "icon": "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681350034/portfolio/assets/img_projects/DIN/Frame_29_1_aj2vbq.png",
      "description": "",
      "images": [
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696868/portfolio/assets/img_projects/DIN/din1_v47roh.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696867/portfolio/assets/img_projects/DIN/din2_vfxvkq.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696866/portfolio/assets/img_projects/DIN/din3_dx9c9i.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696868/portfolio/assets/img_projects/DIN/din4_vg9d5i.png"
      ],
      "Technologies": [3, 7, 1],
      "GithubRepository": "https://github.com/Acti-isw/DistribuidoraIndustrialNavojoaWebsite",
      "FigmaDesign": "",
      "Collaborators": ["", ""],
      "deploy": "https://www.dinav.com.mx/"
    },
    {
      "id": 10,
      "name": "Qmiro",
      "icon": "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681636466/portfolio/assets/img_projects/Qmiro/QmiroIcon_gw368u_qq103k.png",
      "description": "",
      "images": [
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696816/portfolio/assets/img_projects/Qmiro/qmiro1_hvsv4w.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696815/portfolio/assets/img_projects/Qmiro/qmiro3_iswqg9.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696811/portfolio/assets/img_projects/Qmiro/qmiro2_hslrnq.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696809/portfolio/assets/img_projects/Qmiro/qmiro4_z9rkao.png"
      ],
      "Technologies": [1, 2, 7],
      "GithubRepository": "https://github.com/BriandaCampoy/qmiro",
      "FigmaDesign": "https://www.figma.com/file/eBcLBlNRVZBYhJle5PetB9/Qmiro?node-id=0-1&t=C4c7Q5XfydwZ2llZ-0",
      "Collaborators": ["", ""],
      "deploy": "https://qmiro-od3e-5rgo37nnr-briandacampoy.vercel.app/#/"
    },
    {
      "id": 11,
      "name": "CatsApi",
      "icon": "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681635921/portfolio/assets/img_projects/Cats-api/httpstatus-icon_jbptls.png",
      "description": "",
      "images": [
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696629/portfolio/assets/img_projects/Cats-api/catsApi_gozjyi.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696626/portfolio/assets/img_projects/Cats-api/catsApi2_ceocov.png"
      ],
      "Technologies": [1,3,7],
      "GithubRepository": "https://github.com/BriandaCampoy/CatsApi",
      "FigmaDesign": "",
      "Collaborators": ["", ""],
      "deploy": "https://github.com/BriandaCampoy/CatsApi"
    },
    {
      "id": 12,
      "name": "Todo Machine",
      "icon": "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681636575/portfolio/assets/img_projects/TodoMachine/todo-icon_xxg0ra.png",
      "description": "",
      "images": [
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696797/portfolio/assets/img_projects/TodoMachine/todoMachine1_eelujv.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696797/portfolio/assets/img_projects/TodoMachine/todoMachine4_koqtro.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696797/portfolio/assets/img_projects/TodoMachine/todoMachine2_unw3oq.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696796/portfolio/assets/img_projects/TodoMachine/todoMachine3_obox8b.png"
        ],
      "Technologies": [1,2,7],
      "GithubRepository": "https://github.com/BriandaCampoy/TodoMachine",
      "FigmaDesign": "",
      "Collaborators": ["", ""],
      "deploy": "https://briandacampoy.github.io/TodoMachine/"
    },
    {
      "id": 13,
      "name": "Animation Game",
      "icon": "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681636658/portfolio/assets/img_projects/AnimationGame/gato1_ud593v.png",
      "description": "",
      "images": [
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696763/portfolio/assets/img_projects/AnimationGame/animationGame2_a0aemc.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696761/portfolio/assets/img_projects/AnimationGame/animationGame_vm8pli.png"
      ],
      "Technologies": [3,7],
      "GithubRepository": "https://github.com/BriandaCampoy/Animation-game",
      "FigmaDesign": "",
      "Collaborators": ["", ""],
      "deploy": "https://briandacampoy.github.io/Animation-game/"
    },
    {
      "id": 14,
      "name": "async-landing",
      "icon": "https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",
      "description": "",
      "images": ["https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696753/portfolio/assets/img_projects/Asynclanding_z9zgj7.png"],
      "Technologies": [1,3],
      "GithubRepository": "https://github.com/BriandaCampoy/async-landing",
      "FigmaDesign": "",
      "Collaborators": ["", ""],
      "deploy": "https://briandacampoy.github.io/async-landing/"
    },
    {
      "id": 15,
      "name": "modeladorUML",
      "icon": "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681636966/portfolio/assets/img_projects/modeladorUml/logo192_ss09bx.png",
      "description": "",
      "images": [
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696608/portfolio/assets/img_projects/modeladorUml/MUML1_uuywoh.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696608/portfolio/assets/img_projects/modeladorUml/WhatsApp_Image_2023-04-16_at_6.03.02_PM_2_t60ogj.jpg",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696608/portfolio/assets/img_projects/modeladorUml/WhatsApp_Image_2023-04-16_at_6.03.02_PM_1_d0wvh3.jpg",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696608/portfolio/assets/img_projects/modeladorUml/WhatsApp_Image_2023-04-16_at_6.03.02_PM_dfb3bp.jpg"
      ],
      "Technologies": [1,2,6,7,9,10],
      "GithubRepository": "",
      "FigmaDesign": "",
      "Collaborators": ["", ""],
      "deploy": ""
    },
    {
      "id": 16,
      "name": "Google clone",
      "icon": "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1657834738/portfolio/assets/img_projects/Google_junpm4.png",
      "description": "",
      "images": ["https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696562/portfolio/assets/img_projects/googleClone1_s0tuat.png"],
      "Technologies": [3, 7],
      "GithubRepository": "https://github.com/BriandaCampoy/GoogleClone",
      "FigmaDesign": "",
      "Collaborators": ["", ""],
      "deploy": "https://briandacampoy.github.io/GoogleClone/"
    },
    {
      "id": 17,
      "name": "Navojoa Como Vamos",
      "icon": "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1657834738/portfolio/assets/img_projects/NCV/NCV_yndxfb.png",
      "description": "",
      "images": [
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681705965/portfolio/assets/img_projects/NCV/ncv_bjjwui.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681705965/portfolio/assets/img_projects/NCV/ncv2_fnj4ea.png"
      ],
      "Technologies": [13,14,9],
      "GithubRepository": "",
      "FigmaDesign": "https://www.figma.com/file/kzuSsPuMnFfJwUhZVhEyhx/Navojoa-%C2%BFC%C3%B3mo-Vamos%3F?node-id=2210%3A721&t=cOHNJZbWHzWkonHV-1",
      "Collaborators": ["", ""],
      "deploy": ""
    },
    {
      "id": 18,
      "name": "CrudEJS",
      "icon": "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696847/portfolio/assets/img_projects/Ejs/EjsIcon_y46fw4.png",
      "description": "",
      "images": ["https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696847/portfolio/assets/img_projects/Ejs/ejs1_vsnwla.png"],
      "Technologies": [1, 15],
      "GithubRepository": "https://github.com/BriandaCampoy/TopicosWeb",
      "FigmaDesign": "",
      "Collaborators": ["", ""],
      "deploy": ""
    },
    {
      "id": 19,
      "name": "React-SecurityCode",
      "icon": "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681706499/portfolio/assets/img_projects/SecurityCode/hooksReact_rjgtti.png",
      "description": "",
      "images": [
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696718/portfolio/assets/img_projects/SecurityCode/securityCode2_ebdrrd.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696717/portfolio/assets/img_projects/SecurityCode/securityCode3_phbwzb.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696717/portfolio/assets/img_projects/SecurityCode/securityCode1_k6avpp.png"
      ],
      "Technologies": [1,2,7],
      "GithubRepository": "https://github.com/BriandaCampoy/React-practice-securityCode",
      "FigmaDesign": "",
      "Collaborators": ["", ""],
      "deploy": "https://react-practice-security-code.vercel.app/"
    },
    {
      "id": 20,
      "name": "Random user generator",
      "icon": "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681706695/portfolio/assets/img_projects/RandomUserGenerator/randomUserIcon_wc2d6v.webp",
      "description": "",
      "images": [
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696691/portfolio/assets/img_projects/RandomUserGenerator/randomUserGenerator2_ovhjs9.png",
        "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696691/portfolio/assets/img_projects/RandomUserGenerator/randomUserGenerator_a9f9cl.png"
      ],
      "Technologies": [1,3,7],
      "GithubRepository": "https://github.com/BriandaCampoy/Webpack-netlify",
      "FigmaDesign": "",
      "Collaborators": ["", ""],
      "deploy": ""
    },
    {
      "id": 21,
      "name": "ReactHooks with RickAndMortyAPI",
      "icon": "https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681706968/portfolio/assets/img_projects/rickandmortyicon_mx95nl.webp",
      "description": "",
      "images": ["https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681696603/portfolio/assets/img_projects/RmApi_zh3yxz.png"],
      "Technologies": [1,2,7],
      "GithubRepository": "",
      "FigmaDesign": "",
      "Collaborators": ["", ""],
      "deploy": "https://react-hooks-practice-theta.vercel.app/"
    },
    {
      "id": 23,
      "name": "",
      "icon": "",
      "description": "",
      "images": ["", ""],
      "Technologies": [],
      "GithubRepository": "",
      "FigmaDesign": "",
      "Collaborators": ["", ""],
      "deploy": ""
    },
    {
      "id": 24,
      "name": "",
      "icon": "",
      "description": "",
      "images": ["", ""],
      "Technologies": [],
      "GithubRepository": "",
      "FigmaDesign": "",
      "Collaborators": ["", ""],
      "deploy": ""
    },
    {
      "id": 25,
      "name": "",
      "icon": "",
      "description": "",
      "images": ["", ""],
      "Technologies": [],
      "GithubRepository": "",
      "FigmaDesign": "",
      "Collaborators": ["", ""],
      "deploy": ""
    },
    {
      "id": 26,
      "name": "",
      "icon": "",
      "description": "",
      "images": ["", ""],
      "Technologies": [],
      "GithubRepository": "",
      "FigmaDesign": "",
      "Collaborators": ["", ""],
      "deploy": ""
    },
    {
      "id": 27,
      "name": "",
      "icon": "",
      "description": "",
      "images": ["", ""],
      "Technologies": [],
      "GithubRepository": "",
      "FigmaDesign": "",
      "Collaborators": ["", ""],
      "deploy": ""
    },
    {
      "id": 28,
      "name": "",
      "icon": "",
      "description": "",
      "images": ["", ""],
      "Technologies": [],
      "GithubRepository": "",
      "FigmaDesign": "",
      "Collaborators": ["", ""],
      "deploy": ""
    },
    {
      "id": 29,
      "name": "",
      "icon": "",
      "description": "",
      "images": ["", ""],
      "Technologies": [],
      "GithubRepository": "",
      "FigmaDesign": "",
      "Collaborators": ["", ""],
      "deploy": ""
    },
    {
      "id": 30,
      "name": "",
      "icon": "",
      "description": "",
      "images": ["", ""],
      "Technologies": [],
      "GithubRepository": "",
      "FigmaDesign": "",
      "Collaborators": ["", ""],
      "deploy": ""
    },
    {
      "id": 31,
      "name": "",
      "icon": "",
      "description": "",
      "images": ["", ""],
      "Technologies": [],
      "GithubRepository": "",
      "FigmaDesign": "",
      "Collaborators": ["", ""],
      "deploy": ""
    },
    {
      "id": 32,
      "name": "",
      "icon": "",
      "description": "",
      "images": ["", ""],
      "Technologies": [],
      "GithubRepository": "",
      "FigmaDesign": "",
      "Collaborators": ["", ""],
      "deploy": ""
    },
    {
      "id": 33,
      "name": "",
      "icon": "",
      "description": "",
      "images": ["", ""],
      "Technologies": [],
      "GithubRepository": "",
      "FigmaDesign": "",
      "Collaborators": ["", ""],
      "deploy": ""
    },
    {
      "id": 34,
      "name": "",
      "icon": "",
      "description": "",
      "images": ["", ""],
      "Technologies": [],
      "GithubRepository": "",
      "FigmaDesign": "",
      "Collaborators": ["", ""],
      "deploy": ""
    },
    {
      "id": 35,
      "name": "",
      "icon": "",
      "description": "",
      "images": ["", ""],
      "Technologies": [],
      "GithubRepository": "",
      "FigmaDesign": "",
      "Collaborators": ["", ""],
      "deploy": ""
    },
    {
      "id": 36,
      "name": "",
      "icon": "",
      "description": "",
      "images": ["", ""],
      "Technologies": [],
      "GithubRepository": "",
      "FigmaDesign": "",
      "Collaborators": ["", ""],
      "deploy": ""
    }
  ]
}
