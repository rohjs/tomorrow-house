import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../app/store'

export { useClickOutside } from './useClickOutside'
export { useModals } from './useModals'
export { usePrevious } from './usePrevious'
export { useResponsive } from './useResponsive'
export { useRouter } from './useRouter'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
