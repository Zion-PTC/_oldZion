declare type process = {
    (): boolean;
};
declare type data = {
    process: process;
};
declare let datastore: data;
