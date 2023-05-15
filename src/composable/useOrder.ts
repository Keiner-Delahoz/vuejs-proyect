// import type { MedicalOrder } from '@/types/medical-orders'
import { use_Firestore } from './useFirestore'

const { getCollection } =
  use_Firestore()

export const useOrder = () => {
   const getOrders = async () => {
      const records = await getCollection('Medical-Orders')
      return records
  }

//   const getOrders = async () => {
//     const records = await getCollection('Medical-Orders')

//     return records
//   }

//   const findOrder = async (uid: string) => {
//     const path = `Medical-Orders/${uid}`

//     const record = await getDocument(path)

//     return record
//   }

//   const getOrder = async (uid: string) => {
//     const path = `Medical-Orders/${uid}`

//     const medicalOrder = await getDocument(path)

//     return {
//       medicalOrder
//     }
//   }

//   const deleteOrder = async (uid: string) => {
//     const path = `Medical-Orders/${uid}`

//     await deleteDocument(path)

//     return true
//   }

//   const updateOrder = async (uid: string, medicalOrder: Record<string, any>) => {
//     const path = `Medical-Orders/${uid}`

//     await updateDocument(path, medicalOrder)

//     return true
//   }

//   const createOrder = async (medicalOrder: MedicalOrder) => {
//     const path = `Medical-Orders/`

//     await addDocument(path, medicalOrder)

//     return true
//   }

   return {
      getOrders,
//     findOrder,
//     getOrder,
//     deleteOrder,
//     updateOrder,
//     createOrder
  }
}
