import FirstForm from "./components/FirstForm"


function App() {

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">Formulário</h1>
      <FirstForm user={{name: "Guilherme", email: "gui@gmail.com"}} />
    </div>
  )
}

export default App
