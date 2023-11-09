import styled from "styled-components";

export const HomeStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
`;

export const HeadingWrapper = styled.div`
    display: flex;
    margin-left: 50px;
    .headingPhoto {
        width: 400px;
        height: 215px;
    }
`;

export const HeadingContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-left: 100px;
    margin-top: 30px;
    h1 {
        font-size: 40px;
    }

    p {
        font-size: 25px;
        width: 550px;
        text-align: start;
    }
`;

export const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;
