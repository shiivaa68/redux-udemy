import jsonPlaceHolder from '../apis/jsonPlaceHolder'
import _ from 'lodash'

//action creator
export   const selectSong = (song)=>{
    return{
        type:'SONG_SELECTED',
        payload:song
    }
}


export const fetchPostsAndUsers =()=> async (dispatch,getState) =>{
    await dispatch(fetchPosts())

    const userIds =_.uniq(_.map(getState().posts,'userId'));
    userIds.forEach(id=>fetchUser(id))
}

// export const fetchPosts =()=>{
// return async function(dispatch,getState){
//     const response =await jsonPlaceHolder.get('/posts')
// dispatch({type:'FETCH_POSTS',payload:response.data})}}

//es7 ===>
export const fetchPosts = ()=> async dispatch =>{
        const response =await jsonPlaceHolder.get('/posts')
        dispatch({type:'FETCH_POSTS',payload:response.data})}


//without memorize
// export const fetchUser = id => async dispatch => {
//     const response = await jsonPlaceHolder.get(`/users/${id}`);

//     dispatch({
//         type:'FECH_USER',
//         payload:response.data
//     })
// }

// with memorize first way

// export const fetchUser = id => dispatch => _fetchUser(id,dispatch);

// const _fetchUser=_.memoize(async(id,dispatch)=>{
//     const response =await jsonPlaceHolder.get(`/users/${id}`);
//     dispatch({type:'FETCH_USER',payload:response.data})
// })



//second way memorize
export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceHolder.get(`/users/${id}`);
console.log(response,'data users action')
    dispatch({
        type:'FECH_USER',
        payload:response.data
    })
}
