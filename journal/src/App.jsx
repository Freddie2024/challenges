import Header from './components/Header/Header'
import EntryForm from './components/EntryForm/EntryForm'
import EntriesSection from './components/EntriesSection/EntriesSection'
import Footer from './components/Footer/Footer'

import './App.css'

function App() {
    return (
    <>
      <Header />
      <main>
        <EntryForm />
        <EntriesSection />
      </main>
      <Footer />
    </>
  );
}

export default App
