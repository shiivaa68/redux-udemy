import jsonPlaceHolder from '../apis/jsonPlaceHolder'


//action creator
export   const selectSong = (song)=>{
    return{
        type:'SONG_SELECTED',
        payload:song
    }
}




export const fetchPosts =()=>{
return async function(dispatch,getState){
    const response =await jsonPlaceHolder.get('/posts')
dispatch({type:'FETCH_POSTS',payload:response.data})}}

//es7 ===>
// export const fetchPostss = ()=> async dispatch =>{
//         const response =await jsonPlaceHolder.get('/posts')
//         dispatch({type:'FETCH_POSTS',payload:response})}


export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceHolder.get(`/users/${id}`);

    dispatch({
        type:'FECH_USER',
        payload:response.data
    })
}