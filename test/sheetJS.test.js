// import XLSX from 'xlsx'

import XLSX from "xlsx";
import path from 'upath'

test('parse xlsx to json', () =>{
    const dirname = path.join(__dirname, 'test.xlsx');
    const workbook = XLSX.readFile(dirname);
    const sheet_name_list = workbook.SheetNames;
    sheet_name_list.forEach(function(y) {
        const worksheet = workbook.Sheets[y];
        const headers = {};
        const data = [];
        for(const ref in worksheet) {
            if (worksheet.hasOwnProperty(ref)){
                if(ref[0] === '!') continue;
                //parse out the column, row, and value
                let tt = 0;
                for (let i = 0; i < ref.length; i++) {
                    if (!isNaN(ref[i])) {
                        tt = i;
                        break;
                    }
                }
                const col = ref.substring(0, tt);
                const row = parseInt(ref.substring(tt));
                const value = worksheet[ref].v;

                //store header names
                if(row === 1 && value) {
                    headers[col] = value;
                    continue;
                }

                if(!data[row]) data[row]={};
                data[row][headers[col]] = value;
            }
        }
        //drop those first two rows which are empty
        data.shift();
        data.shift();
        console.log(data);
    });
});