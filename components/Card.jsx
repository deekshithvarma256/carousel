import CardContent from "./CardContent";

const Card = ({ item, handleCardClick }) => {
  return (
    <div
      className={`flex-shrink-0 w-full lg:w-1/5 md:w-1/3`}
      onClick={() => handleCardClick(item)}
    >
      <CardContent item={item}/>
    </div>
  );
};

export default Card;
