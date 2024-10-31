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
            { title: "Moving to be Fast", length: "3:29", youtubeLink: "https://youtu.be/Tn_bWjefjHg" },
            { title: "Puppet", length: "4:31", youtubeLink: "https://youtu.be/xicnRNp73Tg" },
            { title: "Fire", length: "5:04", youtubeLink: "https://youtu.be/QzsYOu43rBk" },
            { title: "Bad Time", length: "4:46", youtubeLink: "https://youtu.be/EXcOi3iMzAk" },
            { title: "Two Voices", length: "3:52", youtubeLink: "https://youtu.be/3lDvVefWBms" },
            { title: "The Prophet", length: "3:48", youtubeLink: "https://youtu.be/2fgtGG8ygAI" },
            { title: "Dead Silence", length: "4:25", youtubeLink: "https://youtu.be/sVEgA7rM8c0" },
            { title: "Needed by Nobody", length: "3:28", youtubeLink: "https://youtu.be/Am6EBOC8N18" },
            { title: "Native Land", length: "6:29", youtubeLink: "https://youtu.be/afcngbJYokQ" },
            { title: "Town of Dreams", length: "4:32", youtubeLink: "https://youtu.be/piZ24E7PRJU" },
            { title: "Outro", length: "1:27", youtubeLink: "https://youtu.be/-m6U27BT6qk" }
        ],
        albumInfo: {
            introduction: "Recorded in Artifact Studio, Dead Silence captures the raw, collective spirit of our band’s journey. Originally a four-member group, the album became a trio after one guitarist departed during recording. With Volodymyr Ruzhak on lead vocals, solo, and rhythm guitar, Igor Grant on drums, and Viktor Matushek on bass, each member contributed to the songwriting process and taking a part of backing vocals, adding depth and texture to each track.",
            credits: {
                instrumentsAndProduction: "Volodymyr Ruzhak on Vocals, Guitar, and Solo; Drums performed by Igor Grant; Bass by Viktor Matushek. Backing Vocals also by Igor Grant and Viktor Matushek.",
                songwriting: [
                    { song: "Moving to be Fast", music: "Roman Yarema", lyrics: "Volodymyr Ruzhak" },
                    { song: "Town of Dreams", music: "Band collaboration", lyrics: "Viktor Matushek" },
                    { song: "All Other Tracks", music: "Band collaboration", lyrics: "Volodymyr Ruzhak, with contributions from the band" }
                ],
                recordingLocation: "Recorded at Artifact Studio",
                mastering: "Mastered by Volodymyr Ruzhak"
            },
            artworkAndDesign: {
                coverArt: "Album Cover Art by Iuliia Polinovska. The cover features a dark and empty 'Town of Dreams'—a cityscape in stark black and white lines, with a blurred, haunting Artifact logo, symbolizing the ‘dead silence’ that permeates the album.",
                layoutDesign: "Design and Layout by Iuliia Polinovska"
            },
            specialThanks: "We would like to extend our gratitude to our families, friends, and fans who continue to inspire and support us through every note. Special thanks to Iuliia Polinovska for her hard work on the album cover."
        }
    },
    {
        id: "no_one",
        title: "No One",
        year: 2024,
        cover: NoOneIMG,
        songs: [
            { title: "No One", length: "5:19", youtubeLink: 'https://youtu.be/0q0XOynOhAI' },
            { title: "Lies We Live", length: "2:56", youtubeLink: 'https://youtu.be/BjU7v8ncsds' },
            { title: "No Creation", length: "4:51", youtubeLink: '' },
            { title: "Dictator's Game", length: "3:07", youtubeLink: '' },
            { title: "Who Am I", length: "5:29", youtubeLink: '' },
            { title: "Drowning in Denial", length: "4:59", youtubeLink: '' },
            { title: "Insanity", length: "3:57", youtubeLink: '' },
            { title: "Fade Away (Instrumental)", length: "4:30", youtubeLink: '' },
            { title: "Deception's Grid", length: "3:44", youtubeLink: '' },
            { title: "Trapped Inside", length: "3:43", youtubeLink: '' },
            { title: "Farewell (Outro Instrumental)", length: "2:23", youtubeLink: '' },
        ],
        albumInfo: {
            introduction: "Recorded in Artifact Studio, 'No One' brings forth raw, unfiltered energy, capturing the intense isolation and introspection of the recording process. Vocals were recorded in a makeshift vocal booth — my closet — further underscoring the DIY spirit that shaped this album.",
            credits: {
                instrumentsAndProduction: "All Instruments, Vocals, and Production by Volodymyr Ruzhak",
                songwriting: [{ song: "All Tracks", music: "Volodymyr Ruzhak", lyrics: "Volodymyr Ruzhak" }],
                recordingLocation: "Recorded and Mixed at Artifact Studio",
                mastering: "Mastered: Self-mastered"
            },
            artworkAndDesign: {
                coverArt: "Album Cover Art by Iuliia Polinovska detailed illustrations that capture the haunting atmosphere of the album",
                layoutDesign: "Design and Layout by Iuliia Polinovska"
            },
            specialThanks: "I would like to extend my gratitude to my family, friends, and fans who continue to inspire and support me through every note. Special thanks to Iuliia Polinovska for her hard work on the album cover."
        }
    }
]

export const singles = [
        {
        id: "silent_storm",
        title: "Silent Storm",
        year: 2020,
        cover: SilentStorm,
        songs: [
            { title: "Silent Storm", length: "3:28", youtubeLink: 'https://youtu.be/Q4mG85fgQzM' },
        ],
        albumInfo: {
            introduction: "Recorded in Artifact Studio, 'Silent Storm' captures a profound sense of stillness and reflection, uniquely brought to life as an instrumental piece. The track was made to convey the peaceful beauty of calmness.",
            credits: {
                instrumentsAndProduction: "All Instruments and Production by Volodymyr Ruzhak",
                songwriting: [{ song: "Silent Storm", music: "Volodymyr Ruzhak", lyrics: "Instrumental" }],
                recordingLocation: "Recorded and Mixed at Artifact Studio",
                mastering: "Mastered: Self-mastered"
            },
            artworkAndDesign: {
                coverArt: "Cover Art by Iuliia Polinovska. The illustration evokes a serene, silent scene with two figures gazing at a meteor shower, illuminated by a grand moon on the horizon.",
                layoutDesign: "Design and Layout by Iuliia Polinovska"
            },
            specialThanks: "Special thanks to Iuliia Polinovska for her incredible support and artistic contribution, bringing this instrumental single to life through her beautiful cover artwork."
        }
    },
]

export const bandInfo = {
    overviewOne: "Artifact, a Ukrainian thrash metal band founded in 2005, has journeyed through an evolving lineup and a steadfast commitment to thrash metal. Originally experimenting with heavy metal and thrash, the band eventually embraced thrash metal as their defining style, solidifying their three-member lineup with Volodymyr Ruzhak on vocals and guitar, Igor Grant on drums, and Viktor Matushek on bass. The band began performing live in 2007, extending their reach beyond local venues to major cities like Kyiv, Lviv, and Rivne. Artifact’s early work culminated in their first demo album in 2010, featuring the song “Dead Silence” and a cover of Metallica’s “Creeping Death.”",
    overviewTwo: "In 2011, Artifact began work on their debut album, Dead Silence, recorded at Artifact Studio and officially released in 2012. The album was a collaborative effort with contributions from all band members in songwriting, including backing vocals. The cover art, designed by Iuliia Polinovska, visually embodied the album’s haunting themes, depicting an eerie cityscape called the “Town of Dreams.” Shortly after its release, however, the band paused as Volodymyr relocated to Canada, leaving the group on hiatus.",
    overviewTree: "In 2020, Artifact broke their silence with the release of Silent Storm, an instrumental single composed, recorded, and produced solely by Volodymyr Ruzhak at home. This piece captured the essence of calm and reflection and marked a new chapter for Artifact as a one-man project, with cover art again by Iuliia Polinovska.",
    overviewFour: "By 2022, with newfound independence, Volodymyr began working on new material, culminating in the 2024 album No One. The album was a deeply introspective work, fully recorded, mixed, and mastered by Volodymyr himself. Released on YouTube as a weekly song drop, No One comprises 11 tracks that delve into themes of isolation, identity, and self-reflection. Volodymyr recorded the vocals in a makeshift studio setup, capturing the raw essence of the DIY spirit that characterizes Artifact’s recent work. The album cover, by Iuliia Polinovska, artistically conveys the album's haunting and introspective mood.",
    overviewFive: "Despite the logistical challenges and the demands of real life, Artifact continues to create new music. Though currently a solo endeavor, Volodymyr remains committed to Artifact's evolution, embodying its essence through his solo recordings, with gratitude extended to friends, family, and fans who support the journey."
};