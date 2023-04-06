import { Link } from 'react-router-dom';
import { Button } from '../../components/button';

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <button title="Teste 1" />
      <button variant="secondary" title="Teste 2" />
      <Link to="/login"> Fazer login</Link>
    </>
  );
};

export { Home };
