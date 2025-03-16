import styled from 'styled-components';

export const FooterStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const DividingLine = styled.div`
    background-color: #474747;
    width: 100%;
    height: 4px;
    margin-top: 100px;
`;

export const UnderDividingLine = styled.div`
    width: 93%;
    margin: 0 auto;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    
    .logo {
        display: flex;
        align-items: center;
        /* margin-left: 20%; */
        p {
            color: #8b1ec4;
            font-size: 1.8rem;
            margin-left: -5px;
        }
      }
`;

export const FooterTextContent = styled.div`
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    align-items: start;
    margin-top: 20px;
    h4 {
        margin: 0;
        font-size: 25px;
    }
    p {
        width: 300px;
        font-size: 20px;
        text-align: start;
    }
`;

export const FooterLogo = styled.a`
    a {
        display: flex;
        padding: 9px;
        align-items: start;
        margin-right: 135px;
        cursor: pointer;
        font-size: 50px;
        margin-top: 25px;
        color: black;
        &:active {
            color: #575757; 
    }
`;

export const SocialIcons = styled.div`
    margin-top: 25px;
    display: flex;
    height: 46px;
`;

export const SocialIconWrapperFB = styled.a`
    display: flex;
    color: #037bfc;
    padding: 5px;
    font-size: 45px;
    margin: 7px;
    &:active {
        color: #575757; 
    }
`;

export const SocialIconWrapperTW = styled.a`
    display: flex;
    color: #00acee;
    padding: 5px;
    font-size: 45px;
    margin: 7px;
    &:active {
        color: #575757; 
    }
`;

export const SocialIconWrapperLI = styled.a`
    display: flex;
    color: #0e76a8;
    padding: 5px;
    font-size: 45px;
    margin: 7px;
    &:active {
        color: #575757; 
    }
`;

export const SocialIconWrapperGP = styled.a`
    display: flex;
    color: #e33e2b;
    padding: 5px;
    font-size: 45px;
    margin: 7px;
    &:active {
        color: #575757; 
    }
`;

export const BottomDividingLine = styled.div`
    background-color: #474747;
    width: 93%;
    height: 4px;
    margin-top: 40px;
`;

export const Conclusion = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
`;