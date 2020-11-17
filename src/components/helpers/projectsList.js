/* eslint-disable global-require */
const PROJECTS_LIST = [
  {
    id: 13,
    thumbnail: {
      url: require("../../assets/images/projets/Thumbnails/Web/Thumbnail_Set.jpg"),
      urlSD: require("../../assets/images/projets/Thumbnails/Web/Thumbnail_Set_SD.jpg"),
      width: 1000,
      height: 667,
    },
    title: "SET",
    location: "Projet personnel",
    path: "/set",
    year: "2020",
    category: "Développement web",
    website: {
      name: "github.com/olichab/Set",
      url: "https://github.com/olichab/Set",
    },
    tags: ["React Native"],
    description:
      "<p>Ce projet consiste à adapter le jeu de société SET (édité par Gigamic) pour mobile et tablettes.<br/><br/> Le but du jeu consiste à observer les cartes exposées sur la table pour être le plus rapide à identifier un SET. </p><p> Chaque carte présente des symboles qui combinent 4 caractéristiques: <ul> <li>COULEUR (rouge, vert ou mauve)</li> <li>FORME (ovale, vague ou losange)</li> <li> NOMBRE (un, deux ou trois symboles)</li> <li>REMPLISSAGE (plein, hachuré ou vide)</li> </ul> </p> <p> Un SET est un ensemble de 3 cartes dont chacune des 4 caractéristiques est soit totalement identique, soit totalement différente aux 2 autres cartes. </p> <br /> <br /> <p> <strong>EN COURS DE DEVELOPPEMENT </strong> </p>",
    images: [
      {
        src: require("../../assets/images/projets/Web/Set/Logo_Set.jpg"),
        width: 2,
        height: 1,
      },
      {
        src: require("../../assets/images/projets/Web/Set/Set.jpg"),
        width: 2,
        height: 1,
      },
    ],
  },
  {
    id: 12,
    thumbnail: {
      url: require("../../assets/images/projets/Thumbnails/Web/Thumbnail_ODOS.jpg"),
      urlSD: require("../../assets/images/projets/Thumbnails/Web/Thumbnail_ODOS_SD.jpg"),
      width: 1000,
      height: 706,
    },
    title: "One Day One Song",
    location: "Projet personnel",
    path: "/one-day-one-song",
    year: "2020",
    category: "Développement web",
    website: {
      name: "onedayonesong.netlify.app",
      url: "https://onedayonesong.netlify.app",
    },
    tags: ["React", "API Spotify", "Axios", "Sass", "Reactsrap"],
    description:
      "<p> Chaque jour, <b> onedayonesong </b> vous permet de <b> découvrir une nouvelle musique </b> parmis les <b> 40 millions </b> de titres que compte la bibliothèque musicale de <b> Spotify</b> . <br /> <br /> Vous trouverez également les musiques proposées la semaine précèdente. </p>",
    images: [
      {
        src: require("../../assets/images/projets/Web/OneDayOneSong/1_ODOS.jpg"),
        width: 3,
        height: 4,
      },
      {
        src: require("../../assets/images/projets/Web/OneDayOneSong/2_ODOS.jpg"),
        width: 2,
        height: 5,
      },
      {
        src: require("../../assets/images/projets/Web/OneDayOneSong/3_ODOS.jpg"),
        width: 1,
        height: 5,
      },
    ],
  },
  {
    id: 11,
    thumbnail: {
      url: require("../../assets/images/projets/Thumbnails/Web/Thumbnail_MetricsServer.jpg"),
      urlSD: require("../../assets/images/projets/Thumbnails/Web/Thumbnail_MetricsServer_SD.jpg"),
      width: 1000,
      height: 750,
    },
    title: "Metrics server",
    location: "Projet personnel",
    path: "/metrics-server",
    year: "2020",
    category: "Développement web",
    website: {
      name: "olichab.github.io/MetricsServer",
      url: "https://olichab.github.io/MetricsServer/",
    },
    tags: [
      "React",
      "Redux",
      "React-virtualized",
      "React-vis",
      "React-select",
      "React-infinite-calendar",
      "Sass",
      "Reactsrap",
    ],
    description:
      "<p> A partir d&apos;un <b>relevé de métriques</b> collecté sur un <b>serveur</b>, le but était de créer un <b>dashboard </b>permettant à l&apos;utilisateur de pouvoir <b> analyser facilement et rapidement </b> les <b> informations systèmes </b> (réseau, disque, cpu, mémoire,…) en vue d&apos;identifier <b> d&apos;éventuels problèmes</b> . <br /> <br /> Il est possible de <b> filtrer </b> les données par <b> date </b>,<b> fichiers </b> ou <b> inodes </b> mais également de détecter les entrées ayant un <b> temps de chargement </b> supérieur aux autres afin d&apos;obtenir les <b> détails </b> sur la <b> consommation CPU </b> de celle-ci. </p>",
    images: [
      {
        src: require("../../assets/images/projets/Web/MetricsServer/1_MetricsServer.jpg"),
        width: 3,
        height: 2,
      },
      {
        src: require("../../assets/images/projets/Web/MetricsServer/2_MetricsServer.jpg"),
        width: 1,
        height: 2,
      },
      {
        src: require("../../assets/images/projets/Web/MetricsServer/3_MetricsServer.jpg"),
        width: 1,
        height: 4,
      },
    ],
  },
  {
    id: 10,
    thumbnail: {
      url: require("../../assets/images/projets/Thumbnails/Web/Thumbnail_BriefOnline.jpg"),
      urlSD: require("../../assets/images/projets/Thumbnails/Web/Thumbnail_BriefOnline_SD.jpg"),
      width: 1000,
      height: 554,
    },
    title: "Brief Online",
    location: "Altavia Connect",
    path: "/brief-online",
    year: "2019",
    category: "Développement web",
    website: {
      name: "www.altavia-group.com",
      url: "https://www.altavia-group.com/fr/",
    },
    tags: [
      "AngularJS",
      "Java",
      "Javascript",
      "MySQL",
      "Sass",
      "Gulp",
      "Material Design",
    ],
    description:
      "<p> La web application « <b>Brief Online</b> » permet aux clients d’Altavia d’envoyer un <b>brief de leurs besoins</b> et d’avoir un <b> suivi</b> de leurs projets. <br /> Le client peut gérer ses <b> campagnes </b> et y inclure des <b> supports </b> (brochure, catalogue, affiche, roll-up, PLV...) qu&apos;il pourra <b> paramétrer </b>à souhait. </p> <p> Voici une liste non exhaustive des <b>tâches réalisées</b> sur ce projet: </p> <ul> <li> Stabilisation de la version 3 de Brief Online (debugging, amélioration des performances) </li> <li> Refonte de la partie workflow permettant aux clients de suivre l&apos;avancement de leurs projets </li> <li>Réalisation de maquettes</li> <li> Développement du contrôle en amont des fichiers PDF (Preflight) </li> <li>Mise en place de la messagerie interne</li> <li>Upload et encodage des fichiers envoyés</li> <li>Création de template d’emails et gestion de leur envoi</li> <li>Écriture de tests fonctionnels et unitaires</li> <li>Rédaction de documentation</li> <li>Support de l&apos;application</li> </ul",
    images: [
      {
        src: require("../../assets/images/projets/Web/BriefOnline/1_Bol_OngoingProject.jpg"),
        width: 4,
        height: 2,
      },
      {
        src: require("../../assets/images/projets/Web/BriefOnline/2_Bol_AddSupport.jpg"),
        width: 4,
        height: 2,
      },
      {
        src: require("../../assets/images/projets/Web/BriefOnline/3_Bol_Support.jpg"),
        width: 4,
        height: 2,
      },
      {
        src: require("../../assets/images/projets/Web/BriefOnline/4_Bol_Workflow.jpg"),
        width: 4,
        height: 2,
      },
    ],
  },
  {
    id: 9,
    thumbnail: {
      url: require("../../assets/images/projets/Thumbnails/Web/Thumbnail_Mooviz.jpg"),
      urlSD: require("../../assets/images/projets/Thumbnails/Web/Thumbnail_Mooviz_SD.jpg"),
      width: 1000,
      height: 545,
    },
    title: "Mooviz",
    location: "Projet personnel",
    path: "/mooviz",
    category: "Développement web",
    year: "2019",
    website: {
      name: "github.com/olichab/Mooviz",
      url: "https://github.com/olichab/Mooviz",
    },
    tags: [
      "React",
      "Redux",
      "NodesJS",
      "Express",
      "KnexJS",
      "API Rest",
      "MySQL",
      "Javascript",
      "Html",
      "Css",
      "Sass",
      "Bootstrap",
    ],
    description:
      "<p> <b>Mooviz</b> est une web application permettant la gestion de sa <b> bibliothèque de films</b>. </p> <p> Voici une liste non exhaustive des <b>tâches réalisées</b> sur ce projet: </p> <ul> <li>Maquette du site</li> <li>Mise en place de la base de données</li> <li>Création de compte utilisateur</li> <li>Authentification</li> <li>Gestion de son profil</li> <li>Sécurisation avec JSON Web token</li> <li>Ajout / suppression de film dans la bibliothèque</li> <li> Fiches d’informations des films (nom, synopsis, catégorie, réalisateur, date de sortie, durée) </li> <li>Filtre par catégorie</li> <li>Suggestion de film aléatoire</li> </ul>",
    images: [
      {
        src: require("../../assets/images/projets/Web/Mooviz/1_Mooviz.jpg"),
        width: 3,
        height: 2,
      },
      {
        src: require("../../assets/images/projets/Web/Mooviz/2_Mooviz.jpg"),
        width: 3,
        height: 5,
      },
      {
        src: require("../../assets/images/projets/Web/Mooviz/3_Mooviz.jpg"),
        width: 3,
        height: 2,
      },
      {
        src: require("../../assets/images/projets/Web/Mooviz/4_Mooviz.jpg"),
        width: 3,
        height: 2,
      },
      {
        src: require("../../assets/images/projets/Web/Mooviz/5_Mooviz.jpg"),
        width: 3,
        height: 2,
      },
      {
        src: require("../../assets/images/projets/Web/Mooviz/6_Mooviz.jpg"),
        width: 3,
        height: 2,
      },
      {
        src: require("../../assets/images/projets/Web/Mooviz/7_Mooviz.jpg"),
        width: 3,
        height: 2,
      },
    ],
  },
  {
    id: 8,
    thumbnail: {
      url: require("../../assets/images/projets/Thumbnails/Web/Thumbnail_HelloWorld.jpg"),
      urlSD: require("../../assets/images/projets/Thumbnails/Web/Thumbnail_HelloWorld_SD.jpg"),
      width: 1000,
      height: 689,
    },
    title: "Hello world",
    location: "Wild Code School",
    path: "/hello-world",
    category: "Développement web",
    year: "2018",
    website: {
      name: "",
      url: "",
    },
    tags: ["React", "NodeJS", "React Simple Map", "Material UI"],
    description:
      "<p> <b>Hello World</b> est un projet réalisé durant ma formation à la Wild Code School. <br /> Ce site web responsive permet de découvrir ou redécouvrir les <b>pays du monde</b> à travers une <b>carte interactive</b> et des <b>quizz </b> de géographie. <br /> <br /> L&apos;objectif de ce projet est l&apos;utilisation et l&apos;exploitation d&apos; <b>API externes</b> commme: <b> REST Countries</b>, <b> Google Custom Search</b> ou encore <b> Open Trivia.</b> </p>",
    images: [
      {
        src: require("../../assets/images/projets/Web/HelloWorld/1_HelloWorld.jpg"),
        width: 3,
        height: 2,
      },
      {
        src: require("../../assets/images/projets/Web/HelloWorld/2_HelloWorld.jpg"),
        width: 2,
        height: 4,
      },
      {
        src: require("../../assets/images/projets/Web/HelloWorld/3_HelloWorld.jpg"),
        width: 4,
        height: 5,
      },
      {
        src: require("../../assets/images/projets/Web/HelloWorld/4_HelloWorld.jpg"),
        width: 4,
        height: 5,
      },
    ],
  },
  {
    id: 7,
    thumbnail: {
      url: require("../../assets/images/projets/Thumbnails/3D/Thumbnail_Bullit.png"),
      urlSD: require("../../assets/images/projets/Thumbnails/3D/Thumbnail_Bullit_SD.jpg"),
      width: 1200,
      height: 646,
    },
    title: "Viparis La Plaza",
    location: "Bullit studio",
    path: "/viparis-la-plaza",
    category: "Infographie 3D",
    year: "2017",
    website: {
      name: "www.bullit-studio.fr",
      url: "http://bullit-studio.fr",
    },
    tags: ["Maya", "Arnold", "Substance painter", "Photoshop"],
    description:
      "<p> Au sein de <b> Bullit Studio</b>, en tant que <b> 3D Generalist</b>, j&apos;ai été amené à travailler sur la modélisation, le texturing, le lighting et le rendu 3D des principaux monuments de Paris pour le compte de <b> ViParis La Plaza</b> . <br /> <br /> <b>L&apos;écran de la Plaza</b> situé porte de Versailles, de par sa forme unique, permet une <b> orientation à 360°</b>. Utilisé pour indiquer quels <b> événements</b> se déroulent dans quels <b> pavillons</b>, l&apos;écran peut étendre son pouvoir d&apos;indication au niveau <b> parisien</b>,<b> national </b> et même <b> mondial</b> . <br /> Dans un écrin autant graphique que pédagogique, <b> l&apos;écran de la Plaza</b> permet d&apos;affirmer <b> l&apos;identité visuelle de Viparis</b>, tout en offrant une <b> fenêtre culturelle</b> aux visiteurs. <br /> <br /> Dans ce projet, l&apos;écran de la Plaza indique la direction où se trouvent les principaux <b> monuments parisiens</b>, accompagnée de la <b> distance</b> à vol d&apos;oiseau, en <b> kilomètres</b> et en <b> miles</b>, qui sépare <b> la Plaza </b> du <b> monument</b>. </p>",
    images: [
      {
        src: require("../../assets/images/projets/3D/BullitStudio/1_Monuments.jpg"),
        width: 4,
        height: 2,
      },
      {
        src: require("../../assets/images/projets/3D/BullitStudio/2_NotreDame.jpg"),
        width: 11,
        height: 4,
      },
      {
        src: require("../../assets/images/projets/3D/BullitStudio/3_Invalides.jpg"),
        width: 11,
        height: 4,
      },
      {
        src: require("../../assets/images/projets/3D/BullitStudio/4_SacreCoeur.jpg"),
        width: 11,
        height: 4,
      },
      {
        src: require("../../assets/images/projets/3D/BullitStudio/5_ArcDeTriomphe.jpg"),
        width: 3,
        height: 1,
      },
      {
        src: require("../../assets/images/projets/3D/BullitStudio/6_MonumentsWireFrame.jpg"),
        width: 9,
        height: 2,
      },
      {
        src: require("../../assets/images/projets/3D/BullitStudio/7_Composition.jpg"),
        width: 9,
        height: 2,
      },
    ],
  },
  {
    id: 6,
    thumbnail: {
      url: require("../../assets/images/projets/Thumbnails/3D/Thumbnail_LaDefenseArena.jpg"),
      urlSD: require("../../assets/images/projets/Thumbnails/3D/Thumbnail_LaDefenseArena_SD.jpg"),
      width: 800,
      height: 793,
    },
    title: "La Défense Arena",
    location: "Pacifa Decision",
    path: "/la-defense-arena",
    category: "Infographie 3D",
    year: "2016",
    website: {
      name: "www.pacifa-decision.com",
      url: "http://www.pacifa-decision.com/?lang=fr",
    },
    tags: [
      "3ds Max",
      "Mental Ray",
      "V-Ray",
      "Max Script",
      "Rail clone",
      "Substance painter",
      "Photoshop",
    ],
    description:
      "<p> Pacifa Decision est le <b> leader Européen </b> de la modélisation en 3D <b> d&apos;installations sportives </b> proposant à ses clients des <b> outils innovants et dynamiques </b> qui leur permettent de <b> booster leur visibilité</b>, ainsi que les <b> ventes de billets </b> à la fois grand public et hospitalités. <br /> <br /> Au sein des équipes de Pacifa Decision, j&apos;ai été amené à travailler sur les premiers <b> rendus 3D </b> de <b> la Défense Arena</b>, alors que celle-ci était encore en construction, que ce soit en configuration <b> rugby</b>,<b> salle de concert </b> ou l&apos;intérieur des <b> futures loges</b>. </p>",
    type: "pano",
    images: [
      {
        src: require("../../assets/images/projets/3D/Pacifa/LaDefenseArena/1_LaDefenseArena_PanoRugby.jpg"),
        yaw: 270,
      },
      {
        src: require("../../assets/images/projets/3D/Pacifa/LaDefenseArena/2_LaDefenseArena_PanoSalleConcert.jpg"),
        yaw: 270,
      },
      {
        src: require("../../assets/images/projets/3D/Pacifa/LaDefenseArena/3_LaDefenseArena_PanoSalon2.jpg"),
        yaw: 180,
      },
      {
        src: require("../../assets/images/projets/3D/Pacifa/LaDefenseArena/4_LaDefenseArena_PanoSalon3.jpg"),
        yaw: 50,
      },
      {
        src: require("../../assets/images/projets/3D/Pacifa/LaDefenseArena/5_LaDefenseArena_PanoSalon1.jpg"),
        yaw: 270,
      },
      {
        src: require("../../assets/images/projets/3D/Pacifa/LaDefenseArena/6_LaDefenseArena_PanoSalon4.jpg"),
        yaw: 270,
      },
      {
        src: require("../../assets/images/projets/3D/Pacifa/LaDefenseArena/7_LaDefenseArena_PanoSalon5.jpg"),
        yaw: 220,
      },
      {
        src: require("../../assets/images/projets/3D/Pacifa/LaDefenseArena/8_LaDefenseArena_PanoSalon6.jpg"),
        yaw: 180,
      },
      {
        src: require("../../assets/images/projets/3D/Pacifa/LaDefenseArena/9_LaDefenseArena_PanoSalon8.jpg"),
        yaw: 240,
      },
    ],
  },
  {
    id: 5,
    thumbnail: {
      url: require("../../assets/images/projets/Thumbnails/3D/Thumbnail_Archi.jpg"),
      urlSD: require("../../assets/images/projets/Thumbnails/3D/Thumbnail_Archi_SD.jpg"),
      width: 800,
      height: 668,
    },
    title: "Architecture 3D",
    location: "Projets personnels",
    path: "/architecture-3d",
    category: "Infographie 3D",
    year: "2017",
    website: {
      name: "",
      url: "",
    },
    tags: ["3ds Max", "V-ray", "Substance painter", "Photoshop"],
    description:
      "<p> Voici quelques <b> scènes d&apos;architecture 3D </b> réalisées sur mon temps libre. <br /> J&apos;ai pu expérimenter différents <b> éclairages </b> et <b> compositions </b> que ce soit dans un style <b> réaliste </b> ou <b> semi-réaliste</b>, en <b> intérieur </b> ou en <b> extérieur</b>. </p>",
    images: [
      {
        src: require("../../assets/images/projets/3D/Architecture/1_Salon.jpg"),
        width: 5,
        height: 4,
      },
      {
        src: require("../../assets/images/projets/3D/Architecture/2_HarlemStreet.jpg"),
        width: 7,
        height: 4,
      },
      {
        src: require("../../assets/images/projets/3D/Architecture/3_Maison.jpg"),
        width: 7,
        height: 4,
      },
      {
        src: require("../../assets/images/projets/3D/Architecture/4_SalleDebain.jpg"),
        width: 4,
        height: 5,
      },
      {
        src: require("../../assets/images/projets/3D/Architecture/5_Montagne.jpg"),
        width: 3,
        height: 4,
      },
    ],
  },
  {
    id: 4,
    thumbnail: {
      url: require("../../assets/images/projets/Thumbnails/3D/Thumbnail_Vues3D.jpg"),
      urlSD: require("../../assets/images/projets/Thumbnails/3D/Thumbnail_Vues3D_SD.jpg"),
      width: 1200,
      height: 600,
    },
    title: "Vues 3D pour billeteries",
    location: "Pacifa Decision",
    path: "/billeterie-3D",
    category: "Infographie 3D",
    year: "2015",
    website: {
      name: "www.pacifa-decision.com",
      url: "http://www.pacifa-decision.com/?lang=fr",
    },
    tags: [
      "3ds Max",
      "Mental Ray",
      "V-Ray",
      "Max Script",
      "Rail clone",
      "Forest pack",
      "Substance painter",
      "Photoshop",
    ],
    description:
      "<p> Pacifa Decision est le <b> leader Européen </b> de la modélisation en 3D <b> d&apos;installations sportives </b> proposant à ses clients des <b> outils innovants et dynamiques </b> qui leur permettent de <b> booster leur visibilité</b>, ainsi que les <b> ventes de billets </b> à la fois grand public et hospitalités. <br /> <br /> Au sein des équipes de Pacifa Decision, j&apos;ai été amené à travailler sur les <b> rendus 3D </b> de différentes <b> billeteries en ligne</b>, que ce soit pour des <b> stades de football </b> (Parc des Princes, Vélodrome, stade Louis II, Santiago Bernabéu), des <b> salles de basketball </b> (BCM Gravelines, SLUC Nancy), des <b> salles de spectacle </b> (Folies Bergère), des <b> terrains de tennis </b> (Rolland Garros) ou encore des <b> hippodromes </b> (ParisLongchamp). <br /> J&apos;ai également participé à des projets proposant diverses <b> expériences VR </b> aux clients de Pacifa Decision. </p>",
    type: "pano",
    images: [
      {
        src: require("../../assets/images/projets/3D/Pacifa/1_Pacifa_Pano.jpg"),
        yaw: 270,
      },
      {
        src: require("../../assets/images/projets/3D/Pacifa/2_Pacifa_Pano.jpg"),
        yaw: 270,
      },
      {
        src: require("../../assets/images/projets/3D/Pacifa/3_Pacifa_Pano.jpg"),
        yaw: 180,
      },
      {
        src: require("../../assets/images/projets/3D/Pacifa/4_Pacifa_Pano.jpg"),
        yaw: 320,
      },
      {
        src: require("../../assets/images/projets/3D/Pacifa/5_Pacifa_Pano.jpg"),
        yaw: 270,
      },
      {
        src: require("../../assets/images/projets/3D/Pacifa/6_Pacifa_Pano.jpg"),
        yaw: 220,
      },
    ],
  },
  {
    id: 3,
    thumbnail: {
      url: require("../../assets/images/projets/Thumbnails/2D/Thumbnail_Uvsq.png"),
      urlSD: require("../../assets/images/projets/Thumbnails/2D/Thumbnail_Uvsq_SD.jpg"),
      width: 700,
      height: 855,
    },
    title: "Maquettes et illustrations",
    location: "UVSQ",
    path: "/maquettes-et-illustrations",
    category: "Infographie 2D",
    year: "2017",
    website: {
      name: "",
      url: "",
    },
    tags: ["Photoshop", "Illustrator", "Indesign"],
    description:
      "<p> Durant mon stage de deuxième année de DUT, au <b> pôle communication </b> de <b> l&apos;Université de Versailles Saint-Quentin en Yvelines</b> , j&apos;ai pu assiter la directrice de communication. <br /> <br /> Mes missions étaient variées, allant de la création <b> d&apos;affiche</b>,<b> kakemono</b>,<b> leaflet</b>, <b> totem</b>,<b> plan d&apos;orientation </b> en passant par des <b> bannières web </b> et des <b> pictogrammes</b> . <br /> <br /> J&apos;ai également pu épauler le <b> chargé de production audiovisuelle</b> sur différents tournages de <b>vidéos institutionelles</b>. </p>",
    images: [
      {
        src: require("../../assets/images/projets/2D/Uvsq/1_Affiche0.jpg"),
        width: 5,
        height: 7,
      },
      {
        src: require("../../assets/images/projets/2D/Uvsq/2_Affiche1.jpg"),
        width: 3,
        height: 2,
      },
      {
        src: require("../../assets/images/projets/2D/Uvsq/3_Affiche2.jpg"),
        width: 5,
        height: 7,
      },
      {
        src: require("../../assets/images/projets/2D/Uvsq/4_Affiche3.jpg"),
        width: 5,
        height: 2,
      },
      {
        src: require("../../assets/images/projets/2D/Uvsq/5_Affiche4.jpg"),
        width: 5,
        height: 6,
      },
      {
        src: require("../../assets/images/projets/2D/Uvsq/6_Affiche5.jpg"),
        width: 3,
        height: 2,
      },
      {
        src: require("../../assets/images/projets/2D/Uvsq/7_Affiche6.jpg"),
        width: 3,
        height: 2,
      },
      {
        src: require("../../assets/images/projets/2D/Uvsq/8_Affiche7.jpg"),
        width: 5,
        height: 7,
      },
      {
        src: require("../../assets/images/projets/2D/Uvsq/9_Affiche8.jpg"),
        width: 5,
        height: 7,
      },
      {
        src: require("../../assets/images/projets/2D/Uvsq/10_Depliant1.jpg"),
        width: 3,
        height: 4,
      },
      {
        src: require("../../assets/images/projets/2D/Uvsq/11_Depliant2.jpg"),
        width: 5,
        height: 4,
      },
      {
        src: require("../../assets/images/projets/2D/Uvsq/12_totem.jpg"),
        width: 3,
        height: 3,
      },
      {
        src: require("../../assets/images/projets/2D/Uvsq/13_pictos.jpg"),
        width: 4,
        height: 2,
      },
    ],
  },
  {
    id: 2,
    thumbnail: {
      url: require("../../assets/images/projets/Thumbnails/3D/Thumbnail_HellsKitchen.jpg"),
      urlSD: require("../../assets/images/projets/Thumbnails/3D/Thumbnail_HellsKitchen_SD.jpg"),
      width: 800,
      height: 800,
    },
    title: "Hell's Kitchen",
    location: "Projet personnel",
    path: "/hells-kitchen",
    category: "Infographie 3D",
    year: "2017",
    website: {
      name: "",
      url: "",
    },
    tags: ["3ds Max", "V-ray", "Substance painter", "Photoshop"],
    description:
      "<p> Sur mon temps libre, j&apos;ai débuté une série de <b> scènes 3D </b> mettant en lumière des <b> fruits </b> et <b> légumes </b> dans une cuisine peu commode à<b> l&apos;atmosphère dangereuse</b>. </p>",
    images: [
      {
        src: require("../../assets/images/projets/3D/Kitchen/1_Aubergine.jpg"),
        width: 1,
        height: 1,
      },
      {
        src: require("../../assets/images/projets/3D/Kitchen/2_Poire.jpg"),
        width: 1,
        height: 1,
      },
    ],
  },
  {
    id: 1,
    thumbnail: {
      url: require("../../assets/images/projets/Thumbnails/2D/Thumbnail_BreakingBad.jpg"),
      urlSD: require("../../assets/images/projets/Thumbnails/2D/Thumbnail_BreakingBad_SD.jpg"),
      width: 800,
      height: 450,
    },
    title: "Heisenberg",
    location: "Projet personnel",
    path: "/heisenberg",
    category: "Infographie 2D",
    year: "2017",
    website: {
      name: "",
      url: "",
    },
    tags: ["Illustrator", "Tablette graphique", "Papier & crayon"],
    description:
      "<p> En tant que fan de la série <b> Breaking Bad</b>, j&apos;ai réalisé cette infographie en hommage à<b> Heisenberg </b> qui connnait une fin tragique. <br /> Il est ici fait référence à cette <b> scène symbolique </b> où il déclare cette réplique mythique <b> &quot;Say my name&quot;</b>. </p>",
    images: [
      {
        src: require("../../assets/images/projets/2D/Heinsenberg.jpg"),
        width: 7,
        height: 4,
      },
    ],
  },
];

export default PROJECTS_LIST;
