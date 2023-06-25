import styled from "@emotion/styled";

export const MovieContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 482px;
`;

export const MovieInput = styled.input`
    width: 400px;
    height: 30px;
    border-radius: 10px;
    background-color: #975a5e;
    color: #f3cba5;
    padding: 10px;
    font-size: 24px;
    margin-bottom: 50px;
    border: solid 3px;
    box-shadow: -1px 1px 29px -10px rgba(211, 214, 219, 1);
    -moz-box-shadow: -1px 1px 29px -10px rgba(211, 214, 219, 1);
`;

export const MovieList = styled.ul`
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
`;

export const MovieListItem = styled.li`
    background-color: #975a5e;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    transition: transform 0.3s ease;
    
        &:hover {
            transform: scale(1.05);
            box-shadow: -1px 1px 29px -10px rgba(211, 214, 219, 1);
            -moz-box-shadow: -1px 1px 29px -10px rgba(211, 214, 219, 1);
        }
`;