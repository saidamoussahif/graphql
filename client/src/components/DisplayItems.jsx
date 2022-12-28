import { gql, useQuery } from "@apollo/client";

// gql used for making a query
// useQuery

const GET_ITEMS = gql`
  query GetItems {
    items {
      id
      Brand_name
      IPR
      Designation
      Status
      Number
      Office
      Nice
      Nice_classification
      Owner
    }
  }
`;
function DisplayItems() {
  const { loading, error, data} = useQuery(GET_ITEMS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Somthing Went Wrong</p>;
  return <>{!loading && !error && (
    <table className="table table-hover mt-3">
      <thead>
        <tr>
          <th>Brand Name</th>
          <th>IPR</th>
          <th>Designation</th>
          <th>Status</th>
          <th>Number</th>
          <th>Office</th>
          <th>Nice</th>
          <th>Nice_classification</th>
          <th>Owner</th>
        </tr>
      </thead>
      <tbody>
      {data.items.map(client=>(
        <tr key={client.id}>
          <td>{client.Brand_name}</td>
          <td>{client.IPR}</td>
          <td>{client.Designation}</td>
          <td>{client.Status}</td>
          <td>{client.Number}</td>
          <td>{client.Office}</td>
          <td>{client.Nice}</td>
          <td>{client.Nice_classification}</td>
          <td>{client.Owner}</td>
        </tr>
      ))}
      </tbody>
    </table>
  )
  }</>;
}

export default DisplayItems;
