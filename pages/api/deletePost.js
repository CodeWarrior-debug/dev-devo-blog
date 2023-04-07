import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../lib/firesStoreRef";

export default async function handler(req, res) {
  try {
    await deleteDoc(doc(db, "posts", req.headers.custompostindex.toString()));
    res.send(200);
  } catch (err) {
    res.json(err);
  }
}
