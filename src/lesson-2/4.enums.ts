enum LoadingState {
  beforeLoading = 'beforeLoading',
  loading = 'loading',
  loaded = 'loaded'
}

const isLoading = (state: LoadingState): boolean =>
  state === LoadingState.loading

console.log(isLoading(LoadingState.beforeLoading)) // false

const loadingLabel = {
  [LoadingState.beforeLoading]: 'before loading'
}

console.log(loadingLabel[LoadingState.beforeLoading]) // before loading
