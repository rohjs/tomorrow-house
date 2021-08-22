import firebase from 'firebase'
import { database } from 'src/lib/firebase'

export const useDatabase = () => {
  const readData = (url: string): Promise<firebase.database.DataSnapshot> => {
    return database.ref().child(url).get()
  }

  return {
    readData,
  } as const
}
