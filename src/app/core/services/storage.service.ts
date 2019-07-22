import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  get storage() {
    return window.localStorage;
  }

  getItem(key: string) {
    const json = this.storage.getItem(key);
    return json ? JSON.parse(json) : {};
  }

  setItem(key: string, value: string) {
    const storageValue = value ? JSON.stringify(value) : '';
    return this.storage.setItem(key, storageValue);
  }
}