import { collection, getDocs } from 'firebase/firestore';
import { useFirestore } from 'vuefire'
// import {useFirestore , useCollection } from 'vuefire'

const db = useFirestore();
// const collectionDB = (path: string) => collection(db, path)

//   export const getMedicines = async () => {
//    console.log(DB)
//  };
//   export const getCollection = async (collection: any) => {
//    const querySnapshot = await getDocs(collectionDB(collection));
//    const docs: any = [];
//    querySnapshot.forEach((doc: any) => {
//      docs.push({ id: doc.id, ...doc.data() });
//    });
//    console.log(db)
//    console.log(collectionDB)
//    return docs;
//  };

// type PathReferenceType = 'collection' | 'document'

export const use_Firestore = () => {
   const collectionDB = (path: string) => collection(db, path)

   const getCollection = async (collection: any) => {
      const querySnapshot = await getDocs(collectionDB(collection));
      const docs: any = [];
      querySnapshot.forEach((doc: any) => {
      const props = doc.data()
      props.createdAt = props.createdAt ? new Date(props.createdAt).toDateString() : undefined
         docs.push({ id: doc.id, ...doc.data() });
      });
      console.log(docs)
      return docs;
    };

//   const getReference = (type: PathReferenceType, path: string) => {
//     if (type == 'collection') {
//       return DB.collection(path)
//     } else {
//       return DB.doc(path)
//     }
//   }

//   const getCollection = async (path: string, where?: any[]) => {
//     const reference = getReference('collection', path)

//     const querySnapshot = !where
//       ? await reference.get()
//       : await reference.where(where[0], where[1], where[2]).get()

//     const records: any[] = []

//     querySnapshot.forEach((doc: any) => {
//       const props = doc.data()

//       props.createdAt = props.createdAt ? new Date(props.createdAt).toDateString() : undefined

//       records.push({ id: doc.id, ...props })
//     })

//     return records
//   }

//   const getDocument = async (path: string) => {
//     const reference = getReference('document', path)

//     const snapshot = await reference.get()

//     const record = snapshot.data()

//     return record
//   }

//   const addDocument = async (path: string, documentObject: Record<string, any>) => {
//     const reference = getReference('collection', path)

//     return await reference.add(documentObject)
//   }

//   const setDocument = async (path: string, documentObject: Record<string, any>) => {
//     const reference = getReference('document', path)

//     await reference.set(documentObject)

//     return true
//   }

//   const updateDocument = async (path: string, documentObject: Record<string, any>) => {
//     const reference = getReference('document', path)

//     await reference.update(documentObject)

//     return true
//   }

//   const deleteDocument = async (path: string) => {
//     const reference = getReference('document', path)

//     await reference.delete()

//     return true
//   }

  return {
//     getReference,
    getCollection,
//     getDocument,
//     addDocument,
//     setDocument,
//     updateDocument,
//     deleteDocument
  }
}
