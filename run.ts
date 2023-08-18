import axios from 'axios'


//@ts-ignore

const args = process.argv
const inputFile = args[2]

async function main(inputFile?: string) {
    console.log("*********Starting********")
    axios.get('https://api.github.com/users/mapbox')
  .then((response) => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });
}
main(inputFile).catch(e=> {
    console.log(`using input ${inputFile}`)
    console.log(Object.keys(e))
    process.exit(1)
})
