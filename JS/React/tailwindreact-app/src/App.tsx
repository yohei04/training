import TodoList from './components/TodoList';

function App() {
  // export default function Footer({ children, ...restProps }) {
  //   return <div>{children}</div>;
  // }

  // Footer.Row = function FooterRow({ children, ...restProps }) {
  //   return <div {...restProps}>{children}</div>;
  // };

  // const hoge = (a: number, b: number) => {
  //   return a + b;
  // };

  const hoge: any = []

  // const hoge: any = 1

  // let hoge = {}
  // hoge = "a"

  hoge.fuga = 'fuga';
  hoge[0] = "aaa"

  hoge.bura = 'bura';

  hoge.func = () => 'return func' as const;

  console.log(hoge[1]);

  return (
    <>
      <div className="px-4 pb-4">hello world</div>
      <TodoList />
    </>
  );
}

export default App;
