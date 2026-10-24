const PROJECTS = {
    1: {
        name: "SAE — Jeu Scratch",
        media: {
            type: "image",
            src: "./img/Jeu_scratch.png"
        },
        description: `Dans le cadre de cette SAE, nous devions concevoir un jeu de labyrinthe en utilisant la
                        plateforme Scratch. L’objectif était de créer une expérience de jeu simple mais fonctionnelle,
                        le projet devait également respecter un délai d’une semaine, ce
                        qui impliquait une organisation efficace et une bonne répartition des tâches car ce travail s’est
                        réalisé en binôme.`,
        role: `Au sein du binôme, mes tâches consistaient
                        notamment à programmer la plusparts des fonctionnalités, comme les
                        déplacement et à veiller au bon fonctionnement des différents éléments interactifs. Le travail
                        en équipe m’a permis de collaborer sur les idées, de partager les
                        responsabilités et d’assurer ensemble la qualité du projet final.`,
        links: [
            { label: "Lien du projet", url: "https://scratch.mit.edu/projects/1072078449" }
        ]
    },

    2: {
        name: "SAE — Site web",
        media: {
            type: "image",
            src: "./img/img_SAE.webp"
        },
        description: "Cette SAE consistait à créer un site web dédié à un événement sportif. Avec mon groupe, nous avons choisi de travailler sur le béhourd. En parallèle, nous devions réaliser une étude d’opportunité et une étude de faisabilité, toujours en groupe de quatre. L’objectif final était d’héberger notre site sur le serveur de l’IUT.",
        role: "Au sein du groupe, j’ai contribué à la création du site ainsi qu’à la réalisation des études demandées. J’ai participé à la conception des pages, à leur mise en forme et à l’organisation du contenu. J’ai également pris part au travail collectif pour rédiger les analyses et préparer la mise en ligne du projet sur le serveur de l’IUT.",
        links: [
            { label: "Dossier du site", url: "" }
        ]
    },

    3: {
        name: "SAE - Cinécup",
        media: {
            type: "image",
            src: "./img/cinecup.png"
        },
        description: "Dans cette SAE, nous devions créer un site web permettant aux utilisateurs de voter pour leur film préféré. Le site proposait différents thèmes de tournois, comme l’action ou l’animation, afin d’organiser les votes par catégories. Le principal défi du projet résidait dans la mise en place d’une base de données et dans son intégration avec le site web pour enregistrer et gérer les votes.",
        role: "Mon rôle a été de contribuer à la conception du site et à l’intégration de la base de données. J’ai participé à la structure des pages, à la mise en place du système de vote et au lien entre l’interface et la base de données. J’ai également aidé aux tests pour vérifier que les votes étaient bien enregistrés et que le site fonctionnait correctement.",
        links: [
            { label: "Lien du site", url: "https://testjojo.alwaysdata.net/" }
        ]
    },

    4: {
        name: "SAE - Poket Film",
        media: {
            type: "video",
            embed: "https://www.youtube.com/embed/nQzvRVD9D_A"
        },
        description: "Dans cette SAE, nous devions créer un poket film autour du thème « Petit à Petit ». Le projet se déroulait en deux phases : une première semaine consacrée à la réalisation du dossier (scénario, découpage, organisation) et au tournage des scènes, puis une deuxième semaine dédiée entièrement au montage vidéo. Ce travail en groupe de trois avait pour objectif de nous faire expérimenter toutes les étapes de la création d’un film, de la préparation à la post-production.",
        role: "Durant ce projet, j'ai participer à l'écriture du scénario et à la planification du tournage avec mon équipe. Cependant, ma contribution principale s'est concentrée sur le cadrage et le montage vidéo.",
        links: [
            { label: "Lien vers youtube", url: "https://www.youtube.com/embed/nQzvRVD9D_A" }
        ]
    },

    5: {
        name: "SAE -Court Métrage",
        media: {
            type: "video",
            embed: "https://www.youtube.com/embed/ATQcu9rFHRY"
        },
        description: "Dans cette SAE, nous avons réalisé un court-métrage en groupe de quatre, intitulé « Interférence ». Le déroulement du projet reprenait les mêmes étapes que celui du pocket film : préparation du dossier, tournage, puis montage. Cependant, nous disposions de plus de temps pour filmer et monter, ce qui nous permettait d’approfondir la mise en scène et d’améliorer la qualité du rendu final.",
        role: "Au sein de l’équipe, j’ai participé à l’écriture du dossier et aider à la réalisation de certaine scène lors du tournage. Mais mon rôle principal s’est concentré sur le montage vidéo. J’ai utilisé Davinci pour assembler les séquences filmées, ajouter des effets, de la musique et des transitions afin de créer un court-métrage cohérent et engageant.",
        links: [
            { label: "Lien vers youtube", url: "https://www.youtube.com/embed/ATQcu9rFHRY" }
        ]
    },

    6: {
        name :"SAE - Zelda Like MRRD",
        media:{
            type : "image",
            src : "./img/MRRD.png"
        },
        description:"Dans le cadre de cette SAE, nous devions concevoir un jeu 2D de type Zelda-like sur Unity. Le projet s’est déroulé sur trois mois, ce qui nous a permis de construire une expérience de jeu complète, avec exploration, interactions et progression. Ce travail s’est réalisé en équipe de trois, avec une organisation et une répartition des tâches suivies tout au long du projet.",
        role:"Au sein de l’équipe, je me suis principalement occupé de la partie code : mise en place des mécaniques de jeu et des différents systèmes interactifs. J’ai également participé à la création graphique en réalisant certains assets de personnages. Le travail en équipe m’a permis de coordonner mes développements avec le travail visuel et le game design de mes collègues.",
        links:[
            {label:"Lien itch", url:"https://lethifold-lw.itch.io/mrrd"}
        ]
    },

    7: {
        name :"Stage - Refonte d'un site web",
        media:{
            type : "image",
            src : "./img/EchequierBigorre.png"
        },
        description:"Lors de mon stage de deux mois, j’ai participé à la refonte complète du site web de l’Échiquier de Bigorre, le club d’échecs local. L’objectif était de moderniser le site, d’en améliorer l’apparence et de le rendre agréable à utiliser quel que soit l’appareil. Ce projet a été réalisé en binôme.",
        role:"Je me suis concentré sur la partie graphique du site ainsi que sur son aspect responsive, afin de garantir une bonne lisibilité sur ordinateur, tablette et mobile. J’ai également participé au développement de certaines pages du site, ce qui m’a permis de travailler à la fois sur le design et sur l’intégration.",
        links:[
            {label:"Lien du site", url:"https://www.echiquierdebigorre.fr/"}
        ]
    },

    8: {
        name :"Game Jam - One Quest : Gambling",
        media:{
            type : "image",
            src : "./img/OQG.png"
        },
        description:"One Quest Gambling est un jeu en réalité virtuelle développé en seulement quatre jours, en groupe de trois. La seule contrainte imposée était d’utiliser le modèle 3D du bâtiment MMI comme base de l’environnement. Ce délai très court a demandé une bonne organisation et une répartition efficace des tâches.",
        role:"Mon travail a principalement porté sur l’aspect visuel et sonore du projet : recherche d’assets 3D gratuits, sélection des sons à intégrer, création du logo et d’autres éléments graphiques. J’ai aussi réalisé le montage de la vidéo de présentation du gameplay.",
        links:[
            {label:"lien itch", url:"https://albertreporter.itch.io/one-quest-gambling"}
        ]
    },

    9: {
        name :"Expérience VR",
        media:{
            type : "image",
            src : "./img/ExpierVirtuel.png"
        },
        description:"Ce projet consistait à créer, en binôme et sur deux semaines, une expérience en réalité virtuelle basée sur le souffle. Il fallait donc coder la détection du souffle via le casque VR. Nous avons choisi un thème de dragon : le joueur se trouve dans une grotte et, lorsque son souffle est détecté, des flammes sortent de sa bouche.",
        role:"Je me suis occupé de la partie visuelle, avec la recherche des assets pour l’ambiance de la grotte et la création de l’effet de flammes déclenché à la détection du souffle. J’ai aussi travaillé sur l’interaction : le feu peut allumer des torches dans l’environnement, ce qui renforce l’immersion.",
        links:[
            {label:"lien itch", url:"https://luffyy321.itch.io/expirer-le-virtuel"}
        ]
    },

    10: {
        name :"Projet de jeu Personnel",
        media:{
            type : "image",
            src : "./img/commingSoon.webp"
        },
        description:"Projet personnel développé seul, Long Time Later est un jeu 2D en pixel art inspiré de l’animé Frieren. Il s’agit d’un puzzle game construit autour d’un lien fort avec le temps. Le projet est actuellement en cours de développement.",
        role:"Ce projet étant en solo, je m’occupe de l’ensemble de la création : conception du game design, développement et direction artistique. Il me permet d’expérimenter mes idées et de développer mon autonomie sur toutes les étapes de création d’un jeu.",

    },


};
