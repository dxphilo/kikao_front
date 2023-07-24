export function useEnv() {
  const config = useRuntimeConfig()
  return { config }
}
