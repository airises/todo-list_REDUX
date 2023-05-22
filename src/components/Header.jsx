import { useNavigate, Outlet } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();
  const goToAuthPage = () => {
    navigate("/");
  };
  return (
    <>
      <StyledHeader>
        <h1>REDUX TODO LIST</h1>

        <Button onClick={goToAuthPage}>Logout</Button>
      </StyledHeader>
      <Outlet />
    </>
  );
};

export default Header;

const StyledHeader = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3c0080;
  color: white;
  h1 {
    margin-left: 30px;
  }
`;
const Button = styled.button`
  font-size: 1.25rem;
  background-color: #2bff00;
  border: 1px solid #ff00b3;
  padding: 0.5rem 1.5rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  margin-right: 20px;
  color: #2c2922;
  :hover {
    background-color: #f8099c;
  }
  :active {
    border-color: #ffa600;
  }
`;
