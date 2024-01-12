/* indexing : เหมือนกับการจัดข้อมูลโดยใช้ indexเป็นป้ายกำกับว่าจะแยกหมวดหมู่ ตามประเภทไหน เช่น แยกตามเดือน, ปี ,แผนก, ประเภทโครงการ etc.

.createIndex() : เป็นfn ที่จะรับ objectเป็นkey-value pair โดย key คือชื่อfield ที่จะสร้าง index 
(พหูพจน์ของ index คือ indices) และมี value เป็นลำดับ (1) หรือ (-1)
                 .createIndex({key:value}) 

เมื่อสร้าง indexแล้ว ให้ใช้ .explain() ตรวจสอบอีกครั้ง
*/

db.pizzaOrders.createIndex({ size: 1 }); // return size_1
db.pizzaOrders.find({ size: "medium" }).explain("executionStats");

/* ผลลัพธ์
executionStats: {
    executionSuccess: true,
    nReturned: 337,
    executionTimeMillis: 9,
    totalKeysExamined: 337,
    totalDocsExamined: 337,
    executionStages: {
      stage: 'FETCH',
      nReturned: 337,
      executionTimeMillisEstimate: 0,
      works: 338,
      advanced: 337,
      needTime: 0,
      needYield: 0,
      saveState: 0,
      restoreState: 0,
      isEOF: 1,
      docsExamined: 337,
      alreadyHasObj: 0,
      inputStage: {
        stage: 'IXSCAN',
        nReturned: 337,
        executionTimeMillisEstimate: 0,
        works: 338,
        advanced: 337,
        needTime: 0,
        needYield: 0,
        saveState: 0,
        restoreState: 0,
        isEOF: 1,
        keyPattern: {
          size: 1
        },
        indexName: 'size_1',
        isMultiKey: false,
        multiKeyPaths: {
          size: []
        },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: {
          size: [
            '["medium", "medium"]'
          ]

*/
