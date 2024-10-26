import { DeadSilence, NoOneIMG, SilentStorm } from "../assets"

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

export const albums = [
    {
        id: "dead_silence",
        title: "Dead Silence",
        year: 2012,
        cover: DeadSilence,
        songs: [
            { title: "Moving to be Fast", length: "3:29" },
            { title: "Puppet", length: "4:31" },
            { title: "Fire", length: "5:04" },
            { title: "Bad Time", length: "4:46" },
            { title: "Two Voices", length: "3:52" },
            { title: "The Prophet", length: "3:48" },
            { title: "Dead Silence", length: "4:25" },
            { title: "Needed by Nobody", length: "3:28" },
            { title: "Native Land", length: "6:29" },
            { title: "Town of Dreams", length: "4:32" },
            { title: "Outro", length: "1:27" },
        ]
    },
    {
        id: "silent_storm",
        title: "Silent Storm",
        year: 2020,
        cover: SilentStorm,
        songs: [
            { title: "Silent Storm", length: "3:28" },
        ]
    },
    {
        id: "no_one",
        title: "No One",
        year: 2024,
        cover: NoOneIMG,
        songs: [
            { title: "No One", length: "5:19" },
            { title: "Lies We Live", length: "2:56" },
            { title: "No Creation", length: "4:51" },
            { title: "Dictator's Game", length: "3:07" },
            { title: "Who Am I", length: "5:29" },
            { title: "Drowning in Denial", length: "4:59" },
            { title: "Insanity", length: "3:57" },
            { title: "Fade Away (Instrumental)", length: "4:30" },
            { title: "Deception's Grid", length: "3:44" },
            { title: "Trapped Inside", length: "3:43" },
            { title: "Farewell (Outro Instrumental)", length: "2:23" },
        ]
    }
]