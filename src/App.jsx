import "./App.scss";
import CardList from "./components/card/CardList";
// import Card from "./components/card/Card";
import CardTailwind from "./components/card/CardTailwind";
import Counter from "./components/counter/Counter";
import Photos from "./components/photos/Photos";
import Timer from "./components/timer/Timer";
// import { GlobalStyles } from "./GlobalStyles";
// import { ThemeProvider } from "styled-components";

// const theme = {
//   colors: {
//     blue: "#2979ff",
//   }
// }

function App() {
  return (
    // <ThemeProvider theme={theme}>
    // * </ThemeProvider>
    <div>
      {/* <GlobalStyles></GlobalStyles> */}
      {/* <CardList>
        <Card secondary={true}></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </CardList> */}
      {/* <CardList>
        <CardTailwind></CardTailwind>
      </CardList> */}
      {/* <Photos></Photos> */}
      {/* <Counter></Counter> */}
      <Timer></Timer>
    </div>
  );
}

export default App;
