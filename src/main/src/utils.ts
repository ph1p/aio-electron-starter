/// <reference path="../types/custom-types.d.ts" />
import * as path from 'path';

export const isDev = process.env.NODE_ENV === 'development';

export const getPathToFile = (fileName: string) => {
  if (isDev) {
    return `${path.join(__dirname, `../../app/${fileName}`)}`;
  }
  return `${path.join(__dirname, `../${fileName}`)}`;
};

// Reload main process if needed DEV
export async function activateDevReloader() {
  if (isDev) {
    const reload = await import('electron-reload');

    reload(__dirname, {
      electron: path.join(__dirname, '../node_modules', '.bin', 'electron'),
      forceHardReset: true
    });
  }
}