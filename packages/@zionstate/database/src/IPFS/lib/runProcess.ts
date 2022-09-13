export type runProcess = <T>(
  process: () => Promise<T>,
  successMess: string,
  showTrace?: boolean
) => void;

export const runProcess: runProcess = function <T>(
  process: () => Promise<T>,
  successMess: string,
  showTrace: boolean = false
) {
  const main = async (
    successMess: string = "Process terminated successully"
  ): Promise<{ end: 0 | 1; successMess: string }> => {
    await process();
    return { end: 0, successMess };
  };

  main(successMess)
    .then((process) => {
      if (process.end === 0) console.log("\n\n" + process.successMess + "\n\n");
    })
    .catch((e) => console.log(showTrace ? e : e.message));
};
