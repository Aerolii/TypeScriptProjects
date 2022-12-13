import fetch from 'node-fetch'

interface PokemonResults {
  count: number
  next?: string
  previous?: null
  results: [
    {
      name: string
      url: string
    }
  ]
}

function fetchPokemonResult(url: string): Promise<PokemonResults>

function fetchPokemonResult(
  url: string,
  cb: (data: PokemonResults) => void
): void

function fetchPokemonResult(
  url: string,
  cb?: (data: PokemonResults) => void
): unknown {
  if (cb) {
    fetch(url)
      .then((res) => res.json() as Promise<PokemonResults>)
      .then(cb)
    return undefined
  } else {
    return fetch(url).then((res) => res.json())
  }
}

fetchPokemonResult('https://pokeapi.co/api/v2/pokemon?limit=10').then(
  (data) => {
    data.results.forEach(({ name }) => console.log(name))
  }
)
