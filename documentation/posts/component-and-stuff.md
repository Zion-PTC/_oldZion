# Next app configuration

- [ ] create layout component: the layout components holds
      informations about the <main> tag in each html document on
      the applications. It helps SEO if the component has server
      side rendered props.
      Here an example of `layout.tsx` component:

  // TODO fare altri esempi

  ```jsx
  const Layout: Layout = function ({ children, landing, connect, nft }) {
    const Welcome = <p>Welcome</p>;
    const Home = <Link href="/">Home</Link>;
    const ConnectWallet = <Link href="/connect-wallet">Connect Wallet</Link>;
    const Collection = <Link href="/collection">Collection</Link>;

    return (
      <>
        <main>
          {landing ? Welcome : ""}
          {nft ? Collection : ""}
          {!landing && !Nft ? Home : ""}
          {!connect && landing ? ConnectWallet : ""}
          {children}
        </main>
      </>
    );
  };
  ```

- [ ] creare un file \_app.tx nel quale si andranno ad
      inserire
  - [ ] Them Provider
  - [ ] GlobalStyle
