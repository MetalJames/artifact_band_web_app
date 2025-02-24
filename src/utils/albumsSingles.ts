import { DeadSilence, DeadSilenceSmall, NoOneIMG, NoOneIMGSmall, SilentStorm, SilentStormSmall } from "../assets"

export const albums = [
    {
        id: "no_one",
        title: "No One",
        year: 2024,
        cover: NoOneIMG,
        coverSmall: NoOneIMGSmall,
        songs: [
            { title: "No One", length: "5:19", youtubeLink: 'https://youtu.be/0q0XOynOhAI' },
            { title: "Lies We Live", length: "2:56", youtubeLink: 'https://youtu.be/BjU7v8ncsds' },
            { title: "No Creation", length: "4:51", youtubeLink: 'https://youtu.be/w2aY8XpdBbU' },
            { title: "Dictator's Game", length: "3:07", youtubeLink: 'https://youtu.be/SDTKeOIcy04' },
            { title: "Who Am I", length: "5:29", youtubeLink: 'https://youtu.be/4nMNVhNrcGE' },
            { title: "Drowning in Denial", length: "4:59", youtubeLink: 'https://youtu.be/j50OPmiccIk' },
            { title: "Insanity", length: "3:57", youtubeLink: 'https://youtu.be/wAbLpgkK1Bs' },
            { title: "Fade Away (Instrumental)", length: "4:30", youtubeLink: 'https://youtu.be/nJcVBd1LFqs' },
            { title: "Deception's Grid", length: "3:44", youtubeLink: 'https://youtu.be/HnyAk-3MwS4' },
            { title: "Trapped Inside", length: "3:43", youtubeLink: 'https://youtu.be/OJF2iiBWWrk' },
            { title: "Farewell (Outro Instrumental)", length: "2:23", youtubeLink: 'https://youtu.be/mZilyOg7Bx0' },
        ],
        albumInfo: {
            introduction: "Recorded at Artifact Studio, No One represents a turning point in Artifact’s journey. After establishing a raw thrash metal foundation with Dead Silence (2012), this album fully shapes the band's signature sound—Artifact Metal—merging thrash intensity with groove-driven elements and drop D tuning. Unlike its predecessor, No One explores deeper themes of isolation, resilience, and self-reflection, both musically and lyrically. The recording process remained true to Artifact’s independent roots, with vocals captured in a makeshift studio, reinforcing the raw and personal nature of the album. \n\nThis album is also a testament to time and persistence—two of its tracks, No One and Lies We Live, were first brought to life in 2012 with original members Igor Grant and Viktor Matushek. Over the years, new ideas emerged, with songs written across more than a decade—from 2015 to 2020—before the final compositions, Who Am I and Drowning in Denial, were created in 2023, bringing the album full circle.",
            credits: {
                // instrumentsAndProduction: "All Instruments, Vocals, and Production by Volodymyr Ruzhak",
                members: [
                    { instrument: "All Instruments, Vocals, and Production", member: "Volodymyr Ruzhak" }
                ],
                songwriting: [
                    { song: "No One & Lies We Live", music: "Volodymyr Ruzhak, Igor Grant, and Viktor Matushek", lyrics: "Volodymyr Ruzhak" },
                    { song: "All Other Tracks", music: "Volodymyr Ruzhak", lyrics: "Volodymyr Ruzhak" }
                ],
                recordingLocation: "Recorded and Mixed at Artifact Studio",
                mastering: "Mastered: Self-mastered"
            },
            artworkAndDesign: {
                coverArt: "Album cover art by Iuliia Polinovska transforms the album’s themes into a striking visual. A lone figure stands in a desolate world—a representation of isolation and resilience—while a path replaces their face, symbolizing the unknown journey ahead. The artwork reflects the album’s introspective nature, where destruction and hope exist side by side, mirroring the raw emotion embedded in every track.",
                layoutDesign: "Cover Art & Layout Design: Iuliia Polinovska"
            },
            specialThanks: "I would like to extend my gratitude to my family, friends, and fans who continue to inspire and support me through every note. Special thanks to Iuliia Polinovska for her hard work on the album cover."
        }
    },
    {
        id: "dead_silence",
        title: "Dead Silence",
        year: 2012,
        cover: DeadSilence,
        coverSmall: DeadSilenceSmall,
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
            introduction: "Recorded in Artifact Studio, Dead Silence captures the raw, collective spirit of our band’s journey. Originally a four-member group, the album became a trio after one guitarist departed during recording. Each member brought their own energy—Volodymyr Ruzhak on vocals and guitar, Igor Grant on drums, and Viktor Matushek on bass—contributing both musically and vocally to shape the album’s intense, layered sound.",
            credits: {
                // instrumentsAndProduction: "Volodymyr Ruzhak on Vocals, Guitar, and Solo; Drums performed by Igor Grant; Bass by Viktor Matushek. Backing Vocals also by Igor Grant and Viktor Matushek.",
                members: [
                    { instrument: "Vocals, Guitar, and Solo:", member: " Volodymyr Ruzhak" },
                    { instrument: "Drums & Backing Vocals:", member: " Igor Grant" },
                    { instrument: "Bass & Backing Vocals:", member: " Viktor Matushek" }
                ],
                songwriting: [
                    { song: "Moving to be Fast", music: "Roman Yarema", lyrics: "Volodymyr Ruzhak" },
                    { song: "Town of Dreams", music: "Band collaboration", lyrics: "Viktor Matushek" },
                    { song: "All Other Tracks", music: "Band collaboration", lyrics: "Volodymyr Ruzhak, with contributions from the band" }
                ],
                recordingLocation: "Recorded at: Artifact Studio",
                mastering: "Mastered by: Volodymyr Ruzhak"
            },
            artworkAndDesign: {
                coverArt: "Album cover art by Iuliia Polinovska visually embodies the album’s haunting themes by merging two concepts—Town of Dreams and Dead Silence. The artwork depicts a stark 2D cityscape, a dense skyline outlined in thin white lines against a dark background. It reflects a metropolis where people exist but do not truly live, trapped in routine and silence, mirroring the album’s themes of emptiness and detachment.",
                layoutDesign: "Cover Art & Layout Design: Iuliia Polinovska"
            },
            specialThanks: "We would like to extend our gratitude to our families, friends, and fans who continue to inspire and support us through every note. Special thanks to Iuliia Polinovska for her hard work on the album cover."
        }
    },
]

export const singles = [
        {
        id: "silent_storm",
        title: "Silent Storm",
        year: 2020,
        cover: SilentStorm,
        coverSmall: SilentStormSmall,
        songs: [
            { title: "Silent Storm", length: "3:28", youtubeLink: 'https://youtu.be/Q4mG85fgQzM' },
        ],
        albumInfo: {
            introduction: "Recorded at Artifact Studio, Silent Storm marked Artifact’s return after years of silence. Composed, recorded, and produced solely by Volodymyr Ruzhak at home, the instrumental track carries a sense of uncertainty and transition, evolving from serenity into intensity.",
            credits: {
                // instrumentsAndProduction: "All Instruments and Production by Volodymyr Ruzhak",
                members: [
                    { instrument: "All Instruments and Production", member: "Volodymyr Ruzhak" }
                ],
                songwriting: [{ song: "Silent Storm", music: "Volodymyr Ruzhak", lyrics: "Instrumental" }],
                recordingLocation: "Recorded and Mixed at Artifact Studio",
                mastering: "Mastered: Self-mastered"
            },
            artworkAndDesign: {
                coverArt: "The cover art, created by Iuliia Polinovska, visually mirrors this journey—portraying two figures standing beneath a vast sky, watching stars fall under the glow of an immense moon. The imagery and music together encapsulate a shift from stillness to movement, capturing the emotions of a storm both external and internal.",
                layoutDesign: "Cover Art & Layout Design: Iuliia Polinovska"
            },
            specialThanks: "Special thanks to Iuliia Polinovska for her incredible support and artistic contribution, bringing this instrumental single to life through her beautiful cover artwork."
        }
    },
];