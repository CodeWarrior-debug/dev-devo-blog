import React, {useEffect, useState} from 'react'
import {collection, getDocs} from "firebase/firestore"
import { db } from '@/lib/firesStoreRef'
import PostPreviews from '@/components/PostPreviews'


const AllBlogs = () => {
    const [posts,setPosts]=useState([])

    const pullData = async ()=>{
        const fbPosts = []
        const querySnapshot = await getDocs(collection(db, "posts"));
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
        //   console.log(doc.id, " => ", doc.data());
          fbPosts.push(doc.data())
        });

        setPosts(fbPosts)
    }


    useEffect(()=>{
        pullData();

    },[])



  return (
    <>

        
        <PostPreviews allBlogs={posts}/>
        
</>
    )
}

export default AllBlogs
