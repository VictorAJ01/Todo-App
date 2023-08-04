import localForage from "localforage";

const opts: LocalForageOptions = {
  driver: localForage.INDEXEDDB,
  name: "myApp",
  version: 1.0,
  size: 4980736, // Size of database, in bytes. WebSQL-only for now.
  storeName: "todoDb",
  description: "Todo App Local storage",
};

interface iCredentials {
  token: string;
}

export const setCredentials = (token: string) => {
  const p: Storage = window.localStorage;
  p.setItem("t", token);
};

export const getCredentials = (): iCredentials => {
  const p: Storage = window.localStorage;
  return {
    token: p?.getItem("t") ?? "",
  };
};

export const persistence = localForage.createInstance(opts);
