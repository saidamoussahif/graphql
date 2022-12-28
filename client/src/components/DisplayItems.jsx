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
      `;
function DisplayItems() {
  return <div>DisplayItems</div>;
}

export default DisplayItems;
