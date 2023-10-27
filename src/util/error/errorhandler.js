import { MissionUtils } from '@woowacourse/mission-utils';
import errorList from './errorCode.js';

export function gameErrorhandler(code) {
  const occuredError = errorList.get(code);

  const errorMessage = occuredError !== undefined ? occuredError : '예상치 못한 에러가 발생했습니다.';

  const result = new Error(errorMessage);

  MissionUtils.Console.print(`[ERROR] ${errorMessage}`);
  return Promise.reject(result);
}

export function defaultErrorHandler(error) {
  return Promise.reject(error);
}
