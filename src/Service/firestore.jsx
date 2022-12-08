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

/*export async function exportArrayToFirestore() {
const seta = [
  {
      id:1,
      key:1,
      img:"/img/goldenTeacher.webp",
      title: "Golden Teacher" ,
      data:"Se caracterizan por tener una altura de 8 a 15 centímetros con sombreros de entre 2 y 8 centímetros de diámetro. Sus colores varían entre el blanco, el dorado (de allí su nombre) y el anaranjado. Asimismo, sus tallos son huecos y cuando se cortan, adquieren una tonalidad azul.",
      time:10,
      category:"usa",
      stock:10000000,
  },
  
  {   id:2,
      key:2,
      img:"/img/b+.webp",
      title:"B+",
      data:"Gracias a su resistencia puede crecer facilmente en temperaturas más frías. La B+ es tan eficiente que sólo deja de producir frutos cuando los nutrientes son prácticamente nulos y el micelio ya no puede mantenerse.",
      time:6,
      category:"usa",
      stock:10000000,
  },

  {
      id:3,
      key:3,
      img:"/img/malbarcoast.webp",
      title:"Malbar Coast",
      data:"Es de color marrón amarillento, madurando a un centro más oscuro. Su superficie es seca y quedan pequeñas manchas del velo en su sombrero.",
      time:15,
      category:"india",
      stock:10000000,
  }, 

  {   
      id:4,
      key:4,
      img:"/img/thaiKhoSamui.webp",
      title:"Thai Koh Samui",
      data:"De esporas que crecen y colonizan rápidamente. Los hongos no crecen muy alto, tampoco llegan a ser muy gruesos. Es muy resistente a los contaminantes y hace una opción excelente para los que empiezan cultivar.",
      time:12,
      category:"india",
      stock:10000000,
  
  },
];

const collectionRef = collection(DB, "seta");

  for (let seta of seta) {
    seta.index = seta.id;
    delete seta.id;
    let docOrder = await addDoc(collectionRef, seta);
    console.log("Documento creado, id:", docOrder.id);
  } 
}*/


