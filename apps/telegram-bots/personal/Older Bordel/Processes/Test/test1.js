import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { zionTelegraf } from '../../utils.js';
import { create } from './🗄.post/create.js';
import { get } from './📦.get/get.js';
import { edit } from './🖊.edit/edit.js';
import { askConfirmationToStartTest } from './🤖.bot/askConfirmationToStartTest.js';
import { deleteDoc } from './🗑.delete/delete.js';

import { confirmationAnswer } from './💻.logic/confirmationAnswer.js';
import { checkIfTestIsListeningRightField } from './🚓.control/checkIfTestIsListeningRightField.js';
import { replyTestStarted } from './🤖.bot/replyTestStarted.js';
import { ZionError } from '../../Classes/_Standard Classes/ZionError.js';
import { Application } from '../../Models/Application.js';
// import { Person } from "../../personal/mongoose_classes.js";
// import { confirmation } from "./1️⃣.createProcessTestDocumentForThisCall/confirmation.js";
dotenv.config();

let initializeApplication = async (application) => {
  return new Promise(async (res, rej) => {
    await get.application
      .byName(application.name)
      .then(async ({ match, method }) => {
        res(match);
      })
      .catch(async (error) => {
        await create
          .application(application)
          .then(async ({ newApplicationDocumentInDb }) => {
            res(newApplicationDocumentInDb);
          })
          .catch(async (error) => {
            rej({
              message:
                'There was an error while creating the application doc.',
              child: error,
            });
          });
        error
          ? rej({
              message:
                'There was an error getting the application by name.',
              child: error,
            })
          : {};
      });
    // })
  });
};

let initializeTelegramChatAndChat = async (ctx) => {
  return new Promise(async (res, rej) => {
    let chatCallingTestCommand = ctx.update.message.chat.id;
    let telegramChatDoc;
    let chatDoc;
    await get.telegramChat
      .byContextChatId(chatCallingTestCommand)
      .then(async (match) => {
        telegramChatDoc = match;
        let chatQueryResult =
          await get.chat.byContextChatId(
            chatCallingTestCommand
          );
        chatDoc = chatQueryResult;
        res({
          telegramChatDoc: match,
          chatDoc: chatQueryResult,
        });
      })
      .catch(async (error) => {
        await create
          .telegramChat(ctx.update.message.chat)
          .then(async (newTelegramChatDoc) => {
            telegramChatDoc = newTelegramChatDoc;
          })
          .catch(async (error) => {
            rej(error);
          });
        await create
          .chat(telegramChatDoc._id)
          .then(async (newChatDoc) => {
            chatDoc = newChatDoc;
          })
          .catch(async (error) => {
            rej(error);
          });
        res({
          telegramChatDoc,
          chatDoc,
        });
      });
  });
};

let initializeTest = async (
  applicationDoc_id,
  chatDoc_id,
  chatDoc
) => {
  return new Promise(async (res, rej) => {
    /*write code here*/
    await get.test
      .activeOfChat(applicationDoc_id, chatDoc_id)
      .then(async ({ testRunningThisApplication }) => {
        console.log('here');
        res(testRunningThisApplication);
        /* Se esiste un test attivo della chat, l'azione non deve continuare*/
        ////======>>======>>|=====>>\\ // >>======>>======>>======>>======>>======>>
        ////======>>======>>|===  >> /'\  >>  ||  >>  ||  >>======>>======>>======>>
        ////======>>======>>|=====>>// \\ >>======>>  ||  >>======>>======>>======>>
      })
      .catch(async ({ message, method }) => {
        console.log('there ', message);
        await create
          .test(chat_Id, application_Id)
          .then(async ({ newTestDoc, method }) => {
            res(newTestDoc);
          })
          .catch(async (error) => {
            rej({ message: error });
          });
      });
  });
};

let confirmation = async (
  bot,
  ctx,
  initializationResult,
  field
) => {
  await askConfirmationToStartTest(
    ctx,
    initializationResult.applicationDoc
  );
  await edit.test.is_listening(
    true,
    initializationResult.testDoc,
    field
  );
  bot.on('text', async (ctx, next) => {
    next();
    await checkIfTestIsListeningRightField(
      initializationResult.applicationDoc._id,
      ctx.update.message.chat.id,
      field,
      ctx.update.message.text
    )
      .then(async ({ match, textMessage }) => {
        await confirmationAnswer(textMessage)
          .then(async ({ has_user_confirmed, text }) => {
            if (has_user_confirmed === true) {
              await edit.test.is_confirmed(
                true,
                initializationResult.testDoc
              );
              await edit.test.is_listening(
                false,
                initializationResult.testDoc,
                undefined
              );
              await replyTestStarted(
                ctx,
                initializationResult.testDoc
              );
            } else if (has_user_confirmed === false) {
              await edit.test.is_listening(
                false,
                initializationResult.testDoc,
                undefined
              );
              await edit.test.is_aborted(
                true,
                initializationResult.testDoc
              );
              await edit.test.is_active(
                true,
                initializationResult.testDoc
              );
            }
          })
          .catch(async (misunderstandingMessage) => {
            zionTelegraf.botReply(
              ctx,
              misunderstandingMessage
            );
          });
      })
      .catch(async (error) => {
        console.log('not ok', error);
      });
  });
};

export let test1 = async (bot) => {
  let zionerror = { ciao: 'asf', detroit: 2 };
  let zionerrorname = 'asdas';

  let application = {
    name: 'Testing the Bot Part I',
    category: 'Architecture',
    type: 'design',
    CRUD: 'create',
    validation: {
      is_validated: false,
    },
    models: ['Test', 'Process', 'Chat', 'TelegramChat'],
    fields: {
      amount: 3,
      steps: [
        { name: 'Confirmation', description: '' },
        { name: 'Title', description: 'Titolo del item' },
        {
          name: 'Category',
          description: "Categoria di cui fa parte l'item",
        },
        {
          name: 'Description',
          description:
            "Descrizione dell'item che lo user sta inserendo",
        },
      ],
    },
  };

  console.log(res);

  let name = async () => {
    return new Promise(async (res, rej) => {
      bot.command('/test', async (ctx, next) => {
        let applicationDoc = await initializeApplication(
          application
        );
        let { telegramChatDoc, chatDoc } =
          await initializeTelegramChatAndChat(ctx);
        let testDoc = await initializeTest(
          applicationDoc._id,
          chatDoc._id
        ).catch(async (e) => {
          console.log(e);
        });
        console.log('testDoc: ', testDoc);
        let initializationResult = {
          applicationDoc,
          telegramChatDoc,
          chatDoc,
          testDoc,
          ctx,
        };
        res(initializationResult);
      });
    });
  };
  let initializationResult = await name();
  continueHere(bot, initializationResult);
};
let continueHere = async (bot, initializationResult) => {
  await confirmation(
    bot,
    initializationResult.ctx,
    initializationResult,
    1
  );
  console.log('GOOD ENDING: ', initializationResult);
};
