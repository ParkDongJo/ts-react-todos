import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import styled from "@emotion/styled";
import Input from "../components/Input";
import Button from "../components/Button";
import Todos from "../components/Todos";
import Modal from "../components/Modal";

const TodoTemplate: React.FC = () => {

    return (
        <Container>
            <ErrorBoundary fallback={<div>Error...</div>}>
                <Row>
                    <Input />
                    <Button />
                </Row>
                <Suspense fallback={<div>Loading...</div>}>
                    <Todos />
                </Suspense>
            </ErrorBoundary>
            <Modal />
        </Container>
    )
}
export default TodoTemplate

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

