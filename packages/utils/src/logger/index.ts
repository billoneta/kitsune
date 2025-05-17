import util from "node:util";
import chalk, { ChalkInstance } from "chalk";
import moment from "moment";

type Level = "log" | "info" | "event" | "error" | "warn" | "ready";

const methods: Record<Level, { label: ChalkInstance; secondary: ChalkInstance }> = {
 log: { label: chalk.cyan, secondary: chalk.cyan.italic },
 info: { label: chalk.blue, secondary: chalk.blue.italic },
 event: { label: chalk.magenta, secondary: chalk.magenta.italic },
 error: { label: chalk.red, secondary: chalk.red.italic },
 warn: { label: chalk.yellow, secondary: chalk.yellow.italic },
 ready: { label: chalk.green, secondary: chalk.green.italic },
};

const LOG_LEVELS: Level[] = Object.keys(methods) as Level[];
const MAX_LABEL_WIDTH = Math.max(...LOG_LEVELS.map((level) => level.length)) + 1;

function formatArgs(level: Level, args: unknown[]): string {
 const { secondary } = methods[level];
 return args.map((arg) => (arg instanceof Error ? chalk.red(arg.stack || arg.message) : typeof arg === "string" ? secondary(arg) : util.inspect(arg, { colors: true, depth: null, compact: false }))).join(" ");
}

function logMessage(level: Level, ...args: unknown[]): string {
 const timestamp = chalk.gray.dim(`[${moment().format("HH:mm:ss")}]`);
 const levelLabel = methods[level].label(`${level.toUpperCase().padEnd(MAX_LABEL_WIDTH - 1)} `);
 const separator = chalk.gray.dim("››");
 const message = formatArgs(level, args);
 return `${timestamp} ${levelLabel} ${separator} ${message}`;
}

const Logger: Record<Level, (...args: unknown[]) => void> = LOG_LEVELS.reduce(
 (acc, level) => {
  acc[level] = (...args: unknown[]) => {
   const output = logMessage(level, ...args);
   (level === "error" ? console.error : console.log)(output);
  };
  return acc;
 },
 {} as Record<Level, (...args: unknown[]) => void>
);

export default Logger;
