

const getAllPosts = async () => {
    const url = "http://localhost:4322/posts/";
    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Response status: ${response.status}`)
        }
        const json = await response.json();
        return(json);
    }catch(error){
        console.log(error)
    }
}
const getPost = async ( id ) => {
    const url = "http://localhost:4322/posts/" + id;
    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Response status: ${response.status}`)
        }
        const json = await response.json();
        return(json);
    }catch(error){
        console.log(error)
    }
}
const createPost = async (name, body ) => {
    const url = "http://localhost:4322/posts" ;
    const options = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            Title: name,
            body: body
        })
    }
    try {
        const response = await fetch(url, options);
        if(!response.ok){
            throw new Error(`Response status: ${response.status}`)
        }
        const json = await response.json();
        console.log(json);
    }catch(error){
        console.log(error)
    }
}
const editPost = async ( id, name, body ) => {
    const url = `http://localhost:4322/posts/${id}`;
    const options = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            Title: name,
            body: body
        })
    }
    try {
        const response = await fetch(url, options);
        if(!response.ok){
            throw new Error(`Response status: ${response.status}`)
        }
        const json = await response.json();
        console.log(json);
    }catch(error){
        console.log(error)
    }
}
const deletePost = async ( id ) => {
    const url = `http://localhost:4322/posts/${id}`;
    const options = {
        method: "DELETE",
    }
    try {
        const response = await fetch(url, options);
        if(!response.ok){
            throw new Error(`Response status: ${response.status}`)
        }
        const json = await response.json();
        console.log(json);
    }catch(error){
        console.log(error)
    }
}

module.exports = { getAllPosts, getPost, createPost, editPost, deletePost };