import styled from "@emotion/styled";

export const MovieTitle = styled.h2`
    text-align: center;
    color: #f3cba5;
    margin: 30px;
`;

export const ContainerMovie = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
`;

export const MovieTrendList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

export const MovieTrendListItem = styled.li`
    display: flex;
    width: 300px;
    flex-direction: column;
    margin-right: 10px;
    margin-bottom: 10px;
    &:nth-child(4n) {
        margin-right: 0px;
    }
    background-color: #975a5e;
    border-radius: 20px;
`;

export const MovieTrendImg = styled.img`
    width: 250px;
    height: auto;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 10px;
    margin-top: 30px;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.6s ease;
    box-shadow: -1px 1px 49px -10px rgba(211,214,219,1);
    -moz-box-shadow: -1px 1px 49px -10px rgba(211,214,219,1);
    box-shadow: -1px 1px 49px -10px rgba(211,214,219,1);
    &:hover {
        transform: scale(1.05); 
        box-shadow:  -1px 1px 49px -10px rgba(243,203,165,1);
        -moz-box-shadow: -1px 1px 49px -10px rgba(243,203,165,1);
        box-shadow: -1px 1px 49px -10px rgba(243,203,165,1);
      }
    
`;

export const MovieTrendTitle = styled.h4`
    color: #f3cba5;
    text-align: center;
    margin-bottom:10px;
`;