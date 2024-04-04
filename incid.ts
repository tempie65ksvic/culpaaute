interface Record {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
}

function createRecord(id: number, title: string, description: string): Record {
  const newRecord: Record = {
    id,
    title,
    description,
    createdAt: new Date()
  };
  return newRecord;
}

const myRecord = createRecord(12.3, 'Sample Record', 'This is a sample record.');
console.log(myRecord);
