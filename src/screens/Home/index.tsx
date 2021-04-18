type HomeProps = {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};

const Home = ({ setIsLoggedIn }: HomeProps) => {
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => setIsLoggedIn(false)}>Log out now!</button>
    </div>
  );
};

export default Home;
