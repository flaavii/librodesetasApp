import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  query, 
  where,
  addDoc,
  orderBy,
  limit, } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuiPGKGdrw694G7gyLW8rI2NNwsF_6SJA",
  authDomain: "librodesetas.firebaseapp.com",
  projectId: "librodesetas",
  storageBucket: "librodesetas.appspot.com",
  messagingSenderId: "582604514847",
  appId: "1:582604514847:web:aeeb49f13ef4b7d125572a"
};

const app = initializeApp(firebaseConfig);
const DB = getFirestore(app);

export default async function getItems() {
  
  const colectionSetaRef = collection(DB, "seta");
  const documentSnapshot = await getDocs(colectionSetaRef);
  

  const documentsData = documentSnapshot.docs.map((doc) => {
    
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
 
  return documentsData;
}

export async function getItemsOrdered() {
  const colectionSetaRef = collection(DB, "seta");
  const q = query(colectionSetaRef, orderBy("index"), limit(10));

  const documentSnapshot = await getDocs(q);

  const documentsData = documentSnapshot.docs.map((doc) => {
   
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  
  return documentsData;
}


export async function getSingleItem(idParams) {
  const docRef = doc(DB, "seta", idParams);

  const docSnapshot = await getDoc(docRef);

  const itemData = docSnapshot.data();
  itemData.id = docSnapshot.id;

  return itemData;
}

export async function getItemsByCategory(categoryParams) {
  const collectionRef = collection(DB, "seta");

  const queryCat = query(collectionRef, where("category", "==",categoryParams ));

  const documentSnapshot = await getDocs(queryCat);

  const documentsData = documentSnapshot.docs.map((doc) => {
    
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  
  return documentsData;
}

export async function createOrder(order) {
  const collectionRef = collection(DB, "orders");

  const docOrder = await addDoc(collectionRef, order);

  return docOrder.id;
}