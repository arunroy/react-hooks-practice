import CardContainer from "../../pattern/card-container";
import Card from "../../block/card";
export default function Gallery() {
  return (
    <CardContainer>
      {[...Array(20)].map(function getCard(_, index) {
        return (
          <Card key={index} cardIndex={index}>
            {" "}
            {`Card #${index}`}{" "}
          </Card>
        );
      })}
    </CardContainer>
  );
}
