import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsAction } from "../store/itemSlice";
import { fetchStatusAction } from "../store/fetchStatus";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchStatusAction.markFetchDone());
    fetch("http://localhost:3000/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusAction.markFetchingended());
        dispatch(fetchStatusAction.markFetchDone());
        dispatch(itemsAction.addIntialItem(items[0]));
      });
    return () => {
      // controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
};
export default FetchItems;
