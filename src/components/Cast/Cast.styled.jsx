import styled from "@emotion/styled";

export const CastContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px;
`;

export const TitleCast = styled.h2`
    text-align: center; 
    margin-bottom: 40px;   
    color: #f3cba5;
`;

export const CastList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const CastListItem = styled.li`
    margin-right: 10px;
    &:nth-child(6n) {
        margin-right: 0px;
    }
    margin-bottom: 10px;
    background-color: #975a5e;
    border-radius: 10px;
    
    &:hover {
        box-shadow: -1px 1px 29px -10px rgba(211, 214, 219, 1);
        -moz-box-shadow: -1px 1px 29px -10px rgba(211, 214, 219, 1);
    }
`;

export const CastImg = styled.img`
    border-radius: 10px 10px 0  0 ;
    margin-bottom: 10px;
`;

export const CastParagraph = styled.h4`
    text-align: center;
    color: #f3cba5;
`;

export const CastRole = styled.p`
    width: 80px;   
    text-align: center;
    color: #f3cba5;
    margin-left: auto;
    margin-right: auto;
`;