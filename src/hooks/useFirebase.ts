import { child, get, ref } from '@firebase/database'
import { database } from 'src/lib/firebase'

const dbRef = ref(database)

export const useFirebase = () => {
  const getData = (params: string) => {
    get(child(dbRef, params))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val())
        } else {
          console.log('No data available')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return {
    getData,
  } as const
}
