# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```


Font Awesome - npm install --save @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons @fortawesome/react-fontawesome


Description of artifact

The Artifact group began its existence in 2005. From the very beginning, the composition of the band changed several times, the problem was that none of the members who played the second guitar wanted to play thrash, and in the end the musicians remained three. At the beginning, Artifact tried themselves in such styles as heavy metal and thrash metal, but the choice was made in favor of the second style, and the band finally decided to play thrash.

From 2006 to 2011, the group changed guitarists, but none of them joined the group. In 2007, the band gave its first solo concert, then the musicians began to perform in various clubs, and not only in their city. During the existence of Artifact, they performed in such large cities as Kyiv, Lviv, Rivne and many others.

In 2010, Artifact recorded a demo album, which also included the song Dead Silecne, as well as a cover of Metallica's Creeping Death. In 2011, the team began work on its first album called "Dead Silence", and in the summer of 2012, the recording of the album ended and it appeared on the Internet.

As of this period, Nurt plays in the team

Ruzhak Vova (Metal-James) - vocals, solo-rhythm guitar
Igor Grant (WindRider) - drums
Viktor Matushek (Vidoq) - bass guitar

In 2012, the band temporarily took a break (Voladymyr Ruzhak moved to Canada)

For a long time, nothing happens because the band does not play, Volodymyr Ruzhak is in Canada, and Igor Grant and Viktor Matushek are in Ukraine.

In 2020, Artifact releases a single called "Silent Storm" after a long hiatus. Everything is written. recorded and mixed by Volodymyr Ruzak at home. The cover was created by Yuliya Polinovska.

Realizing that there is an opportunity to work and record everything himself, in 2022, Volodymyr Ruzhak starts working on material for a new album. Thanks to the support of Yulia Polinovka, already in June 2023, one member of Artifact will start recording an album called "No One". At the same time, while recording the instruments, the writing of the new material is completed, and already in October 2024, the album appears on YouTube (the presentation takes place in the manner of a new song every Friday). The album includes 11 tracks.

Artifact currently has only one member but continues to exist.

There are no plans to end musical activities. Due to real life, there is no opportunity to release new material every year, but nevertheless Artifact is working on new material.

As of this period, Nurt plays in the team

Ruzhak Vova (Metal-James) - vocals, solo-rhythm guitar

Група Artifact розпочала своє існування у 2005 році. Із самого початку склад гурту неодноразово змінювався, проблема полягала в тому, що жоден із учасників, які грали на другій гітарі, не хотів грати треш, і зрештою музиканти залишилися втрьох. На початку Artifact пробували себе у таких стилях, як heavy metal та thrash metal, але вибір був зроблений на користь другого стилю, і гурт остаточно вирішив грати треш.

З 2006 по 2011 рік у колективі змінювалися гітаристи, але жоден з них так і не влився до колективу. У 2007 році гурт дає перший сольний концерт, далі музиканти починають виступати в різних клубах, і не лише у своєму місті. За час існування Artifact виступали у таких великих містах, як Київ, Львів, Рівне та багатьох інших.

У 2010 році Artifact записують демо-альбом, до якого також увійшла пісня Dead Silecne, а також кавер на композицію Metallica Creeping Death. У 2011 році колектив починає роботу над своїм першим альбомом під назвою "Dead Silence", а влітку 2012 запис альбому закінчується і він з'являється в Мережі.

Станом на це період нурт грає у складі

Ружак Вова (Metal-James) - вокал, соло-ритм гітара
Ігор Грант (WindRider) - ударні
Віктор Матушек (Vidoq) - бас гітара

В 2012 році гурт тимчасова встає на паузу(Володимир Ружак переїжджає в Канаду)

На протязі тривалого часу нічого не відбувається адже гурт не грає а Володимир Ружак знаходиться в Канаді а Ігор Грант і Віктор Матушек в Україні.

У 2020 році Artifact після довгої паузи випускає сингл під назвою "Silent Storm". Все написано. записано і зведено володимиром ружаком в домашніх умовах. Обкладинку створила Юлія Поліновська.

Розуміючи що є можливість працювати і записувати все  самому, у 2022 році, Володимир Ружак починає працювати над матеріалом для нового альбому. Завдяки підтримці Юлії Поліновкої вже у червні 2023 у складін одного учасника Artifact розпочинає запис альбому під назвою "No One". Одночасно записуючи інструменти відбувається і закінчиння написання новго матеріалу і вже у Жовтні 2024 року альбом зявляється на Ютубі(презентація відбувається в манері - кожної пятниці нова пісня)ю В Альбом входить 11 треків.

На даний момент Artifact має лише одного учасника але продовжує існувати.

Планів на припинення музичної діяльності немає. У звязку з реальним життям можливості випускати новий матеріал що року немає але тим не менше Artifact  працює над новим матеріалом.

Станом на це період нурт грає у складі

Ружак Вова (Metal-James) - вокал, соло-ритм гітара