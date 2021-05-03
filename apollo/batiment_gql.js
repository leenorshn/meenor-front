import gql from "graphql-tag";

export const BATIMENT_QUERY = gql`
  query {
  batiments {
    id
    name
    address {
      city
      local
    }
    niveaux{
      id
      name
      kiosques{
        id
        numero
        format
        price
        locataire{
          id
          name
          avatar
          phone
        }
      }
      apartements{
        id
        numero
        price
        locataire{
          id
          name
          avatar
          phone
        }
      }
    }
  totaleNiveaux  
  totalKiosques
  totalApartements
    
  }
}
`;

export const BATIMENT_ONE_QUERY = gql`
  query getBatiment($id: ID!) {
    
  batiment(id:$id) {
    id
    name
    address {
      city
      local
    }
    niveaux{
      id
      name
      kiosques{
        id
        numero
        format
        price
        locataire{
          id
          name
          avatar
          phone
        }
      }
      apartements{
        id
        numero
        price
        locataire{
          id
          name
          avatar
          phone
        }
      }
    }
  totaleNiveaux  
  totalKiosques
  totalApartements
    
  }
}
`;
