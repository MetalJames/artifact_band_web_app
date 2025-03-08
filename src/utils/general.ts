import { dead_silence, fire, no_creation, no_one, who_am_i } from "../assets/songs";

export const navLinks = [
    {
        id: "home",
        title: "Home",
        link: "/",
    },
    {
        id: "ourmusic",
        title: "Music",
        link: "/music",
    },
    {
        id: "band",
        title: "Band",
        link: "/band",
    },
]

export const tracks = [
    {
        title: "No One",
        album: "No One",
        src: no_one
    },
    {
        title: "Fire",
        album: "Dead Silence",
        src: fire
    },
    {
        title: "No Creation",
        album: "No One",
        src: no_creation
    },
    {
        title: "Who Am I",
        album: "No One",
        src: who_am_i
    },
    {
        title: "Dead Silence",
        album: "Dead Silence",
        src: dead_silence
    }
];

export const shortAbout = {
    title: "ARTIFACT",
    
    seoTextOne: "Welcome to ",
    seoTextTwo: "Artifact Metal Band - ",
    seoTextThree: "Official Thrash Metal Band Website.",
    description: "Artifact is a Ukrainian thrash metal band founded in November 2005 in Lviv, Ukraine. The early days of Artifact were filled with relentless practice, experimenting with sound, and finding the right balance—first building a raw thrash metal foundation, Dead Silence(2012), before evolving further in the second album, No One (2024), where Artifact fully shaped its signature sound—Artifact Metal—merging thrash intensity with groove-driven elements and drop D tuning. \n\nArtifact has released two full albums, Dead Silence (2012) and No One (2024), along with the instrumental single Silent Storm (2020).",

    
    
    announcement: "2025 marks Artifact’s 20th anniversary, and to celebrate, a remastered edition of 'Dead Silence' will be released.",
    statement: "The music is not just meant to be heard but to be felt!",
    members: {
        current: { name: "Volodymyr Ruzhak", role: "Vocal, Guitar, Solo (formerly), Full Instrumentation & Production" },
        past: {
            zet: { name: "Igor Grant", role: "Drums, Backing Vocal (past member)" },
            vidoq: { name: "Viktor Matushek", role: "Bass, Backing Vocal (past member)" },
        }
    },
    callToAction: "Read more about Artifact"
};