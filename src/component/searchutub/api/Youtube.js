import axios from 'axios'

const KEY ='AIzaSyBMiJpOMnc087gwp7MgtQU4WippmtURqmw';


export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResult:5,
        key:KEY

    }
})


