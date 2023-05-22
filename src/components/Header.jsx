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
        <h2>REDUX TODO LIST</h2>

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
  justify-content: space-around;
  align-items: center;
  background-color: #a19dc4;
  color: white;
  h2 {
    margin-left: 50px;
  }
`;
const Button = styled.button`
  font-size: 1.25rem;
  cursor: pointer;
  background-color: #c8db8e;
  padding: 0.5rem 1.5rem;
  font-size: 18px;
  font-weight: 600;
  margin-right: 20px;
  border-radius: 12px;
  border: none;
  color: #2c2922;
  :hover {
    background-color: #f8e79b;
  }
  :active {
    background-color: #f0e9c5;
  }
`;
