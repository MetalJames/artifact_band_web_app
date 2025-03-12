import { DeadSilence, deadSilence_full_hd, NoOneIMG, NoOneIMGSmall, SilentStorm, SilentStormSmall } from "../assets"

export const albums = [
    {
        id: "dead_silence_remastered",
        title: "Dead Silence (Remastered)",
        type: "Album",
        year: 2025,
        cover: deadSilence_full_hd,
        songs: [
            { title: "Moving to be Fast", length: "3:29", youtubeLink: "" },
            { title: "Puppet", length: "4:31", youtubeLink: "" },
            { title: "Fire", length: "5:04", youtubeLink: "" },
            { title: "Bad Time", length: "4:46", youtubeLink: "" },
            { title: "Two Voices", length: "3:52", youtubeLink: "" },
            { title: "The Prophet", length: "3:48", youtubeLink: "" },
            { title: "Dead Silence", length: "4:25", youtubeLink: "" },
            { title: "Needed by Nobody", length: "3:28", youtubeLink: "" },
            { title: "Native Land", length: "6:29", youtubeLink: "" },
            { title: "Town of Dreams", length: "4:32", youtubeLink: "" },
            { title: "Outro", length: "1:27", youtubeLink: "" }
        ],
        albumInfo: {
            introduction: "Originally recorded at Artifact Studio, Dead Silence captures the raw, collective spirit of Artifact’s journey. The album was created as a trio, with Volodymyr Ruzhak on vocals and guitar, Igor Grant on drums, and Viktor Matushek on bass—each contributing both musically and vocally to shape its intense, layered sound. \n\n2025 marks 20 years of Artifact, and to honor this milestone, Dead Silence is being remastered and re-released. Dead Silence was where it all started, and now, 13 years later, it returns with the same power—only sharper, clearer, and more alive. The remaster features improved mix balance, more defined instrument separation, and modernized mastering techniques to match today’s high-fidelity standards. Each track has been carefully refined to bring out the full impact of its sound.",
            credits: {
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
                recordingLocation: "Originally recorded at Artifact Studio, remastered in 2025.",
                mastering: "Remastered by: Volodymyr Ruzhak"
            },
            artworkAndDesign: {
                coverArt: "The album cover has been reimagined by Iuliia Polinovska, enhancing the original concept with greater detail, sharper contrast, and a refined visual aesthetic that amplifies the themes of Dead Silence.",
                layoutDesign: "Cover Art & Layout Design: Iuliia Polinovska"
            },
            specialThanks: "We would like to extend our gratitude to our families, friends, and fans who continue to inspire and support us through every note. Special thanks to Igor Grant and Viktor Matushek for their contributions to the original album and to Iuliia Polinovska for revitalizing its visual essence in this remaster."
        }
    },
    {
        id: "no_one",
        title: "No One",
        type: "Album",
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
            { title: "Fade Away", length: "4:30", youtubeLink: 'https://youtu.be/nJcVBd1LFqs' },
            { title: "Deception's Grid", length: "3:44", youtubeLink: 'https://youtu.be/HnyAk-3MwS4' },
            { title: "Trapped Inside", length: "3:43", youtubeLink: 'https://youtu.be/OJF2iiBWWrk' },
            { title: "Another Day", length: "2:23", youtubeLink: 'https://youtu.be/mZilyOg7Bx0' },
        ],
        albumInfo: {
            introduction: "Recorded at Artifact Studio, No One represents a turning point in Artifact’s journey. After establishing a raw thrash metal foundation with Dead Silence (2012), this album fully shapes the band's signature sound—Artifact Metal—merging thrash intensity with groove-driven elements and drop D tuning. Unlike its predecessor, No One explores deeper themes of isolation, resilience, and self-reflection, both musically and lyrically. The recording process remained true to Artifact’s independent roots, with vocals captured in a makeshift studio, reinforcing the raw and personal nature of the album. \n\nThis album is also a testament to time and persistence—two of its tracks, No One and Lies We Live, were first brought to life in 2012 with original members Igor Grant and Viktor Matushek. Over the years, new ideas emerged, with songs written across more than a decade—from 2015 to 2020—before the final compositions, Who Am I and Drowning in Denial, were created in 2023, completed in January 2024 and recorded last, bringing the album full circle.",
            credits: {
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
            specialThanks: "We would like to extend our gratitude to our family, friends, and fans who continue to inspire and support us through every note. Special thanks to Iuliia Polinovska for her hard work on the album cover."
        }
    },
    {
        id: "dead_silence",
        title: "Dead Silence",
        type: "Album",
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
            introduction: "Recorded in Artifact Studio, Dead Silence captures the raw, collective spirit of our band’s journey. Originally a four-member group, the album became a trio after one guitarist departed during recording. Each member brought their own energy—Volodymyr Ruzhak on vocals and guitar, Igor Grant on drums, and Viktor Matushek on bass—contributing both musically and vocally to shape the album’s intense, layered sound.",
            credits: {
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
        type: "Single",
        year: 2020,
        cover: SilentStorm,
        coverSmall: SilentStormSmall,
        songs: [
            { title: "Silent Storm", length: "3:28", youtubeLink: 'https://youtu.be/Q4mG85fgQzM' },
        ],
        albumInfo: {
            introduction: "Recorded at Artifact Studio, Silent Storm marked Artifact’s return after years of silence. Composed, recorded, and produced solely by Volodymyr Ruzhak at home, the instrumental track carries a sense of uncertainty and transition, evolving from serenity into intensity.",
            credits: {
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