import gql from "graphql-tag";
export const IMAGE_UPLOAD_QUERY = gql`
 mutation uploadImage($file:Upload!){
  uploadFile(file:$file){
    id
    url
  }
}
`;