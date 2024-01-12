/* ตรวจสอบระยะเวลาการทำงานของ Query โดยใช้ fn .explain("executionStats")
ตัวอย่าง : db.movies.find({ year: 2008 }).explain("executionStats") */

db.pizzaOrders.find({ size: "medium" }).explain("executionStats");

/* ผลัพธ์ที่ได้จากการตรวจสอบ

executionStats: {
    executionSuccess: true,
    nReturned: 337,
    executionTimeMillis: 1,
    totalKeysExamined: 0,
    totalDocsExamined: 1000,
    executionStages: {
      stage: 'COLLSCAN',
      filter: {
        size: {
          '$eq': 'medium'
        } 
        
        */
