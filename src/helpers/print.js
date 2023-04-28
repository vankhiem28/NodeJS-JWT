import chalk from "chalk";

export class outputType {
  static INFORMATION = "INFORMATION";
  static SUCCESS = "SUCCESS";
  static WARNING = "WARNING";
  static ERROR = "ERROR";
}

export const print = (message, outputType) => {
  switch (outputType) {
    case outputType.INFORMATION:
      console.log(chalk.white(message));
      break;
    case outputType.SUCCESS:
      console.log(chalk.green(message));
      break;
    case outputType.WARNING:
      console.log(chalk.yellow(message));
      break;
    case outputType.ERROR:
      console.log(chalk.red(message));
      break;
    default:
      console.log(message);
  }
};
