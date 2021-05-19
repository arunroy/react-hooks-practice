import Card from "./components/card";
import CardContainer from "./components/card-container";
import "./styles.scss";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <CardContainer>
        <Card>This is first card</Card>
        <Card>This is second card</Card>
        <Card>This is third card</Card>
        <Card>This is third card</Card>
        <Card>This is third card</Card>
        <Card>This is third card</Card>
        <Card>This is third card</Card>
      </CardContainer>
    </div>
  );
}
