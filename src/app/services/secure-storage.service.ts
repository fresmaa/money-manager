import { Injectable } from '@angular/core';
import { SecureStoragePlugin } from 'capacitor-secure-storage-plugin';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class SecureStorageService {

  constructor(
    private storage: Storage
  ) { 
    storage.create()
  }

  get(identifier: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      let value = null;
      try {
        const response = await SecureStoragePlugin.get({
          key: identifier
        });
        value = response.value;
      } catch (error) {
        console.log("NO DATA "+identifier);
      }
      if (value === null || value === undefined || value.length <= 0) {
        value = await this.storage.get(environment.access_token_identifier);
        if (value !== null && value !== undefined && value.length > 0) {
          await SecureStoragePlugin.set({
            key: identifier,
            value
          });
          await this.storage.remove(environment.access_token_identifier);
        }
      }

      return resolve(value);
    });
  }

  set(identifier: string, value: string) {
    return new Promise(async (resolve, reject) => {
      await SecureStoragePlugin.set({
        key: identifier,
        value
      });
      return resolve(true);
    });
  }

  remove(identifier: string) {
    return new Promise(async (resolve, reject) => {
      try {
        this.storage.remove(identifier);
      } catch (e) {
        console.log(e);
      }

      try {
        SecureStoragePlugin.remove({
          key: identifier
        });
      } catch (e2) {
        console.log(e2);
      }

      return resolve(null);
    });
  }
}
