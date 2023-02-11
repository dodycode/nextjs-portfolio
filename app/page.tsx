import Container from '@components/Container';

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <Container className="mx-auto px-8 lg:px-0 lg:w-2/4">
        <h1 className="text-gray-900 dark:text-gray-100 text-5xl lg:text-6xl leading-snug lg:leading-tight">
          <div>Hello I'm Dody,</div>
          <div>I'm a <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium">Full Stack Developer</span> from Bali.</div>
        </h1>
      </Container>
    </main>
  )
}
