// ==== NESTED OBJECT AND ARRAY DESTRUCTURING

const metadata = {
  title: 'Scratchpad',
  translations: [
    {
      locale: 'de',
      localization_tags: [],
      last_edit: '2014-04-14T08:43:37',
      url: '/de/docs/Tools/Scratchpad',
      title: 'Javascript-Umgebung'
    }
  ],
  url: '/en-US/docs/Tools/Scratchpad'
};

let {
  title: englishTitle,    // rename
  translations: [
    {
      title: localeTitle  // rename
    },   
  ],
} = metadata;

console.log(englishTitle);
console.log(localeTitle);