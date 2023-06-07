// LocalStorage API
interface SStorage<T> {
    [key: string]: T;
  }
  
  abstract class StorageTemplate<T> {
    protected storage: SStorage<T> = {};
    abstract setItem(key: string, value: T): void;
    abstract getItem(key: string): T | boolean;
    abstract clearItem(key: string): void;
    abstract clear(): void;
  }
  
  class LocalStorage<T> extends StorageTemplate<T> {
    setItem(key: string, value: T) {
      this.storage[key] = value;
    }
    getItem(key: string): T | boolean {
      return this.storage[key] || false;
    }
    clearItem(key: string) {
      delete this.storage[key];
    }
    clear() {
      this.storage = {};
    }
  }
  
// polymorphism 
const stringStorage = new LocalStorage<string>(); 
stringStorage.setItem("hello", "how are you");
stringStorage.getItem("hello");
const booleanStorage = new LocalStorage<boolean>();
booleanStorage.setItem("hello", true);
booleanStorage.getItem("xxx");

////

interface IGeolocation {
    clearWatch(watchId: number): void;
    getCurrentPosition(
      successCallback: IPositionCallback,
      errorCallback?: IPositionErrorCallback | null,
      options?: IGeolocationOptions
    ): void;
    watchPosition(
      successCallback: PositionCallback,
      errorCallback?: IPositionErrorCallback | null,
      options?: IGeolocationOptions
    ): number;
  }
  
  // successCallback interface
  interface IPositionCallback {
    (position: IGeolocationPosition): void;
  }
  interface IGeolocationPosition {
    readonly coords: IGeolocationCoordinates;
    readonly timestamp: IEpochTimeStamp;
  }
  interface IGeolocationCoordinates {
    readonly accuracy: number;
    readonly altitude: number | null;
    readonly altitudeAccuracy: number | null;
    readonly heading: number | null;
    readonly latitude: number;
    readonly longitude: number;
    readonly speed: number | null;
  }
  type IEpochTimeStamp = number;
  
  // errorCallback interface
  interface IPositionErrorCallback {
    (positionError: IGeolocationPositionError): void;
  }
  interface IGeolocationPositionError {
    readonly code: number;
    readonly message: string;
    readonly PERMISSION_DENIED: number;
    readonly POSITION_UNAVAILABLE: number;
    readonly TIMEOUT: number;
  }
  
  // option interface
  interface IGeolocationOptions {
    enableHighAccuracy: boolean;
    timeout: number;
    maximumAge: number;
  }
  
  // Geolocation class
  class GGeolocation implements IGeolocation {
    clearWatch(watchId: number) {
      console.log(watchId);
    }
    getCurrentPosition(
      successCallback: IPositionCallback,
      errorCallback?: PositionErrorCallback | null,
      options?: PositionOptions
    ) {
      if (successCallback) console.log(successCallback);
      if (errorCallback) console.log(errorCallback);
      if (options) console.log(options);
    }
    watchPosition(
      successCallback: PositionCallback,
      errorCallback?: PositionErrorCallback | null,
      options?: PositionOptions
    ) {
      if (successCallback) console.log(successCallback);
      if (errorCallback) console.log(errorCallback);
      if (options) console.log(options);
      return 0;
    }
  }
  
  const geolocation = new GGeolocation();
  // 오버로딩
  geolocation.getCurrentPosition(test);
  geolocation.getCurrentPosition(test, test);
  geolocation.getCurrentPosition(test, test, {});
  
  function test() {}