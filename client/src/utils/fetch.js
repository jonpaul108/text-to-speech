import axios from 'axios';

// export const postString = useEffect(() => {
//     axios.post(`audioData`, {
//         data: 'Hello. I\'m here to retrieve data.',
//     }) 
//     .then((response) => {
//         console.log('in response: ', response);
//          const newText = [...text];
//          newText.push(response.data);
//          setText(newText)
//          console.log('updated state: ', text);
//       })
//       .catch((err) => {
//           console.log('There was a problem: ', err);
//       })
//  })

 export const fetchData= (cb) => {
     let data = [];
    axios.get('/home') 
    .then((res) => { 
        data = res.data;
        cb(data);
    })
    .catch((err) => {
        console.log('err in initial get request: ', err);
        cb(data);
    })

 }

 export const getData = async function () {
    let newData = [];
    await axios.get('/home')
        .then((res) => {
            newData = [...res.data];
            console.log('made call for get Data', newData);
        })
        .catch((err) => {
            console.log(err);
        })
        setText(newData);
    };