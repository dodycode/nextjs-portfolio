import Button from './Button';
import Container from './Container';

const Header = () => {
  return (
    <header className="fixed top-14 left-0 right-0">
      <Container>
        <div className="flex items-center justify-center">
          <div className="block bg-white/90 dark:bg-gray-900/90 rounded-lg p-2 gap-x-6 flex items-center">
            <Button customClass="link" href="/">Home</Button>
            <Button customClass="link" href="/works">Works</Button>
            <Button customClass="link" href="/about">About</Button>
          </div>
        </div>
      </Container>
    </header>
  )
};

export default Header;
