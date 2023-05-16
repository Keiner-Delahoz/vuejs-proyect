import type { Medicine } from '@/types/medicines'
// import { getCollection } from './useFirestore'
import { use_Firestore } from './useFirestore'

const { getCollection, addDocument } =
  use_Firestore();

//   export const getMedicines = async () => {
//       const records = await getCollection('Medicine')
//       return records
//   }


export const useMedicine = () => {
   const getMedicines = async () => {
      const records = await getCollection('Medicine')
      return records
  }

//   const findMedicine = async (uid: string) => {
//     const path = `Medicine/${uid}`

//     const record = await getDocument(path)

//     return record
//   }

//   const getMedicine = async (uid: string) => {
//     const path = `Medicine/${uid}`

//     const medicine = await getDocument(path)

//     return {
//       medicine
//     }
//   }

//   const deleteMedicine = async (uid: string) => {
//     const path = `Medicine/${uid}`

//     await deleteDocument(path)

//     return true
//   }

//   const updateMedicine = async (uid: string, medicine: Record<string, any>) => {
//     const path = `Medicine/${uid}`

//     await updateDocument(path, medicine)

//     return true
//   }

  const createMedicine = async (medicine: Medicine) => {
    const path = 'Medicine'

    await addDocument(path, medicine)

    return true
  }

  return {
    getMedicines,
   //  findMedicine,
   //  getMedicine,
   //  deleteMedicine,
   //  updateMedicine,
    createMedicine
  }
}
