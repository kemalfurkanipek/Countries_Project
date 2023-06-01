import {gql} from '@apollo/client'

const GET_DATA = gql`
query Countries {
  countries {
    code
    continent {
      name
      code
    }
    currency
    emoji
    emojiU
    languages {
      name
      code
    }
    name
    native
    phone
    states {
      name
      code
    }
  }
}
`;

export default GET_DATA;