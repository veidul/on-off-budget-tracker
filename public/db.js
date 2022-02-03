let db;
let budgetVersion;

const request = indexedDB.open("BudgerDB", budgetVersion || 21);

request.onupgradeneeded = function (e) {
  console.log("There is an upgrade needed in IndexDB");

  const { oldVersion } = e;
  const newVersion = e.newVersion || db.newVersion;

  console.log(`DB updated from version ${oldVersion} to ${newVersion}`);

  db = e.target.result;

  if (db.objectStoreNames.length === 0) {
    db.createObjectStore("BudgetStore", { autoIncrement: true });
  }
};
