import { Test } from '../../../../../Models/Testing.js';

export let deleteDoc = {
  test: {
    by_id: async (test_id) => {
      return new Promise(async (res, rej) => {
        await Test.deleteOne({
          _id: test_id,
        })
          .then(async (test) => {
            res(test);
          })
          .catch(async (e) => {
            rej(e);
          });
      });
    },
  },
};
