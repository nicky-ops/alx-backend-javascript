import fs from 'fs/promises';

const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8')
      .then((data) => {
        const lines = data.trim().split('\n').slice(1);
        const students = {};
        lines.forEach((line) => {
          const [firstName, , , field] = line.split(',');
          if (!students[field]) students[field] = [];
          students[field].push(firstName);
        });
        resolve(students);
      })
      .catch(() => reject(new Error('Cannot load the database')));
  });
};

export default readDatabase;
