import { useSelector } from "react-redux";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  
  return (
    <div>
      Fetch Done:{fetchStatus.fetchDone}
      currently Fetching:{fetchStatus.currentlyFetching}
    </div>
  );
};
export default FetchItems;
