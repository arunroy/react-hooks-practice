import CardContainer from "../../pattern/card-container";
import Card from "../../block/card";
import { useState } from "react";

export default function Gallery() {
  let initialCardConfig = [...Array(20)].map((_, index) => ({
    cardNumber: index,
    isSelected: false
  }));

  const [cardControls, setCardControls] = useState(initialCardConfig);
  console.log(cardControls);
  function findCard(item) {
    return item.cardNumber === +this.selectedCardIndex;
  }

  const onSelectCard = (evt) => {
    this.selectedCardIndex = evt.target.dataset.cardIndex;
    const { cardNumber = null, isSelected = null } = cardControls.find(
      findCard,
      this
    );
    console.log(cardNumber, isSelected);
    setCardControls(
      cardControls.splice(cardNumber, 1, {
        cardNumber,
        isSelected: !isSelected
      })
    );
  };
  return (
    <CardContainer>
      {[...Array(20)].map(function getCard(_, index) {
        return (
          <Card
            key={index}
            cardIndex={index}
            btnId={`gallery-card-btn-${index}`}
            onSelectCard={onSelectCard}
            isSelected={cardControls[index]}
          >
            {" "}
            {`Card #${index}`}{" "}
          </Card>
        );
      })}
    </CardContainer>
  );
}
