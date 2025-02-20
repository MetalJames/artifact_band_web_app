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
    {
        id: "no_one",
        title: "No One",
        year: 2024,
        cover: NoOneIMG,
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
]

export const bandInfo = {
    // overviewOne: "Artifact, a Ukrainian thrash metal band founded in 2005, has journeyed through an evolving lineup and a steadfast commitment to thrash metal. Originally experimenting with heavy metal and thrash, the band eventually embraced thrash metal as their defining style, solidifying their three-member lineup with Volodymyr Ruzhak on vocals and guitar, Igor Grant on drums, and Viktor Matushek on bass. The band began performing live in 2007, extending their reach beyond local venues to major cities like Kyiv, Lviv, and Rivne. Artifact’s early work culminated in their first demo album in 2010, featuring the song “Dead Silence” and a cover of Metallica’s “Creeping Death.”",
    earlyYearsAndLineup: "Artifact, a Ukrainian thrash metal band founded in 2005, started as a four-member group with a vision of blending heavy and thrash metal into a modernized, high-energy sound. While the band initially experimented with both styles, its identity leaned toward thrash metal—though early compositions still carried elements of classic heavy metal. However, over time, one member was always falling behind, either due to a lack of commitment or a reluctance to fully get into thrash metal. This led to the formation of Artifact’s core lineup, consisting of three dedicated members who gave their absolute best to the band: Volodymyr Ruzhak – Vocals, Guitar, Solo; Viktor Matushek – Bass, Backing Vocals; Igor Grant – Drums, Backing Vocals.",
    livePerformancesAndRecognition: "The band began performing live in 2007, expanding beyond local venues to major cities in Western Ukraine, including Lviv, Rivne, and Novoyavorivsk, while also making an impact at multiple festivals in Kyiv. During this period, Artifact gained recognition in the Ukrainian metal scene, earning third place in a national amateur metal competition and being highlighted in EXPRESS magazine in the article Grandma Will Not Like It as one of the top thrash metal bands in the region. The publication wrote: 'As for Ukraine, we have almost no artists working in this style. The only band that comes to mind is ARTIFACT.'",
    demosAndTransitionToEnglish: "Initially performing in Ukrainian, Artifact later transitioned to English lyrics to reach a broader audience and meet festival requirements. By 2010, the band released its first demo, featuring the tracks 'Rukhaysya Shvydshe' (Moving to Be Fast), 'Misto Sniv' (Town of Dreams), 'Live at Studio' (later renamed Two Voices), and 'Drum in Studio,' a drum solo by Igor Grant. This demo marked an important step in shaping Artifact’s sound, leading to the development of their full-length debut album, Dead Silence (2012).",
    evolutionIntoArtifactMetal: "Over time, Artifact evolved into its own unique sound—Artifact Metal—blending raw thrash energy with groove-heavy elements and drop D tuning, a transition that became even more pronounced in their second album, 'No One' (2024).",



    overviewTwo: "In 2011, Artifact began work on their debut album, Dead Silence, recorded at Artifact Studio and officially released in September 2012. The recording process was split into two key phases—tracking the instruments and vocals, followed by an extensive period of mastering and fine-tuning the sound. With a limited budget, the band dedicated countless hours to critical listening, refining the mix to achieve the best quality possible. Artifact set up their own recording space, allowing for a fully independent process where every member contributed with full strength and support. Unfortunately, one member left before the recording was completed, but the remaining trio pushed forward to finish the album. \n\nThroughout the recording, Iuliia Polinovska presented multiple artwork concepts, and after careful consideration, the band selected the final design, which visually captured the album’s haunting themes. In September 2012, Dead Silence was released online and as a limited edition audio CD. Shortly after its release, Artifact took a break as Volodymyr relocated to Canada, putting the band on hold.",
    
    overviewTree: "In 2020, Artifact broke their silence with the release of Silent Storm, an instrumental single composed, recorded, and produced solely by Volodymyr Ruzhak at home. Though Artifact had been inactive for years, Volodymyr never stopped writing—storing melodies, structuring riffs in Guitar Pro, and drafting lyrics in preparation for a possible return. Silent Storm became the first step in testing whether he could take full creative control and produce music entirely on his own. The process proved successful, thanks to the encouragement of past band members and the visual artistry of Iuliia Polinovska, who designed the cover art. With renewed confidence, Artifact’s journey resumed, setting the stage for what would come next. \n\nAs fate would have it, Silent Storm was released in September 2022—exactly 10 years after Dead Silence. A coincidence? Maybe. Or perhaps Artifact was always meant to return.",
    overviewFour: "By 2022, with newfound independence, Volodymyr began working on new material, culminating in the 2024 album No One. The album was a deeply introspective work, fully recorded, mixed, and mastered by Volodymyr himself. No One delves into themes of isolation, identity, and resilience, capturing raw emotion both musically and lyrically. \n\nThe recording process was anything but linear. Initially unsure if the project would ever be completed, Volodymyr recorded chaotically, testing setups and refining his approach. The first track recorded, No Creation, served as an experiment to determine the workflow. As the process gained momentum, he found himself rehearsing and recording relentlessly, refining both lyrics and compositions along the way. \n\nAt the start, seven fully written tracks were ready, but the album's vision kept evolving. Determined to match the eleven-track structure of Dead Silence, four additional songs were composed during the recording phase. Drowning in Denial became the final piece, completed in January 2024 and recorded last. \n\nThroughout this journey, Volodymyr received unwavering support from original bandmates Igor Grant and Viktor Matushek, who encouraged him to push forward after hearing early demos. Iuliia Polinovska, a longtime collaborator, was also instrumental—not only in her encouragement but in crafting the album’s striking cover art. While Volodymyr spent 15 months fully immersed in writing, recording, and polishing the album, Iuliia worked on the visual concept from July to September 2024, completing it by early October. \n\nOn October 18, 2024, No One was officially released, marking a significant milestone in Artifact’s evolution.",
    overviewFive: "Despite the logistical challenges and the demands of real life, Artifact continues to create new music. Though currently a solo endeavor, Volodymyr remains committed to Artifact's evolution, embodying its essence through his solo recordings, with gratitude extended to friends, family, and fans who support the journey."
};

export const shortAbout = {
    title: "ARTIFACT",
    // description: "Artifact is a Ukrainian thrash metal band founded in November 2005 in Lviv, Ukraine. The early days were filled with relentless practice, experimenting with sound, and finding the right balance. Through years of dedication, Artifact grew into a band that could proudly say—it was worth every step. \n\nOver time, the band evolved from blending heavy and thrash metal into a modernized, high-energy sound—Artifact Metal—fusing raw thrash intensity with groove-driven elements and drop D tuning. \n\nBy 2010, the band released its first demo, a milestone shaped by the dedication and musicianship of its core trio—Volodymyr Ruzhak (vocals, guitar, solo), Igor Grant (drums, backing vocals), and Viktor Matushek (bass, backing vocals). Each member brought their own energy and vision to the project, solidifying the foundation of what Artifact would become. \n\nThe band has released two full albums, Dead Silence (2012) and No One (2024), along with the instrumental single Silent Storm (2020).",
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