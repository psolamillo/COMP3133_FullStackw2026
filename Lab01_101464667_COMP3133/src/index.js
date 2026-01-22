const csv = require('csv-parser')
const fs = require('fs')

//3a. Delete txts if existing
if (fs.existsSync('canada.txt')) {
    fs.unlinkSync('canada.txt');
    console.log('Deleted canada.txt');
}

if (fs.existsSync('usa.txt')) {
    fs.unlinkSync('usa.txt');
    console.log('Deleted usa.txt');
}

const canadaWriteStream = fs.createWriteStream('canada.txt', {flags: 'w'})
const usWriteStream = fs.createWriteStream('usa.txt')

fs.createReadStream('input_countries.csv')
    .pipe(csv())
    .on('data', (row) => {
        
        if (row.country === 'Canada') {
            canadaWriteStream.write(JSON.stringify(row) + '\n')
        }
        if (row.country === 'United States'){
            usWriteStream.write(JSON.stringify(row) + '\n')
        }

    })
    .on('end', () => {
        //3b and c write data to corresponding txt
        canadaWriteStream.end();
        usWriteStream.end();
        console.log('CSV file successfully processed');
    });


setTimeout(() => {
        fs.readFile('canada.txt', 'utf8', (err,data) => {
        console.log("Reading from canada.txt")
        if (err){
            console.log(`Error while reading the file canada.txt : ${JSON.stringify(err)}`)
        }else{
            if (data){
                console.log(data)
            }else{
                console.log('No data recieved from canada.txt')
            }
        }
            
    })

    fs.readFile('usa.txt', 'utf8', (err,data) => {
        console.log("Reading from usa.txt");
        if (err){
            console.log(`Error while reading the file usa.txt : ${JSON.stringify(err)}`)
        }else{
            if (data){
                console.log(data)
            }else{
                console.log('No data recieved from usa.txt')
            }
        }
            
    });
}, 100);
