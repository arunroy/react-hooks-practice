import "./styles.scss";
import classNames from "classnames";
export default function Card({
  children,
  onSelectCard,
  btnId,
  isSelected,
  cardIndex
}) {
  var cardClasses = classNames({
    card: true,
    selected: isSelected
  });
  return (
    <div className={cardClasses}>
      <span>{children}</span>
      <button id={btnId} onClick={onSelectCard} data-card-index={cardIndex}>
        Select this
      </button>
    </div>
  );
}
