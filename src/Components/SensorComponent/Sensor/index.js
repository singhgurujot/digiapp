import { ActivityIndicator, FlatList } from "react-native";
import SensorItemCard from "./sensorItemCard";
import { styles } from "./styles";
import { useEffect, useState } from "react";

const SensorCard = ({ data, setSelectedSensorItem, setConfirmationPopupVisible }) => {

    // const [data1, setData1] = useState([]); // Initial data
    // const [visibleData, setVisibleData] = useState([]); // Data to display
    // const [isLoading, setIsLoading] = useState(false); // Loading indicator
    // const itemsPerLoad = 10; // Number of items to load per scroll

    // const loadMoreData = () => {
    //     if (isLoading) {
    //         return;
    //     }
    //     setIsLoading(true);

    //     // Simulate getting the next chunk of data
    //     setTimeout(() => {
    //         const startIndex = visibleData.length;
    //         const endIndex = startIndex + itemsPerLoad;
    //         const nextChunk = data1.slice(startIndex, endIndex);

    //         setVisibleData((prevVisibleData) => [...prevVisibleData, ...nextChunk]);
    //         setIsLoading(false);
    //     }, 1000); // Simulated delay
    // };

    // useEffect(() => {
    //     // Simulate fetching initial data
    //     setData1(data);

    //     // Load the first chunk of data
    //     loadMoreData();
    // }, []);


    const renderSensorItem = ({ item, index }) => {
        const handleStopAlarm = (item) => {
            setSelectedSensorItem(item);
            setConfirmationPopupVisible(true);
        };
        return (
            <SensorItemCard
                key={`item_${index}`}
                item={item}
                index={index}
                listArray={data}
                handleStopAlarm={handleStopAlarm}
            />
        );
    };
    return (
        <FlatList
            // data={visibleData}
            data={data}
            extraData={data}
            renderItem={renderSensorItem}
            keyExtractor={(item) => item.txid.S}
            contentContainerStyle={styles.contentContainerStyle}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            key={2}
            style={{ zIndex: -999 }}
            scrollEnabled={false}
        // onEndReached={loadMoreData}
        // onEndReachedThreshold={1}
        // ListFooterComponent={isLoading ? <ActivityIndicator /> : null}
        />
    );
};
export default SensorCard;
