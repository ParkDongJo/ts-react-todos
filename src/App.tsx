import React from "react";
import { RecoilRoot } from "recoil";
import styled from "@emotion/styled"
import TodoTemplate from "./templates/TodoTemplate";

const App: React.FC = () => {

  return (
    <Container>
      <RecoilRoot>
        <h2>My Todos</h2>
        <TodoTemplate />
      </RecoilRoot>
    </Container>
  );
}
export default App;

const Container = styled.div`
  display: flex;
`