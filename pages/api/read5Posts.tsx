import { query, orderBy, collection, getDocs, limit, } from "firebase/firestore";
import { db } from "../../lib/firesStoreRef";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req:string, res:string) {
  try {
    const getPosts = async () => {

      let allDocs: any[]= [];
      const postsRef = collection(db, "posts");
      const q = query(postsRef, orderBy("idNum", "desc"), limit(5));

      const buildPosts = async () => {

        const querySnapshot = await getDocs(q);

            querySnapshot.forEach((doc) => {
            allDocs.push(doc.data());

        });

      };

      await buildPosts();

      res.status(200);
      res.end(JSON.stringify(allDocs));

    };

    await getPosts();

  } catch (error) {

      res.json(error);
      res.status(405).end();

  }
}
