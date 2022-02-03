let db;
let budgetVersion;

const request = indexedDB.open("BudgerDB", budgetVersion || 21);
