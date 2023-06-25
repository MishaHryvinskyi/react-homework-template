import styled from "@emotion/styled";

export const LeyoutList = styled.ul`
    background-color: #975a5e;
    display: flex;
    justify-content: center;
    padding-bottom: 30px;
    padding-top: 30px;
`;

export const LeyoutItem = styled.li`
    background-color: #f3cba5;
    width: 80px;
    margin-right: 40px;
    padding: 0px 10px;
    align-items: center;
    border-radius: 20px;
    transition: transform 0.3s ease;
    
    &:hover {
        box-shadow: -1px 1px 29px -10px rgba(211, 214, 219, 1);
        -moz-box-shadow: -1px 1px 29px -10px rgba(211, 214, 219, 1);
        transform: scale(1.05);
        cursor: pointer;
    }
`;