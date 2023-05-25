import { Header, BookList } from "../Components"
import classes from "./styles.module.css"
 

const MainPage = () => {
  return (
    <>
      <header className={classes.header}>
        <Header />
      </header>
      <main className="container">
        <BookList />
      </main>
    </>
  )
}

export default MainPage