import { FlatList } from "react-native";
import SensorPcCard from "./pcSensorItemCard";

const PCSensorCard = ({ data }) => {
    const renderItem = ({ item, index }) => {
        return (
            <SensorPcCard
                key={`item_${index}`}
                item={item}
                index={index}
                listArray={data}
            />
        );
    };
    return (
        <FlatList
            data={data}
            extraData={data}
            renderItem={renderItem}
            numColumns={1}
            key={1}
            scrollEnabled={false}
        />
    );
};
export default PCSensorCard;
