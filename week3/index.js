// 題目 - 樂呵呵健身房
// 樂呵呵健身房目前有 8 位會員
//
const members = [
  "Alice",
  "Bob",
  "Charlie",
  "Diana",
  "Evan",
  "Fiona",
  "George",
  "Hannah",
];

// 購買記錄
const purchaseRecords = [];

// TODO: 新增購買記錄
const addPurchaseRecord = (name, courses) => {
  if (typeof name !== "string" || typeof courses !== "number") {
    console.log("輸入錯誤，請輸入有效的會員名稱和課程數量。");
    return;
  }
  let unitPrice = 1500;
  if (courses >= 21) {
    unitPrice = 1100;
  } else if (courses >= 11) {
    price = 1300;
  }

  let recordObj = {
    name: name,
    courses: courses,
    unitPrice: unitPrice,
    totalPrice: unitPrice * courses,
  };
  purchaseRecords.push(recordObj);
  console.log(
    `新增購買記錄成功！會員 ${recordObj["name"]} 購買 ${recordObj["courses"]}，總金額為 ${recordObj["totalPrice"]}`,
  );
};

addPurchaseRecord("Alice", 4);
addPurchaseRecord("Bob", 12);
addPurchaseRecord("Charlie", 25);
addPurchaseRecord("Hannah", 50);
addPurchaseRecord("名稱", "課程數量");

// TODO: 計算總營業額
//
const calculateTotalPrice = () => {
  let currentTotalRevenue = 0;
  purchaseRecords.forEach((record) => {
    currentTotalRevenue += record.totalPrice;
  });
  console.log(`目前總營業額為 ${currentTotalRevenue} 元`);
};

calculateTotalPrice();

// TODO: Get the people who purchase the course.

const purchasePeople = [];

const getPurchasePeople = () => {
  purchaseRecords.forEach((record) => {
    purchasePeople.push(record["name"]);
  });
  // console.log(`購買課程的人有： ${purchasePeople}`);
};

getPurchasePeople();

// TODO: Get the people who don't purchase the courses.
const filterNoPurchaseMember = () => {
  const noPurchaseMembers = members.filter((member) => {
    return !purchasePeople.includes(member);
  });
  console.log(`未購買課程的人有： ${noPurchaseMembers}`);
};

filterNoPurchaseMember();
