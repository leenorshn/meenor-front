import gql from "graphql-tag";

export const LOGIN_REQUEST=gql`
mutation login($phone:String!,$password:String!){
  loginUser(phone:$phone,password:$password){
    token
  }
}
`;