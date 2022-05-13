declare type World = 'World';
declare type Greeting = `hello ${World}`;
declare type EmailLocaleIDs = 'welcome_email' | 'email_heading';
declare type FooterLocaleIDs = 'footer_title' | 'footer_sendoff';
declare type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
declare type Lang = 'en' | 'ja' | 'pt';
declare type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}`;
declare const passedObject: {
    firstName: string;
    lastName: string;
    age: number;
};
declare const person: {
    firstName: string;
    lastName: string;
    age: number;
} & PropEventSource<{
    firstName: string;
    lastName: string;
    age: number;
}>;
declare type PropEventSource<Type> = {
    on(eventName: `${string & keyof Type}Changed`, callback: (newValue: any) => void): void;
};
declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;
