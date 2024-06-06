import React, { useState } from 'react';
import { FixedSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';

const PAGE_SIZE = 10;

export function InfiniteScrollList() {
  const [items, setItems] = useState([]);
  const [loadedItems, setLoadedItems] = useState({});
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchPageData = (startIndex, stopIndex) => {
    if (loading | !hasMore) return;

    setLoading(true);

    // Simulate loading data with a 1-sec delay
    setTimeout(() => {
      const newData = Array.from({ length: PAGE_SIZE }, (_, index) => ({
        id: startIndex + index,
        text: `Item ${startIndex + index}`,
      }));

      setItems((prevItems) => [...prevItems, ...newData]);
      setLoadedItems((prevLoadedItems) => ({
        ...prevLoadedItems,
        ...newData.reduce((acc, item) => {
          acc[item.id] = true;
          return acc;
        }, {}),
      }));

      setLoading(false);

      if (newData.length < PAGE_SIZE) {
        // If the fetched data is less than page size, ther's no more data to load
        setHasMore(false);
      }
    }, 1000); // 1-sec delay
  };

  const isItemLoaded = ({ index }) => !!loadedItems[index];

  const itemCount = 1000; // Fixed total number of items

  return (
    <div style={{ height: '480px', width: '338px' }}>
      <InfiniteLoader
        isItemLoaded={isItemLoaded}
        itemCount={itemCount}
        loadMoreItems={fetchPageData}
      >
        {(onItemsRendered, ref) => {
          <List
            height={400}
            width={300}
            itemCount={itemCount}
            itemSize={50}
            onItemsRendered={onItemsRendered}
            ref={ref}
          >
            {({ index, style }) => {
              <div key={index} style={style}>
                {items[index] ? <p>{items[index].text}</p> : 'loading...'}
              </div>;
            }}
          </List>;
        }}
      </InfiniteLoader>
      {loading && <p>Loading...</p>}
      {!hasMore && <p>No more items to load</p>}
    </div>
  );
}
