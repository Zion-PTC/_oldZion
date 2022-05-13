type World = 'World';
type Greeting = `hello ${World}`;

type EmailLocaleIDs = 'welcome_email' | 'email_heading';
type FooterLocaleIDs = 'footer_title' | 'footer_sendoff';

type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
type Lang = 'en' | 'ja' | 'pt';
type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}`;

// String Unions in Types

const passedObject = {
  firstName: 'Saoirse',
  lastName: 'Ronan',
  age: 25,
};

const person = makeWatchedObject({
  ...passedObject,
});

type PropEventSource<Type> = {
  on(
    eventName: `${string & keyof Type}Changed`,
    callback: (newValue: any) => void
  ): void;
};

function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type> {
  //@ts-expect-error
  obj.on = function () {};
  //@ts-expect-error
  return obj;
}

person.on('ageChanged', newValue =>
  console.log(`firstName was changed to ${newValue}`)
);
