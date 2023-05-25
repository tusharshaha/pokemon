import { gql } from "graphql-request";


export const pokemon_query = gql`
 {
    pokemons(limit: 10, offset: 0){
      results{
        id
        name
        image
        artwork
      }
    }
  }
`

export const single_pokemon = gql`
  query getPokemon($name: String!){
    pokemon(name: $name) {
      abilities {
        ability {
          name
        }
      }
      height
      weight
      name
      id
      types{
        slot
        type{
          name
        }
      }
      stats{
        base_stat
        effort
        stat{
          name
        }
      }
    }
  }
`
