import { errorReasons } from "./consts";
import { TErrorReason } from "./types";

const getErrorMessage = (reason: TErrorReason): string => errorReasons[reason];

export {
  getErrorMessage,
};
