import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const GET_DATA = gql`
  query {
    katepe {
      uuid
      name
      addresss
      phoneNumber
      hobbies
      occupation
    }
  }
`;

const ListData = () => {
  const { loading, error, data } = useQuery(GET_DATA);

  if (loading) return <div>Loading...</div>;
  if (error) return console.log(error);

  return data.katepe.map(
    ({ uuid, name, addresss, phoneNumber, hobbies, occupation }) => (
      <div key={uuid}>
        <ul>
          <li>Nama ajwe: {name}</li>
          <li>Alamat: {addresss}</li>
          <li>No HP: {phoneNumber}</li>
          <li>Hobi: {hobbies}</li>
          <li>Pekerjaan: {occupation}</li>
        </ul>
      </div>
    )
  );
};

export default ListData;
