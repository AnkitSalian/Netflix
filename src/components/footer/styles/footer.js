import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    padding: 70px 56px;
    margin: auto;
    max-width: 1000px;
    flex-direction: column;

    @media(max-width: 1000px) {
        padding: 70px 30px;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));

    @media(max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
`;

export const Link = styled.a`
    color: #757575;
    margin-bottom: 20px;
    font-size: 14px;
    text-decoration: none;
`;

export const Title = styled.p`
    font-size: 16px;
    color: #757575;
`;

export const Text = styled.p`
    font-size: 13px;
    color: #757575;
`;

export const Break = styled.p`
    flex-basis: 100%;
    height: 0;
`;

export const Select = styled.select`
    width: 132px;
    background-color: black;
    color: #999;
    padding: 12px;
    height: 52px;
    border: 1px solid #999;
    margin-bottom: 20px;
`;

export const Option = styled.option``;